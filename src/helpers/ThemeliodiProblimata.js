import * as THREE from "three";
const rad2Grad = 63.6619772367581; // 1 rad ~= 63 grads

export const ThemeliodesProblima_1 = (Xa, Ya, Sab, Gab) => {
  const Xb = Xa + Sab * Math.sin(Gab / rad2Grad);
  const Yb = Ya + Sab * Math.cos(Gab / rad2Grad);
  return { Xb: Xb, Yb: Yb };
};

export const calculateSab = (Xa, Ya, Xb, Yb) => {
  const absDX = Math.abs(Xb - Xa);
  const absDY = Math.abs(Yb - Ya);
  const Sab = Math.sqrt(Math.pow(absDX, 2) + Math.pow(absDY, 2));
  return Number(Sab.toFixed(4));
};

export const ThemeliodesProblima_2 = (Xa, Ya, Xb, Yb) => {
  const absDX = Math.abs(Xb - Xa);
  const absDY = Math.abs(Yb - Ya);
  const Sab = Math.sqrt(Math.pow(absDX, 2) + Math.pow(absDY, 2));

  const DX = Xb - Xa;
  const DY = Yb - Ya;
  const theta = Math.atan(absDX / absDY) * rad2Grad; //http://www.translatorscafe.com/cafe/EN/units-converter/angle/2-3/radian-grad/
  let Gab;
  if (DX > 0 && DY > 0) {
    Gab = theta;
  } else if (DX > 0 && DY < 0) {
    Gab = 200 - theta;
  } else if (DX < 0 && DY < 0) {
    Gab = 200 + theta;
  } else if (DX < 0 && DY > 0) {
    Gab = 400 - theta;
  } else if (DX === 0 && DY > 0) {
    Gab = 0;
  } else if (DX === 0 && DY < 0) {
    Gab = 200;
  } else if (DX > 0 && DY === 0) {
    Gab = 100;
  } else if (DX < 0 && DY === 0) {
    Gab = 300;
  } else if (DX === 0 && DY === 0) {
    Gab = 0;
  }

  return { Gab: Gab.toFixed(4), Sab: Sab.toFixed(4) };
};

export const CalculateZ = (point, targetReference, offset) => {
  const origin = new THREE.Vector3(point.x, point.y + offset, point.z);

  const raycaster = new THREE.Raycaster(origin, new THREE.Vector3(0, -1, 0));
  const intersects = raycaster.intersectObject(targetReference, true);
  return ((intersects[0] || {}).point || {}).y || 0;
};
