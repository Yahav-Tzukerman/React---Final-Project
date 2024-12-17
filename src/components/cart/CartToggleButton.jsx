import React, { useState } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import appTheme from "../../styles/theme";
import AppButton from "../common/AppButton";

const CardToggleComp = ({ isCartOpen, onToggleCart }) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = React.useRef(null);

  const handleToggleCart = () => {
    onToggleCart();
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const containerStyle = {
    position: "fixed",
    top: "50%",
    left: isCartOpen ? "33%" : "0",
    transform: "translateY(-50%)",
    transition: "left 0.5s",
  };

  return (
    <div style={containerStyle}>
      <AppButton
        onClick={handleToggleCart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        label={
          <FontAwesomeIcon icon={isCartOpen ? faArrowLeft : faArrowRight} />
        }
        variant="primary"
      />
      <Overlay target={buttonRef.current} show={showTooltip} placement="right">
        {(overlayProps) => (
          <Tooltip {...overlayProps}>
            {isCartOpen ? "Close Cart" : "Open Cart"}
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
};

export default CardToggleComp;