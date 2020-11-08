export default [
  {
    type: "model",
    url: process.env.PUBLIC_URL + "/white-tower.gltf",
    position: [0, 0, 0],
    rotation: [Math.PI / 2, 0, 0],
    scale: [1, 1, 1],
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
    position: [0, 20, 0],
    rotation: [Math.PI / 2, 0, 0],
    scale: [0.1, 0.1, 0.1],
    description: `<iframe 
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="https://en.wikipedia.org/wiki/Tree"></iframe>`
  },
  {
    type: "model",
    url: process.env.PUBLIC_URL + "/Soldier.glb",
    position: [0, 30, 0],
    rotation: [Math.PI / 2, 0, 0],
    scale: [1, 1, 1],
    animations: [
      {
        name: "Idle",
        duration: 5000
      },
      {
        name: "Walk",
        path: [
          [0, 30, 0],
          [10, 40, 0],
          [30, 20, 0],
          [0, 30, 0]
        ],
        speed: 6,
        speedUnit: "km/h"
      },
      {
        name: "Run",
        path: [
          [0, 30, 0],
          [10, 40, 0],
          [30, 20, 0],
          [0, 30, 0]
        ],
        speed: 12,
        speedUnit: "km/h"
      }
    ],
    description: `<iframe 
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="https://en.wikipedia.org/wiki/Alexander_the_Great"></iframe>`
  }
];
