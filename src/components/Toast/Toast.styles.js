import styled from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

export const ToastStyled = styled(ToastContainer)`
  .Toastify__toast {
    font-family: "Open Sans";
    border-radius: 3px;
  }

  .Toastify__toast-body {
    padding-left: 5px;
  }

  .Toastify__toast--success {
    background: mediumseagreen;
  }

  .Toastify__toast--error {
    background: tomato;
  }
`;
