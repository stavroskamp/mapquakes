import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
import { StyledMarkerPopup } from "./MarkerPopup.styles";

const MarkerPopup = props => {
  const { info } = props;
  const { properties, geometry } = info;
  return (
    <StyledMarkerPopup>
      <h6>{properties.title}</h6>
      <Table striped>
        <tbody>
          <tr>
            <th scope="row">Time:</th>
            <td>
              {moment(properties.time).format("MMMM Do YYYY, h:mm:ss a")}
              {" (UTC)"}
            </td>
          </tr>
          <tr>
            <th scope="row">Magnitude:</th>
            <td>
              {properties.mag} {properties.magType}
            </td>
          </tr>
          <tr>
            <th scope="row">Longitude:</th>
            <td>{geometry.coordinates[0]} degrees</td>
          </tr>
          <tr>
            <th scope="row">Latitude:</th>
            <td>{geometry.coordinates[1]} degrees</td>
          </tr>
          <tr>
            <th scope="row">Depth:</th>
            <td>{geometry.coordinates[2]} km</td>
          </tr>
          <tr>
            <th scope="row">Tsunami Warning:</th>
            <td>{properties.tsunami}</td>
          </tr>
        </tbody>
      </Table>
      <a target="_blank" rel="noopener noreferrer" href={properties.url}>
        More info here
      </a>
    </StyledMarkerPopup>
  );
};

MarkerPopup.propTypes = {
  info: PropTypes.object
};

export default MarkerPopup;
