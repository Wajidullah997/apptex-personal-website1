import React from "react";
import "./index.css";
import ContactUs from "./components/ContactUs";
import Portfolio from "./components/prot/Portfolio";
import Testimonials from "./components/Test/Testimonials";
import WebDesign from "./components/WebDesign";
import MobileDesign from "./components/MobileDesign";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home />
      <WebDesign />
      <MobileDesign/>
      <Portfolio />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default App;
