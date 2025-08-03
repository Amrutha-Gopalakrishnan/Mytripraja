// // // import { motion } from "framer-motion";
// // // import { FaReact, FaNodeJs, FaAws, FaPython } from "react-icons/fa";
// // // import { SiFlutter, SiFirebase, SiGooglemaps, SiRazorpay } from "react-icons/si";
// // // import { FaTrain, FaCar, FaBus } from "react-icons/fa";
// // // import React from 'react'

// // // const fadeInUp = {
// // //   hidden: { opacity: 0, y: 30 },
// // //   visible: (i) => ({
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { delay: i * 0.1, duration: 0.6 },
// // //   }),
// // // };

// // // const Tech = () => {
// // //   return (
// // //     <section className="py-12 px-4 md:px-20 bg-white">
// // //       <motion.h2
// // //         className="text-2xl md:text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2"
// // //         initial={{ opacity: 0, y: -20 }}
// // //         whileInView={{ opacity: 1, y: 0 }}
// // //         viewport={{ once: true }}
// // //         transition={{ duration: 0.6 }}
// // //       >
// // //         <span className="text-purple-500 text-3xl">💻</span> Technology Stack
// // //       </motion.h2>

// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         {/* Frontend Development */}
// // //         <motion.div
// // //           className="bg-gray-50 p-6 rounded-lg shadow"
// // //           variants={fadeInUp}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           custom={0}
// // //         >
// // //           <h3 className="font-semibold text-lg mb-4">Frontend Development</h3>
// // //           <div className="space-y-3">
// // //             <div className="flex items-center gap-3">
// // //               <SiFlutter className="text-blue-500 text-xl" />
// // //               <span>Flutter — For cross-platform mobile app development</span>
// // //             </div>
// // //             <div className="flex items-center gap-3">
// // //               <FaReact className="text-sky-500 text-xl" />
// // //               <span>React.js — For responsive web application frontend</span>
// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //         {/* Backend */}
// // //         <motion.div
// // //           className="bg-gray-50 p-6 rounded-lg shadow"
// // //           variants={fadeInUp}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           custom={1}
// // //         >
// // //           <h3 className="font-semibold text-lg mb-4">Backend & Infrastructure</h3>
// // //           <div className="space-y-3">
// // //             <div className="flex items-center gap-3">
// // //               <FaNodeJs className="text-green-500 text-xl" />
// // //               <span>Node.js / Firebase — For real-time backend performance</span>
// // //             </div>
// // //             <div className="flex items-center gap-3">
// // //               <FaAws className="text-orange-500 text-xl" />
// // //               <span>AWS / Firebase Hosting — For infrastructure & scaling</span>
// // //             </div>
// // //           </div>
// // //         </motion.div>
// // //       </div>

// // //       {/* AI & APIs */}
// // //       <motion.div
// // //         className="grid md:grid-cols-3 gap-6 my-10"
// // //         variants={fadeInUp}
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: true }}
// // //         custom={2}
// // //       >
// // //         <div className="bg-gray-50 p-6 rounded-lg shadow">
// // //           <h3 className="font-semibold text-lg mb-4">AI & Integration Technologies</h3>
// // //           <div className="space-y-3">
// // //             <div className="flex items-center gap-3">
// // //               <FaPython className="text-yellow-600 text-xl" />
// // //               <span>Python AI Engine — For recommendations & budget estimation</span>
// // //             </div>
// // //             <div className="flex items-center gap-3">
// // //               <SiGooglemaps className="text-red-500 text-xl" />
// // //               <span>Google Maps APIs — Routing, location & time estimation</span>
// // //             </div>
// // //             <div className="flex items-center gap-3">
// // //               <SiRazorpay className="text-indigo-500 text-xl" />
// // //               <span>Razorpay / Paytm — Secure payment gateway integration</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </motion.div>

// // //       {/* Booking Engine APIs */}
// // //       <motion.div
// // //         className="mt-4 bg-gray-50 p-6 rounded-lg shadow"
// // //         variants={fadeInUp}
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: true }}
// // //         custom={3}
// // //       >
// // //         <h3 className="font-semibold text-lg mb-2 text-center">
// // //           Booking Engine APIs
// // //         </h3>
// // //         <p className="text-center text-sm mb-4 text-gray-600">
// // //           MyTripRaja will integrate with leading Indian B2B travel providers for real-time availability and booking:
// // //         </p>
// // //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
// // //           <div className="bg-white border p-3 rounded-md">
// // //             <FaTrain className="mx-auto text-purple-500 text-2xl mb-1" />
// // //             <p className="text-sm font-medium">TripJack</p>
// // //           </div>
// // //           <div className="bg-white border p-3 rounded-md">
// // //             <FaBus className="mx-auto text-blue-500 text-2xl mb-1" />
// // //             <p className="text-sm font-medium">Akbar Travels B2B</p>
// // //           </div>
// // //           <div className="bg-white border p-3 rounded-md">
// // //             <FaTrain className="mx-auto text-red-400 text-2xl mb-1" />
// // //             <p className="text-sm font-medium">IRCTC Aggregators</p>
// // //           </div>
// // //           <div className="bg-white border p-3 rounded-md">
// // //             <FaCar className="mx-auto text-green-500 text-2xl mb-1" />
// // //             <p className="text-sm font-medium">Savaari</p>
// // //           </div>
// // //         </div>
// // //       </motion.div>
// // //     </section>
// // //   );
// // // };

// // // export default Tech;


// // import React from "react";
// // import { motion } from "framer-motion";
// // import {
// //   FaLaptopCode,
// //   FaRobot,
// //   FaMapMarkedAlt,
// //   FaCreditCard,
// // } from "react-icons/fa";
// // import { FaAws } from "react-icons/fa";
// // import {
// //   SiFlutter,
// //   SiReact,
// //   SiFirebase,
// //   SiAmazonaws,
// //   SiNodedotjs,
// // } from "react-icons/si";
// // import { BsTrainFrontFill, BsBusFrontFill } from "react-icons/bs";
// // import { MdApartment, MdOutlineCarRental } from "react-icons/md";

// // // Framer animation
// // const fadeIn = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: (i = 1) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       delay: i * 0.15,
// //       duration: 0.6,
// //       ease: "easeOut",
// //     },
// //   }),
// // };

// // const TechCard = ({ icon, title, desc }) => (
// //   <div className="flex items-start gap-3 bg-white rounded-lg px-5 py-4 shadow-sm">
// //     <div className="text-indigo-600 text-xl mt-1">{icon}</div>
// //     <div>
// //       <p className="font-semibold text-sm text-gray-800">{title}</p>
// //       <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
// //     </div>
// //   </div>
// // );

// // const BookingCard = ({ icon, label }) => (
// //   <div className="flex flex-col items-center justify-center border rounded-md p-4 bg-white shadow-sm">
// //     <div className="text-2xl mb-1 text-indigo-600">{icon}</div>
// //     <p className="text-sm font-medium text-gray-800">{label}</p>
// //   </div>
// // );

// // const Tech = () => {
// //   return (
// //     <motion.div
// //       initial="hidden"
// //       whileInView="visible"
// //       viewport={{ once: true }}
// //       variants={fadeIn}
// //       className="max-w-6xl mx-auto px-6 py-16"
// //     >
// //       <motion.div
// //         className="flex items-center justify-center gap-3 mb-10"
// //         variants={fadeIn}
// //         custom={1}
// //       >
// //         <FaLaptopCode className="text-indigo-600 text-3xl" />
// //         <h2 className="text-3xl font-bold text-gray-800">Technology Stack</h2>
// //       </motion.div>

// //       {/* Main Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
// //         <div className="bg-gray-50 rounded-xl p-6 space-y-4">
// //           <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend Development</h3>
// //           <TechCard
// //             icon={<SiFlutter />}
// //             title="Flutter"
// //             desc="For cross-platform mobile app development"
// //           />
// //           <TechCard
// //             icon={<SiReact />}
// //             title="React.js"
// //             desc="For responsive web application frontend"
// //           />
// //         </div>

// //         <div className="bg-gray-50 rounded-xl p-6 space-y-4">
// //           <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend & Infrastructure</h3>
// //           <TechCard
// //             icon={<SiNodedotjs className="text-green-500" />}
// //             title="Node.js / Firebase"
// //             desc="For real-time backend performance"
// //           />
// //           <TechCard
// //             icon={<SiAmazonaws className="text-orange-500" />}
// //             title="AWS / Firebase Hosting"
// //             desc="For cloud infrastructure and scaling"
// //           />
// //         </div>
// //       </div>

// //       {/* AI & APIs */}
// //       <div className="bg-gray-50 rounded-xl p-6 space-y-4 mb-10">
// //         <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Integration Technologies</h3>
// //         <div className="grid md:grid-cols-3 gap-4">
// //           <TechCard
// //             icon={<FaRobot className="text-yellow-500" />}
// //             title="Python AI Engine"
// //             desc="Powers trip recommendations, budget estimation, and destination suggestions"
// //           />
// //           <TechCard
// //             icon={<FaMapMarkedAlt className="text-rose-500" />}
// //             title="Google Maps APIs"
// //             desc="Location services, routing, and time estimation"
// //           />
// //           <TechCard
// //             icon={<FaCreditCard className="text-indigo-500" />}
// //             title="Razorpay / Paytm"
// //             desc="Secure payment processing with Indian options"
// //           />
// //         </div>
// //       </div>

// //       {/* Booking APIs */}
// //       <div className="bg-gray-50 rounded-xl p-6">
// //         <h3 className="text-lg font-semibold text-center mb-2">Booking Engine APIs</h3>
// //         <p className="text-sm text-gray-600 text-center mb-6">
// //           MyTripRaja will integrate with leading Indian B2B travel providers for real-time availability and booking:
// //         </p>
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //           <BookingCard icon={<MdApartment />} label="TripJack" />
// //           <BookingCard icon={<BsBusFrontFill className="text-blue-500" />} label="Akbar Travels B2B" />
// //           <BookingCard icon={<BsTrainFrontFill className="text-rose-500" />} label="IRCTC Aggregators" />
// //           <BookingCard icon={<MdOutlineCarRental className="text-green-600" />} label="Savaari" />
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export default Tech;

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaLaptopCode,
//   FaRobot,
//   FaMapMarkedAlt,
//   FaCreditCard,
//   FaAws, // ✅ valid icon
// } from "react-icons/fa";
// import {
//   SiFlutter,
//   SiReact,
//   SiFirebase,
//   SiNodedotjs,
// } from "react-icons/si";
// import { BsTrainFrontFill, BsBusFrontFill } from "react-icons/bs";
// import { MdApartment, MdOutlineCarRental } from "react-icons/md";

// // Framer animation
// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const TechCard = ({ icon, title, desc }) => (
//   <div className="flex items-start gap-3 bg-white rounded-lg px-5 py-4 shadow-sm">
//     <div className="text-indigo-600 text-xl mt-1">{icon}</div>
//     <div>
//       <p className="font-semibold text-sm text-gray-800">{title}</p>
//       <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
//     </div>
//   </div>
// );

// const BookingCard = ({ icon, label }) => (
//   <div className="flex flex-col items-center justify-center border rounded-md p-4 bg-white shadow-sm">
//     <div className="text-2xl mb-1 text-indigo-600">{icon}</div>
//     <p className="text-sm font-medium text-gray-800">{label}</p>
//   </div>
// );

// const Tech = () => {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={fadeIn}
//       className="max-w-6xl mx-auto px-6 py-16"
//     >
//       <motion.div
//         className="flex items-center justify-center gap-3 mb-10"
//         variants={fadeIn}
//         custom={1}
//       >
//         <FaLaptopCode className="text-indigo-600 text-3xl" />
//         <h2 className="text-3xl font-bold text-gray-800 text-center">
//           Technology Stack
//         </h2>
//       </motion.div>

//       {/* Main Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div className="bg-gray-50 rounded-xl p-6 space-y-4">
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">Frontend Development</h3>
//           <TechCard
//             icon={<SiFlutter />}
//             title="Flutter"
//             desc="For cross-platform mobile app development"
//           />
//           <TechCard
//             icon={<SiReact />}
//             title="React.js"
//             desc="For responsive web application frontend"
//           />
//         </div>

//         <div className="bg-gray-50 rounded-xl p-6 space-y-4">
//           <h3 className="text-lg font-semibold text-gray-900 mb-2">Backend & Infrastructure</h3>
//           <TechCard
//             icon={<SiNodedotjs className="text-green-500" />}
//             title="Node.js / Firebase"
//             desc="For real-time backend performance"
//           />
//           <TechCard
//             icon={<FaAws className="text-orange-500" />}
//             title="AWS / Firebase Hosting"
//             desc="For cloud infrastructure and scaling"
//           />
//         </div>
//       </div>

//       {/* AI & APIs */}
//       <div className="bg-gray-50 rounded-xl p-6 space-y-4 mb-10">
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Integration Technologies</h3>
//         <div className="grid md:grid-cols-3 gap-4">
//           <TechCard
//             icon={<FaRobot className="text-yellow-500" />}
//             title="Python AI Engine"
//             desc="Powers trip recommendations, budget estimation, and destination suggestions"
//           />
//           <TechCard
//             icon={<FaMapMarkedAlt className="text-rose-500" />}
//             title="Google Maps APIs"
//             desc="Location services, routing, and time estimation"
//           />
//           <TechCard
//             icon={<FaCreditCard className="text-indigo-500" />}
//             title="Razorpay / Paytm"
//             desc="Secure payment processing with Indian options"
//           />
//         </div>
//       </div>

//       {/* Booking APIs */}
//       <div className="bg-gray-50 rounded-xl p-6">
//         <h3 className="text-lg font-semibold text-center mb-2">Booking Engine APIs</h3>
//         <p className="text-sm text-gray-600 text-center mb-6">
//           MyTripRaja will integrate with leading Indian B2B travel providers for real-time availability and booking:
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           <BookingCard icon={<MdApartment />} label="TripJack" />
//           <BookingCard icon={<BsBusFrontFill className="text-blue-500" />} label="Akbar Travels B2B" />
//           <BookingCard icon={<BsTrainFrontFill className="text-rose-500" />} label="IRCTC Aggregators" />
//           <BookingCard icon={<MdOutlineCarRental className="text-green-600" />} label="Savaari" />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Tech;

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
