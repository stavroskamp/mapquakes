import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { StyledMapWrapper, StyledMap } from "./Map.styles";

const position = [51.505, -0.09];

class MapContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    receivedEarthquakes: PropTypes.object
  };

  render() {
    const earthquakes = this.props.receivedEarthquakes;

    return (
      <StyledMapWrapper>
        <StyledMap center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {earthquakes
            ? earthquakes.features.map(earthquake => {
                const xy = [
                  earthquake.geometry.coordinates[1],
                  earthquake.geometry.coordinates[0]
                ];
                return (
                  <Marker key={earthquake.id} position={xy}>
                    {/* TODO: Change it with the card component  */}
                    <Popup>
                      <span>{earthquake.properties.place}</span>
                    </Popup>
                  </Marker>
                );
              })
            : null}
        </StyledMap>
      </StyledMapWrapper>
    );
  }
}

const mapStateToProps = state => {
  const { receivedEarthquakes } = state;

  return { receivedEarthquakes };
};

export default connect(mapStateToProps)(MapContainer);
