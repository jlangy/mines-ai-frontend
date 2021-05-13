import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getRiskIcon } from "../helpers";

// Leaflet Icons setup
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function LeafletMap({ mineInfo, center }) {
  return (
    <MapContainer
      center={center}
      zoom={12}
      scrollWheelZoom={false}
      style={{ minHeight: "700px" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeView 
        center={center}
        zoom={12}
      />

      {mineInfo.map((mineInfo) => {
        const { lat, long, risk, name, id } = mineInfo;
        return (
          <Marker position={[lat, long]} icon={getRiskIcon(risk)} key={id}>
            <Popup>
              Name: {name}
              <br />
              Risk Level: {risk}.
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
