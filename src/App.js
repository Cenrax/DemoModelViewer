import React from "react";
import "./styles.css";
import "@google/model-viewer/dist/model-viewer";
export default function App() {
  return (
    <div id="card">
      <model-viewer
        src="/Jeep.glb"
        ios-src=""
        poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
        alt="A 3D model of an Jeep"
        shadow-intensity="5"
        camera-controls
        auto-rotate
        ar
        zoom
      ></model-viewer>
    </div>
  );
}
