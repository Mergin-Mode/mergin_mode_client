import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import QrReader from "react-qr-reader";
import ActionButton from "../_layout/ActionButton";
import Modal from "../_layout/Modal";
import SideBar from "../_layout/SideBar";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import StreetviewIcon from "@material-ui/icons/Streetview";
import CropFreeIcon from "@material-ui/icons/CropFree";

const Controls = props => {
  const sliderHelperRef = useRef();
  const containerRef = useRef();
  const fheight = useRef({
    height: null,
    movementY: null,
    previousTouchY: null
  });

  const sliderOnMouseDown = () => {
    fheight.current = {
      height: null,
      movementY: null,
      previousTouchY: null
    };
    const resize = e => {
      if (typeof e.movementY === "undefined") {
        fheight.current.movementY =
          e.touches[0].pageY -
          (fheight.current.previousTouchY || e.touches[0].pageY);
        fheight.current.previousTouchY = e.touches[0].pageY;
      } else {
        fheight.current.movementY = e.movementY;
      }
      fheight.current.height =
        containerRef.current.offsetHeight - fheight.current.movementY;
      containerRef.current.style.height = `${fheight.current.height}px`;
    };

    sliderHelperRef.current.style.height = "100%";
    window.addEventListener("mousemove", resize);
    window.addEventListener("touchmove", resize);
    const mouseup = () => {
      if (fheight.current.height < 200) {
        containerRef.current.classList.add("transition");
        if (fheight.current.movementY > 0) {
          fheight.current.height = 0;
        } else if (fheight.current.movementY < 0) {
          fheight.current.height = 200;
        }
      }
      containerRef.current.style.height = `${fheight.current.height}px`;

      setTimeout(() => {
        containerRef.current.classList.remove("transition");
      }, 500);
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("touchmove", resize);
      sliderHelperRef.current.style.height = "38px";
    };
    window.addEventListener("mouseup", mouseup);
    window.addEventListener("touchend", mouseup);
  };

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
            onMouseDown={sliderOnMouseDown}
            onTouchStart={sliderOnMouseDown}
            ref={elem => (sliderHelperRef.current = elem)}
          ></div>
          <div id="slider"></div>
          <div
            id="descriptive-data"
            dangerouslySetInnerHTML={{ __html: props.descriptiveData }}
          ></div>
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
