import React from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { useTheme } from "../../contexts/ThemeProvider";

const AppButton = ({ label, onClick, disabled, variant = "primary" }) => {
  const reduxTheme = useSelector((state) => state.theme);
  let theme = reduxTheme.darkMode
    ? reduxTheme.theme.dark
    : reduxTheme.theme.light;

  return (
    <BootstrapButton
      onClick={onClick}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = theme.colors.hover)
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor =
          variant === "primary" ? theme.colors.primary : theme.colors.textMuted)
      }
      disabled={disabled}
      style={{
        backgroundColor:
          variant === "primary" ? theme.colors.primary : theme.colors.textMuted,
        color: theme.colors.buttonText,
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
