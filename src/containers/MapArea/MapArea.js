import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setSelectedEarthquakeAction,
  setSelectedEarthquakeToNullAction
} from "../../actions";
import { MarkerPopup } from "../../components";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { StyledMapWrapper, StyledMap } from "./MapArea.styles";

const position = [36.6547, 140.9389];

class MapArea extends React.Component {
  static propTypes = {
    receivedEarthquakes: PropTypes.object,
    setSelectedEarthquake: PropTypes.func,
    setSelectedEarthquakeToNull: PropTypes.func
  };

  onMarkerClick = earthquake => {
    // Set the selected marker id
    this.props.setSelectedEarthquake(earthquake);
  };

  handleMapClick = () => {
    // Set the selected marker to null
    this.props.setSelectedEarthquakeToNull();
  };

  render() {
    const earthquakes = this.props.receivedEarthquakes;

    return (
      <StyledMapWrapper>
        <StyledMap onClick={this.handleMapClick} center={position} zoom={6}>
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
                  <Marker
                    key={earthquake.id}
                    position={xy}
                    onClick={() => {
                      this.onMarkerClick(earthquake);
                    }}
                  >
                    <Popup>
                      <MarkerPopup info={earthquake} />
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

const mapDispatchToProps = dispatch => {
  return {
    setSelectedEarthquake: earthquake =>
      dispatch(setSelectedEarthquakeAction(earthquake)),
    setSelectedEarthquakeToNull: () =>
      dispatch(setSelectedEarthquakeToNullAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapArea);
