import { combineReducers } from "redux";
import { NEWEST_QUAKE_FILTER } from "../constants";
import {
  SET_IS_FETCHING,
  RECEIVED_EARTHQUAKES,
  SET_SELECTED_EARTHQUAKE,
  SET_SELECTED_EARTHQUAKE_TO_NULL,
  SET_SEARCH_LIST_VALUE,
  SET_LIST_FILTERING_VALUE
} from "../actions";

const setIsFetching = (state = false, action) => {
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

const rootReducer = combineReducers({
  setIsFetching,
  receivedEarthquakes,
  selectedEarthquakeId,
  quakesListFilters
});

export default rootReducer;
