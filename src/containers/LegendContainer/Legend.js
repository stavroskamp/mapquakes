import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleButtonAction } from "../../actions";
import { StyledLegend } from "./Legend.styles";
import Button from "../../components/Button/Button";

class LegendContainer extends React.Component {
  static propTypes = {
    toggleButtonAction: PropTypes.func,
    dispatch: PropTypes.func.isRequired
  };

  buttonClick = () => {
    this.props.dispatch(toggleButtonAction());
  };

  render() {
    return (
      <StyledLegend>
        <Button onClick={this.buttonClick} />
      </StyledLegend>
    );
  }
}

const mapStateToProps = state => {
  const { toggleButtonAction } = state;

  return { toggleButtonAction };
};

export default connect(mapStateToProps)(LegendContainer);
