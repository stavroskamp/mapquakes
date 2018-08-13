import styled, { css } from "styled-components";
import { darken } from "polished";
import { Button } from "reactstrap";

export const style = props => {
  const hoverPer = 0.1;
  const activePer = 0.12;

  let color;
  let fontColor = "#ffff";
  if (props.cancel) {
    color = "#a4abb1";
  } else if (props.yellow) {
    color = "#ffe484";
    fontColor = "#304c98";
  } else {
    return;
  }

  const hoverColor = darken(hoverPer, color);
  const activeColor = darken(activePer, color);

  return css`
    &&& {
      color: ${fontColor};
      font-weight: 600;
      background-color: ${color};
      border-color: ${color};
      &:hover {
        background-color: ${hoverColor};
        border-color: ${hoverColor};
      }
      &:focus {
        box-shadow: none;
      }
      &:active {
        background-color: ${activeColor};
        &:focus {
          color: ${fontColor};
          box-shadow: 0 0 0 0.1rem ${activeColor};
          border-color: ${activeColor};
        }
      }
    }
  `;
};

export const menuStyle = props => {
  if (props.menustyle) {
    return css`
      align-self: center;
      height: 42px;
      padding: 0 16px;
      margin: 0 8px;
    `;
  }
};

export const openLegendButton = props => {
  if (props.openlegendbutton) {
    return css`
      position: absolute;
      z-index: 2;
      margin: 10px;
    `;
  }
};

export const StyledButton = styled(Button)`
  color: #fff;
  ${style};
  ${menuStyle};
  ${openLegendButton};
`;
