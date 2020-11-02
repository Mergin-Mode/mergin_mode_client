import { fromLonLat } from "ol/proj.js";
import { loadGLTFModel, loadFBXModel } from "../helpers/loaders";
import worldData from "../testFiles/worldOne.js";

const loader = {
  gltf: loadGLTFModel,
  glb: loadGLTFModel,
  fbx: loadFBXModel
};
export default async () => {
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
            index
          )
        );
        window.mergin_mode.world.push(record);
      }
    }
    return Promise.all(loadings)
      .then(models => {
        models.forEach(model => {
          window.mergin_mode.world[model.referenceIndex].id = model.uuid;
          window.mergin_mode.scene.add(model.object);
        });
      })
      .catch(e => {
        console.error(e);
      });
  };
  readWorldData(worldData);
};
