export default {
  name: "White Tower Of Thessaloniki",
  description: "A simple overview of the area near the tower of thessaloniki.",
  content: [
    {
      refId: "white_tower",
      type: "model",
      url: process.env.PUBLIC_URL + "/white-tower.gltf",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1.1, 1.1, 1.1],
      visible: false,
      actions: [],
      description: `<iframe
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="${process.env.PUBLIC_URL}/templates/white-tower.html"></iframe>`
    },
    // {
    //   type: "model",
    //   url: process.env.PUBLIC_URL + "/tree-green.fbx",
    //   position: [0, 0, 20],
    //   rotation: [0, 0, 0],
    //   scale: [0.1, 0.1, 0.1],
    //   description: `<iframe
    //         style="
    //           width: 100%;
    //           height: 100%;
    //           border:none;"
    //         src="https://en.wikipedia.org/wiki/Tree"></iframe>`
    // },
    {
      type: "model",
      ground: true,
      selectable: false,
      url: process.env.PUBLIC_URL + "/white-tower-area.gltf",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``
    },
    {
      type: "model",
      url: process.env.PUBLIC_URL + "/Soldier.glb",
      position: [0, 0.4, 20],
      rotation: [0, Math.PI, 0],
      scale: [0.8, 0.8, 0.8],
      actions: {
        onLoad: {
          animations: [
            {
              name: "Idle",
              duration: 5000,
              path: [[-23.45, 0.12, 25.13]]
            }
          ]
        },
        onSelect: {
          animations: [
            {
              name: "Idle",
              duration: Infinity,
              path: [[30, 0, 30]],
              lookAt: "camera"
            }
          ]
        }
      },
      description: `<iframe
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="${process.env.PUBLIC_URL}/templates/soldier.html"></iframe>`
    },
    {
      type: "model",
      url: process.env.PUBLIC_URL + "/Soldier.glb",
      position: [-23.45, 0.12, 25.13],
      rotation: [0, Math.PI, 0],
      scale: [0.8, 0.8, 0.8],
      actions: {
        onLoad: {
          animations: [
            {
              name: "Idle",
              duration: 5000,
              path: [[-23.45, 0.12, 25.13]]
            },
            {
              name: "Walk",
              path: [
                [-23.45, 0.12, 25.13],
                [-5.08, -0.28, 32.64],
                [18.89, -0.45, 28.14],
                [31.23, -0.27, 8.53],
                [32.32, 0.49, -15.25],
                [13.63, 0.99, -36.69],
                [-9.23, 1.41, -27.81],
                [-20.42, 1.41, -19.05],
                [-27.09, 1.36, -9.68],
                [-32.47, 1.28, 0.26],
                [-30.55, 1.16, 6.46],
                [-26.03, 0.26, 21.47],
                [-23.45, 0.12, 25.13]
              ],
              speed: 5,
              speedUnit: "km/h"
            },
            {
              name: "Run",
              path: [
                [-23.45, 0.12, 25.13],
                [-5.08, -0.28, 32.64],
                [18.89, -0.45, 28.14],
                [31.23, -0.27, 8.53],
                [32.32, 0.49, -15.25],
                [13.63, 0.99, -36.69],
                [-9.23, 1.41, -27.81],
                [-20.42, 1.41, -19.05],
                [-27.09, 1.36, -9.68],
                [-32.47, 1.28, 0.26],
                [-30.55, 1.16, 6.46],
                [-26.03, 0.26, 21.47],
                [-23.45, 0.12, 25.13]
              ],
              speed: 10,
              speedUnit: "km/h"
            }
          ]
        },
        onSelect: {
          animations: [
            {
              name: "Idle",
              duration: Infinity,
              path: [[30, 0, 30]],
              lookAt: "camera"
            }
          ]
        }
      },
      description: `<iframe
          style="
            width: 100%;
            height: 100%;
            border:none;"
          src="${process.env.PUBLIC_URL}/templates/soldier.html"></iframe>`
    }
  ],
  meta: {
    authors: [
      { firstName: "Konstantinos", lastName: "Evanggelidis" },
      { firstName: "Theofilos", lastName: "Papadopoulos" }
    ]
  }
};
