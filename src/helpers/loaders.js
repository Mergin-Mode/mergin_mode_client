import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
export const loadGLTFModel = (file, location) => {
  const { name, size, url } = file[0];
  const { scene, loaders } = window.mergin_mode;

  const loader = new loaders.GLTFLoader();
  const dracoLoader = new DRACOLoader();
  loader.setDRACOLoader(dracoLoader);
  return new Promise((resolve, reject) => {
    loader.load(url, gltf => {
      gltf.scene.position.set(...location);
      scene.add(gltf.scene);
      resolve(gltf.scene.uuid);
    });
  });
};
export const loadFBXModel = (file, location) => {
  const { name, size, url } = file[0];
  const { scene, loaders } = window.mergin_mode;
  const loader = new loaders.FBXLoader();
  return new Promise((resolve, reject) => {
    loader.load(url, object => {
      object.traverse(child => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      object.position.set(...location);
      scene.add(object);
      resolve(object.uuid);
    });
  });
};
