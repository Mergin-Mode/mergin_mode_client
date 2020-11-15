import { combineReducers } from "redux";
import api from "./api";

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
  onWindowResize: () => {}
};

const rootReducer = combineReducers({
  api
});

export default rootReducer;
