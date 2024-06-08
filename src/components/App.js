import React from "react";
import "../css/App.css";
import Map from "./Map";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [potholeMarkers, setPotholeMarkers] = React.useState([]);

  React.useEffect(() => {
    async function getMarkersData() {
      let markers = [];
      const querySnapshot = await getDocs(collection(db, "potholes"));
      querySnapshot.forEach((doc) => {
        const { id } = doc || {};
        const { latitude, longitude, city, country, state, pluscode } =
          doc.data() || {};
        markers.push({
          id,
          latitude,
          longitude,
          city,
          country,
          state,
          pluscode,
        });
      });
      return markers;
    }

    async function getMarkers() {
      const markers = await getMarkersData();
      setPotholeMarkers(markers);
    }

    getMarkers();
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
