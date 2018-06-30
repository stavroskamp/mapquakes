import React from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastStyled } from "./Toast.styles.js";

const Toast = () => {
  return (
    <ToastStyled
      position="top-center"
      autoClose={3500}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable={false}
      pauseOnHover={false}
    />
  );
};

export default Toast;
