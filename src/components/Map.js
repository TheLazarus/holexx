import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import "../css/Map.css";


function Map() {
 
  const [viewport, setViewport] = React.useState({
    latitude: 30.91011,
    longitude: 77.096687,
    width: "50vw",
    height: "100vh",
    zoom: 8,
  });

 
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
        <Marker latitude={30.91011} longitude={77.096687}>
          <div>SKATE</div>
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default Map;
