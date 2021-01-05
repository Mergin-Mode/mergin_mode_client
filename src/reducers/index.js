import { combineReducers } from "redux";
import api from "./api";
import worldDataOne from "../testFiles/worldOne.js";
import worldDataTwo from "../testFiles/worldTwo.js";
window.mergin_mode = {
  modelLayer: [],
  vectors: [],
  plane: {},
  sky: {},
  mixers: [],
  camera: {},
  controls: {},
  scene: {},
  renderer: {},
  pointer: {},
  partials: {},
  loaders: {},
  selected: {
    object: null,
    material: null
  },
  listeners: {
    mouseMoved: false
  },
  center: [0, 0, 0],
  onWindowResize: () => {},
  world: {},
  currentWorldId: null,
  worlds: [worldDataOne, worldDataTwo]
};

const rootReducer = combineReducers({
  api
});

export default rootReducer;
