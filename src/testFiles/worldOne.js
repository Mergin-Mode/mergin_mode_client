export default [
  {
    type: "model",
    url: process.env.PUBLIC_URL + "/white-tower.gltf",
    blending: "AdditiveBlending",
    position: [0, 0, 0],
    rotation: [0, 0, 0],
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
    position: [0, 0, 20],
    rotation: [0, 0, 0],
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
    position: [0, 0, 10],
    rotation: [0, Math.PI, 0],
    scale: [1, 1, 1],
    animations: [
      {
        name: "Idle",
        duration: 5000,
        path: [[0, 0, 10]]
      },
      {
        name: "Run",
        path: [
          [0, 0, 10],
          [10, 0, 10],
          [10, 0, -20],
          [-20, 0, -20],
          [-20, 0, 10],
          [10, 0, 10],
          [0, 0, 10]
        ],
        speed: 16,
        speedUnit: "km/h"
      },
      {
        name: "Run",
        path: [
          [0, 0, 10],
          [10, 0, 10],
          [10, 0, -20],
          [-20, 0, -20],
          [-20, 0, 10],
          [10, 0, 10],
          [0, 0, 10]
        ],
        speed: 16,
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
