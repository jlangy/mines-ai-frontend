import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { Grid } from "semantic-ui-react";

const swapCoords = (coords) =>
  coords.map((coordPair) => [coordPair[1], coordPair[0]]);

export default function LeafletMap({}) {
  return (
      <MapContainer center={[48.407326, -123.329773]} zoom={12} scrollWheelZoom={false} style={{minHeight: '700px'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
}
