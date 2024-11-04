"use client"; // Mark this as a client component

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // check local storage and check system preference
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(storedMode === "true");
    } else {
      const isSystemDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(isSystemDarkMode);
    }
  }, []);

  // Apply the dark class based on state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle mode and save in local storage
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      console.log(prev);
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      console.log(darkMode);
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
