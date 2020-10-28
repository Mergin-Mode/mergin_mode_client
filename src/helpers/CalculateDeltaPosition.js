import { ThemeliodesProblima_1 } from "./ThemeliodiProblimata";
import { posZ } from "./computeZ";

export const CalculateDeltaPosition = (Xa, Ya, Za, Gab, delta, dem) => {
  const Sab = delta * 1.75; //distance in meters per second (50km/h)
  const posXY = ThemeliodesProblima_1(Xa, Ya, Sab, Gab);
  const newZ = posZ(posXY.Xb, posXY.Yb, dem);
  return { x: posXY.Xb, y: posXY.Yb, z: newZ };
};

export const CalculateDeltaRotation = (
  Xa,
  Ya,
  Za,
  Xb,
  Yb,
  Zb,
  Gab,
  Sab,
  rotX,
  rotY
) => {
  const DZ = Zb - Za;
  const XYkathetis = ThemeliodesProblima_1(Xb, Yb, Sab, Gab + 100);
  const Xkathetis = XYkathetis.Xb;
  const Ykathetis = XYkathetis.Yb;
  const Zkathetis = posZ(Xkathetis, Ykathetis);
  const DZkathetis = Zb - Zkathetis;

  let RotationX = 0;
  let RotationY = 0;

  if (DZ < 0 || DZ > 0) {
    RotationX = Math.atan(DZ / Sab);
    RotationY = Math.atan(DZkathetis / Sab);
  }

  const DRotationX = rotX - RotationX;
  const DRotationY = rotY - RotationY;

  return {
    x: Number(DRotationX),
    y: Number(DRotationY)
  };
};
