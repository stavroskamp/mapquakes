import React from "react";
import { connect } from "react-redux";
import { StyledLegend } from "./Legend.styles";
import QuakesList from "../QuakesList/QuakesList";

class Legend extends React.Component {
  render() {
    return (
      <StyledLegend>
        {/* TODO: add search and filters */}
        <QuakesList />
      </StyledLegend>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Legend);
