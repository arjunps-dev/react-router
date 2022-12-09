import React from 'react'
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Route, Routes } from 'react-router-dom';
const MainRouter = () => {
  return (
    <div>
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default MainRouter