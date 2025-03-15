import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Addvertise from "./components/Addvertise";
import Newsletter from "./components/Newsletter";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import Components from "./components/Components";


function App() {
  return (
    <div>
      <Navbar/> 
      <Hero/>
      <Addvertise/>
      <Components/>
      
      
      <Footer/>
      
    </div>
  );
}

export default App;
