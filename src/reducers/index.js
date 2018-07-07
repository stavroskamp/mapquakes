import { combineReducers } from "redux";
import {
  NEWEST_QUAKE_FILTER,
  MAP_CENTER_POSITION,
  MAP_ZOOM_LEVEL
} from "../constants";
import {
  SET_IS_FETCHING,
  RECEIVED_EARTHQUAKES,
  SET_SELECTED_EARTHQUAKE,
  SET_SELECTED_EARTHQUAKE_TO_NULL,
  SET_SEARCH_LIST_VALUE,
  SET_LIST_FILTERING_VALUE,
  SET_CENTER_OF_MAP,
  SET_ZOOM_LEVEL_OF_MAP,
  SET_EARTHQUAKE_SEARCH_PARAMS,
  SET_COUNTRIES_INFO
} from "../actions";

const isFetchingEarthquakes = (state = false, action) => {
  switch (action.type) {
    case SET_IS_FETCHING:
      return action.isFetching;
    default:
      return state;
  }
};

const receivedEarthquakes = (state = null, action) => {
  switch (action.type) {
    case RECEIVED_EARTHQUAKES:
      return { ...action.earthquakes };
    default:
      return state;
  }
};

const selectedEarthquakeId = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_EARTHQUAKE:
      return action.selectedEarthquakeId;
    case SET_SELECTED_EARTHQUAKE_TO_NULL:
      return null;
    default:
      return state;
  }
};

const centerOfMap = (state = MAP_CENTER_POSITION, action) => {
  switch (action.type) {
    case SET_CENTER_OF_MAP:
      return action.centerOfMap;
    default:
      return state;
  }
};

const zoomLevelOfMap = (state = MAP_ZOOM_LEVEL, action) => {
  switch (action.type) {
    case SET_ZOOM_LEVEL_OF_MAP:
      return action.zoomLevelOfMap;
    default:
      return state;
  }
};

const searchEarthquakeParams = (state = {}, action) => {
  switch (action.type) {
    case SET_EARTHQUAKE_SEARCH_PARAMS:
      return action.earthquakeSearchParams;
    default:
      return state;
  }
};

const quakesListFilters = (
  state = {
    searchListValue: "",
    listFilterValue: NEWEST_QUAKE_FILTER
  },
  action
) => {
  switch (action.type) {
    case SET_SEARCH_LIST_VALUE:
      return { ...state, searchListValue: action.searchListValue };
    case SET_LIST_FILTERING_VALUE:
      return { ...state, listFilterValue: action.listFilterValue };
    default:
      return state;
  }
};

const countriesInfo = (state = {}, action) => {
  switch (action.type) {
    case SET_COUNTRIES_INFO:
      return action.countriesInfo;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  isFetchingEarthquakes,
  receivedEarthquakes,
  selectedEarthquakeId,
  centerOfMap,
  zoomLevelOfMap,
  quakesListFilters,
  searchEarthquakeParams,
  countriesInfo
});

export default rootReducer;
