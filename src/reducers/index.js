import { combineReducers } from "redux";
import { SET_IS_FETCHING, RECEIVED_EARTHQUAKES } from "../actions";

const isFetching = (state = false, action) => {
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

const rootReducer = combineReducers({
  isFetching,
  receivedEarthquakes
});

export default rootReducer;
