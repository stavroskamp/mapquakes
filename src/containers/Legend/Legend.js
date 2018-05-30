import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEarthquakesAction } from "../../actions";
import { StyledLegend } from "./Legend.styles";
import { Button } from "../../components";
import QuakesList from "../QuakesList/QuakesList";

class Legend extends React.Component {
  static propTypes = {
    getEarthquakesAction: PropTypes.func,
    getEarthquakes: PropTypes.func
  };

  render() {
    return (
      <StyledLegend>
        <Button onClick={this.props.getEarthquakes}>Get Earthquakes</Button>
        <QuakesList />
      </StyledLegend>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return { getEarthquakes: () => dispatch(getEarthquakesAction()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Legend);
