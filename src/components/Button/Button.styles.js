import styled, { css } from "styled-components";
import { darken } from "polished";
import { Button } from "reactstrap";

const style = props => {
  let color;
  if (props.primary) {
    color = "#457B9D";
  } else if (props.cancel) {
    color = "#F45B69";
  } else {
    color = "#6c757d";
  }

  return css`
    &&& {
      color: #ffff;
      background-color: ${color};
      border-color: ${color};
      &:hover {
        background-color: ${darken(0.1, color)};
      }
      &:focus {
        box-shadow: none;
      }
      &:active {
        background-color: ${darken(0.12, color)};
        &:focus {
          box-shadow: 0 0 0 0.2rem ${color};
          border-color: ${darken(0.12, color)};
        }
      }
    }
  `;
};

export const menuButton = props => {
  if (props.menubutton) {
    return css`
      align-self: center;
      height: 42px;
      padding: 0 16px;
      margin: 0 8px;
    `;
  }
};

export const StyledButton = styled(Button)`
  color: #fff;
  ${style};
  ${menuButton};
`;
