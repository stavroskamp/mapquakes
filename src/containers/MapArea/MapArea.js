import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setselectedEarthquakeIdAction,
  setselectedEarthquakeIdToNullAction,
  getEarthquakesAction,
  setZoomLevelOfMapAction
} from "../../actions";
import { MarkerPopup } from "../../components";
import { Marker, Popup, TileLayer } from "react-leaflet";
import { StyledMapWrapper, StyledMap } from "./MapArea.styles";

class MapArea extends React.Component {
  static propTypes = {
    receivedEarthquakes: PropTypes.object,
    setselectedEarthquakeId: PropTypes.func,
    setselectedEarthquakeIdToNull: PropTypes.func,
    getEarthquakes: PropTypes.func,
    centerOfMap: PropTypes.array,
    zoomLevelOfMap: PropTypes.number,
    setZoomLevelOfMap: PropTypes.func
  };

  componentDidMount() {
    this.props.getEarthquakes();
  }

  onMarkerClick = earthquake => {
    // Set the selected marker id
    this.props.setselectedEarthquakeId(earthquake.id);
  };

  handleMapClick = () => {
    // Set the selected marker to null
    this.props.setselectedEarthquakeIdToNull();
  };

  render() {
    const earthquakes = this.props.receivedEarthquakes;

    return (
      <StyledMapWrapper>
        <StyledMap
          onClick={this.handleMapClick}
          center={this.props.centerOfMap}
          zoom={this.props.zoomLevelOfMap}
          onZoomend={e => this.props.setZoomLevelOfMap(e.target._zoom)}
        >
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
  const { receivedEarthquakes, centerOfMap, zoomLevelOfMap } = state;

  return { receivedEarthquakes, centerOfMap, zoomLevelOfMap };
};

const mapDispatchToProps = dispatch => {
  return {
    setselectedEarthquakeId: earthquake =>
      dispatch(setselectedEarthquakeIdAction(earthquake)),
    setselectedEarthquakeIdToNull: () =>
      dispatch(setselectedEarthquakeIdToNullAction()),
    getEarthquakes: () => dispatch(getEarthquakesAction()),
    setZoomLevelOfMap: zoomLevel => dispatch(setZoomLevelOfMapAction(zoomLevel))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapArea);
