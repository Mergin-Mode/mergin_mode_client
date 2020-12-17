import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import ActionButton from "../_layout/ActionButton";
import Modal from "../_layout/Modal";
import WorldItem from "../_layout/WorldItem";
import SideBar from "../_layout/SideBar";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import StreetviewIcon from "@material-ui/icons/Streetview";
import CropFreeIcon from "@material-ui/icons/CropFree";
import QRModal from "../_layout/QRModal";
import Button from "@material-ui/core/Button";
import { DescriptiveDataListener } from "../../helpers/listeners";

import worldDataOne from "../../testFiles/worldOne.js";
import worldDataTwo from "../../testFiles/worldTwo.js";
const worlds = [worldDataOne, worldDataTwo];
const Controls = props => {
  const sliderHelperRef = useRef();
  const containerRef = useRef();
  const [modalData, setModalData] = useState(null);
  const fheight = useRef({
    height: null,
    movementY: null,
    previousTouchY: null,
    moved: false
  });

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      window.document.body.requestFullscreen().catch(err => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div id="controls">
      <img
        id="logo"
        width={120}
        height={(120 * 469) / 640}
        src={process.env.PUBLIC_URL + "/logo-transparent.png"}
      />

      <div id="actions-menu">
        <ActionButton
          actions={[
            {
              icon: (
                <div
                  onClick={() =>
                    setModalData(<QRModal onClose={() => setModalData(null)} />)
                  }
                >
                  <i style={{ fontSize: 18 }} className="fas fa-qrcode"></i>
                </div>
              ),
              name: "QR Scan"
            },
            {
              icon: <CropFreeIcon onClick={() => toggleFullscreen()} />,
              name: "Full Screen"
            },
            {
              icon: (
                <span
                  onClick={() => {
                    window.mergin_mode.realities.virtual();
                  }}
                >
                  VR
                </span>
              ),
              name: "Virtual Reality"
            },
            {
              icon: (
                <span
                  onClick={() => {
                    window.mergin_mode.realities.mixed();
                  }}
                >
                  MR
                </span>
              ),
              name: "Mixed Reality"
            },
            {
              icon: (
                <span
                  onClick={() => {
                    window.mergin_mode.realities.mixed();
                  }}
                  id="vrh"
                >
                  VRH
                </span>
              ),
              name: "VR Headset"
            },
            {
              icon: (
                <span
                  onClick={() => {
                    window.mergin_mode.realities.mixed();
                  }}
                  id="mrh"
                >
                  MRH
                </span>
              ),
              name: "MR Headset"
            }
          ]}
        />
        <div id="available-worlds">
          {worlds.map(w => (
            <WorldItem key={`p-${w.id}`} item={w} />
          ))}
        </div>

        <div
          id="descriptive-data-container"
          ref={elem => (containerRef.current = elem)}
        >
          <Button
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
          ></Button>
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
        {modalData && (
          <Modal
            data={modalData}
            onClose={() => {
              setModalData(null);
            }}
          />
        )}
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
