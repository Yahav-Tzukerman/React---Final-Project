import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const AppThemeToggle = () => {
  const dispatch = useDispatch();
  const reduxTheme = useSelector((state) => state.theme);
  const theme = reduxTheme.darkMode
    ? reduxTheme.theme.dark
    : reduxTheme.theme.light;

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <Form className="ml-auto" style={{ position: "relative" }}>
      <Form.Check
        type="switch"
        id="theme-switch"
        onChange={handleThemeToggle}
        checked={reduxTheme.darkMode}
        label=""
        style={{
          paddingLeft: "4.4rem",
          paddingRight: "1.2rem",
        }}
      />
      <span
        style={{
          position: "absolute",
          left: "0.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          color: theme.colors.textLight,
        }}
      >
        <FontAwesomeIcon
          icon={faSun}
          style={{ visibility: reduxTheme.darkMode ? "hidden" : "visible" }}
        />
      </span>
      <span
        style={{
          position: "absolute",
          right: "0.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          color: theme.colors.textLight,
        }}
      >
        <FontAwesomeIcon
          icon={faMoon}
          style={{ visibility: reduxTheme.darkMode ? "visible" : "hidden" }}
        />
      </span>
    </Form>
  );
};

export default AppThemeToggle;
