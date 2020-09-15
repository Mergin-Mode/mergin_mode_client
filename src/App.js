import React from 'react';
import './App.css';
import Webcam from "react-webcam";

function App() {
  const webcamRef = React.useRef(null);
const videoConstraints = {
      facingMode: "environment"
    };
  return (
    <div className="App">
		<div style={{width:"100%",height:"100%",background:"red"}}>
			<Webcam 
				height={window.innerHeight}
        		width={window.innerWidth}
        		ref={webcamRef}
        		videoConstraints={videoConstraints}
			/>
		</div>      
    </div>
  );
}

export default App;
