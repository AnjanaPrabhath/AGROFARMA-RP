import React from "react";
import { Routes, Route } from "react-router-dom";
import AgriAssist from "../pages/AgriAssist";
import Services from "../pages/Services";
import Areas from "../pages/Areas";
import Home from "../pages/Home";
import Alternatives from "../pages/alternatives/Alternatives";
import Recommendations from "../pages/alternatives/Recommendations";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ProtectedRoute from "./ProtectedRoutes";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agri-assist" element={<AgriAssist />} />
        <Route path="/services" element={<Services />} />
        <Route path="/areas" element={<Areas />} />
        <Route
          path="/alternatives"
          element={
            <ProtectedRoute>
              <Alternatives />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recommendations"
          element={
            <ProtectedRoute>
              <Recommendations />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Router;
