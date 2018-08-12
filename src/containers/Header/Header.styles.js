import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background: linear-gradient(to right, #304c98, #06bfc5);
`;

export const Logo = styled.img`
  padding: 0 10px;
  height: 38px;
`;

export const LogoText = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: #ffe484;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  text-align: right;
  padding: 0 10px;
`;
