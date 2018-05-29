import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEarthquakesAction } from "../../actions";
import { StyledLegend } from "./Legend.styles";
import Button from "../../components/Button/Button";

class LegendContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    getEarthquakesAction: PropTypes.func,
    receivedEarthquakes: PropTypes.object
  };

  getEarthquakes = () => {
    this.props.dispatch(getEarthquakesAction());
  };

  render() {
    const earthquakes = this.props.receivedEarthquakes;

    return (
      <StyledLegend>
        <Button onClick={this.getEarthquakes}>Get Earthquakes</Button>
        {earthquakes
          ? earthquakes.features.map(earthquake => {
              // TODO: change it with list component
              return (
                <div key={earthquake.id}>{earthquake.properties.place}</div>
              );
            })
          : null}
      </StyledLegend>
    );
  }
}

const mapStateToProps = state => {
  const { receivedEarthquakes } = state;

  return { receivedEarthquakes };
};

export default connect(mapStateToProps)(LegendContainer);
