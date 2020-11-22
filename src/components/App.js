import React from "react";
import "../css/App.css";
import Map from "./Map";
import db from "./firebase";

function getMarkers() {
  let potholeList = [];
  db.collection("potholes").onSnapshot((potholes) => {
    potholes.forEach((pothole) => {
      potholeList.push({
        id: pothole.id,
        latitude: pothole.data().latitude,
        longitude: pothole.data().longitude,
      });
    });
  });
  return potholeList;
}

function App() {
  const [potholeMarkers, setPotholeMarkers] = React.useState([]);
  React.useEffect(() => {
    setPotholeMarkers(getMarkers());
  }, []);

  return (
    <div className="App">
      <div className="app__main">
        <Map markers={potholeMarkers} />
        <div className="app__potinfo">
          <h1>POTHOLE INFO</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
