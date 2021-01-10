import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import InstancedGroupMesh from "three-instanced-group-mesh";
export const loadGLTFModel = (file, record, referenceIndex) => {
  const {
    position,
    rotation,
    scale,
    scaleDifferenceXY,
    scaleDifferenceZ,
    blending
  } = record;
  const { url } = file[0];
  const { scene, loaders } = window.mergin_mode;

  const loader = new loaders.GLTFLoader();
  const dracoLoader = new DRACOLoader();
  loader.setDRACOLoader(dracoLoader);
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      gltf => {
        gltf.scene.animations = gltf.animations;
        // let material;
        const group = new THREE.Group();

        // if (blending) {
        //   material = new THREE.MeshPhongMaterial({
        //     color: 0x000000, // red (can also use a CSS color string here)
        //     blending: THREE[blending]
        //   });
        //   gltf.scene.renderOrder = 999;
        // }

        // gltf.scene.traverse(child => {
        //   if (child.isMesh) {
        //     // child.castShadow = true;
        //     // child.receiveShadow = true;

        //     if (blending) {
        //       child.material = material;
        //       // child.material.blending = THREE[blending];
        //       child.renderOrder = 999;
        //       // child.material.depthWrite = false;
        //     }
        //   }
        // });

        // if (record.visible == false) {
        //   group.visible = false;
        // }
        if (position[0] instanceof Array) {
          const new_mesh = new InstancedGroupMesh(gltf.scene, position.length);
          for (let p = 0; p < position.length - 1; p++) {
            const transform = new THREE.Object3D();
            transform.frustumCulled = false;
            const rot = {};
            rot.x = Number(rotation[0]);
            rot.y = Number(rotation[1]);
            rot.z = Number(rotation[2]);
            const axisX = new THREE.Vector3(1, 0, 0);
            const axisY = new THREE.Vector3(0, 1, 0);
            const axisZ = new THREE.Vector3(0, 0, 1);
            transform.rotateOnWorldAxis(axisX, rot.x);
            transform.rotateOnWorldAxis(axisZ, rot.z);
            transform.rotateOnWorldAxis(axisY, Math.random() * 2 * Math.PI);

            const randomXY = Math.random() * scaleDifferenceXY;
            const randomZ =
              Math.random() * scaleDifferenceXY +
              Math.random() * scaleDifferenceZ;
            const sca = {};
            sca.x = Number(scale[0]) + randomXY;
            sca.y = Number(scale[1]) + randomXY;
            sca.z = Number(scale[2]) + randomZ;
            transform.scale.set(sca.x, sca.y, sca.z);
            transform.position.set(
              ...position[p].reduce(
                (a, b, i) => [...a, b - window.mergin_mode.center[i]],
                []
              )
            );
            transform.updateMatrix();

            new_mesh.setMatrixAt(p, transform.matrix);
          }
          // new_mesh.traverse(function(node) {
          //   if (node.isMesh) {
          //     node.castShadow = true;
          //     node.receiveShadow = true;
          //   }
          // });

          group.add(new_mesh);
        } else {
          group.add(gltf.scene);
          group.position.set(
            ...position.reduce(
              (a, b, i) => [...a, b - window.mergin_mode.center[i]],
              []
            )
          );
          group.scale.set(...scale);
          group.rotation.set(...rotation);
        }
        if (record.type == "mapped") {
          group.renderOrder = 1;
          group.traverse(child => {
            if (child.isMesh) {
              child.material.side = THREE["DoubleSide"];
              child.material.blending = THREE["AdditiveBlending"];
              child.material.needsUpdate = true;
            }
          });
        }
        resolve({
          referenceIndex,
          uuid: gltf.scene.uuid,
          object: group
        });
      },
      () => {},
      e => {
        reject(e);
      }
    );
  });
};
export const loadFBXModel = (file, record, referenceIndex) => {
  const {
    position,
    rotation,
    scale,
    scaleDifferenceXY,
    scaleDifferenceZ,
    blending
  } = record;
  const { url } = file[0];
  const { scene, loaders } = window.mergin_mode;
  const loader = new loaders.FBXLoader();
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      object => {
        const group = new THREE.Group();

        // if (record.visible == false) {
        //   group.visible = false;
        // }
        if (position[0] instanceof Array) {
          const new_mesh = new InstancedGroupMesh(object, position.length);
          for (let p = 0; p < position.length - 1; p++) {
            const transform = new THREE.Object3D();
            transform.frustumCulled = false;
            const rot = {};
            rot.x = Number(rotation[0]);
            rot.y = Number(rotation[1]);
            rot.z = Number(rotation[2]);
            const axisX = new THREE.Vector3(1, 0, 0);
            const axisY = new THREE.Vector3(0, 1, 0);
            const axisZ = new THREE.Vector3(0, 0, 1);
            transform.rotateOnWorldAxis(axisX, rot.x);
            transform.rotateOnWorldAxis(axisZ, rot.z);
            transform.rotateOnWorldAxis(axisY, Math.random() * 2 * Math.PI);

            const randomXY = Math.random() * scaleDifferenceXY;
            const randomZ =
              Math.random() * scaleDifferenceXY +
              Math.random() * scaleDifferenceZ;
            const sca = {};
            sca.x = Number(scale[0]) + randomXY;
            sca.y = Number(scale[1]) + randomXY;
            sca.z = Number(scale[2]) + randomZ;
            transform.scale.set(sca.x, sca.y, sca.z);
            transform.position.set(
              ...position[p].reduce(
                (a, b, i) => [...a, b - window.mergin_mode.center[i]],
                []
              )
            );
            transform.updateMatrix();

            new_mesh.setMatrixAt(p, transform.matrix);
          }
          // new_mesh.traverse(function(node) {
          //   if (node.isMesh) {
          //     node.castShadow = true;
          //     node.receiveShadow = true;
          //   }
          // });

          group.add(new_mesh);
        } else {
          group.add(object);
          group.position.set(
            ...position.reduce(
              (a, b, i) => [...a, b - window.mergin_mode.center[i]],
              []
            )
          );
          group.scale.set(...scale);
          group.rotation.set(...rotation);
        }
        if (record.type == "mapped") {
          group.renderOrder = 1;
          group.traverse(child => {
            if (child.isMesh) {
              child.material.blending = THREE["AdditiveBlending"];
              child.material.depthFunc = THREE.AlwaysDepth;
              child.material.side = THREE["DoubleSide"];
              child.material.needsUpdate = true;
            }
          });
        }
        resolve({ referenceIndex, uuid: group.uuid, object: group });
      },
      () => {},
      e => {
        reject(e);
      }
    );
  });
};
