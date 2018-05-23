import React from "react";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { StyledMapWrapper, StyledMap } from "./Map.styles";

const position = [51.505, -0.09];

const MapContainer = () => {
  return (
    <StyledMapWrapper>
      <StyledMap center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>
            <span>
              A pretty CSS3 popup.<br />Easily customizable.
            </span>
          </Popup>
        </Marker>
      </StyledMap>
    </StyledMapWrapper>
  );
};

export default MapContainer;
