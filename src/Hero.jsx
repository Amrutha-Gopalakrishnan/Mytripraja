// // // // import React from "react";
// // // // import hero from "./assets/hero.jpg";
// // // // import logo from "./assets/logo.jpg";

// // // // const Hero = () => {
// // // //   return (
// // // //     <section
// // // //       className="w-full bg-cover bg-center min-h-screen flex items-center"
// // // //       style={{
// // // //         backgroundImage: `url(${hero})`
// // // //       }}
// // // //     >
// // // //       <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
// // // //         {/* Left Content */}
// // // //         <div className="md:w-1/2 text-white md:text-left text-center">
// // // //           <img src={logo} alt="MyTripRaja" className="h-16 mb-4 mx-auto md:mx-0" />
// // // //           <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
// // // //             India's First AI-Powered Travel Operating System
// // // //           </h1>
// // // //           <p className="mt-4 text-sm md:text-base text-gray-700">
// // // //             Simplifying travel planning and booking for Indian users with
// // // //             personalized, budget-optimized experiences in their preferred
// // // //             language.
// // // //           </p>

// // // //           <div className="mt-6 flex justify-center md:justify-start gap-4">
// // // //             <a
// // // //               href="#"
// // // //               className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-full shadow hover:bg-purple-100 flex items-center gap-2"
// // // //             >
// // // //               <span>📄</span> Full Business Plan
// // // //             </a>
// // // //             <a
// // // //               href="#"
// // // //               className="bg-green-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-green-700 flex items-center gap-2"
// // // //             >
// // // //               <span>▶️</span> Watch Demo
// // // //             </a>
// // // //           </div>
// // // //         </div>

// // // //         {/* Right image - optional if you want to overlay extra image */}
// // // //         {/* <div className="md:w-1/2 hidden md:block">
// // // //           <img src="/assets/person.png" alt="Explorer" className="h-[400px] object-contain" />
// // // //         </div> */}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;


// // // import React from "react";
// // // import hero from "./assets/hero.jpg"; // Adjust if stored elsewhere
// // // import logo from "./assets/logo.jpg";       // Adjust if stored elsewhere

// // // const Hero = () => {
// // //   return (
// // //     <section
// // //       className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
// // //       style={{ backgroundImage: `url(${hero})` }}
// // //     >
// // //       {/* Overlay for opacity */}
// // //       <div className="absolute inset-0 bg-opacity-60"></div>

// // //       {/* Content */}
// // //       <div className="relative z-10 max-w-4xl px-6 text-center">
// // //         <img
// // //           src={logo}
// // //           alt="MyTripRaja"
// // //           className="h-16 mx-auto mb-4"
// // //         />

// // //         <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
// // //           India's First AI-Powered Travel Operating System
// // //         </h1>

// // //         <p className="mt-4 text-gray-800 text-sm md:text-base max-w-xl mx-auto">
// // //           Simplifying travel planning and booking for Indian users with
// // //           personalized, budget-optimized experiences in their preferred
// // //           language.
// // //         </p>

// // //         <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
// // //           <a
// // //             href="#"
// // //             className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-full shadow hover:bg-purple-100 flex items-center gap-2"
// // //           >
// // //             📄 Full Business Plan
// // //           </a>

// // //           <a
// // //             href="#"
// // //             className="bg-green-600 text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-green-700 flex items-center gap-2 transition duration-200"
// // //           >
// // //             ▶️ Watch Demo
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;


// // import React from "react";
// // import bgImage from "./assets/hero.jpg"; // adjust path if needed
// // import logo from "./assets/logo.jpg";       // adjust path if needed

// // const Hero = () => {
// //   return (
// //     <section
// //       className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
// //       style={{ backgroundImage: `url(${bgImage})` }}
// //     >
// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-opacity-60"></div>

// //       {/* Content Box */}
// //       <div className="relative z-10 max-w-2xl px-6 py-10 text-center">
// //         {/* Logo aligned to left above content */}
// //         <div className="flex justify-start mb-4">
// //           <img src={logo} alt="MyTripRaja" className="h-14 w-auto" />
// //         </div>

// //         {/* Title */}
// //         <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
// //           India's First AI-Powered Travel Operating System
// //         </h1>

// //         {/* Subtitle */}
// //         <p className="mt-4 text-black-900 text-semibold text-sm md:text-base leading-relaxed">
// //           Simplifying travel planning and booking for Indian users with<br />
// //           personalized, budget-optimized experiences in their preferred<br />
// //           language.
// //         </p>

// //         {/* Buttons */}
// //         <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
// //           <a
// //             href="#"
// //             className="bg-white text-purple-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-purple-100 transition flex items-center gap-2"
// //           >
// //             📄 Full Business Plan
// //           </a>
// //           <a
// //             href="#"
// //             className="bg-green-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-green-700 transition flex items-center gap-2"
// //           >
// //             ▶️ Watch Demo
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import React from "react";
// import bgImage from "./assets/hero.jpg"; // adjust as needed
// import logo from "./assets/logo.jpg";    // adjust as needed
// import { HiOutlineDocumentText } from "react-icons/hi";
// import { HiOutlinePlay } from "react-icons/hi";


// const Hero = () => {
//   return (
//     <section
//       className="relative w-full min-h-screen bg-cover bg-center flex items-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0  bg-opacity-30"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-6">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <img src={logo} alt="MyTripRaja" className="h-16 w-16 rounded-md shadow" />
//         </div>

//         {/* Text and Buttons */}
//         <div>
//           {/* Title */}
//           <h1 className="text-black text-2xl md:text-3xl font-semibold mb-3">
//             India's First AI-Powered Travel Operating System
//           </h1>

//           {/* Subtitle */}
//           <p className="text-black text-base md:text-lg mb-6 max-w-2xl">
//             Simplifying travel planning and booking for Indian users <br></br> 
//             with personalized, budget-optimized experiences in their preferred <br></br>
//             language.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//   <a
//     href="#"
//     className="border border-purple-500 text-black font-medium px-5 py-2 rounded-full bg-white hover:bg-purple-600 hover:border-purple-600 hover:text-white transition flex items-center gap-2"
//   >
//     <HiOutlineDocumentText className="text-purple-500 text-lg" />
//     Full Business Plan
//   </a>
//   <a
//     href="#"
//     className="border border-green-500 text-black bg-white font-medium px-5 py-2 rounded-full hover:bg-green-600 hover:border-green-600 hover:text-white transition flex items-center gap-2"
//   >
//     <HiOutlinePlay className="text-green-500  text-lg" />
//     Watch Demo
//   </a>
// </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

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
