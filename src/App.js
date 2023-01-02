import React, { useState } from "react";

import './App.css';
import firstImage from "./assets/imageOne.jpg";

function App() {
  const [yCord, setYCord] = useState();
  const [xCord, setXCord] = useState();
  const [state, setState] = useState(false);
  const zoomPicture = (e) => {
   const x = e.clientX - e.target.offsetLeft;
   const y = e.clientY - e.target.offsetTop;
   setState(true);
   setYCord(y);
   setXCord(x)
  }

  const restore= () => {
    setState(false)
  }

  const inititalEffect = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    transform: 'scale(1)',
    transformOrigin: "top",
    cursor: 'pointer'
  }
  const hoveredEffect = {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        transform: 'scale(2)',
        transformOrigin: `${xCord}px ${yCord}px`,
        cursor: 'pointer'
   }


  return (
    <div className="App">
      <div className="container" onMouseMove={zoomPicture} onMouseLeave={restore}>
        <img 
        style={state === true? hoveredEffect: inititalEffect}
        src={firstImage} alt="memories" id="imag"/>
      </div>
    </div>
  );
}

export default App;
