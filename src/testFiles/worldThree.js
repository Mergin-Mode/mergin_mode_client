import * as THREE from "three";
export default {
  id: "006cb9aE-S324",
  name: "Apollonia Bath",
  description: "Simulation of the Otoman Bath in Apollonia.",
  actions: [
    {
      name: "Show/Hide Ground",
      run: () => {
        window.mergin_mode.world[window.mergin_mode.currentWorldId].map(
          (item) => {
            if (item.ground) {
              item.object.visible = !item.object.visible;
            }
          }
        );
      },
    },
    {
      name: "Change Virtual Transparency",
      run: () => {
        window.mergin_mode.world[window.mergin_mode.currentWorldId].map(
          (item) => {
            if (item.type === "virtual") {
              item.object.traverse((child) => {
                if (child.isMesh) {
                  child.material.transparent = true;
                  if (child.material.opacity === 0.3)
                    child.material.opacity = 1;
                  else child.material.opacity = 0.3;
                  child.material.needsUpdate = true;
                }
              });
            }
          }
        );
      },
    },
    {
      name: "Change FoV",
      run: () => {
        window.mergin_mode.camera.fov += 5;

        if (window.mergin_mode.camera.fov > 130) {
          window.mergin_mode.camera.fov = 50;
        }
        window.mergin_mode.camera.updateProjectionMatrix();
      },
    },
  ],
  content: [
    {
      type: "virtual",
      ground: true,
      selectable: false,
      //visible: false,
      url: process.env.PUBLIC_URL + "/testworld/ground.glb",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
    },
    {
      type: "virtual",
      selectable: false,
      //visible: false,
      url: process.env.PUBLIC_URL + "/testworld/hamam.glb",
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/taksidiotisS2.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              name: "Bip01|Take 001|BaseLayer.002",
              duration: 33000,
              singleLoopDuration: 33000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/taksidiotis.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              name: "Bip MAN 1|Take 001|BaseLayer",
              duration: 33000,
              singleLoopDuration: 33000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/loutraris.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              name: "Bip MAN L|Take 001|BaseLayer.001",
              duration: 33000,
              singleLoopDuration: 33000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
    {
      type: "virtual",
      url: process.env.PUBLIC_URL + "/testworld/petseta.glb",
      selectable: false,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      description: ``,
      actions: {
        onLoad: {
          animations: [
            {
              // man entering
              // starts 0
              name: "3D PESHTEMAL|Take 001|BaseLayer",
              duration: 33000,
              singleLoopDuration: 33000,
              path: [[0, 0, 0]],
            },
          ],
        },
      },
    },
  ],
  meta: {
    authors: [
      { firstName: "Konstantinos", lastName: "Evanggelidis" },
      { firstName: "Theofilos", lastName: "Papadopoulos" },
    ],
    thumbnail: `${process.env.PUBLIC_URL}/worldThree-Thumbnail.png`,
    coordinates: [0, 0, 0],
  },
};
