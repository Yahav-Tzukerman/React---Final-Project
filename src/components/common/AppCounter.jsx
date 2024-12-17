import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Overlay, Tooltip, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import appTheme from "../../styles/theme";
import AppButton from "../common/AppButton";

const AppCounter = ({
  counter = 0,
  onChange,
  instructions = "Counter must be greater than or equal to 0.",
}) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;

  const [count, setCount] = useState(counter);
  const [showTooltip, setShowTooltip] = useState(false);
  const countRef = useRef(null);

  const handleDecrement = () => {
    if (count > 0) {
      const newValue = count - 1;
      setCount(newValue);
      onChange && onChange(newValue);
    } else {
      setShowTooltip(true);
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
    }
  };

  const handleIncrement = () => {
    const newValue = count + 1;
    setCount(newValue);
    onChange && onChange(newValue);
  };

  const inputGroupStyle = {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "1.5rem 0.5rem",
  };

  const countStyle = {
    backgroundColor: theme.colors.inputBackground,
    border: "none",
    textAlign: "center",
    width: "50px",
    color: theme.colors.textLight,
    fontFamily: theme.fontFamily,
  };

  return (
    <div style={{ display: "inline-block" }} ref={countRef}>
      <div style={inputGroupStyle}>
        <AppButton
          onClick={handleDecrement}
          label={<FontAwesomeIcon icon={faMinus} />}
          variant="primary"
        />
        <Form.Control
          readOnly
          value={count}
          style={countStyle}
          className="shadow-none"
        />
        <AppButton
          onClick={handleIncrement}
          label={<FontAwesomeIcon icon={faPlus} />}
          variant="primary"
        />
      </div>

      <Overlay target={countRef.current} show={showTooltip} placement="bottom">
        {(overlayProps) => (
          <Tooltip {...overlayProps} style={{ ...overlayProps.style }}>
            {instructions}
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
};

export default AppCounter;
