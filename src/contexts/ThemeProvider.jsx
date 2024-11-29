import React, { createContext, useContext } from "react";
import theme from "../styles/theme"; // Import your centralized theme file

// 1. Create a Context for the theme
const ThemeContext = createContext(theme);

// 2. Create a custom hook to consume the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// 3. Create a Provider component to wrap the app
const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
