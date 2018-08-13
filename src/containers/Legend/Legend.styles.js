import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const isMobile = props => {
  if (props.ismobile) {
    return css`
      position: absolute;
      z-index: 0;
    `;
  }
};

const isLegendMobileOpen = props => {
  if (props.islegendmobileopen) {
    return css`
      width: ${props => (props.ismobile ? "100%" : "380px")};
      z-index: 3;
    `;
  }
  if (props.ismobile) {
    return css`
      display: none;
    `;
  }
};

export const StyledCloseLegend = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40px;
  padding: 10px;
  font-size: 22px;
  color: #6c757d;
`;

export const StyledLegend = styled.div`
  height: 100%;
  width: 380px;
  background-color: #ececec;
  border-right: 2px solid #dadada;
  ${isMobile};
  ${isLegendMobileOpen};
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
