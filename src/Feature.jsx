
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaCheckCircle } from "react-icons/fa";
import { BsSliders } from "react-icons/bs";
import { AiTwotoneFlag } from "react-icons/ai";
import MockupImage from "./assets/illus.jpg";
import React from "react";

const features = [
  {
    icon: <FaMapMarkedAlt className="text-purple-600 text-2xl" />,
    title: "AI Trip Planning",
    description:
      "Input preferences like dates, budget, and interests to get a complete trip plan with all bookings.",
  },
  {
    icon: <BsSliders className="text-purple-600 text-2xl" />,
    title: "Live Customization",
    description:
      "Customize any part of your trip and see real-time cost changes without leaving the app.",
  },
  {
    icon: <AiTwotoneFlag className="text-purple-600 text-2xl" />,
    title: "Regional Support",
    description:
      "Multi-language interface and local guides to make travel accessible for all Indian users.",
  },
];

const checklistItems = [
  "Simple preference input with budget slider",
  "Visual trip timeline with all bookings",
  "Integrated reels/videos of destinations",
  "SOS button for emergency assistance",
  "No redirection to other websites/apps",
];

export default function PlatformFeatures() {
  return (
    <div className="bg-[#f9fafb] py-16 px-4 sm:px-8 lg:px-20 scroll-smooth" id="features">
      <motion.h2
        className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-12 flex items-center justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-purple-600 text-3xl">★</span> Core Features of the Platform
      </motion.h2>

      {/* Core Features cards */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#f9fafb] border rounded-lg p-5 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                  {feature.icon}
                </div>
                <div className="font-semibold text-lg text-gray-800">{feature.title}</div>
              </div>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* App Mockup Section */}
      <motion.h3
        className="text-center text-xl sm:text-2xl font-semibold text-gray-900 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        App Mockup
      </motion.h3>

      <div className="grid sm:grid-cols-2 gap-12 items-center">
        <motion.div
          className="bg-white border p-5 rounded-xl shadow-sm"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-semibold text-gray-800 mb-4">Key User Experience Elements</h4>
          <ul className="space-y-3">
            {checklistItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                <FaCheckCircle className="text-green-500 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={MockupImage}
            alt="App mockup"
            className="w-full max-w-md mx-auto rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
}
