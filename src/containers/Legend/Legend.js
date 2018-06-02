import React from "react";
import PropTypes from "prop-types";
import {
  setSearchListValueAction,
  setListFilteringValueAction
} from "../../actions";
import { connect } from "react-redux";
import { StyledLegend } from "./Legend.styles";
import { SearchInput, QuakesList, ListDropdownFilter } from "../../components";

class Legend extends React.Component {
  static propTypes = {
    receivedEarthquakes: PropTypes.object,
    setsearchListValue: PropTypes.func,
    quakesListFilters: PropTypes.object,
    setListFilteringValue: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      listDropdownFilterIsOpen: false
    };
  }

  toggleDropdown() {
    this.setState(prevState => ({
      listDropdownFilterIsOpen: !prevState.listDropdownFilterIsOpen
    }));
  }

  render() {
    return (
      <StyledLegend>
        <SearchInput
          onChange={e => {
            this.props.setsearchListValue(e.target.value);
          }}
        />
        <ListDropdownFilter
          isOpen={this.state.listDropdownFilterIsOpen}
          toggle={this.toggleDropdown}
          dropdownLabel={this.props.quakesListFilters.listFilterValue}
          setSelectedFilter={this.props.setListFilteringValue}
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
    setsearchListValue: value => dispatch(setSearchListValueAction(value)),
    setListFilteringValue: value => dispatch(setListFilteringValueAction(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Legend);
