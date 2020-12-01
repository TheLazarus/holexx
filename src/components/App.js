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
        city: pothole.data().city,
        country: pothole.data().country,
        state: pothole.data().state,
        pluscode: pothole.data().pluscode,
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
        <Map potholeMarkers={potholeMarkers} />
      </div>
    </div>
  );
}

export default App;
