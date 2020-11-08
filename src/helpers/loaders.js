import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
export const loadGLTFModel = (
  file,
  position,
  rotation,
  scale,
  referenceIndex
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
        gltf.scene.position.set(...position);
        gltf.scene.scale.set(...scale);
        gltf.scene.rotation.set(...rotation);
        gltf.scene.animations = gltf.animations;

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
  referenceIndex
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
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        object.position.set(...position);
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
