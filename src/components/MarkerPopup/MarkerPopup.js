import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardText } from "reactstrap";
import { StyledMarkerPopup } from "./MarkerPopup.styles";

const MarkerPopup = props => {
  const { info } = props;
  const { properties } = info;
  return (
    <StyledMarkerPopup>
      <Card>
        <CardHeader>{properties.title}</CardHeader>
        <CardBody>
          <CardText>Time: {properties.time}</CardText>
          <CardText>Magnitude: {properties.mag}</CardText>
          <CardText>Tsunami Warning: {properties.tsunami}</CardText>
        </CardBody>
      </Card>
    </StyledMarkerPopup>
  );
};

MarkerPopup.propTypes = {
  info: PropTypes.object
};

export default MarkerPopup;
