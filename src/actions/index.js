import axios from "axios";
import { API_URL_BASE } from "../constants";

export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const RECEIVED_EARTHQUAKES = "RECEIVED_EARTHQUAKES";
export const SET_SELECTED_EARTHQUAKE = "SELECT_SPECIFIC_EARTHQUAKE";
export const SET_SELECTED_EARTHQUAKE_TO_NULL =
  "SET_SELECTED_EARTHQUAKE_TO_NULL";

export const setIsFetching = isFetching => {
  return dispatch => {
    dispatch({
      type: SET_IS_FETCHING,
      isFetching
    });
  };
};

export const receivedEarthquakesAction = earthquakes => {
  return dispatch => {
    dispatch({
      type: RECEIVED_EARTHQUAKES,
      earthquakes
    });
  };
};

export const setSelectedEarthquakeAction = selectedEarthquake => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_EARTHQUAKE,
      selectedEarthquake
    });
  };
};

export const setSelectedEarthquakeToNullAction = () => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_EARTHQUAKE_TO_NULL
    });
  };
};

const getEarthquakesRequest = () => {
  return axios
    .get(`${API_URL_BASE}query?format=geojson&limit=100&orderby=time`)
    .then(res => res.data);
};

export const getEarthquakesAction = () => {
  return async dispatch => {
    dispatch(setIsFetching(true));
    const earthquakes = await getEarthquakesRequest();
    dispatch(receivedEarthquakesAction(earthquakes));
    dispatch(setIsFetching(false));
  };
};
