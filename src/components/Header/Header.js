import React from "react";
import { StyledHeader } from "./Header.styles";
import { ModalAboutInfo } from "../../components";

const Header = () => {
  return (
    <StyledHeader>
      <ModalAboutInfo />
    </StyledHeader>
  );
};

export default Header;
