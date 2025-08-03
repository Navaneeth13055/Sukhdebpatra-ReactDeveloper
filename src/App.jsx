
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {  ThemeProvider } from "./contexts/ThemeContext";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Header } from "./Header";



const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen transition-all duration-300">
          <Header />
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
