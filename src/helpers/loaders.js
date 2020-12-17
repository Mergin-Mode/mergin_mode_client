import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
export const loadGLTFModel = (
  file,
  position,
  rotation,
  scale,
  referenceIndex,
  blending
) => {
  const { name, size, url } = file[0];
  const { scene, loaders } = window.mergin_mode;

  const loader = new loaders.GLTFLoader();
  const dracoLoader = new DRACOLoader();
  loader.setDRACOLoader(dracoLoader);
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      gltf => {
        gltf.scene.position.set(
          ...position.reduce(
            (a, b, i) => [...a, b - window.mergin_mode.center[i]],
            []
          )
        );
        gltf.scene.scale.set(...scale);
        gltf.scene.rotation.set(...rotation);
        gltf.scene.animations = gltf.animations;
        let material;
        if (blending) {
          material = new THREE.MeshPhongMaterial({
            color: 0x000000, // red (can also use a CSS color string here)
            blending: THREE[blending]
          });
          gltf.scene.renderOrder = 999;
        }

        gltf.scene.traverse(child => {
          if (child.isMesh) {
            // child.castShadow = true;
            // child.receiveShadow = true;

            if (blending) {
              child.material = material;
              // child.material.blending = THREE[blending];
              child.renderOrder = 999;
              // child.material.depthWrite = false;
            }
          }
        });
        resolve({ referenceIndex, uuid: gltf.scene.uuid, object: gltf.scene });
      },
      () => {},
      e => {
        reject(e);
      }
    );
  });
};
export const loadFBXModel = (
  file,
  position,
  rotation,
  scale,
  referenceIndex,
  blending
) => {
  const { name, size, url } = file[0];
  const { scene, loaders } = window.mergin_mode;
  const loader = new loaders.FBXLoader();
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      object => {
        object.traverse(child => {
          if (child.isMesh) {
            // child.castShadow = true;
            // child.receiveShadow = true;
            if (blending) {
              child.material.blending = THREE[blending];
              child.material.needsUpdate = true;
            }
          }
        });
        object.position.set(
          ...position.reduce(
            (a, b, i) => [...a, b - window.mergin_mode.center[i]],
            []
          )
        );
        object.scale.set(...scale);
        object.rotation.set(...rotation);
        resolve({ referenceIndex, uuid: object.uuid, object });
      },
      () => {},
      e => {
        reject(e);
      }
    );
  });
};
