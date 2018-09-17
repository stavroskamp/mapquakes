import React from "react";
import PropTypes from "prop-types";
import {
  StyledModal,
  StyledModalHeader,
  StyledModalCloseIcon
} from "../Modals.styles";
import { Button } from "../../../components";
import { ModalBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faTimes } from "@fortawesome/free-solid-svg-icons";

class ModalAboutInfo extends React.Component {
  static propTypes = {
    isMobile: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggleModal} yellow="true" menustyle="true">
          <FontAwesomeIcon icon={faQuestion} />
          {!this.props.isMobile ? <span> About</span> : null}
        </Button>
        <StyledModal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <StyledModalHeader toggle={this.toggle}>
            About
            <StyledModalCloseIcon onClick={this.toggleModal} icon={faTimes} />
          </StyledModalHeader>
          <ModalBody>
            <p>Search for earthquakes data.</p>
            <p>
              All the data about the earthquakes are consumed from the USGS api.
              The data are dynamic and can change any time.
            </p>
            <p>
              This website is not responsible for errors in country names,
              borders and bounding boxes.
            </p>
          </ModalBody>
        </StyledModal>
      </React.Fragment>
    );
  }
}

export default ModalAboutInfo;
