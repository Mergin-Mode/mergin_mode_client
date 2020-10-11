import React, { useRef,useState,useEffect } from 'react';
import './App.css';
import createWorld from "./helpers/createWorld.js";
import QrReader from 'react-qr-reader';
import ActionButton from './layout/ActionButton';
import Modal from './layout/Modal';

import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';

import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import SaveIcon from '@material-ui/icons/Save';

import PrintIcon from '@material-ui/icons/Print';

import ShareIcon from '@material-ui/icons/Share';

import FavoriteIcon from '@material-ui/icons/Favorite';
import CropFreeIcon from '@material-ui/icons/CropFree';
import StreetviewIcon from '@material-ui/icons/Streetview';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b34f0b",
    },
    secondary: {
      main: "#323228",
    },
  },
});
window.mergin_mode = {
  modelLayer: [],
  vectors:[],
  plane:{},
  sky:{},
  mixers:[],
  camera:{},
  controls:{},
  scene:{},
  renderer:{},
  pointer:{},
  partials:{},
  loaders:{},
  onWindowResize:()=>{}
}

function App() {
  
  const [position,setPosition] = useState({latitude:0,longitude:0});
  const [action,setAction] = useState("immerse");
  const [modalData,setModalData] = useState(null);
  const mainRef = useRef(null);
  const appRef = useRef(null);
  const pos = useRef(position);
  const qrScanner = useRef({});
  const handleScan = data => {
    if (data) {
      setModalData(data)
    }
  }
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      appRef.current.requestFullscreen().catch(err => {
        modalData(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }
  const handleScanError = err => {
    console.error(err)
  }
  useEffect(()=>{
    if(!navigator.geolocation?.getCurrentPosition || !navigator.mediaDevices?.getUserMedia){
      return false;
    }
    const constraints = { video: { width: 1280, height: 720, facingMode: 'environment' } };
    
    navigator.geolocation.getCurrentPosition(function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        pos.current = {latitude,longitude};
        setPosition(pos.current);
     },()=>{});

    navigator.mediaDevices.getUserMedia(constraints).then(response=>{

        const video = document.getElementById("video");
        video.srcObject = response;
        video.play();
      });

    let {mixers,camera,controls,scene,renderer,pointer,partials,loaders} = window.mergin_mode;
    const rendererContainer = document.getElementById("three-map");
    const newWorld = createWorld(camera,controls,scene,renderer,pointer,partials,loaders,rendererContainer,mixers);
    window.mergin_mode = {...window.mergin_mode,...newWorld}
  },[])

  useEffect(()=>{
    const check = action === "immerse"
    window.mergin_mode.scene.visible = check;
    window.mergin_mode.scene.needsUpdate = true;
    mainRef.current.style.display = check ? "block" : "none" 
  },[action])

  return (
    <ThemeProvider theme={theme}>

    <div className="App" ref = {elem=>(appRef.current = elem)}>
      <div id="main" ref = {elem=>(mainRef.current = elem)}>
      <img id="logo" width={120} height={120*469/640} src={process.env.PUBLIC_URL + '/logo-transparent.png'} />
        <video id="video" style={{display:"none"}} autoPlay playsInline></video>
        <div id="three-map" style={{
          position:"absolute",
          width:`100%`,
          height:`100%`,
        }}></div>
      </div>
    <ActionButton actions={[
      { icon: <StreetviewIcon color="secondary" onClick={()=>setAction("immerse")}/>, name: 'Immerse' },
      { icon: <CropFreeIcon color="secondary" onClick={()=>setAction("scan")}/>, name: 'QR Scan' },
      { icon: <FullscreenIcon color="secondary" onClick={()=>toggleFullscreen()}/>, name: 'Full Screen' },
    ]}/>
      {action === "scan" && (
        <div className="scan-tip">
          <QrReader
            delay={300}
            onError={handleScanError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
          <p>{!modalData ? "Scanning..." : ""}</p>
        </div>
              )}
      {modalData && <Modal data={modalData} onClose={()=>{
        setModalData(null);
        setAction("immerse");
      }}/>}
    </div>
    </ThemeProvider>
  );
}

export default App;
