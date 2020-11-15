import { fromLonLat } from "ol/proj.js";
import { loadGLTFModel, loadFBXModel } from "../helpers/loaders";
import worldData from "../testFiles/worldOne.js";
import * as THREE from "three";
import { Interaction } from "three.interaction";

const loader = {
  gltf: loadGLTFModel,
  glb: loadGLTFModel,
  fbx: loadFBXModel
};
export default async (context, selectModel) => {
  // const towerlocationConvert = fromLonLat([40.626374, 22.948324, 15.25]);
  // const treelocationConvert = fromLonLat([40.62626, 22.947929, 15.25]);
  // const userConvert = fromLonLat([40.626288, 22.947957, 15.25]);

  function get_url_extension(url) {
    return url
      .split(/[#?]/)[0]
      .split(".")
      .pop()
      .trim();
  }
  const readWorldData = data => {
    //initialize interactions
    const { renderer, scene, camera } = window.mergin_mode;
    new Interaction(renderer, scene, camera);

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
        });
      })
      .catch(e => {
        console.error(e);
      });
  };
  readWorldData(worldData);
};
