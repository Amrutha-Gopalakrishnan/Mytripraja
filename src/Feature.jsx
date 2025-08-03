// // import { motion } from 'framer-motion';
// // import { CheckCircle2 } from 'lucide-react';
// // import appMockup from './assets/illus.jpg'; // Replace with actual path to the illustration
// // import React from 'react'

// // const features = [
// //   {
// //     title: 'AI Trip Planning',
// //     description: 'Input preferences like dates, budget, and interests to get a complete trip plan with all bookings.',
// //     icon: '🛫',
// //   },
// //   {
// //     title: 'Live Customization',
// //     description: 'Customize any part of your trip and see real-time cost changes without leaving the app.',
// //     icon: '⚙️',
// //   },
// //   {
// //     title: 'Regional Support',
// //     description: 'Multi-language interface and local guides to make travel accessible for all Indian users.',
// //     icon: '🗺️',
// //   },
// // ];

// // const Feature = () => {
// //   return (
// //     <section className="w-full px-4 md:px-12 py-12 bg-white">
// //       <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
// //         <span className="text-purple-600 text-3xl">★</span>
// //         Core Features of the Platform
// //       </h2>

// //       <div className="grid md:grid-cols-3 gap-6 mb-12">
// //         {features.map((feature, index) => (
// //           <motion.div
// //             key={index}
// //             initial={{ opacity: 0, y: 50 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.4, delay: index * 0.2 }}
// //             viewport={{ once: true }}
// //             className="bg-white p-4 rounded-lg shadow-md text-center border"
// //           >
// //             <div className="text-3xl mb-2">{feature.icon}</div>
// //             <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
// //             <p className="text-gray-600 text-sm">{feature.description}</p>
// //           </motion.div>
// //         ))}
// //       </div>

// //       <h3 className="text-center text-xl font-semibold mb-6">App Mockup</h3>

// //       <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
// //         {/* Key User Experience Elements */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -40 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.5 }}
// //           viewport={{ once: true }}
// //           className="bg-white border shadow p-6 rounded-lg w-full max-w-md"
// //         >
// //           <h4 className="font-semibold text-base mb-4">Key User Experience Elements</h4>
// //           <ul className="space-y-3 text-sm text-gray-700">
// //             <li className="flex items-start gap-2">
// //               <CheckCircle2 className="text-green-500 mt-1" size={18} /> Simple preference input with budget slider
// //             </li>
// //             <li className="flex items-start gap-2">
// //               <CheckCircle2 className="text-green-500 mt-1" size={18} /> Visual trip timeline with all bookings
// //             </li>
// //             <li className="flex items-start gap-2">
// //               <CheckCircle2 className="text-green-500 mt-1" size={18} /> Integrated reels/videos of destinations
// //             </li>
// //             <li className="flex items-start gap-2">
// //               <CheckCircle2 className="text-green-500 mt-1" size={18} /> SOS button for emergency assistance
// //             </li>
// //             <li className="flex items-start gap-2">
// //               <CheckCircle2 className="text-green-500 mt-1" size={18} /> No redirection to other websites/apps
// //             </li>
// //           </ul>
// //         </motion.div>

// //         {/* App Mockup Image */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 40 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.5 }}
// //           viewport={{ once: true }}
// //           className="w-full max-w-md"
// //         >
// //           <img src={appMockup} alt="App Mockup" className="rounded-lg w-full" />
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Feature;

// import { motion } from "framer-motion";
// import { FaMapMarkedAlt } from "react-icons/fa";
// import { BsSliders } from "react-icons/bs";
// import { AiTwotoneFlag } from "react-icons/ai";
// import { FaCheckCircle } from "react-icons/fa";
// import MockupImage from "./assets/illus.jpg"; // replace with correct path
// import React from 'react'

// const features = [
//   {
//     icon: <FaMapMarkedAlt className="text-purple-600 text-2xl" />,
//     title: "AI Trip Planning",
//     description:
//       "Input preferences like dates, budget, and interests to get a complete trip plan with all bookings.",
//   },
//   {
//     icon: <BsSliders className="text-purple-600 text-2xl" />,
//     title: "Live Customization",
//     description:
//       "Customize any part of your trip and see real-time cost changes without leaving the app.",
//   },
//   {
//     icon: <AiTwotoneFlag className="text-purple-600 text-2xl" />,
//     title: "Regional Support",
//     description:
//       "Multi-language interface and local guides to make travel accessible for all Indian users.",
//   },
// ];

// const checklistItems = [
//   "Simple preference input with budget slider",
//   "Visual trip timeline with all bookings",
//   "Integrated reels/videos of destinations",
//   "SOS button for emergency assistance",
//   "No redirection to other websites/apps",
// ];

// export default function PlatformFeatures() {
//   return (
//     <div className="py-16 px-4 sm:px-8 lg:px-20 bg-f9fafb" id="features">
//       <motion.h2
//         className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-12 flex items-center justify-center gap-2"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <span className="text-purple-600 text-3xl">★</span> Core Features of the Platform
//       </motion.h2>

//       <div className="grid sm:grid-cols-3 gap-6 mb-16">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             className="bg-white border rounded-lg p-5 shadow-sm"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 * index, duration: 0.5 }}
//           >
//             <div className="flex items-center gap-3 mb-3">
//               <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
//                 {feature.icon}
//               </div>
//               <div className="font-semibold text-lg text-gray-800">{feature.title}</div>
//             </div>
//             <p className="text-sm text-gray-600">{feature.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       <motion.h3
//         className="text-center text-xl sm:text-2xl font-semibold text-gray-900 mb-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//       >
//         App Mockup
//       </motion.h3>

//       <div className="grid sm:grid-cols-2 gap-12 items-center">
//         <motion.div
//           className="bg-white border p-5 rounded-xl shadow-sm"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h4 className="font-semibold text-gray-800 mb-4">Key User Experience Elements</h4>
//           <ul className="space-y-3">
//             {checklistItems.map((item, idx) => (
//               <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
//                 <FaCheckCircle className="text-green-500 mt-0.5" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img
//             src={MockupImage}
//             alt="App mockup"
//             className="w-full max-w-md mx-auto"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

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
