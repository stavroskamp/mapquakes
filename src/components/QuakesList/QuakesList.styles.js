import styled from "styled-components";
import { ListGroupItem } from "reactstrap";

const headerPadding = "20px";

export const StyledQuakesList = styled.div`
  width: 100%;
  height: calc(100% - 38px - ${headerPadding});
  overflow-y: auto;
  &:hover {
    cursor: pointer;
  }
  .selected {
    background-color: #e0f3ff;
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
