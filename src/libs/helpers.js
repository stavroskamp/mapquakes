import { countries } from "../constants/countries";
import dayjs from "dayjs";

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
  return dayjs(time).format("MM/DD/YYYY");
};

export const scrollIntoView = (selector, behavior = "instant") => {
  document.querySelector(selector).scrollIntoView({ behavior: behavior });
};

export const scrollItemToTop = selector => {
  document
    .querySelector(selector)
    .scroll({ top: 0, left: 0, behavior: "instant" });
};
