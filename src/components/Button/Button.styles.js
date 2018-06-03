import Color from "color";
import styled from "styled-components";
import { Button } from "reactstrap";

// TODO: in the future pass color from props
const mainColor = Color("#6c757d");

export const StyledButton = styled(Button)`
  background-color: ${mainColor.hex()}!important;
  border-color: ${mainColor.hex()}!important;
  color: #ffff;
  &:hover {
    background-color: ${mainColor.darken(0.15).hex()}!important;
  }
  &:focus {
    box-shadow: none !important;
  }
  &:active {
    background-color: ${mainColor.darken(0.2).hex()}!important;
  }
`;
