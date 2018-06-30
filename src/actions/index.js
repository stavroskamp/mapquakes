import { getAsyncEarthquakes } from "../libs/requests";
import { toast } from "react-toastify";

export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const RECEIVED_EARTHQUAKES = "RECEIVED_EARTHQUAKES";
export const SET_SELECTED_EARTHQUAKE = "SELECT_SPECIFIC_EARTHQUAKE";
export const SET_SELECTED_EARTHQUAKE_TO_NULL =
  "SET_SELECTED_EARTHQUAKE_TO_NULL";
export const SET_SEARCH_LIST_VALUE = "SET_SEARCH_LIST_VALUE";
export const SET_LIST_FILTERING_VALUE = "SET_LIST_FILTERING_VALUE";
export const SET_CENTER_OF_MAP = "SET_CENTER_OF_MAP";
export const SET_ZOOM_LEVEL_OF_MAP = "SET_ZOOM_LEVEL_OF_MAP";
export const SET_EARTHQUAKE_SEARCH_PARAMS = "SET_EARTHQUAKE_SEARCH_PARAMS";

export const isFetchingEarthquakes = isFetching => {
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

export const setselectedEarthquakeIdAction = selectedEarthquakeId => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_EARTHQUAKE,
      selectedEarthquakeId
    });
  };
};

export const setselectedEarthquakeIdToNullAction = () => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_EARTHQUAKE_TO_NULL
    });
  };
};

export const setSearchListValueAction = searchListValue => {
  return dispatch => {
    dispatch({
      type: SET_SEARCH_LIST_VALUE,
      searchListValue
    });
  };
};

export const setListFilteringValueAction = listFilterValue => {
  return dispatch => {
    dispatch({
      type: SET_LIST_FILTERING_VALUE,
      listFilterValue
    });
  };
};

export const setCenterOfMapAction = centerOfMap => {
  return dispatch => {
    dispatch({
      type: SET_CENTER_OF_MAP,
      centerOfMap
    });
  };
};

export const setZoomLevelOfMapAction = zoomLevelOfMap => {
  return dispatch => {
    dispatch({
      type: SET_ZOOM_LEVEL_OF_MAP,
      zoomLevelOfMap
    });
  };
};

export const setEarthquakeSearchParamsAction = earthquakeSearchParams => {
  return dispatch => {
    dispatch({
      type: SET_EARTHQUAKE_SEARCH_PARAMS,
      earthquakeSearchParams
    });
  };
};

export const getEarthquakesAction = params => {
  return async dispatch => {
    dispatch(isFetchingEarthquakes(true));
    const earthquakes = await getAsyncEarthquakes(params);

    if (!earthquakes) {
      toast.error("Failed to load earthquakes");
    } else if (earthquakes.status) {
      toast.error("Error");
    } else {
      dispatch(receivedEarthquakesAction(earthquakes));
      toast.success("Earthquakes loaded");
    }

    dispatch(isFetchingEarthquakes(false));
  };
};
