import Color from "color";
import styled from "styled-components";
import { Button } from "reactstrap";

const mainColor = Color("rebeccapurple");

export const StyledButton = styled(Button)`
  background-color: ${mainColor.hex()}!important;
  border-color: ${mainColor.hex()}!important;
  color: #ffff;
  &:hover {
    background-color: ${mainColor.darken(0.15).hex()}!important;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem ${mainColor.lighten(0.75).hex()}!important;
  }
  &:active {
    background-color: ${mainColor.darken(0.2).hex()}!important;
  }
`;
