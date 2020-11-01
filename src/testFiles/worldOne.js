import { fromLonLat } from "ol/proj.js";
import { loadGLTFModel, loadFBXModel } from "../helpers/loaders";
export default async () => {
  const towerlocationConvert = fromLonLat([40.626374, 22.948324, 15.25]);
  const treelocationConvert = fromLonLat([40.62626, 22.947929, 15.25]);
  const userConvert = fromLonLat([40.626288, 22.947957, 15.25]);
  // const towerlocation = [
  //   towerlocationConvert[0],
  //   towerlocationConvert[2],
  //   towerlocationConvert[1]
  // ];
  // const treelocation = [
  //   treelocationConvert[0],
  //   treelocationConvert[2],
  //   treelocationConvert[1]
  // ];
  const towerlocation = [0, 0, 0];
  const treelocation = [0, 0, 20];
  const model1 = await loadFBXModel(
    [{ url: process.env.PUBLIC_URL + "/tree-green.fbx" }],
    treelocation
  );
  const model2 = await loadGLTFModel(
    [{ url: process.env.PUBLIC_URL + "/white-tower.gltf" }],
    towerlocation
  );
  window.mergin_mode.world = [
    {
      id: model2,
      description: `<iframe 
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="https://en.wikipedia.org/wiki/White_Tower_of_Thessaloniki"></iframe>`
    },
    {
      id: model1,
      description: `<iframe 
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="https://en.wikipedia.org/wiki/Tree"></iframe>`
    }
  ];
};
