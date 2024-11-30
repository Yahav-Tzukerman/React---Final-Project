import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { useTheme } from "../../contexts/ThemeProvider";

const AppLabel = ({ text }) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? app.theme.dark : app.theme.light;

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
