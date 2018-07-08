import React from "react";
import PropTypes from "prop-types";
import { StyledCountrySelect } from "./CountrySelect.styles";

const CountrySelect = ({ countries, selectedCountry, onChange }) => {
  return (
    <StyledCountrySelect
      valueKey={"name"}
      labelKey={"name"}
      value={selectedCountry}
      onChange={onChange}
      options={countries}
      searchable={true}
      resetValue={""}
    />
  );
};

CountrySelect.propTypes = {
  countries: PropTypes.array,
  selectedCountry: PropTypes.string,
  onChange: PropTypes.func
};

export default CountrySelect;
