import styled from "styled-components";
import { ListGroupItem, ListGroup } from "reactstrap";

const headerPadding = "20px";

export const StyledQuakesList = styled.div`
  width: 100%;
  height: calc(100% - 38px - ${headerPadding});
  overflow-y: auto;
  padding: 0 10px;

  .selected {
    background-color: #e0f3ff;
  }
`;

export const StyledListGroup = styled(ListGroup)`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledListGroupItem = styled(ListGroupItem)`
  display: inline-flex;
  align-items: center;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const StyledQuakeTextsWrapper = styled.div`
  padding: 0 0 0 20px;
`;

export const StyledQuakeListPlace = styled.div`
  font-size: 16px;
`;

export const StyledQuakeListTime = styled.div`
  font-size: 13px;
  color: #00000080;
`;

export const StyledNoEarthquakes = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
