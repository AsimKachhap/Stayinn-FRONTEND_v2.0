import React from "react";
import { MapContainer, TileLayer, UseMap, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer center={[28.6304, 77.2177]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.6304, 77.2177]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
