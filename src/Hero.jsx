
import React from "react";
import bgImage from "./assets/hero.jpg"; // adjust as needed
import logo from "./assets/logo.jpg";    // adjust as needed
import { HiOutlineDocumentText, HiOutlinePlay } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-start">
        {/* Logo */}
        <div className="mt-5">
          <img
            src={logo}
            alt="MyTripRaja"
            className="h-20 w-auto rounded-md shadow"
          />
        </div>

        {/* Title */}
        <h1 className="text-black text-2xl md:text-3xl font-semibold mt-2">
          India's First AI-Powered Travel Operating System
        </h1>

        {/* Subtitle */}
        <p className="text-black text-bold md:text-lg mb-6 max-w-2xl">
          Simplifying travel planning and booking for Indian users <br />
          with personalized, budget-optimized experiences in their preferred <br />
          language.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-23">
          <a
            href="#"
            className="border border-purple-500 text-black bg-white font-medium px-5 py-2 rounded-full  hover:bg-purple-600 hover:border-purple-600 hover:text-white transition flex items-center gap-2"
          >
            <HiOutlineDocumentText className="text-purple-500 text-lg" />
            Full Business Plan
          </a>
          <a
            href="#"
            className="border border-green-500 text-black bg-white font-medium px-5 py-2 rounded-full  hover:bg-green-600 hover:border-green-600 hover:text-white transition flex items-center gap-2"
          >
            <HiOutlinePlay className="text-green-500 text-lg" />
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
