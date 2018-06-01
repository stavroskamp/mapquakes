import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyledLegend } from "./Legend.styles";
import { SearchInput, QuakesList } from "../../components";

class Legend extends React.Component {
  static propTypes = {
    receivedEarthquakes: PropTypes.object
  };
  render() {
    return (
      <StyledLegend>
        {/* TODO: add search and filters */}
        <SearchInput />
        <QuakesList earthquakes={this.props.receivedEarthquakes} />
      </StyledLegend>
    );
  }
}

const mapStateToProps = state => {
  const { receivedEarthquakes } = state;

  return { receivedEarthquakes };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Legend);
