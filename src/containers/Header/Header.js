import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/lib/connect/connect";
import { StyledHeader } from "./Header.styles";
import { ModalGetQuakes, ModalAboutInfo } from "../../components";
import { setEarthquakeSearchParamsAction } from "../../actions";

class Header extends React.Component {
  static propTypes = {
    setEarthquakeSearchParams: PropTypes.func
  };

  render() {
    return (
      <StyledHeader>
        <ModalGetQuakes />
        <ModalAboutInfo />
      </StyledHeader>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setEarthquakeSearchParams: params =>
      dispatch(setEarthquakeSearchParamsAction(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
