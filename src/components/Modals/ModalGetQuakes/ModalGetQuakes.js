import React from "react";
import PropTypes from "prop-types";
import { MIN_MAGNITUDE } from "../../../constants";
import {
  StyledModal,
  StyledModalBody,
  StyledModalHeader,
  StyledModalCloseIcon,
  StyledModalFooter
} from "../Modals.styles";
import { StyledFormGroup } from "./ModalGetQuakes.styles";
import { Button, CountrySelect } from "../../../components";
import { Form, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

class ModalGetQuakes extends React.Component {
  static propTypes = {
    setEarthquakeSearchParams: PropTypes.func,
    getEarthquakes: PropTypes.func,
    countries: PropTypes.array,
    onCountrySelect: PropTypes.func,
    isMobile: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      selectedFromDay: undefined,
      selectedToDay: undefined,
      hasMinMagnitude: false,
      selectedCountry: ""
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  };

  toggleUnder25Checkbox = () => {
    this.setState(prevState => ({
      hasMinMagnitude: !prevState.hasMinMagnitude
    }));
  };

  getMoreEarthquakes = () => {
    const params = {
      ...this.state
    };
    delete params.isModalOpen;

    this.props.setEarthquakeSearchParams(params);
    this.props.getEarthquakes(params);
    this.toggleModal();
  };

  handleCountrySelectChange = country => {
    this.setState({ selectedCountry: country.name });
  };

  handleFromDayChange = day => {
    this.setState({ selectedFromDay: day });
  };

  handleToDayChange = day => {
    this.setState({ selectedToDay: day });
  };

  render() {
    const {
      isModalOpen,
      selectedCountry,
      selectedFromDay,
      selectedToDay,
      hasMinMagnitude
    } = this.state;

    const { countries } = this.props;

    return (
      <React.Fragment>
        <Button onClick={this.toggleModal} yellow="true" menustyle="true">
          <FontAwesomeIcon icon={faSearch} />
          {!this.props.isMobile ? <span> Advanced Search</span> : null}
        </Button>
        <StyledModal isOpen={isModalOpen} toggle={this.toggleModal}>
          <StyledModalHeader toggle={this.toggle}>
            <span>Search with specific parameters</span>
            <StyledModalCloseIcon onClick={this.toggleModal} icon={faTimes} />
          </StyledModalHeader>
          <StyledModalBody>
            <Form>
              <StyledFormGroup>
                <Label>
                  Select country area <br />
                  <CountrySelect
                    countries={countries}
                    selectedCountry={selectedCountry}
                    onChange={this.handleCountrySelectChange}
                  />
                </Label>
              </StyledFormGroup>
              <StyledFormGroup>
                <Label>
                  Select start date <br />
                  <DayPickerInput
                    placeholder="YYYY-MM-DD"
                    value={selectedFromDay}
                    onDayChange={this.handleFromDayChange}
                  />
                </Label>
              </StyledFormGroup>
              <StyledFormGroup>
                <Label>
                  Select end date <br />
                  <DayPickerInput
                    placeholder="YYYY-MM-DD"
                    value={selectedToDay}
                    onDayChange={this.handleToDayChange}
                  />
                </Label>
              </StyledFormGroup>
              <StyledFormGroup check shallow={1}>
                <Label check>
                  <Input
                    type="checkbox"
                    onChange={this.toggleUnder25Checkbox}
                    defaultChecked={hasMinMagnitude}
                  />
                  Include earthquakes with magnitude {"<"} {MIN_MAGNITUDE}
                </Label>
              </StyledFormGroup>
            </Form>
          </StyledModalBody>
          <StyledModalFooter>
            <Button yellow="true" onClick={this.getMoreEarthquakes}>
              Get earthquakes
            </Button>{" "}
            <Button cancel="true" onClick={this.toggleModal}>
              Cancel
            </Button>
          </StyledModalFooter>
        </StyledModal>
      </React.Fragment>
    );
  }
}

export default ModalGetQuakes;
