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
      position: [1.5, 13, 3],
      rotation: [0, Math.PI / 2, 0],
      scale: [1, 1, 1],
      actions: {
        onLoad: {
          animations: [
            {
              name: "CINEMA_4D_Main",
              singleLoopDuration: 1000,
              path: [
                [4522519.65, 40, 2625805.5],
                [4522524.24, 40, 2625800.43],
                [4522530.28, 40, 2625794.24],
                [4522534.54, 40, 2625790.12],
                [4522540.35, 40, 2625784.5],
                [4522542.02, 40, 2625778.88],
                [4522539.23, 40, 2625769.28],
                [4522537.11, 40, 2625763.71],
                [4522533.94, 40, 2625759.93],
                [4522531.36, 40, 2625757.23],
                [4522530.56, 40, 2625755.17],
                [4522528.4, 40, 2625752.29],
                [4522523.42, 40, 2625748.53],
                [4522517.18, 40, 2625744],
                [4522511.25, 40, 2625740.3],
                [4522506.57, 40, 2625737.46],
                [4522503.06, 40, 2625737.66],
                [4522498.91, 40, 2625739.57],
                [4522493.38, 40, 2625740.6],
                [4522486.96, 40, 2625743.43],
                [4522479.19, 40, 2625749.28],
                [4522478.52, 40, 2625752.2],
                [4522474.53, 40, 2625758.14],
                [4522474.4, 40, 2625767.36],
                [4522477.27, 40, 2625774.56],
                [4522477.27, 40, 2625781.59],
                [4522480.91, 40, 2625793.36],
                [4522489.27, 40, 2625796.78],
                [4522501.6, 40, 2625802.34],
                [4522514.55, 40, 2625811.76],
                [4522519.65, 40, 2625805.5]
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
      position: [4522508.69, 15.58, 2625813.48],
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
                [4522508.69, 15.58, 2625813.48],
                [4522535.21, 16.15, 2625788.34]
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
      position: [4522515.27, 15.58, 2625812.48],
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
                [4522515.27, 15.58, 2625812.48],
                [4522535.84, 16.15, 2625790.95]
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
      url: process.env.PUBLIC_URL + "/trees.glb",
      rotation: [-Math.PI / 2, 0, 0],
      position: [
        [4522489.53, 15.29, 2625782.71],
        [4522488.77, 15.72, 2625773],
        [4522489.97, 15.92, 2625763.99],
        [4522493.06, 15.91, 2625756.79],
        [4522499.14, 16.14, 2625750.56],
        [4522530.58, 16.51, 2625771.71],
        [4522527.9, 15.99, 2625787.42]
      ],
      scale: [0.5, 0.5, 0.5],
      scaleDifferenceXY: 0.1,
      scaleDifferenceZ: 0.2,
      description: `<iframe
            style="
              width: 100%;
              height: 100%;
              border:none;"
            src="https://en.wikipedia.org/wiki/Tree"></iframe>`
    }
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
