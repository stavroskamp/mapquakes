import styled from "styled-components";
import { Input } from "reactstrap";
import { TiBackspace } from "react-icons/lib/ti/";
export const StyledSearchInput = styled(Input)`
  width: 100%;
`;

export const StyledClearIcon = styled(TiBackspace)`
  display: flex;
  color: white;
`;
