import { fromLonLat } from "ol/proj.js";
import { loadGLTFModel, loadFBXModel } from "../helpers/loaders";
import worldDataOne from "../testFiles/worldOne.js";
import worldDataTwo from "../testFiles/worldTwo.js";
import * as THREE from "three";

const worlds = [worldDataOne, worldDataTwo];
const loader = {
  gltf: loadGLTFModel,
  glb: loadGLTFModel,
  fbx: loadFBXModel
};
export default async worldId => {
  const towerlocationConvert = fromLonLat([40.626374, 22.948324, 15.25]);
  // const treelocationConvert = fromLonLat([40.62626, 22.947929, 15.25]);
  // const userConvert = fromLonLat([40.626288, 22.947957, 15.25]);

  function get_url_extension(url) {
    return url
      .split(/[#?]/)[0]
      .split(".")
      .pop()
      .trim();
  }
  const readWorldData = world => {
    window.mergin_mode.center = world.meta.coordinates;

    const data = world.content;
    //initialize interactions
    const { renderer, scene, camera } = window.mergin_mode;

    const loadings = [];
    window.mergin_mode.world = [];
    for (const [index, record] of data.entries()) {
      if (record.type === "model") {
        loadings.push(
          loader[get_url_extension(record.url)](
            [{ url: record.url }],
            record.position,
            record.rotation,
            record.scale,
            index,
            record.blending
          )
        );
        window.mergin_mode.world.push(record);
      }
    }
    return Promise.all(loadings)
      .then(models => {
        models.forEach(model => {
          window.mergin_mode.world[model.referenceIndex].id = model.uuid;
          window.mergin_mode.world[model.referenceIndex].object = model.object;
          window.mergin_mode.scene.add(model.object);
          // if (window.mergin_mode.world[model.referenceIndex].visible == false) {
          //   model.object.visible = false;
          // }
          model.object.traverse(child => {
            if (child.isMesh) {
              if (
                window.mergin_mode.world[model.referenceIndex].visible == false
              ) {
                child.material.opacity = 0;
                child.material.transparent = true;
              }
              //hide model visibility is set to false

              child.material.flatShading = false;
              child.geometry.computeVertexNormals();
              // child.material = window.mergin_mode.selected.material[child.uuid];
            }
          });
          //check for animations and create the mixers
          const actions =
            window.mergin_mode.world[model.referenceIndex].actions || {};
          if ((actions.onLoad || {}).animations) {
            const mixer = new THREE.AnimationMixer(model.object);
            mixer
              .clipAction(
                window.mergin_mode.world[
                  model.referenceIndex
                ].object.animations.filter(animation => {
                  return animation.name == actions.onLoad.animations[0].name;
                })[0]
              )
              .setDuration(1)
              .play();
            window.mergin_mode.world[model.referenceIndex].runtimeInfo = {
              animationIndex: 0,
              pathIndex: 0,
              duration: 0,
              mixer
            };
          }
          if ((actions.onSelect || {}).animations) {
            const mixer = new THREE.AnimationMixer(model.object);
            mixer
              .clipAction(
                window.mergin_mode.world[
                  model.referenceIndex
                ].object.animations.filter(animation => {
                  return animation.name == actions.onSelect.animations[0].name;
                })[0]
              )
              .setDuration(1)
              .play();
            window.mergin_mode.world[
              model.referenceIndex
            ].selectedRuntimeInfo = {
              animationIndex: 0,
              pathIndex: 0,
              duration: 0,
              mixer
            };
          }
        });
      })
      .catch(e => {
        console.error(e);
      });
  };
  readWorldData(worlds.filter(w => w.id == worldId)[0]);
};
