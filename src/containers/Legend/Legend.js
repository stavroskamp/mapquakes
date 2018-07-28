import React from "react";
import PropTypes from "prop-types";
import {
  setSearchListValueAction,
  setListFilteringValueAction,
  setselectedEarthquakeIdAction,
  setCenterOfMapAction,
  setZoomLevelOfMapAction,
  getEarthquakesAction,
  setEarthquakeSearchParamsAction
} from "../../actions";
import { MAP_ZOOM_LEVEL_WHEN_SELECTED } from "../../constants";
import { countries } from "../../constants/countries";
import { connect } from "react-redux";
import { StyledLegend, StyledSearchWrapper } from "./Legend.styles";
import {
  SearchInput,
  QuakesList,
  ListDropdownFilter,
  Loading,
  ModalGetQuakes
} from "../../components";

class Legend extends React.Component {
  static propTypes = {
    receivedEarthquakes: PropTypes.object,
    setsearchListValue: PropTypes.func,
    quakesListFilters: PropTypes.object,
    setListFilteringValue: PropTypes.func,
    setselectedEarthquakeId: PropTypes.func,
    selectedEarthquakeId: PropTypes.string,
    isFetchingEarthquakes: PropTypes.bool,
    setEarthquakeSearchParams: PropTypes.func,
    getEarthquakes: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      listDropdownFilterIsOpen: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      listDropdownFilterIsOpen: !prevState.listDropdownFilterIsOpen
    }));
  }

  render() {
    return (
      <StyledLegend>
        <StyledSearchWrapper>
          <ModalGetQuakes
            setEarthquakeSearchParams={this.props.setEarthquakeSearchParams}
            getEarthquakes={this.props.getEarthquakes}
            countries={countries}
          />
        </StyledSearchWrapper>

        <StyledSearchWrapper>
          <SearchInput
            id="quakes-search-input"
            placeholder="Search..."
            value={this.props.quakesListFilters.searchListValue}
            onChange={e => {
              this.props.setsearchListValue(e.target.value);
            }}
            clearSearchInput={() => {
              this.props.setsearchListValue("");
              // not best practise but it works
              document.querySelector("#quakes-search-input").focus();
            }}
          />
          <ListDropdownFilter
            isOpen={this.state.listDropdownFilterIsOpen}
            toggle={this.toggleDropdown}
            dropdownLabel={this.props.quakesListFilters.listFilterValue}
            setSelectedFilter={this.props.setListFilteringValue}
          />
        </StyledSearchWrapper>
        {this.props.receivedEarthquakes && !this.props.isFetchingEarthquakes ? (
          <QuakesList
            earthquakes={this.props.receivedEarthquakes}
            filters={this.props.quakesListFilters}
            selectEarthquake={this.props.setselectedEarthquakeId}
            selectedEarthquakeId={this.props.selectedEarthquakeId}
            getEarthquakes={this.props.getEarthquakes}
          />
        ) : (
          <Loading type={"spin"} color={"#ffff"} />
        )}
      </StyledLegend>
    );
  }
}

const mapStateToProps = state => {
  const {
    receivedEarthquakes,
    quakesListFilters,
    selectedEarthquakeId,
    isFetchingEarthquakes
  } = state;

  return {
    receivedEarthquakes,
    quakesListFilters,
    selectedEarthquakeId,
    isFetchingEarthquakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setsearchListValue: value => dispatch(setSearchListValueAction(value)),
    setListFilteringValue: value =>
      dispatch(setListFilteringValueAction(value)),
    setselectedEarthquakeId: earthquake => {
      dispatch(setselectedEarthquakeIdAction(earthquake.id));
      dispatch(
        setCenterOfMapAction([
          earthquake.geometry.coordinates[1],
          earthquake.geometry.coordinates[0]
        ])
      );
      dispatch(setZoomLevelOfMapAction(MAP_ZOOM_LEVEL_WHEN_SELECTED));
    },
    setEarthquakeSearchParams: params =>
      dispatch(setEarthquakeSearchParamsAction(params)),
    getEarthquakes: () => dispatch(getEarthquakesAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Legend);
