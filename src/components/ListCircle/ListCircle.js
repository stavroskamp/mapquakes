import React from "react";
import PropTypes from "prop-types";
import { StyledCircleWrapper, StyledCircleContent } from "./ListCircle.styles";
import { ThemeProvider } from "styled-components";
import {
  M0_QUAKE,
  M2_5_QUAKE,
  M4_5_QUAKE,
  M6_5_QUAKE,
  M6_5_PLUS_QUAKE
} from "../../constants";

const ListCircle = props => {
  const { mag } = props;
  const chooseColor = mag => {
    const theme = {
      color: ""
    };
    if (mag > 0 && mag <= 2.5) {
      theme.color = M2_5_QUAKE;
    } else if (mag > 2.5 && mag <= 4.5) {
      theme.color = M4_5_QUAKE;
    } else if (mag > 4.5 && mag <= 6.5) {
      theme.color = M6_5_QUAKE;
    } else if (mag > 6.5) {
      theme.color = M6_5_PLUS_QUAKE;
    } else {
      theme.color = M0_QUAKE;
    }

    return theme;
  };
  const calcMagnitude = mag => {
    return Math.round(mag.toFixed(2) * 10) / 10;
  };
  return (
    <ThemeProvider theme={chooseColor(mag)}>
      <StyledCircleWrapper>
        <StyledCircleContent>{calcMagnitude(mag)}</StyledCircleContent>
      </StyledCircleWrapper>
    </ThemeProvider>
  );
};

ListCircle.propTypes = {
  mag: PropTypes.number.isRequired
};

export default ListCircle;
