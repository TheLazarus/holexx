import "../css/App.css";
import Map from "./Map";

function App() {
  return (
    <div className="App">
      <div className="app__main">
        <Map />
        <div className="app__potinfo">
          <h1>POTHOLE INFO</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
