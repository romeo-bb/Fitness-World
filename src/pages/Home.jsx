import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import HowWeWork from "../components/HowWeWork";
import Pricing from "../components/pricing/Pricing";
import FitNews from "../components/FitNews";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import img1 from "../image/ssi2.PNG";

const Home = () => {
  return (
    <div className="w-full h-auto">
      <img className="z-0 absolute bimge" src={img1} alt="" />
      <Navbar />
      <Hero />
      <About />
      <HowWeWork />
      <Pricing />
      <FitNews />
      <Faqs />
      <Footer />
    </div>
  )
}
export default Home;