import React from "react";
import PropTypes from "prop-types";
import includes from "lodash/includes";
import { ListCircle } from "../../components";
import { ListGroup, ListGroupItem } from "reactstrap";
import { StyledQuakesList } from "./QuakesList.styles";
import {
  NEWEST_QUAKE_FILTER,
  OLDEST_QUAKE_FILTER,
  STRONGEST_QUAKE_FILTER,
  WEAKEST_QUAKE_FILTER
} from "../../constants";

const QuakesList = ({ earthquakes, filters, selectEarthquake }) => {
  return (
    <StyledQuakesList>
      <ListGroup>
        {earthquakes && earthquakes.features
          ? earthquakes.features
              // filters the values
              .filter(earthquake =>
                includes(
                  earthquake.properties.place.toLowerCase(),
                  filters.searchListValue.toLowerCase()
                )
              )
              .sort((a, b) => {
                let sorted;
                if (filters.listFilterValue === NEWEST_QUAKE_FILTER) {
                  return (sorted = b.properties.time - a.properties.time);
                }
                if (filters.listFilterValue === OLDEST_QUAKE_FILTER) {
                  return (sorted = a.properties.time - b.properties.time);
                }
                if (filters.listFilterValue === STRONGEST_QUAKE_FILTER) {
                  return (sorted = b.properties.mag - a.properties.mag);
                }
                if (filters.listFilterValue === WEAKEST_QUAKE_FILTER) {
                  return (sorted = a.properties.mag - b.properties.mag);
                }
                return sorted;
              })
              .map(earthquake => {
                return (
                  <ListGroupItem
                    onClick={() => selectEarthquake(earthquake.id)}
                    key={earthquake.id}
                  >
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
  filters: PropTypes.object,
  selectEarthquake: PropTypes.func
};

export default QuakesList;
