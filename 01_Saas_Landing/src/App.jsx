import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Slider from "./Components/Slider";
import Mission from "./Components/Mission";
import Solutions from "./Components/Solutions";
import Features from "./Components/Features";
import Plans from "./Components/Plans";
import Testimonial from "./Components/Testimonial";
import Faqs from "./Components/Faqs";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="dark:bg-white w-full min-h-screen px-2 ">
      <div className="w-full relative h-fit min-h-screen bg-primary text-white">
        <Navbar />
        <Hero />
        <Slider />
        <Mission />
        <Solutions />
        <Features />
        <Plans />
        <Testimonial />
        <Faqs />
        <Footer />
      </div>
    </div>
  );
}
