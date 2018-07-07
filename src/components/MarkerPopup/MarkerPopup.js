import React from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
import { StyledMarkerPopup } from "./MarkerPopup.styles";

const MarkerPopup = props => {
  const { info } = props;
  const { properties } = info;
  return (
    <StyledMarkerPopup>
      <Table striped>
        <tbody>
          <tr>
            <th scope="row">Time:</th>
            <td>{properties.time}</td>
          </tr>
          <tr>
            <th scope="row">Magnitude:</th>
            <td>{properties.mag}</td>
          </tr>
          <tr>
            <th scope="row">Tsunami Warning:</th>
            <td>{properties.tsunami}</td>
          </tr>
        </tbody>
      </Table>
    </StyledMarkerPopup>
  );
};

MarkerPopup.propTypes = {
  info: PropTypes.object
};

export default MarkerPopup;
