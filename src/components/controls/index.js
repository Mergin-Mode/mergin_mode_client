import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import ActionButton from "../_layout/ActionButton";
import Modal from "../_layout/Modal";
import WorldItem from "../_layout/WorldItem";
import SideBar from "../_layout/SideBar";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import StreetviewIcon from "@material-ui/icons/Streetview";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import CropFreeIcon from "@material-ui/icons/CropFree";
import QRModal from "../_layout/QRModal";
import Button from "@material-ui/core/Button";
import { DescriptiveDataListener } from "../../helpers/listeners";
import * as THREE from "three";
import { fromLonLat } from "ol/proj.js";

const Controls = props => {
  const sliderHelperRef = useRef();
  const containerRef = useRef();
  const [state, setState] = useState({ geolocation: false });
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

  const [showInfo, setShowInfo] = useState(true);

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

  const worldActions =
    window.mergin_mode.currentWorldId !== 0 &&
    window.mergin_mode.worlds.filter(
      world => window.mergin_mode.currentWorldId === world.id
    )[0]?.actions;
  React.useEffect(() => {
    if (state.geolocation) {
      let id, target, options;

      function success(position) {
        if (!window.mergin_mode.camera.position) return false;
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const newPos = fromLonLat([latitude, longitude, 0]);
        const cameraX = Number(
          (newPos[0] - window.mergin_mode.center[0]).toFixed(4)
        );
        const cameraZ = Number(window.mergin_mode.camera.position.y.toFixed(4));
        const cameraY = Number(
          (newPos[1] - window.mergin_mode.center[2]).toFixed(4)
        );
        if (Math.abs(cameraX) > 1000 || Math.abs(cameraY) > 1000) {
          const distance = Math.sqrt(
            Math.pow(cameraX, 2) + Math.pow(cameraY, 2)
          );
          alert(
            `Your location is to far from the virtual world. You are ${distance.toFixed(
              2
            )} meter far away.`
          );
          setState({ ...state, geolocation: false });
          navigator.geolocation.clearWatch(id);
          return true;
        }
        window.mergin_mode.camera.position.set(cameraX, cameraZ, cameraY);
      }

      function error(err) {
        console.warn("ERROR(" + err.code + "): " + err.message);
      }

      target = {
        latitude: 0,
        longitude: 0
      };

      options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      };

      id = navigator.geolocation.watchPosition(success, error, options);
    }
  }, [state.geolocation]);
  React.useEffect(() => {
    // if (typeof window.mergin_mode.controls.alphaOffset !== "undefined") {
    //   window.mergin_mode.controls.alphaOffset = -Math.PI / 2;
    // }

    setInterval(() => {
      if (!window.mergin_mode.camera.position) return false;
      const { x, y, z } = window.mergin_mode.camera.position;
      const dir = new THREE.Vector3();
      const sph = new THREE.Spherical();
      window.mergin_mode.camera.getWorldDirection(dir);

      sph.setFromVector3(dir);
      let heading = (360 - THREE.Math.radToDeg(sph.theta) - 180).toFixed(0);
      if (heading == 360) {
        heading = 0;
      }
      const [cx, cy, cz] = window.mergin_mode.center;
      setInfoState({
        position: {
          x: (cx + x).toFixed(2) + "m",
          y: (cz + z).toFixed(2) + "m",
          z: (cy + y).toFixed(2) + "m"
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
                    setShowInfo(!showInfo);
                  }}
                  id="shi"
                >
                  <i className="fas fa-info-circle"></i>
                </span>
              ),
              name: "Show/Hide Info"
            },
            {
              icon: (
                <span
                  onClick={() => {
                    setState({ ...state, geolocation: !state.geolocation });
                  }}
                  id="geolocation"
                >
                  <GpsFixedIcon />
                </span>
              ),
              name: "Geolocate"
            }
          ]}
        />
        {showInfo && (
          <div id="info-panel">
            <div className="info-group">
              <label>Position</label>
              <div>{`${infoState.position.x},${infoState.position.y},${infoState.position.z}`}</div>
            </div>
            <div className="info-group">
              <label>Heading</label>
              <div>{infoState.heading}</div>
            </div>
          </div>
        )}
        <div id="available-worlds">
          <WorldItem item={window.mergin_mode.worlds} />
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
          {worldActions && (
            <div className="world-actions">
              {worldActions.map(action => (
                <div
                  key={action.name}
                  className="world-action"
                  onClick={action.run}
                >
                  {action.name}
                </div>
              ))}
            </div>
          )}
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
