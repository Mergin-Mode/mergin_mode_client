import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import QrReader from "react-qr-reader";
import readWorldData from "../../helpers/readWorldData";

export default props => {
  const [state, setState] = React.useState(true);

  const handleScan = data => {
    console.log(data);
    if (data) {
      if (state) {
        console.log("in");
        setState(false);
        (async function() {
          await readWorldData();
          props.onClose();
        })();
      }
      // const d = JSON.parse(data);
      // window.mergin_mode.camera.position.set(d.x, d.y, d.z);
      // window.mergin_mode.controls.alphaOffset = (d.heading / 180) * Math.PI;
      // window.mergin_mode.controls.update();
    }
  };
  const handleScanError = err => {
    console.error(err);
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 25
        }}
      >
        <i style={{ fontSize: 70 }} className="fas fa-qrcode"></i>
        <h2
          style={{
            marginLeft: 24,
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#606059",
            letterSpacing: 5
          }}
          id="simple-modal-title"
        >
          QR Code Scanner
        </h2>
      </div>
      <p id="simple-modal-description" style={{ flex: 1 }}>
        <div style={{ height: "calc(100% - 30px)", position: "relative" }}>
          <div className="scan-tip">
            <QrReader
              delay={300}
              onError={handleScanError}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div
          style={{
            textAlign: "center"
          }}
        >
          <Button
            style={{
              fontSize: "18px",
              // background: "#2f72e8",
              color: "#313129",
              fontWeight: 600
            }}
            onClick={props.onClose}
          >
            Close
          </Button>
        </div>
      </p>
    </React.Fragment>
  );
};
