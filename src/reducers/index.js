import { combineReducers } from "redux";
import {
  SET_IS_FETCHING,
  RECEIVED_EARTHQUAKES,
  SET_SELECTED_EARTHQUAKE,
  SET_SELECTED_EARTHQUAKE_TO_NULL
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

const selectedEarthquake = (state = null, action) => {
  switch (action.type) {
    case SET_SELECTED_EARTHQUAKE:
      return action.selectedEarthquake.id;
    case SET_SELECTED_EARTHQUAKE_TO_NULL:
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  setIsFetching,
  receivedEarthquakes,
  selectedEarthquake
});

export default rootReducer;
