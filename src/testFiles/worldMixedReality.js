import * as THREE from "three";
export default {
  id: "006cb9aE-F317",
  name: "Mixed Reality",
  description: "A simple overview of the area near the tower of thessaloniki.",
  actions: [
    {
      name: "Show/Hide Virtual",
      run: () => {
        window.mergin_mode.world[window.mergin_mode.currentWorldId].map(
          item => {
            if (item.type === "virtual") {
              item.object.visible = !item.object.visible;
            }
          }
        );
      }
    },
    {
      name: "Show/Hide Mapped Textured",
      run: () => {
        window.mergin_mode.world[window.mergin_mode.currentWorldId].map(
          item => {
            if (item.type === "mapped") {
              item.object.visible = !item.object.visible;
              item.object.traverse(child => {
                if (child.isMesh) {
                  child.material.blending = THREE["NormalBlending"];
                  child.material.color = new THREE.Color("#fff");
                  child.material.wireframe = false;
                  child.material.needsUpdate = true;
                }
              });
            }
          }
        );
      }
    },
    {
      name: "Show/Hide Mixed Objects Semi Transparent",
      run: () => {
        window.mergin_mode.world[window.mergin_mode.currentWorldId].map(
          item => {
            if (item.type === "mapped") {
              item.object.visible = !item.object.visible;
              item.object.renderOrder = 999;
              item.object.traverse(child => {
                if (child.isMesh) {
                  child.material.wireframe = false;
                  child.material.blending = THREE["AdditiveBlending"];
                  child.material.color = new THREE.Color("#fff");
                  child.material.needsUpdate = true;
                }
              });
            }
          }
        );
      }
    },
    {
      name: "Show/Hide Mixed Objects Transparent",
      run: () => {
        window.mergin_mode.world[window.mergin_mode.currentWorldId].map(
          item => {
            if (item.type === "mapped") {
              item.object.visible = !item.object.visible;
              item.object.renderOrder = 999;
              item.object.traverse(child => {
                if (child.isMesh) {
                  child.material.wireframe = false;
                  child.material.blending = THREE["AdditiveBlending"];
                  child.material.color = new THREE.Color("#000");
                  child.material.needsUpdate = true;
                }
              });
            }
          }
        );
      }
    },
    {
      name: "Change FoV",
      run: () => {
        window.mergin_mode.camera.fov += 5;

        if (window.mergin_mode.camera.fov > 130) {
          window.mergin_mode.camera.fov = 50;
        }
        window.mergin_mode.camera.updateProjectionMatrix();
      }
    }
  ],
  content: [
    {
      type: "mapped",
      ground: true,
      selectable: false,
      //visible: false,
      url: process.env.PUBLIC_URL + "/white-tower-area.gltf",
      position: [4522507.2664, 15.25, 2625770.4946],
      rotation: [0, -Math.PI / 2, 0],
      scale: [1, 1, 1],
      description: ``
    },
    // {
    //   type: "virtual",
    //   //visible: false,
    //   url: process.env.PUBLIC_URL + "/mantalk.glb",
    //   position: [4522518.11, 15.56, 2625803.41],
    //   rotation: [0, Math.PI - 0.1, 0],
    //   scale: [0.5, 0.5, 0.5],
    //   actions: {
    //     onLoad: {
    //       animations: [
    //         {
    //           singleLoopDuration: 5000,
    //           name: "mixamo.com",
    //           duration: 10000,
    //           path: [[4522518.11, 15.86, 2625797.41]]
    //           //dynamicHeight: true
    //         }
    //       ]
    //     }
    //   },
    //   description: `<iframe
    //       style="
    //         width: 100%;
    //         height: 100%;
    //         border:none;"
    //       src="${process.env.PUBLIC_URL}/templates/soldier.html"></iframe>`
    // },
    {
      type: "virtual",
      //visible: false,
      url: process.env.PUBLIC_URL + "/helicopter.glb",
      position: [4522531.29, 45, 2625795.88],
      rotation: [0, Math.PI / 2, 0],
      scale: [1, 1, 1],
      actions: {
        onLoad: {
          animations: [
            {
              name: "CINEMA_4D_Main",
              singleLoopDuration: 1000,
              path: [
                [4522531.29, 45, 2625795.88],
                [4522536.37, 45, 2625791.61],
                [4522540.27, 45, 2625786.33],
                [4522542.32, 45, 2625781.18],
                [4522542.36, 45, 2625773.95],
                [4522539.7, 45, 2625767.84],
                [4522537.19, 45, 2625760.33],
                [4522532.66, 45, 2625755.54],
                [4522526.87, 45, 2625748.99],
                [4522521.05, 45, 2625744.14],
                [4522514.7, 45, 2625739.34],
                [4522508.28, 45, 2625736.25],
                [4522501.79, 45, 2625734.64],
                [4522494.78, 45, 2625735.62],
                [4522489.86, 45, 2625740.03],
                [4522480.99, 45, 2625741.88],
                [4522477, 45, 2625746.1],
                [4522473.5, 45, 2625752.15],
                [4522470.3, 45, 2625762.59],
                [4522470.51, 45, 2625771.03],
                [4522472.2, 45, 2625779.43],
                [4522475.96, 45, 2625786.54],
                [4522485.07, 45, 2625795.1],
                [4522493.89, 45, 2625799.9],
                [4522503.52, 45, 2625805.34],
                [4522512.43, 45, 2625807.44],
                [4522520.45, 45, 2625806.2],
                [4522531.29, 45, 2625795.88]
              ],
              speed: 45,
              speedUnit: "km/h"
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
      type: "virtual",
      //visible: false,
      url: process.env.PUBLIC_URL + "/man1.glb",
      position: [4522519.65, 15.58, 2625805.5],
      rotation: [0, 0, 0],
      scale: [0.5, 0.5, 0.5],
      smoothRotation: false,
      actions: {
        onLoad: {
          animations: [
            {
              name: "mixamo.com",
              singleLoopDuration: 1000,
              path: [
                [4522519.65, 15.58, 2625805.5],
                [4522524.24, 15.7, 2625800.43],
                [4522530.28, 16.05, 2625794.24],
                [4522534.54, 16.24, 2625790.12],
                [4522540.35, 16.26, 2625784.5],
                [4522542.02, 16.46, 2625778.88],
                [4522539.23, 16.56, 2625769.28],
                [4522537.11, 16.58, 2625763.71],
                [4522533.94, 16.73, 2625759.93],
                [4522531.36, 16.61, 2625757.23],
                [4522530.56, 16.62, 2625755.17],
                [4522528.4, 16.64, 2625752.29],
                [4522523.42, 16.64, 2625748.53],
                [4522517.18, 16.59, 2625744],
                [4522511.25, 16.61, 2625740.3],
                [4522506.57, 16.48, 2625737.46],
                [4522503.06, 16.46, 2625737.66],
                [4522498.91, 16.3, 2625739.57],
                [4522493.38, 15.89, 2625740.6],
                [4522486.96, 15.57, 2625743.43],
                [4522479.19, 15.23, 2625749.28],
                [4522478.52, 15.13, 2625752.2],
                [4522474.53, 15, 2625758.14],
                [4522474.4, 14.93, 2625767.36],
                [4522477.27, 15.25, 2625774.56],
                [4522477.27, 15.25, 2625781.59],
                [4522480.91, 14.73, 2625793.36],
                [4522489.27, 14.88, 2625796.78],
                [4522501.6, 15.05, 2625802.34],
                [4522514.55, 15.29, 2625811.76],
                [4522519.65, 15.58, 2625805.5]
              ],
              speed: 8,
              speedUnit: "km/h"
              // dynamicHeight: true
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
      type: "virtual",
      //visible: false,
      url: process.env.PUBLIC_URL + "/man1.glb",
      position: [4522476.11, 15.03, 2625758.52],
      rotation: [0, 0, 0],
      scale: [0.5, 0.5, 0.5],
      smoothRotation: false,
      actions: {
        onLoad: {
          animations: [
            {
              name: "mixamo.com",
              singleLoopDuration: 1200,
              path: [
                [4522476.11, 15.03, 2625758.52],
                [4522482.1, 14.77, 2625793.26],
                [4522476.11, 15.03, 2625758.52]
              ],
              speed: 4,
              speedUnit: "km/h"
              //dynamicHeight: true
            }
          ]
        }
      }
    },
    {
      type: "virtual",
      //visible: false,
      url: process.env.PUBLIC_URL + "/man1.glb",
      position: [4522513.55, 15.18, 2625816.88],
      rotation: [0, 0, 0],
      scale: [0.5, 0.5, 0.5],
      smoothRotation: false,
      actions: {
        onLoad: {
          animations: [
            {
              name: "mixamo.com",
              singleLoopDuration: 1400,
              path: [
                [4522513.55, 15.18, 2625816.88],
                [4522529.4, 16.04, 2625795.93],
                [4522513.55, 15.18, 2625816.88]
              ],
              speed: 6,
              speedUnit: "km/h"
              //dynamicHeight: true
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
      type: "virtual",
      //visible: false,
      url: process.env.PUBLIC_URL + "/man1.glb",
      position: [4522512.53, 15.27, 2625812.8],
      rotation: [0, 0, 0],
      scale: [0.5, 0.5, 0.5],
      smoothRotation: false,
      actions: {
        onLoad: {
          animations: [
            {
              name: "mixamo.com",
              singleLoopDuration: 1000,
              path: [
                [4522512.53, 15.27, 2625812.8],
                [4522525.04, 15.8, 2625798.98],
                [4522512.53, 15.27, 2625812.8]
              ],
              speed: 6,
              speedUnit: "km/h"
              //dynamicHeight: true
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
      type: "virtual",
      //visible: false,
      url: process.env.PUBLIC_URL + "/man1.glb",
      position: [4522524.93, 16.66, 2625749.88],
      rotation: [0, 0, 0],
      scale: [0.5, 0.5, 0.5],
      smoothRotation: false,
      actions: {
        onLoad: {
          animations: [
            {
              name: "mixamo.com",
              singleLoopDuration: 1400,
              path: [
                [4522524.93, 16.66, 2625749.88],
                [4522503, 16.45, 2625736.87],
                [4522524.93, 16.66, 2625749.88]
              ],
              speed: 6,
              speedUnit: "km/h"
              //dynamicHeight: true
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
    // {
    //   type: "virtual",
    //   //visible: false,
    //   url: process.env.PUBLIC_URL + "/trees.glb",
    //   rotation: [-Math.PI / 2, 0, 0],
    //   position: [
    //     [4522489.53, 15.29, 2625782.71],
    //     [4522488.77, 15.72, 2625773],
    //     [4522489.97, 15.92, 2625763.99],
    //     [4522493.06, 15.91, 2625756.79],
    //     [4522499.14, 16.14, 2625750.56],
    //     [4522530.58, 16.51, 2625771.71],
    //     [4522527.9, 15.99, 2625787.42]
    //   ],
    //   scale: [0.5, 0.5, 0.5],
    //   scaleDifferenceXY: 0.1,
    //   scaleDifferenceZ: 0.2,
    //   description: `<iframe
    //         style="
    //           width: 100%;
    //           height: 100%;
    //           border:none;"
    //         src="https://en.wikipedia.org/wiki/Tree"></iframe>`
    // }
  ],
  meta: {
    authors: [
      { firstName: "Konstantinos", lastName: "Evanggelidis" },
      { firstName: "Theofilos", lastName: "Papadopoulos" }
    ],
    thumbnail: `${process.env.PUBLIC_URL}/worldMixedReality-Thumbnail.png`,
    coordinates: [4522507.2664, 15.25, 2625770.4946],
    observationPoints: [
      {
        id: "006cb9aE-F317",
        pointId: 1,
        position: {
          x: 4522473.81,
          y: 2625774.06,
          z: 16.7
        },
        heading: 85
      },
      {
        id: "006cb9aE-F317",
        pointId: 2,
        position: {
          x: 4522516.39,
          y: 2625740.93,
          z: 18.6
        },
        heading: 190
      },
      {
        id: "006cb9aE-F317",
        pointId: 3,
        position: {
          x: 4522523.05,
          y: 2625809.84,
          z: 17.5
        },
        heading: 348
      }
    ]
  }
};
