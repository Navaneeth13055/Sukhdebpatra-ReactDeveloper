import { Link } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeContext";
import { useContext } from "react";

export const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        theme === "theme1"
          ? "bg-white shadow-md"
          : theme === "theme2"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className={`text-2xl font-bold ${
            theme === "theme3" ? "font-[Pacifico]" : ""
          }`}
        >
          ThemeApp
        </Link>
        <select
          value={theme}
          onChange={handleThemeChange}
          className={`p-2 rounded ${
            theme === "theme1"
              ? "bg-gray-100"
              : theme === "theme2"
              ? "bg-gray-800 text-white"
              : "bg-white text-purple-600"
          }`}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>
    </header>
  );
};