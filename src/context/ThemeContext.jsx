"use client";

import { createContext, useState } from "react";

// Export ThemeContext
export const ThemeContext = createContext({
  darkMode: true, // Default value
  toggleDarkMode: () => {},
});

// Export ThemeProvider
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true); // Initialize state as true (dark mode by default)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};