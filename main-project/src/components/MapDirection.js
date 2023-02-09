import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "../../src/App.css";
import LeafletGeocoder from "./LeafletGeocoder";

import LeafletRoutingMachine from "./LeafletRoutingMachine";
import marker from "./marker-icon.png";
import { useEffect } from "react";

function MapDirection(props) {
  const position = [27.6887, 85.2898];

  // useEffect(() => {
    
  //   console.log("marker ", marker);
  //   return () => {
      
  //   }
  // }, [])
  
const locationName=props.location;
const destValue=props.destination;
console.log(locationName)
  return (
    <div className="App">
     
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         {/* <LeafletGeocoder /> */}
        <LeafletRoutingMachine location={locationName}  destination={destValue}/>
      </MapContainer>
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl:marker,
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default MapDirection;
