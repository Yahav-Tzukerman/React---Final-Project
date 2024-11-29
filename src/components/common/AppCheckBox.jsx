import React from "react";
import { Form } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";

const AppCheckbox = ({ label, id, checked, onChange }) => {
  const theme = useTheme();

  return (
    <Form.Group className="mb-3" style={{ margin: "0.2rem" }}>
      <Form.Check type="checkbox" id={id}>
        <Form.Check.Input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          isValid={false}
          className="shadow-none"

        />
        <Form.Check.Label
          style={{
            color: theme.colors.textLight,
            fontFamily: theme.fontFamily,
            fontSize: "0.9rem",
            marginLeft: "0.2rem",
          }}
        >
          {label}
        </Form.Check.Label>
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
      </Form.Check>
    </Form.Group>
  );
};

export default AppCheckbox;
