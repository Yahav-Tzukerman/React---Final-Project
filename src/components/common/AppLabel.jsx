import React from "react";
import { Form } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";

const AppLabel = ({ text }) => {
  const theme = useTheme();

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
