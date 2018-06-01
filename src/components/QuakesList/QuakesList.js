import React from "react";
import PropTypes from "prop-types";
import { ListCircle } from "../../components";
import { ListGroup, ListGroupItem } from "reactstrap";
import { StyledQuakesList } from "./QuakesList.styles";

const QuakesList = ({ earthquakes }) => {
  return (
    <StyledQuakesList>
      <ListGroup>
        {earthquakes && earthquakes.features
          ? earthquakes.features.map(earthquake => {
              return (
                <ListGroupItem key={earthquake.id}>
                  <ListCircle mag={earthquake.properties.mag} />
                  {earthquake.properties.place}
                </ListGroupItem>
              );
            })
          : null}
      </ListGroup>
    </StyledQuakesList>
  );
};

QuakesList.propTypes = {
  earthquakes: PropTypes.object
};

export default QuakesList;
