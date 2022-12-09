import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { Route, Routes } from 'react-router-dom';
const MainRouter = () => {
  return (
    <div>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default MainRouter