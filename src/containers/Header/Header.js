import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/lib/connect/connect";
import { StyledHeader } from "./Header.styles";
import { ModalGetQuakes, ModalAboutInfo } from "../../components";
import {
  setEarthquakeSearchParamsAction,
  getEarthquakesAction,
  getCountriesInfoAction
} from "../../actions";

class Header extends React.Component {
  static propTypes = {
    setEarthquakeSearchParams: PropTypes.func,
    getEarthquakes: PropTypes.func,
    getCountriesInfo: PropTypes.func
  };

  componentDidMount() {
    this.props.getCountriesInfo();
  }

  render() {
    return (
      <StyledHeader>
        <ModalGetQuakes
          setEarthquakeSearchParams={this.props.setEarthquakeSearchParams}
          getEarthquakes={this.props.getEarthquakes}
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
    getEarthquakes: params => dispatch(getEarthquakesAction(params)),
    getCountriesInfo: () => dispatch(getCountriesInfoAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
