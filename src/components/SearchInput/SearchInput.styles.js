import styled from "styled-components";
import { Input, InputGroup } from "reactstrap";
import { TiBackspace } from "react-icons/lib/ti/";

export const StyledInputGroup = styled(InputGroup)`
  width: 220px;
`;

export const StyledSearchInput = styled(Input)`
  width: 100%;
  &:focus {
    box-shadow: none !important;
  }
`;

export const StyledClearIcon = styled(TiBackspace)`
  display: flex;
  color: white;
`;
