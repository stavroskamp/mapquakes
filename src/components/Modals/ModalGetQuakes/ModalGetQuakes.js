import React from "react";
import { StyledModal } from "../Modals.styles";
import { Button } from "../../../components";
import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalGetQuakes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.toggleModal}>Get More Earthquakes</Button>
        <StyledModal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggle}>Title</ModalHeader>
          <ModalBody>Get earthquakes</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </StyledModal>
      </React.Fragment>
    );
  }
}

export default ModalGetQuakes;
