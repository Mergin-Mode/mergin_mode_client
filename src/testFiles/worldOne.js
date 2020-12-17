export default {
  id: "006cb9aE-F316",
  name: "White Tower Of Thessaloniki",
  description: "A simple overview of the area near the tower of thessaloniki.",
  content: [
    {
      refId: "white_tower",
      type: "model",
      url: process.env.PUBLIC_URL + "/white-tower.gltf",
      position: [4522507.2664, 15.25, 2625770.4946],
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
    {
      type: "model",
      url: process.env.PUBLIC_URL + "/tree-green.fbx",
      rotation: [0, 0, 0],
      position: [4522507.2664, 15.25, 2625790.4946],
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
      ground: true,
      selectable: false,
      url: process.env.PUBLIC_URL + "/white-tower-area.gltf",
      position: [4522507.2664, 15.25, 2625770.4946],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``
    },
    {
      type: "model",
      url: process.env.PUBLIC_URL + "/Soldier.glb",
      position: [4522505.2664, 15.75, 2625790.4946],
      rotation: [0, Math.PI, 0],
      scale: [0.8, 0.8, 0.8],
      actions: {
        onLoad: {
          animations: [
            {
              name: "Idle",
              duration: 5000,
              path: [[4522505.2664, 15.75, 2625790.4946]]
            }
          ]
        },
        onSelect: {
          animations: [
            {
              name: "Idle",
              duration: Infinity,
              path: [[4522505.2664, 15.75, 2625790.4946]],
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
      position: [4522483.8164, 15.37, 2625795.6245999997],
      rotation: [0, Math.PI, 0],
      scale: [0.8, 0.8, 0.8],
      actions: {
        onLoad: {
          animations: [
            {
              name: "Idle",
              duration: 5000,
              path: [[4522483.8164, 15.37, 2625795.6245999997]]
            },
            {
              name: "Walk",
              path: [
                [4522483.8164, 15.37, 2625795.6245999997],
                [4522502.1864, 14.97, 2625803.1346],
                [4522526.1564, 14.8, 2625798.6346],
                [4522538.4964000005, 14.98, 2625779.0245999997],
                [4522539.5864, 15.74, 2625755.2446],
                [4522520.8964, 16.24, 2625733.8046],
                [4522498.0364, 16.66, 2625742.6846],
                [4522486.8464, 16.66, 2625751.4446],
                [4522480.1764, 16.61, 2625760.8145999997],
                [4522474.7964, 16.53, 2625770.7545999996],
                [4522476.7164, 16.41, 2625776.9546],
                [4522481.2364, 15.51, 2625791.9646],
                [4522483.8164, 15.37, 2625795.6245999997]
              ],
              speed: 5,
              speedUnit: "km/h"
            },
            {
              name: "Run",
              path: [
                [4522483.8164, 15.37, 2625795.6245999997],
                [4522502.1864, 14.97, 2625803.1346],
                [4522526.1564, 14.8, 2625798.6346],
                [4522538.4964000005, 14.98, 2625779.0245999997],
                [4522539.5864, 15.74, 2625755.2446],
                [4522520.8964, 16.24, 2625733.8046],
                [4522498.0364, 16.66, 2625742.6846],
                [4522486.8464, 16.66, 2625751.4446],
                [4522480.1764, 16.61, 2625760.8145999997],
                [4522474.7964, 16.53, 2625770.7545999996],
                [4522476.7164, 16.41, 2625776.9546],
                [4522481.2364, 15.51, 2625791.9646],
                [4522483.8164, 15.37, 2625795.6245999997]
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
    ],
    thumbnail: `${process.env.PUBLIC_URL}/worldOne-Thumbnail.png`,
    coordinates: [4522507.2664, 15.25, 2625770.4946]
  }
};
