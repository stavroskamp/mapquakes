import React from "react";
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
          <FontAwesomeIcon icon={faQuestion} /> About
        </Button>
        <StyledModal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <StyledModalHeader toggle={this.toggle}>
            About
            <StyledModalCloseIcon onClick={this.toggleModal} icon={faTimes} />
          </StyledModalHeader>
          <ModalBody>
            {"The application is not responsible for country names, borders, "}
            {"This website is not affiliated in"}
          </ModalBody>
        </StyledModal>
      </React.Fragment>
    );
  }
}

export default ModalAboutInfo;
