import React from "react";
import PropTypes from "prop-types";
import {
  setSearchListValueAction,
  setListFilteringValueAction,
  setselectedEarthquakeIdAction,
  setCenterOfMapAction,
  setZoomLevelOfMapAction,
  getEarthquakesAction,
  closeLegendAction
} from "../../actions";
import {
  MAP_ZOOM_LEVEL_WHEN_SELECTED,
  MOBILE_WIDTH_MAIN
} from "../../constants";
import { connect } from "react-redux";
import {
  StyledLegend,
  StyledSearchWrapper,
  StyledCloseLegend,
  StyledFontAwesomeIcon
} from "./Legend.styles";
import {
  SearchInput,
  QuakesList,
  ListDropdownFilter,
  Loading
} from "../../components";
import withSizes from "react-sizes";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const mapSizesToProps = ({ width }) => ({
  isMobile: width < MOBILE_WIDTH_MAIN
});

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
    getEarthquakes: PropTypes.func,
    isMobile: PropTypes.bool,
    isLegendMobileOpen: PropTypes.bool,
    closeLegend: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      listDropdownFilterIsOpen: false
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      listDropdownFilterIsOpen: !prevState.listDropdownFilterIsOpen
    }));
  };

  handleCloseIconClick = () => {
    this.props.closeLegend();
  };

  render() {
    return (
      <StyledLegend
        ismobile={this.props.isMobile}
        islegendmobileopen={this.props.isLegendMobileOpen}
      >
        {this.props.isMobile ? (
          <StyledCloseLegend>
            <StyledFontAwesomeIcon
              onClick={this.handleCloseIconClick}
              icon={faTimes}
            />
          </StyledCloseLegend>
        ) : null}
        <StyledSearchWrapper>
          <SearchInput
            id="quakes-search-input"
            placeholder="Search on list..."
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
            isMobile={this.props.isMobile}
            earthquakes={this.props.receivedEarthquakes}
            filters={this.props.quakesListFilters}
            selectEarthquake={this.props.setselectedEarthquakeId}
            selectedEarthquakeId={this.props.selectedEarthquakeId}
            getEarthquakes={params => this.props.getEarthquakes(params)}
            closeLegendAction={this.props.closeLegend}
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
    isFetchingEarthquakes,
    isLegendMobileOpen
  } = state;

  return {
    receivedEarthquakes,
    quakesListFilters,
    selectedEarthquakeId,
    isFetchingEarthquakes,
    isLegendMobileOpen
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
    getEarthquakes: params => dispatch(getEarthquakesAction(params, true)),
    closeLegend: () => dispatch(closeLegendAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSizes(mapSizesToProps)(Legend));
