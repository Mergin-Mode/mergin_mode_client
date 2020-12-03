import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import World from "./world";
import Controls from "./controls";
import createWorld from "../helpers/createWorld.js";
import world from "../testFiles/worldOne";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b34f0b"
    },
    secondary: {
      main: "#323228"
    }
  }
});

function App() {
  // const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  // const [action, setAction] = useState("immerse");
  // const [modalData, setModalData] = useState(null);
  // const [sideBarData, setSideBarData] = useState(null);
  // const mainRef = useRef(null);
  // const appRef = useRef(null);
  // const pos = useRef(position);
  // const qrScanner = useRef({});

  // useEffect(() => {

  //   // navigator.geolocation.getCurrentPosition(
  //   //   function success(position) {
  //   //     const latitude = position.coords.latitude;
  //   //     const longitude = position.coords.longitude;
  //   //     pos.current = { latitude, longitude };
  //   //     setPosition(pos.current);
  //   //   },
  //   //   () => {}
  //   // );

  // }, []);

  // useEffect(() => {
  //   const check = action === "immerse";
  //   window.mergin_mode.scene.visible = check;
  //   window.mergin_mode.scene.needsUpdate = true;
  //   mainRef.current.style.display = check ? "block" : "none";
  // }, [action]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <World context={world.content} />
        <Controls />
      </div>
    </ThemeProvider>
  );
}

export default App;
