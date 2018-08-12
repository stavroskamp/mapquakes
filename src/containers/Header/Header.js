import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/lib/connect/connect";
import {
  StyledHeader,
  LogoWrapper,
  Logo,
  LogoText,
  ButtonsWrapper
} from "./Header.styles";
import { ModalGetQuakes, ModalAboutInfo } from "../../components";
import {
  setEarthquakeSearchParamsAction,
  getEarthquakesAction
} from "../../actions";
import logo from "../../images/logo.png";
import { countries } from "../../constants/countries";
import withSizes from "react-sizes";

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 540
});
class Header extends React.Component {
  static propTypes = {
    setEarthquakeSearchParams: PropTypes.func,
    getEarthquakes: PropTypes.func,
    isMobile: PropTypes.bool
  };

  render() {
    return (
      <StyledHeader>
        <LogoWrapper>
          <Logo alt="logo" src={logo} />
          {!this.props.isMobile ? <LogoText>MapQuakes</LogoText> : null}
        </LogoWrapper>
        <ButtonsWrapper>
          <ModalGetQuakes
            setEarthquakeSearchParams={this.props.setEarthquakeSearchParams}
            getEarthquakes={this.props.getEarthquakes}
            countries={countries}
            isMobile={this.props.isMobile}
          />
          <ModalAboutInfo isMobile={this.props.isMobile} />
        </ButtonsWrapper>
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
)(withSizes(mapSizesToProps)(Header));
