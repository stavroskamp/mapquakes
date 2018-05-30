import React from "react";
import PropTypes from "prop-types";
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
        {earthquakes
          ? earthquakes.features.map(earthquake => {
              // TODO: change it with list component
              return (
                <div key={earthquake.id}>{earthquake.properties.place}</div>
              );
            })
          : null}
      </StyledQuakesList>
    );
  }
}

const mapStateToProps = state => {
  const { receivedEarthquakes } = state;

  return { receivedEarthquakes };
};

export default connect(mapStateToProps)(QuakesList);
