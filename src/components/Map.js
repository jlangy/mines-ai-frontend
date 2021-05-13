import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import { getRiskIcon } from '../helpers';
import {getAllMinesData} from '../services/ai-service';

// Leaflet Icons setup
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const victoriaCoords = [48.407326, -123.329773]

export default function LeafletMap() {
  const [markers, setMarkers] = useState([])
  useEffect(() => {
    getAllMinesData()
      .then(result => {
        console.log(result)
        setMarkers(result);
      })
  }, [])
  return (
      <MapContainer center={victoriaCoords} zoom={12} scrollWheelZoom={false} style={{minHeight: '700px'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(marker => {
          const {lat, long, risk, name, id} = marker
          return (
            <Marker position={[lat, long]} icon={getRiskIcon(risk)} key={id}>
              <Popup>
                Name: {name} 
                <br /> 
                Risk Level: {risk}.
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
  );
}
