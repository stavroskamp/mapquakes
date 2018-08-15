import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setselectedEarthquakeIdAction,
  setselectedEarthquakeIdToNullAction,
  getEarthquakesAction,
  setZoomLevelOfMapAction,
  toggleLegendOpenAction
} from "../../actions";
import { MarkerPopup, Button } from "../../components";
import { MOBILE_WIDTH_MAIN } from "../../constants";
import { Marker, Popup, TileLayer } from "react-leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { StyledMapWrapper, StyledMap } from "./MapArea.styles";
import blueMarker from "../../images/blue-marker-512.png";
import yellowMarker from "../../images/yellow-marker-512.png";
import { Icon } from "leaflet";
import { scrollIntoView } from "../../libs/helpers";
import withSizes from "react-sizes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const mapSizesToProps = ({ width }) => ({
  isMobile: width < MOBILE_WIDTH_MAIN
});

const chooseMarker = type => {
  const m = type === "blue" ? blueMarker : yellowMarker;

  return new Icon({
    iconUrl: m,
    iconSize: [32, 32],
    shadowSize: [32, 32],
    shadowUrl: m,
    popupAnchor: [0, -19] // point from which the popup should open relative to the iconAnchor
  });
};

class MapArea extends React.Component {
  static propTypes = {
    receivedEarthquakes: PropTypes.object,
    setselectedEarthquakeId: PropTypes.func,
    setselectedEarthquakeIdToNull: PropTypes.func,
    getEarthquakes: PropTypes.func,
    centerOfMap: PropTypes.array,
    zoomLevelOfMap: PropTypes.number,
    setZoomLevelOfMap: PropTypes.func,
    selectedEarthquakeId: PropTypes.string,
    isMobile: PropTypes.bool,
    toggleLegendOpen: PropTypes.func,
    boundsOfMap: PropTypes.array
  };

  componentDidMount() {
    this.props.getEarthquakes({ hasMinMagnitude: false }, false);
  }

  onMarkerClick = earthquake => {
    // Set the selected marker id
    this.props.setselectedEarthquakeId(earthquake.id);
    const selector = ".quake-list-" + earthquake.id;
    scrollIntoView(selector);
  };

  handleMapClick = () => {
    // Set the selected marker to null
    this.props.setselectedEarthquakeIdToNull();
  };

  handleToggleLegendOpen = () => {
    this.props.toggleLegendOpen();
  };

  render() {
    const earthquakes = this.props.receivedEarthquakes;

    return (
      <StyledMapWrapper isMobile={this.props.isMobile}>
        {this.props.isMobile ? (
          <Button
            onClick={this.handleToggleLegendOpen}
            yellow="true"
            openlegendbutton="true"
            menustyle="true"
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        ) : null}
        <StyledMap
          onClick={this.handleMapClick}
          center={this.props.centerOfMap}
          zoom={this.props.zoomLevelOfMap}
          bounds={this.props.boundsOfMap}
          onResize={e => {
            this.props.setZoomLevelOfMap(e.target._zoom);
          }}
        >
          {/* does this works correctly at production? */}
          {process.env.NODE_ENV === "development" ? (
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          ) : (
            <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/outdoors-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3RhdnJvc2thIiwiYSI6ImNqa29ncWtyYjJvdHAzcXFoazVjMG5qZ2wifQ.HrNGNvKmCTD_a6QKQdt1Rg" />
          )}
          <MarkerClusterGroup>
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
                      icon={
                        earthquake.id === this.props.selectedEarthquakeId
                          ? chooseMarker("yellow")
                          : chooseMarker("blue")
                      }
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
          </MarkerClusterGroup>
        </StyledMap>
      </StyledMapWrapper>
    );
  }
}

const mapStateToProps = state => {
  const {
    receivedEarthquakes,
    centerOfMap,
    zoomLevelOfMap,
    selectedEarthquakeId,
    boundsOfMap
  } = state;

  return {
    receivedEarthquakes,
    centerOfMap,
    zoomLevelOfMap,
    selectedEarthquakeId,
    boundsOfMap
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setselectedEarthquakeId: earthquake =>
      dispatch(setselectedEarthquakeIdAction(earthquake)),
    setselectedEarthquakeIdToNull: () =>
      dispatch(setselectedEarthquakeIdToNullAction()),
    getEarthquakes: params => dispatch(getEarthquakesAction(params)),
    setZoomLevelOfMap: zoomLevel =>
      dispatch(setZoomLevelOfMapAction(zoomLevel)),
    toggleLegendOpen: () => dispatch(toggleLegendOpenAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSizes(mapSizesToProps)(MapArea));
