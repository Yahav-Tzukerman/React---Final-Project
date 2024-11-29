import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { useTheme } from "../../contexts/ThemeProvider";

const AppLabel = ({ text }) => {
  const reduxTheme = useSelector((state) => state.theme);
  let theme = reduxTheme.darkMode
    ? reduxTheme.theme.dark
    : reduxTheme.theme.light;

  return (
    <Form.Label
      style={{
        fontSize: "0.9rem",
        color: theme.colors.textMuted,
        fontFamily: theme.fontFamily,
        margin: "5px",
      }}
    >
      {text}
    </Form.Label>
  );
};

export default AppLabel;
