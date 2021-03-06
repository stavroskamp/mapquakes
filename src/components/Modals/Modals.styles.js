import styled from "styled-components";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledModal = styled(Modal)`
  display: flex;
  height: 100%;
  align-items: center;
  border-radius: 0;
  margin-top: 0;
  margin-bottom: 0;

  .modal-content {
    /* border-radius: 0; */
    border: 0px;
  }
`;

export const StyledModalBody = styled(ModalBody)`
  padding: 20px 40px;
`;

export const StyledModalHeader = styled(ModalHeader)`
  color: white;
  background: #057c80;
  /* border-top-left-radius: 0;
  border-top-right-radius: 0; */
  border: 0px;

  .modal-title {
    font-size: 18px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledModalFooter = styled(ModalFooter)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

export const StyledModalCloseIcon = styled(FontAwesomeIcon)`
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
