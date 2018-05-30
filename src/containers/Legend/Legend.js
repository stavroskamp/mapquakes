import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEarthquakesAction } from "../../actions";
import { StyledLegend } from "./Legend.styles";
import { Button } from "../../components";
import QuakesList from "../QuakesList/QuakesList";

class Legend extends React.Component {
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
        <QuakesList />
      </StyledLegend>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Legend);
