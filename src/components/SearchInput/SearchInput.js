import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../components";
import { InputGroupAddon } from "reactstrap";
import {
  StyledInputGroup,
  StyledSearchInput,
  StyledClearIcon
} from "./SearchInput.styles";

const SearchInput = props => {
  const { clearSearchInput, ...SearchInputProps } = props;
  return (
    <React.Fragment>
      <StyledInputGroup>
        <StyledSearchInput {...SearchInputProps} />
        <InputGroupAddon addonType="append">
          <Button onClick={clearSearchInput}>
            <StyledClearIcon />
          </Button>
        </InputGroupAddon>
      </StyledInputGroup>
    </React.Fragment>
  );
};

SearchInput.propTypes = {
  clearSearchInput: PropTypes.func
};

export default SearchInput;
