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
import * as THREE from "three";
import worldDataOne from "../../testFiles/worldOne.js";
import worldDataTwo from "../../testFiles/worldTwo.js";
const worlds = [worldDataOne, worldDataTwo];
const Controls = props => {
  const sliderHelperRef = useRef();
  const containerRef = useRef();
  const [modalData, setModalData] = useState(null);
  const [infoState, setInfoState] = useState({
    position: { x: 0, y: 0, z: 0 },
    heading: [0]
  });

  const fheight = useRef({
    height: null,
    movementY: null,
    previousTouchY: null,
    moved: false
  });

  const [showInfo, setShowInfo] = useState(false);

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
  React.useEffect(() => {
    if (typeof window.mergin_mode.controls.alphaOffset !== "undefined") {
      window.mergin_mode.controls.alphaOffset = -Math.PI / 2;
    }

    setInterval(() => {
      const { x, y, z } = window.mergin_mode.camera.position;
      const dir = new THREE.Vector3();
      const sph = new THREE.Spherical();
      window.mergin_mode.camera.getWorldDirection(dir);

      sph.setFromVector3(dir);
      let heading = (360 - THREE.Math.radToDeg(sph.theta) - 180).toFixed(0);
      if (heading == 360) {
        heading = 0;
      }
      setInfoState({
        position: {
          x: x.toFixed(2) + "m",
          y: z.toFixed(2) + "m",
          z: y.toFixed(2) + "m"
        },
        heading: heading + "deg"
      });
    }, 1000);
  }, []);
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
                    setModalData(
                      <QRModal
                        onClose={data => {
                          setModalData(null);
                          setInfoState({
                            ...infoState,
                            position: data.position,
                            heading: data.heading
                          });
                        }}
                      />
                    )
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
            },
            {
              icon: (
                <span
                  onClick={() => {
                    setShowInfo(true);
                  }}
                  id="shi"
                >
                  Show/Hide Info
                </span>
              ),
              name: "Show/Hide Info"
            }
          ]}
        />
        <div id="info-panel">
          <div className="info-group">
            <label>Position</label>
            <div>{JSON.stringify(infoState.position)}</div>
          </div>
          <div className="info-group">
            <label>Heading</label>
            <div>{infoState.heading}</div>
          </div>
        </div>

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
