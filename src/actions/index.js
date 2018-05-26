import axios from "axios";
import { API_URL_BASE } from "../constants";

export const TOGGLE_BUTTON = "TOGGLE_BUTTON";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const RECEIVED_EARTHQUAKES = "RECEIVED_EARTHQUAKES";

export const toggleButtonAction = () => ({
  type: TOGGLE_BUTTON
});

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  isFetching
});

export const receivedEarthquakesAction = earthquakes => ({
  type: RECEIVED_EARTHQUAKES,
  earthquakes
});

const getEarthquakesRequest = () => {
  return axios
    .get(
      `${API_URL_BASE}query?format=geojson&starttime=2014-01-01&endtime=2014-01-02`
    )
    .then(res => res.data);
};

export const getEarthquakesAction = () => {
  return async dispatch => {
    dispatch(setIsFetching(true));
    const earthquakes = await getEarthquakesRequest();
    dispatch(receivedEarthquakesAction(earthquakes));
    dispatch(setIsFetching(false));
    console.log("--- the quakes", earthquakes);
  };
};
