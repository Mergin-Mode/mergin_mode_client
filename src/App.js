import React, { useRef,useState,useEffect,PropTypes } from 'react';
import './App.css';
import Webcam from "react-webcam";
import createWorld from "./helpers/createWorld.js";

window.mergin_mode = {
  modelLayer: [],
  vectors:[],
  plane:{},
  sky:{},
  mixers:[]
}
function App() {
  const webcamRef = useRef(null);
  const [cameraSettings,setCameraSettings] = useState(null);
  const [scale,setScale] = useState(1);
  const constraints = { video: { width: 1280, height: 720, facingMode: 'environment' } };
  const [elements, setElements] = useState({
    mixers:[], camera:{}, controls:{}, scene:{}, renderer:{},pointer:{}, partials:{},loaders:{},onWindowResize:()=>{}
  })
  const [position,setPosition] = useState({});
  const [rotation,setRotation] = useState({});

  useEffect(()=>{
    if (window.LinearAccelerationSensor){
      let acl = new window.LinearAccelerationSensor({frequency: 60});

      acl.addEventListener('reading', () => {
        setPosition({x:acl.x.toFixed(2),y:acl.y.toFixed(2),z:acl.z.toFixed(2)})
        console.log("Acceleration along the X-axis " + acl.x);
        console.log("Acceleration along the Y-axis " + acl.y);
        console.log("Acceleration along the Z-axis " + acl.z);
      });

      acl.start();
    }
    
    window.addEventListener("deviceorientation", function handleOrientation(event) {
      var absolute = event.absolute;
      var alpha    = event.alpha.toFixed(2);
      var beta     = event.beta.toFixed(2);
      var gamma    = event.gamma.toFixed(2);
      setRotation({x:beta,y:gamma,z:alpha})

      // Do stuff with the new orientation data
    }, true);
    navigator.mediaDevices.getUserMedia(constraints).then(response=>{
      const video = document.getElementById("video");
      video.srcObject = response;
      video.play();
      const settings = response.getTracks()[0].getSettings()
      setCameraSettings({...settings});
      let {mixers,camera,controls,scene,renderer,pointer,partials,loaders} = elements;
      const rendererContainer = document.getElementById("three-map");
      const newWorld = createWorld(camera,controls,scene,renderer,pointer,partials,loaders,rendererContainer,mixers);
    });

  },[])



  return (
    <div className="App">
			<div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}>
       <video id="video" style={{display:"none"}} autoplay playsinline></video>
        <div id="three-map" style={{
          position:"absolute",
          width:`100%`,
          height:`100%`,
        }}></div>
      </div>
      <div style={{position:"absolute",top: 0,left: 0}}>{"Accelerometer " + JSON.stringify(position)}</div>
      <div style={{position:"absolute",top: "20px",left: 0}}>{"Orientation " + JSON.stringify(rotation)}</div>
    </div>
  );
}

export default App;
