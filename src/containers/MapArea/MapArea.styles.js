import styled, { css } from "styled-components";
import { Map as LeafletMap } from "react-leaflet";

const isMobile = props => {
  if (props.isMobile) {
    return css`
      width: 100%;
    `;
  } else {
    return css`
      width: calc(100% - 380px);
    `;
  }
};

export const StyledMapWrapper = styled.div`
  height: 100%;
  background-color: skyblue;
  ${isMobile};
`;

export const StyledMap = styled(LeafletMap)`
  height: 100%;
  z-index: 1;

  && {
    /* is there a leaflet-right? */
    .leaflet-left {
      display: flex;
      justify-content: flex-end;
      padding: 0 20px;
      right: 0;
    }
  }
`;
