import axios from "axios";
import { boundingBoxesFromCountryName, dateToSearchFormat } from "./helpers";
import { API_URL_BASE, MIN_MAGNITUDE } from "../constants";

const constructUrl = params => {
  const baseParams = `${API_URL_BASE}query?format=geojson&limit=300&orderby=time`;
  let callParams = baseParams;

  if (params && params.selectedCountry) {
    const bbox = boundingBoxesFromCountryName(params.selectedCountry);
    callParams = `${callParams}&maxlatitude=${bbox.maxlatitude}&maxlongitude=${
      bbox.maxlongitude
    }&minlatitude=${bbox.minlatitude}&minlongitude=${bbox.minlongitude}`;
  }

  // from starting date
  if (params && params.selectedFromDay) {
    const startTime = dateToSearchFormat(params.selectedFromDay);
    callParams = `${callParams}&starttime=${startTime}`;
  }
  // to end date
  if (params && params.selectedToDay) {
    const endtime = dateToSearchFormat(params.selectedToDay);
    callParams = `${callParams}&endtime=${endtime}`;
  }
  // include earthquakes under 2.5
  if (params && !params.hasMinMagnitude) {
    callParams = `${callParams}&minmagnitude=${MIN_MAGNITUDE}`;
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
