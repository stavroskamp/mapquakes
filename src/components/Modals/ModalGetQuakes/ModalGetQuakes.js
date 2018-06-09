import React from "react";
import { StyledModal } from "../Modals.styles";
import { Button } from "../../../components";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

class ModalGetQuakes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      selectedFromDay: undefined,
      selectedToDay: undefined
    };
    this.toggleModal = this.toggleModal.bind(this);

    this.handleFromDayChange = this.handleFromDayChange.bind(this);
    this.handleToDayChange = this.handleToDayChange.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }

  handleFromDayChange(day) {
    this.setState({ selectedFromDay: day });
  }

  handleToDayChange(day) {
    this.setState({ selectedToDay: day });
  }

  render() {
    const { isModalOpen } = this.state;

    return (
      <React.Fragment>
        <Button onClick={this.toggleModal}>Get More Earthquakes</Button>
        <StyledModal isOpen={isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggle}>Title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>
                  Select start date <br />
                  <DayPickerInput onDayChange={this.handleFromDayChange} />
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>
                  Select end date <br />
                  <DayPickerInput onDayChange={this.handleToDayChange} />
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" /> Include earthquakes smaller than 2.5
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>
              Get earthquakes
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
