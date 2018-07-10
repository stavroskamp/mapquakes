import { countries } from "../constants/countries";
import moment from "moment";

export const boundingBoxesFromCountryName = countryName => {
  let bbox;
  countries.forEach(country => {
    if (country.name === countryName) {
      bbox = {
        maxlatitude: country.north,
        maxlongitude: country.east,
        minlatitude: country.south,
        minlongitude: country.west
      };
      return;
    }
  });
  return bbox;
};

export const dateToSearchFormat = time => {
  return moment(time).format("MM/DD/YYYY");
};
