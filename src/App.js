import React, { useRef,useState,useEffect } from 'react';
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
  useEffect(()=>{
   
    navigator.mediaDevices.getUserMedia(constraints).then(response=>{
      const video = document.getElementById("video");
      video.srcObject = response;
      video.play();
      const settings = response.getTracks()[0].getSettings()
      setCameraSettings({...settings});
      // window.addEventListener('resize',()=> {
      //   const windowAspectRatio = window.innerWidth/window.innerHeight;
      //   if( windowAspectRatio < settings.aspectRatio ){
      //       setScale(window.innerWidth/settings.width)
      //       // setCameraSettings({
      //       //   ...cameraSettings,
      //       //   width:window.innerWidth,
      //       //   height:window.innerWidth/settings.width * settings.height
      //       // })
      //   }else {
      //       setScale(window.innerHeight/settings.height)
      //       // setCameraSettings({
      //       //   ...cameraSettings,
      //       //   height:window.innerHeight,
      //       //   width:window.innerHeight/settings.height * settings.width
      //       // })
      //   }
      // });
      // window.dispatchEvent( new Event('resize') );
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
    </div>
  );
}

export default App;
