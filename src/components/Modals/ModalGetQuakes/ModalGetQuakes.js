import React from "react";
import PropTypes from "prop-types";
import { StyledModal } from "../Modals.styles";
import { Button, CountrySelect } from "../../../components";
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
  static propTypes = {
    setEarthquakeSearchParams: PropTypes.func,
    getEarthquakes: PropTypes.func,
    countries: PropTypes.array,
    onCountrySelect: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      selectedFromDay: undefined,
      selectedToDay: undefined,
      quakesUnder25: false,
      selectedCountry: ""
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleUnder25Checkbox = this.toggleUnder25Checkbox.bind(this);
    this.getMoreEarthquakes = this.getMoreEarthquakes.bind(this);
    this.handleCountrySelectChange = this.handleCountrySelectChange.bind(this);
    this.handleFromDayChange = this.handleFromDayChange.bind(this);
    this.handleToDayChange = this.handleToDayChange.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }

  toggleUnder25Checkbox() {
    this.setState(prevState => ({
      quakesUnder25: !prevState.quakesUnder25
    }));
  }

  getMoreEarthquakes() {
    const params = {
      ...this.state
    };
    delete params.isModalOpen;

    this.props.setEarthquakeSearchParams(params);
    this.props.getEarthquakes(params);
    this.toggleModal();
  }

  handleCountrySelectChange(country) {
    this.setState({ selectedCountry: country.name });
  }

  handleFromDayChange(day) {
    this.setState({ selectedFromDay: day });
  }

  handleToDayChange(day) {
    this.setState({ selectedToDay: day });
  }

  render() {
    const {
      isModalOpen,
      selectedCountry,
      selectedFromDay,
      selectedToDay,
      quakesUnder25
    } = this.state;

    const { countries } = this.props;

    return (
      <React.Fragment>
        <Button onClick={this.toggleModal} primary="true">
          Get More Earthquakes
        </Button>
        <StyledModal isOpen={isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggle}>Title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>
                  Select a country <br />
                  <CountrySelect
                    countries={countries}
                    selectedCountry={selectedCountry}
                    onChange={this.handleCountrySelectChange}
                  />
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>
                  Select start date <br />
                  <DayPickerInput
                    value={selectedFromDay}
                    onDayChange={this.handleFromDayChange}
                  />
                </Label>
              </FormGroup>
              <FormGroup>
                <Label>
                  Select end date <br />
                  <DayPickerInput
                    value={selectedToDay}
                    onDayChange={this.handleToDayChange}
                  />
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    onChange={this.toggleUnder25Checkbox}
                    defaultChecked={quakesUnder25}
                  />{" "}
                  Include earthquakes smaller than 2.5
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button primary="true" onClick={this.getMoreEarthquakes}>
              Get earthquakes
            </Button>{" "}
            <Button cancel="true" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </StyledModal>
      </React.Fragment>
    );
  }
}

export default ModalGetQuakes;
