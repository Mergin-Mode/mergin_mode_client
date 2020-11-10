import {
  ThemeliodesProblima_1,
  ThemeliodesProblima_2,
  CalculateZ
} from "./ThemeliodiProblimata";
import { AnimationMixer } from "three";
import { posZ } from "./computeZ";

const gradToRad = 63.661977236758;
export const CalculateTransformation = (timeDelta, model) => {
  const Xa = Number(model.object.position.x.toFixed(4));
  const Ya = Number(model.object.position.z.toFixed(4));
  const currentAnimation = model.animations[model.runtimeInfo.animationIndex];

  model.runtimeInfo.duration += timeDelta;
  if (currentAnimation.duration) {
    if (model.runtimeInfo.duration >= currentAnimation.duration / 1000) {
      //check if animation has other path to animate
      model.runtimeInfo.duration = 0;
      if (model.animations.length - 1 > model.runtimeInfo.animationIndex) {
        model.runtimeInfo.animationIndex++;
        model.runtimeInfo.pathIndex = 0;
        const mixer = new AnimationMixer(model.object);
        mixer
          .clipAction(
            model.object.animations.filter(animation => {
              return (
                animation.name ==
                model.animations[model.runtimeInfo.animationIndex].name
              );
            })[0]
          )
          .setDuration(1)
          .play();
        model.runtimeInfo.mixer = mixer;
      }
      // restart animation
      else {
        model.runtimeInfo.animationIndex = 0;
        model.runtimeInfo.pathIndex = 0;
        const mixer = new AnimationMixer(model.object);
        mixer
          .clipAction(
            model.object.animations.filter(animation => {
              return (
                animation.name ==
                model.animations[model.runtimeInfo.animationIndex].name
              );
            })[0]
          )
          .setDuration(1)
          .play();
        model.runtimeInfo.mixer = mixer;
      }
    }
    return false;
  }

  const currentPath = currentAnimation.path[model.runtimeInfo.pathIndex];
  const Xb = Number(currentPath[0].toFixed(4));
  const Yb = Number(currentPath[2].toFixed(4));

  const Sab = ((timeDelta * currentAnimation.speed) / 60 / 60) * 1000; //distance in meters per second (50km/h)
  const start = currentAnimation.path[model.runtimeInfo.pathIndex - 1]
    ? currentAnimation.path[model.runtimeInfo.pathIndex - 1]
    : currentAnimation.path[model.runtimeInfo.pathIndex];
  const Gab = Number(ThemeliodesProblima_2(start[0], start[2], Xb, Yb).Gab);

  if (
    (Gab <= 100 && (Xa >= Xb || Ya >= Yb)) ||
    (Gab > 100 && Gab <= 200 && (Xa >= Xb || Ya <= Yb)) ||
    (Gab > 200 && Gab <= 300 && (Xa <= Xb || Ya <= Yb)) ||
    (Gab > 300 && (Xa <= Xb || Ya >= Yb))
  ) {
    //check if animation has other path to animate
    if (currentAnimation.path.length - 1 > model.runtimeInfo.pathIndex) {
      model.runtimeInfo.pathIndex++;
      model.runtimeInfo.duration = 0;
    }
    //check if model has other animations
    else if (model.animations.length - 1 > model.runtimeInfo.animationIndex) {
      model.runtimeInfo.animationIndex++;
      model.runtimeInfo.pathIndex = 0;
      model.runtimeInfo.duration = 0;
      const mixer = new AnimationMixer(model.object);
      mixer
        .clipAction(
          model.object.animations.filter(animation => {
            return (
              animation.name ==
              model.animations[model.runtimeInfo.animationIndex].name
            );
          })[0]
        )
        .setDuration(1)
        .play();
      model.runtimeInfo.mixer = mixer;
    }
    // restart animation
    else {
      model.runtimeInfo.animationIndex = 0;
      model.runtimeInfo.pathIndex = 0;
      model.runtimeInfo.duration = 0;
      const mixer = new AnimationMixer(model.object);
      mixer
        .clipAction(
          model.object.animations.filter(animation => {
            return (
              animation.name ==
              model.animations[model.runtimeInfo.animationIndex].name
            );
          })[0]
        )
        .setDuration(1)
        .play();
      model.runtimeInfo.mixer = mixer;
    }
    const posXY = ThemeliodesProblima_1(Xa, Ya, Sab, Gab);
    const newZ = CalculateZ(
      { x: posXY.Xb, z: posXY.Yb, y: model.object.position.y },
      window.mergin_mode.plane,
      2
    );
    // const rotate = Gab ? Gab / gradToRad : 0;
    // return {
    //   rotation: [
    //     model.rotation[0],
    //     model.rotation[1] + rotate,
    //     model.rotation[2]
    //   ]
    // };
    return false;
  }

  const posXY = ThemeliodesProblima_1(Xa, Ya, Sab, Gab);
  const newZ = CalculateZ(
    { x: posXY.Xb, z: posXY.Yb, y: model.object.position.y },
    window.mergin_mode.plane,
    2
  );
  const rotate = Gab ? Gab / gradToRad : 0;

  return {
    position: [posXY.Xb, newZ, posXY.Yb],
    rotation: [model.rotation[0], model.rotation[1] + rotate, model.rotation[2]]
  };
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
