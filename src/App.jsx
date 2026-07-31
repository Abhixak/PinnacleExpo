import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatBtn from "./Components/FloatBtn";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Seo from "./Components/Seo";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import LondonColognes from "./Pages/LondonColognes";
import PerfumeDetail from "./Pages/PerfumeDetail";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <Seo />
      <FloatBtn />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/london-colognes" element={<LondonColognes />} />
        <Route path="/london-colognes/:perfumeName" element={<PerfumeDetail />} />
        <Route path="/indian-rice" element={<Products defaultCategory="Indian Rice" />} />
        <Route path="/jasmine-rice" element={<Products defaultCategory="Jasmine Rice" />} />
        <Route path="/lubricants" element={<Products defaultCategory="Engine Lubricants" />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
