import * as THREE from "three";
// import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DeviceOrientationControls } from "three/examples/jsm/controls/DeviceOrientationControls.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { CalculateDeltaPosition } from "./CalculateDeltaPosition";
import { calculateSab } from "./ThemeliodiProblimata";
// var modelName = "models/gltf/" + model.name + ".glb";
const degtorad = Math.PI / 180; // Degree-to-Radian conversion

const mobileCheck = function() {
  let check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

GLTFLoader.prototype.load2 = function(files, callback) {
  const scope = this;
  const file = files[0];

  const reader = new FileReader();

  reader.onload = function(event) {
    if (event.target.readyState === 2 || event.target.status === 0) {
      scope.parse(
        event.target.result || event.target.responseText,
        "",
        callback
      );
    } else {
    }
  };
  reader.readAsArrayBuffer(file);
};
FBXLoader.prototype.load2 = function(files, callback) {
  const scope = this;
  const file = files[0];

  const reader = new FileReader();

  reader.onload = function(event) {
    if (event.target.readyState === 2 || event.target.status === 0) {
      const geometry = scope.parse(
        event.target.result || event.target.responseText
      );

      if (callback) callback(geometry);
    } else {
      // scope.dispatchEvent({type: 'error', message: 'Couldn\'t load URL [' + url + ']', response: event.target.readyState});
    }
  };

  reader.readAsArrayBuffer(file);
};

export default function createWorld(
  camera,
  controls,
  scene,
  renderer,
  pointer,
  partials,
  loaders,
  rendererContainer,
  mixer,
  selectModel
) {
  loaders.FBXLoader = FBXLoader;
  loaders.GLTFLoader = GLTFLoader;
  const clock = new THREE.Clock();

  const host = document.getElementById("three-map");

  const generateTerrain = (g /*,m, e*/) => {
    const pos = g.getAttribute("position");
    const pa = pos.array;

    for (let j = 2, i = 0; j < pa.length; j += 3, i++) {
      pa[j] = 0;
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
  };

  scene = new THREE.Scene();

  const video = document.getElementsByTagName("video")[0];
  const texture = new THREE.VideoTexture(video);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.format = THREE.RGBFormat;
  scene.background = texture;
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(host.clientWidth, host.clientHeight);

  host.appendChild(renderer.domElement);
  camera = new THREE.PerspectiveCamera(
    60,
    host.clientWidth / host.clientHeight,
    1,
    10000
  );
  // camera = new THREE.OrthographicCamera( host.clientWidth / - 2, host.clientWidth / 2, host.clientHeight / 2, host.clientHeight / - 2, 1, 1000 );
  camera.position.set(50, 17, 50);
  if (mobileCheck()) {
    controls = new DeviceOrientationControls(camera);
  } else {
    controls = new OrbitControls(camera, renderer.domElement);
  }
  controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 1;
  controls.maxDistance = 1000;
  // controls.maxPolarAngle = Math.PI / 2;
  controls.rotateSpeed = 0.8;
  controls.panSpeed = 0.8;
  controls.zoomSpeed = 0.8;

  // world
  const geometry = new THREE.PlaneBufferGeometry(100, 100, 99, 99);

  generateTerrain(geometry);

  const material = new THREE.MeshPhongMaterial({
    wireframe: true,
    color: "#222",
    side: THREE.DoubleSide
  });

  material.flatShading = true;

  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(0, 0, 0);

  plane.castShadow = false;
  plane.receiveShadow = false;
  plane.geometry.rotateX(Math.PI / 2);

  scene.add(plane);

  const gridHelper = new THREE.GridHelper(10000, 1000);
  scene.add(gridHelper);
  const light = new THREE.AmbientLight(0x404040, 1); // soft white light
  scene.add(light);

  const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
  hemiLight.color.setHSL(0.6, 0.5, 0.75);
  hemiLight.groundColor.setHSL(0.095, 0.5, 0.5);
  hemiLight.position.set(0, 0, 50);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  window.dirLight = dirLight;
  dirLight.position.set(1, -1, 1);
  dirLight.position.multiplyScalar(50);
  dirLight.name = "dirlight";
  // dirLight.shadowCameraVisible = true;

  scene.add(dirLight);

  dirLight.castShadow = false;

  pointer = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshBasicMaterial({ color: "red" })
  );

  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(150, 32, 32),
    new THREE.MeshBasicMaterial({
      opacity: 0,
      transparent: true,
      alphaTest: 0.05,
      side: THREE.DoubleSide
    })
  );
  sky.rotation.set(Math.PI / 2, 0, 0);
  scene.add(sky);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const getParentElement = object => {
    if (!object || !window.mergin_mode.world) {
      return false;
    }
    const allIds = window.mergin_mode.world.map(obj => obj.id);
    if (allIds.indexOf(object.uuid) !== -1) {
      return object;
    }
    return getParentElement(object.parent);
  };
  function onMouseClick(event) {
    if (window.mergin_mode.selected.object) {
      window.mergin_mode.selected.object.traverse(child => {
        if (child.isMesh) {
          child.material = window.mergin_mode.selected.material[child.uuid];
        }
      });
      window.mergin_mode.selected.object = null;
      window.mergin_mode.selected.material = null;
    }
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x =
      (((event.clientX || event.changedTouches[0].clientX) - rect.left) /
        rect.width) *
        2 -
      1;
    mouse.y =
      -(
        ((event.clientY || event.changedTouches[0].clientY) - rect.top) /
        rect.height
      ) *
        2 +
      1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    let obj;
    for (const record of intersects) {
      obj = getParentElement(record?.object);
      if (obj) {
        break;
      }
    }

    if (!obj) {
      selectModel(null);
      return false;
    }
    const material = new THREE.MeshPhongMaterial({
      color: "#b34f0b",
      side: THREE.DoubleSide
    });

    window.mergin_mode.selected.object = obj;
    window.mergin_mode.selected.material = {};
    obj.traverse(child => {
      if (child.isMesh) {
        window.mergin_mode.selected.material[child.uuid] = child.material;
        child.material = material;
      }
    });
    selectModel(obj.uuid);
  }

  function onWindowResize() {
    camera.aspect = host.clientWidth / host.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(host.clientWidth, host.clientHeight);
  }

  function animate() {
    setTimeout(function() {
      requestAnimationFrame(animate);
      if (window.mergin_mode.scene?.visible !== false) {
        controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
        render();
      }
    }, 60);
  }
  animate();

  function render() {
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", onWindowResize, false);
  document.getElementById("three-map").addEventListener("click", onMouseClick);
  document
    .getElementById("three-map")
    .addEventListener("touchend", onMouseClick, false);

  partials = { plane, pointer, sky, gridHelper };
  return {
    plane,
    camera,
    controls,
    scene,
    renderer,
    pointer,
    partials,
    loaders,
    onWindowResize
  };
}
