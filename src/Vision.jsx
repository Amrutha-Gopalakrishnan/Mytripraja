
import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaLanguage,
  FaHospitalSymbol,
  FaCheckCircle,
  FaRegLightbulb,
} from "react-icons/fa";
import { MdOutlinePending } from "react-icons/md";

// Animation variant for fade-in
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// Section component with icon and title
const Section = ({ title, icon, children }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={1}
    className="bg-white rounded-xl shadow-md p-12 mb-16"
  >
    <div className="flex items-center justify-center mb-8 gap-3">
      <div className="text-indigo-600 text-3xl">{icon}</div>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    </div>
    {children}
  </motion.div>
);

// Main component
const Vision = () => {
  const subItems = [
    {
      icon: <FaRobot />,
      title: "AI-Powered Planning",
      desc: "Intelligent trip suggestions based on budget, location, duration, and user preferences.",
    },
    {
      icon: <FaLanguage />,
      title: "Multi-Language Support",
      desc: "Empowering users from Tier-2 and Tier-3 cities with regional language options.",
    },
    {
      icon: <FaHospitalSymbol />,
      title: "Emergency Support",
      desc: "Real-time assistance for travelers when they need it most.",
    },
  ];

  const legalItems = [
    "Incorporated as Private Limited Company",
    "PAN, TAN, and GST registration complete",
    "EPFO and ESIC registration",
  ];

  const upcomingItems = [
    "Startup India registration (Travel & Tourism category)",
    "Trademark filing for “MyTripRaja”",
  ];

  return (
    <div className="bg-[#f9fafb] w-full">
      <div className="max-w-6xl mx-auto px-8 py-16" id="vision">
        {/* Business Idea & Vision Section */}
        <Section
          title="Business Idea & Vision"
          icon={<FaRegLightbulb />}
        >
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="text-gray-700 mb-10 text-center text-lg"
          >
            MyTripRaja is an AI-powered travel operating system designed to simplify
            and personalize the entire travel experience for Indian users. The vision
            is to create a single mobile and web platform where users can plan, book,
            and manage trips — including hotels, flights, buses, trains, cabs, food,
            and even local guides — all in one place.
          </motion.p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {subItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 3}
                className="bg-white p-8 rounded-xl text-center shadow-sm flex flex-col items-center"
              >
                <div className="text-indigo-600 text-3xl mb-3">
                  {item.icon}
                </div>
                <p className="font-semibold text-lg mb-2">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Company Structure Section */}
        <Section
          title="Company Structure & Registrations"
          icon={<FaHospitalSymbol />}
        >
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            className="text-gray-700 mb-10 text-center text-lg"
          >
            MyTripRaja operates under the registered company name Raja Deepu Sooriya
            Private Limited, incorporated under the Companies Act through the SPICe+
            form.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Legal Structure */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={7}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="font-semibold text-xl text-center mb-4">
                Legal Structure
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {legalItems.map((text, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Upcoming Registrations */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={8}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="font-semibold text-xl text-center mb-4">
                Upcoming Registrations
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {upcomingItems.map((text, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <MdOutlinePending className="text-orange-500" />
                    {text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Vision;
