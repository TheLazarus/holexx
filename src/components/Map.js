import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import Pothole from "../images/pothole.svg";

import "../css/Map.css";

function Map(props) {
  console.log(props);
  let potholeMarkers = props.potholeMarkers;
  const [viewport, setViewport] = React.useState({
    latitude: 30.91011,
    longitude: 77.096687,
    width: "50vw",
    height: "100vh",
    zoom: 8,
  });

  if (potholeMarkers.length === 0) {
    return (
      <div className="app__map">
        <h1>MAP</h1>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoibGF6enp6emFydXMiLCJhIjoiY2tob2YyajlwMDAzcDJyb3M1ajJmYWd3bSJ9.9Y3tZjiKoMD2slDsdLRi_Q"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        ></ReactMapGL>
      </div>
    );
  } else {
    return (
      <div className="app__map">
        <h1>MAP</h1>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoibGF6enp6emFydXMiLCJhIjoiY2tob2YyajlwMDAzcDJyb3M1ajJmYWd3bSJ9.9Y3tZjiKoMD2slDsdLRi_Q"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          {potholeMarkers.map((marker) => (
            <Marker
              key={marker.id}
              latitude={marker.latitude}
              longitude={marker.longitude}
            >
              <img src={Pothole} height="20px" width="20px" alt="Pothole" />
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    );
  }
}
export default Map;
