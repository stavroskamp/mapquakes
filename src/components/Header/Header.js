import React from "react";
import { StyledHeader } from "./Header.styles";
import { ModalGetQuakes, ModalAboutInfo } from "../../components";

const Header = () => {
  return (
    <StyledHeader>
      <ModalGetQuakes />
      <ModalAboutInfo />
    </StyledHeader>
  );
};

export default Header;
