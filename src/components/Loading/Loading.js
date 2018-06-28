import React from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import { LoadingStyledWrapper } from "./Loading.styles";

const Loading = ({ type, color }) => {
  return (
    <LoadingStyledWrapper>
      <ReactLoading type={type} color={color} />
    </LoadingStyledWrapper>
  );
};

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string
};

export default Loading;
