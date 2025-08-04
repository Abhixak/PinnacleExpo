import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatBtn from "./Components/FloatBtn";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <FloatBtn />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
