import React from "react";
import PropTypes from "prop-types";
import includes from "lodash/includes";
import { ListCircle } from "../../components";
import { ListGroup, ListGroupItem } from "reactstrap";
import { StyledQuakesList } from "./QuakesList.styles";

const QuakesList = ({ earthquakes, filters }) => {
  return (
    <StyledQuakesList>
      <ListGroup>
        {earthquakes && earthquakes.features
          ? earthquakes.features
              // filters the values
              .filter(earthquake =>
                includes(
                  earthquake.properties.place.toLowerCase(),
                  filters.searchListFilterValue.toLowerCase()
                )
              )
              .map(earthquake => {
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
  earthquakes: PropTypes.object,
  filters: PropTypes.object
};

export default QuakesList;
