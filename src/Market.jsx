import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart4,
  Smartphone,
  IndianRupee,
  TrendingUp,
  CircleDot,
  Users,
  Globe
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  }),
};

const Market = () => {
  return (
    <div
      className=" bg-[#f9fafb] px-4 md:px-10 lg:px-24 pt-4 pb-16 scroll-smooth"
      id="market"
    >
      <motion.div
        className="bg-white rounded-xl shadow-sm p-8 space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* Centered Header */}
        <motion.div className="space-y-4 text-center" custom={1} variants={fadeUp}>
          <div className="flex justify-center">
            <BarChart4 className="text-purple-600 w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Problem & Market Opportunity
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Indian travelers — especially first-time, regional, and middle-income users — face challenges in planning a trip. They often need to switch between different apps for booking hotels, trains, cabs, and food.
          </p>
        </motion.div>

        {/* Top Stats */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" custom={2} variants={fadeUp}>
          {[
            {
              icon: <Smartphone className="mx-auto text-purple-600 w-6 h-6" />,
              title: '500+ Million',
              desc: 'Smartphone users in India'
            },
            {
              icon: <IndianRupee className="mx-auto text-orange-500 w-6 h-6" />,
              title: '₹9 Lakh Crore',
              desc: 'Travel industry market size'
            },
            {
              icon: <TrendingUp className="mx-auto text-blue-500 w-6 h-6" />,
              title: 'Growing Steadily',
              desc: 'Post-pandemic travel recovery'
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#f9fafb] border rounded-lg px-6 py-6 text-center shadow-sm">
              {item.icon}
              <p className="font-semibold mt-3 text-lg">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" custom={3} variants={fadeUp}>
          {/* Problems MyTripRaja Solves */}
          <div className="bg-[#f9fafb] border rounded-lg px-6 py-6 shadow-sm">
            <p className="font-semibold text-lg mb-4 text-gray-800">Problems MyTripRaja Solves</p>
            <ul className="space-y-3 text-sm text-gray-700">
              {[
                'Multiple app switching for different bookings',
                'Lack of guidance on trip costs and duration',
                'English-only interfaces excluding regional users',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CircleDot className="text-red-500 w-4 h-4 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience */}
          <div className="bg-[#f9fafb] border rounded-lg px-6 py-6 shadow-sm">
            <p className="font-semibold text-lg mb-4 text-gray-800">Target Audience</p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Users className="text-purple-600 w-4 h-4 mt-1" />
                First-time travelers from Tier-2/3 cities
              </li>
              <li className="flex items-start gap-2">
                <Users className="text-purple-600 w-4 h-4 mt-1" />
                Middle-income families planning budget trips
              </li>
              <li className="flex items-start gap-2">
                <Globe className="text-purple-600 w-4 h-4 mt-1" />
                Regional language preferring travelers
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Market;
