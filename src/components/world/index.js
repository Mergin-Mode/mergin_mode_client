import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import createWorld from "../../helpers/createWorld";
import { setDescriptiveData } from "../../actions";
const World = props => {
  useEffect(() => {
    if (!navigator.mediaDevices?.getUserMedia) {
      return false;
    }
    const constraints = {
      video: { width: 1280, height: 720, facingMode: "environment" }
    };
    navigator.mediaDevices.getUserMedia(constraints).then(response => {
      const video = document.getElementById("video");
      video.srcObject = response;
      video.play();
    });

    const {
      mixers,
      camera,
      controls,
      scene,
      renderer,
      pointer,
      partials,
      loaders
    } = window.mergin_mode;
    const rendererContainer = document.getElementById("three-map");
    const newWorld = createWorld(
      camera,
      controls,
      scene,
      renderer,
      pointer,
      partials,
      loaders,
      rendererContainer,
      mixers,
      uuid => {
        const descriptiveData = uuid
          ? window.mergin_mode.world.filter(o => o.id == uuid)[0].description
          : null;
        props.setDescriptiveData(descriptiveData);
      }
    );
    window.mergin_mode = { ...window.mergin_mode, ...newWorld };
    props.context();
  }, []);

  return (
    <div id="world">
      <video
        id="video"
        style={{ display: "none" }}
        autoPlay
        playsInline
      ></video>
      <div
        id="three-map"
        style={{
          position: "absolute",
          width: `100%`,
          height: `100%`
        }}
      ></div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    api: state.api
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDescriptiveData: context => dispatch(setDescriptiveData(context))
  };
};

World.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(World);
