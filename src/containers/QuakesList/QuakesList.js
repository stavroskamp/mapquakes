import React from "react";
import PropTypes from "prop-types";
import { ListCircle } from "../../components";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { StyledQuakesList } from "./QuakesList.styles";

class QuakesList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    receivedEarthquakes: PropTypes.object
  };

  render() {
    const earthquakes = this.props.receivedEarthquakes;
    return (
      <StyledQuakesList>
        <ListGroup>
          {earthquakes
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
  }
}

const mapStateToProps = state => {
  const { receivedEarthquakes } = state;

  return { receivedEarthquakes };
};

export default connect(mapStateToProps)(QuakesList);
