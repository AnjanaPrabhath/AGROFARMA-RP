import React from 'react'
import { Routes, Route } from "react-router-dom";
import AgriAssist from '../pages/AgriAssist';
import Services from '../pages/Services';
import Areas from '../pages/Areas';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import GrowthAnalyze from '../pages/GrowthAnalyze';
import MarketPricePrediction from '../pages/MarketPricePrediction';
import Solutions from '../pages/Solutions';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/agri-assist" element={<AgriAssist />} />
            <Route path="/services" element={<Services />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/growth-analyze" element={<GrowthAnalyze />} />
            <Route path="/market-price-prediction" element={<MarketPricePrediction />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

        </Routes>
    </div>
  )
}

export default Router