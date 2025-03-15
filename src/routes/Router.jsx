import React from 'react'
import { Routes, Route } from "react-router-dom";
import AgriAssist from '../pages/AgriAssist';
import Services from '../pages/Services';
import Areas from '../pages/Areas';
import Home from '../pages/Home';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/agri-assist" element={<AgriAssist />} />
            <Route path="/services" element={<Services />} />
            <Route path="/areas" element={<Areas />} />
        </Routes>
    </div>
  )
}

export default Router