import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

import { useSelector } from "react-redux";

const AppInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  errorMessage,
}) => {
  // const theme = useTheme();
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? app.theme.dark : app.theme.light;
  const [selected, setSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form.Group className="mb-3">
      <InputGroup>
        <Form.Control
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          style={{
            backgroundColor: theme.colors.inputBackground,
            color: theme.colors.textLight,
            borderColor: error
              ? theme.colors.error
              : selected
              ? theme.colors.inputBorderSelected
              : theme.colors.inputBorder,
            borderRadius: theme.input.borderRadius,
            height: theme.input.height,
            fontFamily: theme.fontFamily,
          }}
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
          className="shadow-none"
        />
        {type === "password" && (
          <InputGroup.Text
            onClick={handleTogglePassword}
            style={{
              cursor: "pointer",
              backgroundColor: theme.colors.background,
              borderColor: error
                ? theme.colors.error
                : selected
                ? theme.colors.inputBorderSelected
                : theme.colors.inputBorder,
            }}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon icon={faEye} />
            )}
          </InputGroup.Text>
        )}
      </InputGroup>
      {error && (
        <Form.Text style={{ margin: "5px", color: theme.colors.error }}>
          {errorMessage}
        </Form.Text>
      )}
    </Form.Group>
  );
};

export default AppInput;
