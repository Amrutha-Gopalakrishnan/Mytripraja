// // // // // // import React from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import { FaRobot, FaLanguage, FaHospitalSymbol, FaCheckCircle, FaRegLightbulb } from "react-icons/fa";
// // // // // // import { MdOutlinePending } from "react-icons/md";

// // // // // // const fadeInUp = {
// // // // // //   hidden: { opacity: 0, y: 40 },
// // // // // //   visible: (i = 1) => ({
// // // // // //     opacity: 1,
// // // // // //     y: 0,
// // // // // //     transition: {
// // // // // //       delay: i * 0.2,
// // // // // //       duration: 0.6,
// // // // // //       ease: "easeOut",
// // // // // //     },
// // // // // //   }),
// // // // // // };

// // // // // // const Section = ({ title, icon, children }) => (
// // // // // //   <motion.div
// // // // // //     variants={fadeInUp}
// // // // // //     initial="hidden"
// // // // // //     whileInView="visible"
// // // // // //     viewport={{ once: true }}
// // // // // //     className="bg-white rounded-xl shadow-md p-6 mb-6"
// // // // // //   >
// // // // // //     <div className="flex items-center mb-4">
// // // // // //       <div className="text-indigo-600 text-2xl mr-2">{icon}</div>
// // // // // //       <h2 className="text-xl font-bold text-gray-800">{title}</h2>
// // // // // //     </div>
// // // // // //     {children}
// // // // // //   </motion.div>
// // // // // // );

// // // // // // const Vision = () => {
// // // // // //   return (
// // // // // //     <div className="max-w-7xl mx-auto px-8 py-15">
// // // // // //       <Section title="Business Idea & Vision" icon={<FaRegLightbulb />}>
// // // // // //         <p className="text-gray-700 mb-4">
// // // // // //           MyTripRaja is an AI-powered travel operating system designed to simplify and personalize the entire travel experience for Indian users. The vision is to create a single mobile and web platform where users can plan, book, and manage trips — including hotels, flights, buses, trains, cabs, food, and even local guides — all in one place.
// // // // // //         </p>
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // // //           <div className="bg-indigo-50 p-4 rounded-md">
// // // // // //             <div className="text-indigo-600 text-xl mb-2">
// // // // // //               <FaRobot />
// // // // // //             </div>
// // // // // //             <p className="font-semibold">AI-Powered Planning</p>
// // // // // //             <p className="text-sm text-gray-600">Intelligent trip suggestions based on budget, location, duration, and user preferences.</p>
// // // // // //           </div>
// // // // // //           <div className="bg-indigo-50 p-4 rounded-md">
// // // // // //             <div className="text-indigo-600 text-xl mb-2">
// // // // // //               <FaLanguage />
// // // // // //             </div>
// // // // // //             <p className="font-semibold">Multi-Language Support</p>
// // // // // //             <p className="text-sm text-gray-600">Empowering users from Tier-2 and Tier-3 cities with regional language options.</p>
// // // // // //           </div>
// // // // // //           <div className="bg-indigo-50 p-4 rounded-md">
// // // // // //             <div className="text-indigo-600 text-xl mb-2">
// // // // // //               <FaHospitalSymbol />
// // // // // //             </div>
// // // // // //             <p className="font-semibold">Emergency Support</p>
// // // // // //             <p className="text-sm text-gray-600">Real-time assistance for travelers when they need it most.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </Section>

// // // // // //       <Section title="Company Setup" icon={<FaRegLightbulb />}>
// // // // // //         <p className="text-gray-700 mb-4">
// // // // // //           MyTripRaja operates under the registered company name Raja Deepu Sooriya Private Limited, incorporated under the Companies Act through the SPICe+ form.
// // // // // //         </p>
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // // // //           <div className="bg-green-50 p-4 rounded-md">
// // // // // //             <h3 className="font-semibold mb-2">Legal Structure</h3>
// // // // // //             <ul className="text-sm text-gray-700 space-y-1">
// // // // // //               <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Incorporated as Private Limited Company</li>
// // // // // //               <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> PAN, TAN, and GST registration complete</li>
// // // // // //               <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> EPFO and ESIC registration</li>
// // // // // //             </ul>
// // // // // //           </div>
// // // // // //           <div className="bg-orange-50 p-4 rounded-md">
// // // // // //             <h3 className="font-semibold mb-2">Upcoming Registrations</h3>
// // // // // //             <ul className="text-sm text-gray-700 space-y-1">
// // // // // //               <li className="flex items-center gap-2"><MdOutlinePending className="text-orange-500" /> Startup India registration (Travel & Tourism category)</li>
// // // // // //               <li className="flex items-center gap-2"><MdOutlinePending className="text-orange-500" /> Trademark filing for “MyTripRaja”</li>
// // // // // //             </ul>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </Section>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Vision;


// // // // // import React from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import { FaRobot, FaLanguage, FaHospitalSymbol, FaCheckCircle, FaRegLightbulb } from "react-icons/fa";
// // // // // import { MdOutlinePending } from "react-icons/md";

// // // // // const fadeInUp = {
// // // // //   hidden: { opacity: 0, y: 40 },
// // // // //   visible: (i = 1) => ({
// // // // //     opacity: 1,
// // // // //     y: 0,
// // // // //     transition: {
// // // // //       delay: i * 0.2,
// // // // //       duration: 0.6,
// // // // //       ease: "easeOut",
// // // // //     },
// // // // //   }),
// // // // // };

// // // // // const Section = ({ title, icon, children }) => (
// // // // //   <motion.div
// // // // //     variants={fadeInUp}
// // // // //     initial="hidden"
// // // // //     whileInView="visible"
// // // // //     viewport={{ once: true }}
// // // // //     className="bg-white rounded-xl shadow-md p-8 mb-10"
// // // // //   >
// // // // //     <div className="flex flex-col items-center mb-6">
// // // // //       <div className="text-indigo-600 text-3xl mb-2">{icon}</div>
// // // // //       <h2 className="text-2xl font-bold text-gray-800 text-center">{title}</h2>
// // // // //     </div>
// // // // //     {children}
// // // // //   </motion.div>
// // // // // );

// // // // // const Vision = () => {
// // // // //   return (
// // // // //     <div className="max-w-5xl mx-auto px-6 py-12">
// // // // //       <Section title="Business Idea & Vision" icon={<FaRegLightbulb />}>
// // // // //         <p className="text-gray-700 mb-6 text-center">
// // // // //           MyTripRaja is an AI-powered travel operating system designed to simplify and personalize the entire travel experience for Indian users. The vision is to create a single mobile and web platform where users can plan, book, and manage trips — including hotels, flights, buses, trains, cabs, food, and even local guides — all in one place.
// // // // //         </p>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// // // // //           <div className="bg-indigo-50 p-6 rounded-md text-center">
// // // // //             <div className="text-indigo-600 text-2xl mb-2">
// // // // //               <FaRobot />
// // // // //               <p className="font-semibold mb-1">AI-Powered Planning</p>
// // // // //             <p className="text-sm text-gray-600">Intelligent trip suggestions based on budget, location, duration, and user preferences.</p>

// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="bg-indigo-50 p-6 rounded-md text-center">
// // // // //             <div className="text-indigo-600 text-2xl mb-2">
// // // // //               <FaLanguage />
// // // // //             </div>
// // // // //             <p className="font-semibold mb-1">Multi-Language Support</p>
// // // // //             <p className="text-sm text-gray-600">Empowering users from Tier-2 and Tier-3 cities with regional language options.</p>
// // // // //           </div>
// // // // //           <div className="bg-indigo-50 p-6 rounded-md text-center">
// // // // //             <div className="text-indigo-600 text-2xl mb-2">
// // // // //               <FaHospitalSymbol />
// // // // //             </div>
// // // // //             <p className="font-semibold mb-1">Emergency Support</p>
// // // // //             <p className="text-sm text-gray-600">Real-time assistance for travelers when they need it most.</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </Section>

// // // // //       <Section title="Company Setup" icon={<FaRegLightbulb />}>
// // // // //         <p className="text-gray-700 mb-6 text-center">
// // // // //           MyTripRaja operates under the registered company name Raja Deepu Sooriya Private Limited, incorporated under the Companies Act through the SPICe+ form.
// // // // //         </p>
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //           <div className="bg-green-50 p-6 rounded-md">
// // // // //             <h3 className="font-semibold mb-3 text-center">Legal Structure</h3>
// // // // //             <ul className="text-sm text-gray-700 space-y-2">
// // // // //               <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Incorporated as Private Limited Company</li>
// // // // //               <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> PAN, TAN, and GST registration complete</li>
// // // // //               <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> EPFO and ESIC registration</li>
// // // // //             </ul>
// // // // //           </div>
// // // // //           <div className="bg-orange-50 p-6 rounded-md">
// // // // //             <h3 className="font-semibold mb-3 text-center">Upcoming Registrations</h3>
// // // // //             <ul className="text-sm text-gray-700 space-y-2">
// // // // //               <li className="flex items-center gap-2"><MdOutlinePending className="text-orange-500" /> Startup India registration (Travel & Tourism category)</li>
// // // // //               <li className="flex items-center gap-2"><MdOutlinePending className="text-orange-500" /> Trademark filing for “MyTripRaja”</li>
// // // // //             </ul>
// // // // //           </div>
// // // // //         </div>
// // // // //       </Section>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Vision;


// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import {
// // // //   FaRobot,
// // // //   FaLanguage,
// // // //   FaHospitalSymbol,
// // // //   FaCheckCircle,
// // // //   FaRegLightbulb,
// // // // } from "react-icons/fa";
// // // // import { MdOutlinePending } from "react-icons/md";

// // // // // Animation variant for fade-in
// // // // const fadeInUp = {
// // // //   hidden: { opacity: 0, y: 40 },
// // // //   visible: (custom) => ({
// // // //     opacity: 1,
// // // //     y: 0,
// // // //     transition: {
// // // //       delay: custom * 0.2,
// // // //       duration: 0.6,
// // // //       ease: "easeOut",
// // // //     },
// // // //   }),
// // // // };

// // // // // Section component with icon and title in one line centered
// // // // const Section = ({ title, icon, children }) => (
// // // //   <motion.div
// // // //     variants={fadeInUp}
// // // //     initial="hidden"
// // // //     whileInView="visible"
// // // //     viewport={{ once: true }}
// // // //     custom={1}
// // // //     className="bg-white rounded-xl shadow-md p-12 mb-16"
// // // //   >
// // // //     <div className="flex items-center justify-center mb-8 gap-3">
// // // //       <div className="text-indigo-600 text-3xl">{icon}</div>
// // // //       <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
// // // //     </div>
// // // //     {children}
// // // //   </motion.div>
// // // // );

// // // // // Main component
// // // // const Vision = () => {
// // // //   const subItems = [
// // // //     {
// // // //       icon: <FaRobot />,
// // // //       title: "AI-Powered Planning",
// // // //       desc: "Intelligent trip suggestions based on budget, location, duration, and user preferences.",
// // // //       color: "indigo",
// // // //     },
// // // //     {
// // // //       icon: <FaLanguage />,
// // // //       title: "Multi-Language Support",
// // // //       desc: "Empowering users from Tier-2 and Tier-3 cities with regional language options.",
// // // //       color: "indigo",
// // // //     },
// // // //     {
// // // //       icon: <FaHospitalSymbol />,
// // // //       title: "Emergency Support",
// // // //       desc: "Real-time assistance for travelers when they need it most.",
// // // //       color: "indigo",
// // // //     },
// // // //   ];

// // // //   const legalItems = [
// // // //     "Incorporated as Private Limited Company",
// // // //     "PAN, TAN, and GST registration complete",
// // // //     "EPFO and ESIC registration",
// // // //   ];

// // // //   const upcomingItems = [
// // // //     "Startup India registration (Travel & Tourism category)",
// // // //     "Trademark filing for “MyTripRaja”",
// // // //   ];

// // // //   return (
// // // //     <div className="max-w-6xl mx-auto px-8 py-16">
// // // //       <Section title="Business Idea & Vision" icon={<FaRegLightbulb />}>
// // // //         <motion.p
// // // //           variants={fadeInUp}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true }}
// // // //           custom={2}
// // // //           className="text-gray-700 mb-10 text-center text-lg"
// // // //         >
// // // //           MyTripRaja is an AI-powered travel operating system designed to simplify
// // // //           and personalize the entire travel experience for Indian users. The vision
// // // //           is to create a single mobile and web platform where users can plan, book,
// // // //           and manage trips — including hotels, flights, buses, trains, cabs, food,
// // // //           and even local guides — all in one place.
// // // //         </motion.p>

        

// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // // //           {subItems.map((item, index) => (
// // // //             <motion.div
// // // //               key={index}
// // // //               variants={fadeInUp}
// // // //               initial="hidden"
// // // //               whileInView="visible"
// // // //               viewport={{ once: true }}
// // // //               custom={index + 3}
// // // //               className={`bg-${item.color}-50 p-8 rounded-xl text-center shadow-sm`}
// // // //             >
// // // //               <div className={`text-${item.color}-600 text-3xl mb-3`}>
// // // //                 {item.icon}
// // // //               </div>
// // // //               <p className="font-semibold text-lg mb-2">{item.title}</p>
// // // //               <p className="text-sm text-gray-600">{item.desc}</p>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </Section>

// // // //       <Section title="Company Setup" icon={<FaRegLightbulb />}>
// // // //         <motion.p
// // // //           variants={fadeInUp}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true }}
// // // //           custom={6}
// // // //           className="text-gray-700 mb-10 text-center text-lg"
// // // //         >
// // // //           MyTripRaja operates under the registered company name Raja Deepu Sooriya
// // // //           Private Limited, incorporated under the Companies Act through the SPICe+
// // // //           form.
// // // //         </motion.p>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// // // //           <motion.div
// // // //             variants={fadeInUp}
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             custom={7}
// // // //             className="bg-green-50 p-8 rounded-xl shadow-sm"
// // // //           >
// // // //             <h3 className="font-semibold text-xl text-center mb-4">
// // // //               Legal Structure
// // // //             </h3>
// // // //             <ul className="space-y-3 text-sm text-gray-700">
// // // //               {legalItems.map((text, idx) => (
// // // //                 <li key={idx} className="flex items-center gap-2">
// // // //                   <FaCheckCircle className="text-green-600" />
// // // //                   {text}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </motion.div>

// // // //           <motion.div
// // // //             variants={fadeInUp}
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             custom={8}
// // // //             className="bg-orange-50 p-8 rounded-xl shadow-sm"
// // // //           >
// // // //             <h3 className="font-semibold text-xl text-center mb-4">
// // // //               Upcoming Registrations
// // // //             </h3>
// // // //             <ul className="space-y-3 text-sm text-gray-700">
// // // //               {upcomingItems.map((text, idx) => (
// // // //                 <li key={idx} className="flex items-center gap-2">
// // // //                   <MdOutlinePending className="text-orange-500" />
// // // //                   {text}
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </motion.div>
// // // //         </div>
// // // //       </Section>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Vision;

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import {
// // //   FaRobot,
// // //   FaLanguage,
// // //   FaHospitalSymbol,
// // //   FaCheckCircle,
// // //   FaRegLightbulb,
// // // } from "react-icons/fa";
// // // import { MdOutlinePending } from "react-icons/md";

// // // // Animation variant for fade-in
// // // const fadeInUp = {
// // //   hidden: { opacity: 0, y: 40 },
// // //   visible: (custom) => ({
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: {
// // //       delay: custom * 0.2,
// // //       duration: 0.6,
// // //       ease: "easeOut",
// // //     },
// // //   }),
// // // };

// // // // Section component with icon and title in one line centered
// // // const Section = ({ title, icon, children }) => (
// // //   <motion.div
// // //     variants={fadeInUp}
// // //     initial="hidden"
// // //     whileInView="visible"
// // //     viewport={{ once: true }}
// // //     custom={1}
// // //     className="bg-white rounded-xl shadow-md p-12 mb-16"
// // //   >
// // //     <div className="flex items-center justify-center mb-8 gap-3">
// // //       <div className="text-indigo-600 text-3xl">{icon}</div>
// // //       <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
// // //     </div>
// // //     {children}
// // //   </motion.div>
// // // );

// // // // Main component
// // // const Vision = () => {
// // //   const subItems = [
// // //     {
// // //       icon: <FaRobot />,
// // //       title: "AI-Powered Planning",
// // //       desc: "Intelligent trip suggestions based on budget, location, duration, and user preferences.",
// // //       color: "indigo",
// // //     },
// // //     {
// // //       icon: <FaLanguage />,
// // //       title: "Multi-Language Support",
// // //       desc: "Empowering users from Tier-2 and Tier-3 cities with regional language options.",
// // //       color: "indigo",
// // //     },
// // //     {
// // //       icon: <FaHospitalSymbol />,
// // //       title: "Emergency Support",
// // //       desc: "Real-time assistance for travelers when they need it most.",
// // //       color: "indigo",
// // //     },
// // //   ];

// // //   const legalItems = [
// // //     "Incorporated as Private Limited Company",
// // //     "PAN, TAN, and GST registration complete",
// // //     "EPFO and ESIC registration",
// // //   ];

// // //   const upcomingItems = [
// // //     "Startup India registration (Travel & Tourism category)",
// // //     "Trademark filing for “MyTripRaja”",
// // //   ];

// // //   return (
// // //     <div className="max-w-6xl mx-auto px-8 py-16" id="vision">
// // //       <Section title="AI-Powered Travel Ecosystem" icon={<FaRobot />}>
// // //         <motion.p
// // //           variants={fadeInUp}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           custom={2}
// // //           className="text-gray-700 mb-10 text-center text-lg"
// // //         >
// // //           MyTripRaja is an AI-powered travel operating system designed to simplify
// // //           and personalize the entire travel experience for Indian users. The vision
// // //           is to create a single mobile and web platform where users can plan, book,
// // //           and manage trips — including hotels, flights, buses, trains, cabs, food,
// // //           and even local guides — all in one place.
// // //         </motion.p>

// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// // //           {subItems.map((item, index) => (
// // //             <motion.div
// // //               key={index}
// // //               variants={fadeInUp}
// // //               initial="hidden"
// // //               whileInView="visible"
// // //               viewport={{ once: true }}
// // //               custom={index + 3}
// // //               className={`bg-${item.color}-50 p-8 rounded-xl text-center shadow-sm`}
// // //             >
// // //               <div className={`text-${item.color}-600 text-3xl mb-3`}>
// // //                 {item.icon}
// // //               </div>
// // //               <p className="font-semibold text-lg mb-2">{item.title}</p>
// // //               <p className="text-sm text-gray-600">{item.desc}</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </Section>

// // //       <Section title="Company Structure & Registrations" icon={<FaHospitalSymbol />}>
// // //         <motion.p
// // //           variants={fadeInUp}
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           custom={6}
// // //           className="text-gray-700 mb-10 text-center text-lg"
// // //         >
// // //           MyTripRaja operates under the registered company name Raja Deepu Sooriya
// // //           Private Limited, incorporated under the Companies Act through the SPICe+
// // //           form.
// // //         </motion.p>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// // //           <motion.div
// // //             variants={fadeInUp}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             custom={7}
// // //             className="bg-green-50 p-8 rounded-xl shadow-sm"
// // //           >
// // //             <h3 className="font-semibold text-xl text-center mb-4">
// // //               Legal Structure
// // //             </h3>
// // //             <ul className="space-y-3 text-sm text-gray-700">
// // //               {legalItems.map((text, idx) => (
// // //                 <li key={idx} className="flex items-center gap-2">
// // //                   <FaCheckCircle className="text-green-600" />
// // //                   {text}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </motion.div>

// // //           <motion.div
// // //             variants={fadeInUp}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             custom={8}
// // //             className="bg-orange-50 p-8 rounded-xl shadow-sm"
// // //           >
// // //             <h3 className="font-semibold text-xl text-center mb-4">
// // //               Upcoming Registrations
// // //             </h3>
// // //             <ul className="space-y-3 text-sm text-gray-700">
// // //               {upcomingItems.map((text, idx) => (
// // //                 <li key={idx} className="flex items-center gap-2">
// // //                   <MdOutlinePending className="text-orange-500" />
// // //                   {text}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </motion.div>
// // //         </div>
// // //       </Section>
// // //     </div>
// // //   );
// // // };

// // // export default Vision;


// // import React from "react";
// // import { motion } from "framer-motion";
// // import {
// //   FaRobot,
// //   FaLanguage,
// //   FaHospitalSymbol,
// //   FaCheckCircle,
// //   FaRegLightbulb,
// // } from "react-icons/fa";
// // import { MdOutlinePending } from "react-icons/md";

// // // Animation variant for fade-in
// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: (custom) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       delay: custom * 0.2,
// //       duration: 0.6,
// //       ease: "easeOut",
// //     },
// //   }),
// // };

// // // Section component with icon and title
// // const Section = ({ title, icon, children }) => (
// //   <motion.div
// //     variants={fadeInUp}
// //     initial="hidden"
// //     whileInView="visible"
// //     viewport={{ once: true }}
// //     custom={1}
// //     className="bg-white rounded-xl shadow-md p-12 mb-16"
// //   >
// //     <div className="flex items-center justify-center mb-8 gap-3">
// //       <div className="text-indigo-600 text-3xl">{icon}</div>
// //       <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
// //     </div>
// //     {children}
// //   </motion.div>
// // );

// // // Main component
// // const Vision = () => {
// //   const subItems = [
// //     {
// //       icon: <FaRobot />,
// //       title: "AI-Powered Planning",
// //       desc: "Intelligent trip suggestions based on budget, location, duration, and user preferences.",
// //     },
// //     {
// //       icon: <FaLanguage />,
// //       title: "Multi-Language Support",
// //       desc: "Empowering users from Tier-2 and Tier-3 cities with regional language options.",
// //     },
// //     {
// //       icon: <FaHospitalSymbol />,
// //       title: "Emergency Support",
// //       desc: "Real-time assistance for travelers when they need it most.",
// //     },
// //   ];

// //   const legalItems = [
// //     "Incorporated as Private Limited Company",
// //     "PAN, TAN, and GST registration complete",
// //     "EPFO and ESIC registration",
// //   ];

// //   const upcomingItems = [
// //     "Startup India registration (Travel & Tourism category)",
// //     "Trademark filing for “MyTripRaja”",
// //   ];

// //   return (
// //     <div className="bg-[#f9fafb] w-full">
// //       <div className="max-w-6xl mx-auto px-8 py-16" id="vision">
// //         <Section
// //           title="AI-Powered Travel Ecosystem"
// //           icon={<FaRobot />}
// //         >
// //           <motion.p
// //             variants={fadeInUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             custom={2}
// //             className="text-gray-700 mb-10 text-center text-lg"
// //           >
// //             MyTripRaja is an AI-powered travel operating system designed to simplify
// //             and personalize the entire travel experience for Indian users. The vision
// //             is to create a single mobile and web platform where users can plan, book,
// //             and manage trips — including hotels, flights, buses, trains, cabs, food,
// //             and even local guides — all in one place.
// //           </motion.p>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// //             {subItems.map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 variants={fadeInUp}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 viewport={{ once: true }}
// //                 custom={index + 3}
// //                 className="bg-[#f9fafb] p-8 rounded-xl text-center shadow-sm"
// //               >
// //                 <div className="text-indigo-600 text-3xl mb-3">
// //                   {item.icon}
// //                 </div>
// //                 <p className="font-semibold text-lg mb-2">{item.title}</p>
// //                 <p className="text-sm text-gray-600">{item.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </Section>

// //         <Section
// //           title="Company Structure & Registrations"
// //           icon={<FaHospitalSymbol />}
// //         >
// //           <motion.p
// //             variants={fadeInUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             custom={6}
// //             className="text-gray-700 mb-10 text-center text-lg"
// //           >
// //             MyTripRaja operates under the registered company name Raja Deepu Sooriya
// //             Private Limited, incorporated under the Companies Act through the SPICe+
// //             form.
// //           </motion.p>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// //             <motion.div
// //               variants={fadeInUp}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               custom={7}
// //               className="bg-[#f9fafb] p-8 rounded-xl shadow-sm"
// //             >
// //               <h3 className="font-semibold text-xl text-center mb-4">
// //                 Legal Structure
// //               </h3>
// //               <ul className="space-y-3 text-sm text-gray-700">
// //                 {legalItems.map((text, idx) => (
// //                   <li key={idx} className="flex items-center gap-2">
// //                     <FaCheckCircle className="text-green-600" />
// //                     {text}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </motion.div>

// //             <motion.div
// //               variants={fadeInUp}
// //               initial="hidden"
// //               whileInView="visible"
// //               viewport={{ once: true }}
// //               custom={8}
// //               className="bg-[#f9fafb] p-8 rounded-xl shadow-sm"
// //             >
// //               <h3 className="font-semibold text-xl text-center mb-4">
// //                 Upcoming Registrations
// //               </h3>
// //               <ul className="space-y-3 text-sm text-gray-700">
// //                 {upcomingItems.map((text, idx) => (
// //                   <li key={idx} className="flex items-center gap-2">
// //                     <MdOutlinePending className="text-orange-500" />
// //                     {text}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           </div>
// //         </Section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Vision;

// import React from "react";
// import { motion } from "framer-motion";
// import { FaRegLightbulb } from "react-icons/fa";
// import { HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineShieldCheck } from "react-icons/hi";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (custom) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: custom * 0.3 },
//   }),
// };

// const Vision = () => {
//   return (
//     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
//       {/* Business Idea & Vision Section */}
//       <div className="max-w-6xl mx-auto px-8 py-16">
//         <div className="flex flex-col items-center">
//           <div className="flex items-center mb-4">
//             <FaRegLightbulb className="text-purple-600 text-3xl mr-2" />
//             <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
//               Business Idea & Vision
//             </h2>
//           </div>
//           <motion.p
//             variants={fadeInUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             custom={2}
//             className="text-gray-700 mb-10 text-center text-lg"
//           >
//             MyTripRaja is an AI-powered travel operating system designed to simplify
//             and personalize the entire travel experience for Indian users. The vision
//             is to create a single mobile and web platform where users can plan, book,
//             and manage trips — including hotels, flights, buses, trains, cabs, food,
//             and even local guides — all in one place.
//           </motion.p>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
//         {/* Feature 1 */}
//         <div className="flex flex-col items-start text-left">
//           <div className="flex items-center space-x-2 mb-2">
//             <HiOutlineLightBulb className="text-purple-600 text-3xl" />
//             <h3 className="text-xl font-semibold">AI-Powered Planning</h3>
//           </div>
//           <p className="text-gray-600">
//             Intelligent trip suggestions based on budget, location, duration, and user preferences.
//           </p>
//         </div>

//         {/* Feature 2 */}
//         <div className="flex flex-col items-start text-left">
//           <div className="flex items-center space-x-2 mb-2">
//           <HiOutlineGlobeAlt className="text-purple-600 text-3xl" />

//             <h3 className="text-xl font-semibold">Multi-Language Support</h3>
//           </div>
//           <p className="text-gray-600">
//             Empowering users from Tier-2 and Tier-3 cities with regional language options.
//           </p>
//         </div>

//         {/* Feature 3 */}
//         <div className="flex flex-col items-start text-left">
//           <div className="flex items-center space-x-2 mb-2">
//             <HiOutlineShieldCheck className="text-purple-600 text-3xl" />
//             <h3 className="text-xl font-semibold">Emergency Support</h3>
//           </div>
//           <p className="text-gray-600">
//             Assistance available anytime during travel emergencies.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vision;

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
