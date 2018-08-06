import React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
import { StyledMarkerPopup, StyledMoreInfoWrapper } from "./MarkerPopup.styles";

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
              {dayjs(properties.time).format("MMMM DD YYYY, h:mm:ss a")}
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
            <td>{properties.tsunami === 1 ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </Table>
      <StyledMoreInfoWrapper>
        <a target="_blank" rel="noopener noreferrer" href={properties.url}>
          More info here
        </a>
      </StyledMoreInfoWrapper>
    </StyledMarkerPopup>
  );
};

MarkerPopup.propTypes = {
  info: PropTypes.object
};

export default MarkerPopup;
