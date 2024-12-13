import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import appTheme from "../../styles/theme";

const AppButton = ({ label, onClick, disabled, variant = "primary" }) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const backgroundColor =
    variant === "primary"
      ? theme.colors.primary
      : variant === "error"
      ? theme.colors.error
      : variant === "warning"
      ? theme.colors.warning
      : variant === "update"
      ? theme.colors.update
      : theme.colors.textMuted;

  const hoverColor =
    variant === "primary"
      ? theme.colors.hover
      : variant === "error"
      ? theme.colors.errorHover
      : variant === "warning"
      ? theme.colors.warningHover
      : variant === "update"
      ? theme.colors.updateHover
      : theme.colors.textMuted;

  return (
    <BootstrapButton
      onClick={onClick}
      onMouseEnter={(e) => (e.target.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = backgroundColor)}
      disabled={disabled}
      style={{
        color: theme.colors.buttonText,
        backgroundColor: backgroundColor,
        borderColor:
          variant === "primary" ? theme.colors.primary : theme.colors.textMuted,
        borderRadius: theme.button.borderRadius,
        padding: theme.button.padding,
        fontSize: "1rem",
        fontFamily: theme.fontFamily,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      className="w-100 shadow-none"
    >
      {label}
    </BootstrapButton>
  );
};

export default AppButton;
