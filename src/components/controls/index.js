import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import QrReader from "react-qr-reader";
import ActionButton from "../_layout/ActionButton";
import Modal from "../_layout/Modal";
import SideBar from "../_layout/SideBar";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import StreetviewIcon from "@material-ui/icons/Streetview";
import CropFreeIcon from "@material-ui/icons/CropFree";
import { DescriptiveDataListener } from "../../helpers/listeners";
const Controls = props => {
  const sliderHelperRef = useRef();
  const containerRef = useRef();
  const fheight = useRef({
    height: null,
    movementY: null,
    previousTouchY: null,
    moved: false
  });

  // const handleScan = data => {
  //   if (data) {
  //     const d = JSON.parse(data);
  //     window.mergin_mode.camera.position.set(d.x, d.y, d.z);
  //     setAction("immerse");
  //     window.mergin_mode.controls.alphaOffset = (d.heading / 180) * Math.PI;
  //     window.mergin_mode.controls.update();
  //   }
  // };

  // const toggleFullscreen = () => {
  //   if (!document.fullscreenElement) {
  //     appRef.current.requestFullscreen().catch(err => {
  //       modalData(
  //         `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
  //       );
  //     });
  //   } else {
  //     document.exitFullscreen();
  //   }
  // };
  // const handleScanError = err => {
  //   console.error(err);
  // };

  return (
    <div id="controls">
      <img
        id="logo"
        width={120}
        height={(120 * 469) / 640}
        src={process.env.PUBLIC_URL + "/logo-transparent.png"}
      />

      {/*action === "scan" && (
        <div className="scan-tip">
          <QrReader
            delay={300}
            onError={handleScanError}
            onScan={handleScan}
            style={{ width: "100%" }}
          />
        </div>
      )*/}
      <div id="actions-menu">
        <ActionButton
          actions={[
            {
              icon: (
                <StreetviewIcon
                  color="secondary"
                  // onClick={() => setAction("immerse")}
                />
              ),
              name: "Immerse"
            },
            {
              icon: (
                <CropFreeIcon
                  color="secondary"
                  // onClick={() => setAction("scan")}
                />
              ),
              name: "QR Scan"
            },
            {
              icon: (
                <FullscreenIcon
                  color="secondary"
                  // onClick={() => toggleFullscreen()}
                />
              ),
              name: "Full Screen"
            }
          ]}
        />
        <div
          id="descriptive-data-container"
          ref={elem => (containerRef.current = elem)}
        >
          <div
            id="slider-helper"
            onMouseDown={DescriptiveDataListener(
              containerRef,
              sliderHelperRef,
              fheight
            )}
            onTouchStart={DescriptiveDataListener(
              containerRef,
              sliderHelperRef,
              fheight
            )}
            ref={elem => (sliderHelperRef.current = elem)}
          ></div>
          <div id="slider"></div>
          {props.descriptiveData ? (
            <div
              id="descriptive-data"
              dangerouslySetInnerHTML={{ __html: props.descriptiveData }}
            ></div>
          ) : (
            <div id="descriptive-data" style={{ overflowY: "auto" }}>
              <i className="mm-icons far fa-comment-dots"></i>
              <p>Please select an object to reveal descriptive data</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    descriptiveData: state.api.descriptiveData
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

Controls.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
