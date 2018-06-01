import React from "react";
import PropTypes from "prop-types";
import { setSearchListFilterValueAction } from "../../actions";
import { connect } from "react-redux";
import { StyledLegend } from "./Legend.styles";
import { SearchInput, QuakesList } from "../../components";

class Legend extends React.Component {
  static propTypes = {
    receivedEarthquakes: PropTypes.object,
    setSearchListFilterValue: PropTypes.func,
    quakesListFilters: PropTypes.object
  };

  render() {
    return (
      <StyledLegend>
        {/* TODO: add search and filters */}
        <SearchInput
          onChange={e => {
            this.props.setSearchListFilterValue(e.target.value);
          }}
        />
        <QuakesList
          earthquakes={this.props.receivedEarthquakes}
          filters={this.props.quakesListFilters}
        />
      </StyledLegend>
    );
  }
}

const mapStateToProps = state => {
  const { receivedEarthquakes, quakesListFilters } = state;

  return { receivedEarthquakes, quakesListFilters };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchListFilterValue: value =>
      dispatch(setSearchListFilterValueAction(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Legend);
