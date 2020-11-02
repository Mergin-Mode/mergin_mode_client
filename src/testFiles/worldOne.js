export default [
  {
    type: "model",
    url: process.env.PUBLIC_URL + "/white-tower.gltf",
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [0.2, 0.2, 0.2],
    description: `<iframe 
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="https://en.wikipedia.org/wiki/White_Tower_of_Thessaloniki"></iframe>`
  },
  {
    type: "model",
    url: process.env.PUBLIC_URL + "/tree-green.fbx",
    position: [0, 0, 20],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    description: `<iframe 
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="https://en.wikipedia.org/wiki/Tree"></iframe>`
  }
];
