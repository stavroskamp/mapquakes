import axios from "axios";
import { API_URL_BASE } from "../constants";

const constructUrl = params => {
  const baseParams = `${API_URL_BASE}query?format=geojson&limit=200&orderby=time`;
  let callParams = baseParams;

  // from starting date
  if (params && params.selectedFromDay) {
    callParams = `${callParams}&starttime=${params.selectedFromDay}`;
  }
  // to end date
  if (params && params.selectedToDay) {
    callParams = `${callParams}&endtime=${params.selectedToDay}`;
  }
  // include earthquakes under 2.5
  if (params && params.quakesUnder25) {
    callParams = `${callParams}&minmagnitude=2.5`;
  }

  return callParams;
};

export const getAsyncEarthquakes = async params => {
  const callParams = constructUrl(params);
  try {
    return await axios
      .get(callParams)
      .then(res => res.data)
      .catch(error => error.response);
  } catch (error) {
    console.error(error);
  }
};
