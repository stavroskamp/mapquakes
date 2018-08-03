import styled, { css } from "styled-components";
import { FormGroup } from "reactstrap";

const isShallow = props => {
  if (props.shallow) {
    return css`
      height: 30px;
    `;
  }
};

export const StyledFormGroup = styled(FormGroup)`
  height: 70px;
  ${isShallow};

  .Select-control,
  .Select-menu-outer {
    width: 230px;
  }

  .DayPickerInput {
    input {
      height: 36px;
      width: 230px;
      border-radius: 3px;
      border: 1px solid #d9d9d9;
    }
  }
`;
