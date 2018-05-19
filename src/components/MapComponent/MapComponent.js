import React from "react";
import Leaflet from "leaflet";
import styled from "styled-components";
import { Map as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";

Leaflet.Icon.Default.imagePath = "../../../node_modules/leaflet/dist/images/";

const StyledMapWrapper = styled.div`
  height: 100%;
  width: 74%;
  background-color: skyblue;
`;

const StyledMap = styled(LeafletMap)`
  height: 100%;
`;

const position = [51.505, -0.09];

const MapComponent = () => {
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

export default MapComponent;
