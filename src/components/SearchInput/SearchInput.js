import React from "react";
import PropTypes from "prop-types";
import { InputGroup, InputGroupAddon, Button } from "reactstrap";
import { StyledSearchInput, StyledClearIcon } from "./SearchInput.styles";

const SearchInput = props => {
  const { clearSearchInput, ...SearchInputProps } = props;
  return (
    <React.Fragment>
      <InputGroup>
        <StyledSearchInput {...SearchInputProps} />
        <InputGroupAddon addonType="append">
          <Button onClick={clearSearchInput}>
            <StyledClearIcon />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </React.Fragment>
  );
};

SearchInput.propTypes = {
  clearSearchInput: PropTypes.func
};

export default SearchInput;
