import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import { useSelector } from "react-redux";
import AppButton from "./AppButton";
import appTheme from "../../styles/theme";

const AppErrorPopApp = ({
  handleClose = () => {},
  label = "Something went wrong! Please try again later.",
  show = false,
  variant = "error",
}) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const variantColor =
    variant === "error"
      ? theme.colors.error
      : variant === "warning"
      ? theme.colors.warning
      : theme.colors.success;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Toast
        show={show}
        onClose={handleClose}
        delay={4000}
        autohide
        style={{
          position: "fixed",
          top: "20%",
          left: "60%",
          transform: "translate(-50%, -50%)",
          zIndex: 1050,
          backgroundColor: variantColor,
          color: "white",
        }}
      >
        <Toast.Header>
          <strong
            className="me-auto"
            style={{
              color: variantColor,
            }}
          >
            Error
          </strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>
          <span
            className="me-auto"
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            {label}
          </span>
        </Toast.Body>
      </Toast>
    </div>
  );
};

export default AppErrorPopApp;
