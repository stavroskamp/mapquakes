import React from "react";
import PropTypes from "prop-types";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { StyledListDropdownFilter } from "./ListDropdownFilter.styles";
import {
  NEWEST_QUAKE_FILTER,
  OLDEST_QUAKE_FILTER,
  STRONGEST_QUAKE_FILTER,
  WEAKEST_QUAKE_FILTER
} from "../../constants/";

const ListDropdownFilter = ({
  isOpen,
  toggle,
  dropdownLabel,
  setSelectedFilter
}) => {
  const filters = [
    NEWEST_QUAKE_FILTER,
    OLDEST_QUAKE_FILTER,
    STRONGEST_QUAKE_FILTER,
    WEAKEST_QUAKE_FILTER
  ];
  return (
    <StyledListDropdownFilter isOpen={isOpen} toggle={toggle}>
      <DropdownToggle caret>Filtered by {dropdownLabel}</DropdownToggle>
      <DropdownMenu>
        {filters.map((eachFilter, index) => {
          return (
            <DropdownItem
              onClick={() => {
                setSelectedFilter(eachFilter);
              }}
              key={index}
              active={eachFilter === dropdownLabel}
            >
              {eachFilter}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </StyledListDropdownFilter>
  );
};

ListDropdownFilter.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  dropdownLabel: PropTypes.string,
  setSelectedFilter: PropTypes.func
};

export default ListDropdownFilter;
