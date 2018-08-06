import styled from "styled-components";
export const StyledCircleWrapper = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: white;
  height: 31px;
  width: 31px;
  min-width: 31px;
  background-color: ${props => props.theme.color};
  border-radius: 50%;
  display: inline-flex;
  align-content: center;
  justify-content: center;
`;

export const StyledCircleContent = styled.span`
  display: inline-flex;
  align-self: center;
  padding: 0 6px 2px 6px;
`;
