import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/lib/connect/connect";
import { StyledHeader } from "./Header.styles";
import { ModalGetQuakes, ModalAboutInfo } from "../../components";
import {
  setEarthquakeSearchParamsAction,
  getEarthquakesAction
} from "../../actions";
import { countries } from "../../constants/countries";

class Header extends React.Component {
  static propTypes = {
    setEarthquakeSearchParams: PropTypes.func,
    getEarthquakes: PropTypes.func
  };

  render() {
    return (
      <StyledHeader>
        <ModalGetQuakes
          setEarthquakeSearchParams={this.props.setEarthquakeSearchParams}
          getEarthquakes={this.props.getEarthquakes}
          countries={countries}
        />
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
      dispatch(setEarthquakeSearchParamsAction(params)),
    getEarthquakes: params => dispatch(getEarthquakesAction(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
