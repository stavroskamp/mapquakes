import styled from "styled-components";
import { Map as LeafletMap } from "react-leaflet";

export const StyledMapWrapper = styled.div`
  height: 100%;
  width: 74%;
  background-color: skyblue;
`;

export const StyledMap = styled(LeafletMap)`
  height: 100%;
`;
