import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "../src/components/App";
import "mapbox-gl/dist/mapbox-gl.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
