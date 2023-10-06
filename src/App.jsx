import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./components/MapView";
import ListView from "./components/ListView";
import { useDispatch } from "react-redux";
import { getFlightData } from "./app/flightState";

function App() {
  const [showMapView, setShowMapView] = useState(true);
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(getFlightData())
  },[])
  return (
    < >
      <Header />
      <div className="view-buttons">
        <button
          className={`${showMapView && "active"}`}
          onClick={() => setShowMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={`${!showMapView && "active"}`}
          onClick={() => setShowMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>
      {showMapView ? <MapView /> : <ListView />}
    </>
  );
}

export default App;
