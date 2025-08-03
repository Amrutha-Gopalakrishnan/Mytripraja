
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRobot,
  FaMapMarkedAlt,
  FaCreditCard,
} from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import {
  SiFlutter,
  SiReact,
  SiFirebase,
  SiNodedotjs,
} from "react-icons/si";
import { BsTrainFrontFill, BsBusFrontFill } from "react-icons/bs";
import { MdApartment, MdOutlineCarRental } from "react-icons/md";

// Framer animation
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TechCard = ({ icon, title, desc }) => (
  <div className="flex items-start gap-3 bg-[#f9fafb] rounded-lg px-5 py-4 shadow-sm">
    <div className="text-indigo-600 text-xl mt-1">{icon}</div>
    <div>
      <p className="font-semibold text-sm text-gray-800">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
    </div>
  </div>
);

const BookingCard = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center border rounded-md p-4 bg-[#f9fafb] shadow-sm">
    <div className="text-2xl mb-1 text-indigo-600">{icon}</div>
    <p className="text-sm font-medium text-gray-800">{label}</p>
  </div>
);

const Tech = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="max-w-6xl mx-auto px-6 py-16 bg-[#f9fafb]"
      id="technology"
    >
      <motion.div
        className="flex items-center justify-center gap-3 mb-10"
        variants={fadeIn}
        custom={1}
      >
        <FaLaptopCode className="text-indigo-600 text-3xl" />
        <h2 className="text-3xl font-bold text-gray-800">Technology Stack</h2>
      </motion.div>

      {/* Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend Development</h3>
          <TechCard
            icon={<SiFlutter />}
            title="Flutter"
            desc="For cross-platform mobile app development"
          />
          <TechCard
            icon={<SiReact />}
            title="React.js"
            desc="For responsive web application frontend"
          />
        </div>

        <div className="bg-white rounded-xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend & Infrastructure</h3>
          <TechCard
            icon={<SiNodedotjs className="text-green-500" />}
            title="Node.js / Firebase"
            desc="For real-time backend performance"
          />
          <TechCard
            icon={<FaAws className="text-orange-500" />}
            title="AWS / Firebase Hosting"
            desc="For cloud infrastructure and scaling"
          />
        </div>
      </div>

      {/* AI & APIs */}
      <div className="bg-white rounded-xl p-6 space-y-4 mb-10">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Integration Technologies</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <TechCard
            icon={<FaRobot className="text-yellow-500" />}
            title="Python AI Engine"
            desc="Powers trip recommendations, budget estimation, and destination suggestions"
          />
          <TechCard
            icon={<FaMapMarkedAlt className="text-rose-500" />}
            title="Google Maps APIs"
            desc="Location services, routing, and time estimation"
          />
          <TechCard
            icon={<FaCreditCard className="text-indigo-500" />}
            title="Razorpay / Paytm"
            desc="Secure payment processing with Indian options"
          />
        </div>
      </div>

      {/* Booking APIs */}
      <div className="bg-white rounded-xl p-6">
        <h3 className="text-lg font-semibold text-center mb-2">Booking Engine APIs</h3>
        <p className="text-sm text-gray-600 text-center mb-6">
          MyTripRaja will integrate with leading Indian B2B travel providers for real-time availability and booking:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <BookingCard icon={<MdApartment />} label="TripJack" />
          <BookingCard icon={<BsBusFrontFill className="text-blue-500" />} label="Akbar Travels B2B" />
          <BookingCard icon={<BsTrainFrontFill className="text-rose-500" />} label="IRCTC Aggregators" />
          <BookingCard icon={<MdOutlineCarRental className="text-green-600" />} label="Savaari" />
        </div>
      </div>
    </motion.div>
  );
};

export default Tech;
