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

function calcPosition(s=0,u=0){
  if (u==0) return Number(s);
  return Number(s)+Number(u)*1/60;
}

function calcVelocity(u=0,ang=0,a=0){
  if(a==0) return 0;
  return Number(u)+(Math.cos(Number(ang))*Number(a))*1/60;
}
function App() {
  const webcamRef = useRef(null);
  const [cameraSettings,setCameraSettings] = useState(null);
  const constraints = { video: { width: 1280, height: 720, facingMode: 'environment' } };
  const [elements, setElements] = useState({
    mixers:[], camera:{}, controls:{}, scene:{}, renderer:{},pointer:{}, partials:{},loaders:{},onWindowResize:()=>{}
  })
  const [rotation,setRotation] = useState({x:0,y:0,z:0});
  const [velocity,setVelocity] = useState({x:0,y:0,z:0});
  const [position,setPosition] = useState({x:0,y:0,z:0});
  const [acceleration,setACL] = useState({x:0,y:0,z:0});
  let pos = useRef(position);
  let vel = useRef(velocity);
  let rot = useRef(rotation);

  useEffect(()=>{

    // if (window.LinearAccelerationSensor){
    //   let acl = new window.LinearAccelerationSensor({frequency: 60});
    //   window.addEventListener("deviceorientation", function handleOrientation(event) {
    //     var absolute = event.absolute;
    //     var alpha    = Number(event.alpha || 0);
    //     var beta     = Number(event.beta || 0);
    //     var gamma    = Number(event.gamma|| 0);
    //     rot.current = {x:beta,y:gamma,z:alpha};
    //     setRotation({x:rot.current.x.toFixed(2),y:rot.current.y.toFixed(2),z:rot.current.z.toFixed(2)})

    //     // Do stuff with the new orientation data
    //   }, true);

      navigator.mediaDevices.getUserMedia(constraints).then(response=>{
        const video = document.getElementById("video");
        video.srcObject = response;
        video.play();
        const settings = response.getTracks()[0].getSettings()
        setCameraSettings({...settings});
        let {mixers,camera,controls,scene,renderer,pointer,partials,loaders} = elements;
        const rendererContainer = document.getElementById("three-map");
        const newWorld = createWorld(camera,controls,scene,renderer,pointer,partials,loaders,rendererContainer,mixers);

        navigator.geolocation.getCurrentPosition(function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        setPosition({lat:latitude,long:longitude})
  }, ()=>{});
      });

    //   acl.addEventListener('reading', () => {
    //     vel.current = {
    //       x:calcVelocity(vel.current.x,rot.current.x,acl.x),
    //       y:calcVelocity(vel.current.y,rot.current.y,acl.y),
    //       z:calcVelocity(vel.current.z,rot.current.z,acl.z)
    //     }
    //     setVelocity({x:vel.current.x.toFixed(2),y:vel.current.y.toFixed(2),z:vel.current.z.toFixed(2)})
    //     pos.current = {
    //       x:calcPosition(pos.current.x,vel.current.x),
    //       y:calcPosition(pos.current.y,vel.current.y),
    //       z:calcPosition(pos.current.z,vel.current.z),
    //     }
    //     setPosition({x:pos.current.x.toFixed(2),y:pos.current.y.toFixed(2),z:pos.current.z.toFixed(2)})
    //     setACL({x:acl.x,y:acl.y,z:acl.z})
    //   });

    //   acl.start();
    // }
    
    

  },[constraints, elements])



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
      {/*<div style={{position:"absolute",top: 0,left: 0,background:"white"}}>{"Rotation " + JSON.stringify(rotation)}</div>
      <div style={{position:"absolute",top: "20px",left: 0,background:"white"}}>{"Velocity " + JSON.stringify(velocity)}</div>
      <div style={{position:"absolute",top: "60px",left: 0,background:"white"}}>{"ACL " + JSON.stringify(acceleration)}</div>*/}
      <div style={{position:"absolute",top: "40px",left: 0,background:"white"}}>{"Position " + JSON.stringify(position)}</div>
    </div>
  );
}

export default App;
