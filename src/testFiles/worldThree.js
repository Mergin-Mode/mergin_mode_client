export default {
  id: "006cb9aE-S324",
  name: "Apollonia Bath",
  description: "Simulation of the Otoman Bath in Apollonia.",
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

