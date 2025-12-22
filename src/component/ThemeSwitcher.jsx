import { createContext, useContext, useEffect, useState } from "react";

/* ---------- Context ---------- */
const ThemeContext = createContext();

/* ---------- Provider + UI ---------- */
export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          minHeight: "100vh",
          background: theme === "light" ? "#ffffff" : "#121212",
          color: theme === "light" ? "#000000" : "#ffffff",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>{theme.toUpperCase()} MODE</h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}
