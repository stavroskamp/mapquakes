import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEarthquakesAction } from "../../actions";
import { StyledLegend } from "./Legend.styles";
import Button from "../../components/Button/Button";

class LegendContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    getEarthquakesAction: PropTypes.func
  };

  getEarthquakes = () => {
    this.props.dispatch(getEarthquakesAction());
  };

  render() {
    return (
      <StyledLegend>
        <Button onClick={this.getEarthquakes}>Get Earthquakes</Button>
      </StyledLegend>
    );
  }
}

const mapStateToProps = state => {
  const { getEarthquakesAction } = state;

  return { getEarthquakesAction };
};

export default connect(mapStateToProps)(LegendContainer);
