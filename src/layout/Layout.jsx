import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Router from "../routes/Router";

const location = window.location.pathname;

const Layout = () => {
  return (
    <div>
      {location !== "/signin" && <Navbar />}
      <Router />
      {location !== "/signin" && <Footer />}
    </div>
  );
};

export default Layout;
