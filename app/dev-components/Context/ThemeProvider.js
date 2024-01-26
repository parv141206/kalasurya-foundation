"use client";
const { createContext, useState } = require("react");

const Theme = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>
  );
}
export default Theme;
