import React from "react";
import PropTypes from "prop-types";
import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { StyledListDropdownFilter } from "./ListDropdownFilter.styles";
import TiFilter from "react-icons/lib/ti/filter";
import { scrollItemToTop } from "../../libs/helpers";
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
  const selector = "#earthquakes-list-group";
  return (
    <StyledListDropdownFilter isOpen={isOpen} toggle={toggle}>
      <DropdownToggle caret>
        <TiFilter /> {dropdownLabel}
      </DropdownToggle>
      <DropdownMenu right>
        {filters.map((eachFilter, index) => {
          return (
            <DropdownItem
              onClick={() => {
                setSelectedFilter(eachFilter);
                scrollItemToTop(selector);
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
