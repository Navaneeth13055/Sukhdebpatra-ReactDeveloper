import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-all duration-300 ${
        theme === "theme1"
          ? "bg-gray-100 font-[Roboto]"
          : theme === "theme2"
          ? "bg-gray-800 text-white font-[Merriweather] flex"
          : "bg-yellow-100 font-[Pacifico]"
      }`}
    >
      {theme === "theme2" && (
        <aside className="w-1/4 p-4 bg-gray-900">
          <h2 className="text-xl mb-4">Sidebar</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </aside>
      )}
      <div className={theme === "theme2" ? "w-3/4 p-4" : "w-full"}>
        <h1
          className={`text-3xl mb-4 ${
            theme === "theme3" ? "text-purple-600" : ""
          }`}
        >
          Contact Us
        </h1>
        <p className="mb-4">
          Get in touch with us for any inquiries or feedback.
        </p>
        <button
          className={`px-4 py-2 rounded mb-4 ${
            theme === "theme1"
              ? "bg-blue-500 text-white"
              : theme === "theme2"
              ? "bg-red-600 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          Send Message
        </button>
        <div
          className={
            theme === "theme3"
              ? "grid grid-cols-1 md:grid-cols-2 gap-4"
              : "space-y-4"
          }
        >
          <div
            className={
              theme === "theme1"
                ? "bg-white p-4 shadow"
                : theme === "theme2"
                ? "bg-gray-700 p-4"
                : "bg-white p-4 rounded-lg shadow-lg"
            }
          >
            <h3 className="text-lg">Email</h3>
            <p>sukhdebpatra1@gmail.com</p>
          </div>
          <div
            className={
              theme === "theme1"
                ? "bg-white p-4 shadow"
                : theme === "theme2"
                ? "bg-gray-700 p-4"
                : "bg-white p-4 rounded-lg shadow-lg"
            }
          >
            <h3 className="text-lg">Phone</h3>
            <p>+91-7903845176</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
