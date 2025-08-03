
// MonetizationModel.jsx
import { motion } from "framer-motion";
import { BadgeCheck, MonitorSmartphone, Wallet } from "lucide-react";
import { FaYoutube, FaUserFriends } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import React from 'react'

export default function Model() {
  return (
    <section className="bg-[#f9fafb] py-16 px-4 md:px-10" id="business">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2">
          <span className="bg-gradient-to-tr from-purple-500 to-purple-300 text-white px-2 py-1 rounded-full text-xl">₹</span>
          Monetization Model
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-6 text-gray-800">Primary Revenue Streams</h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <BadgeCheck className="text-green-500 mt-1" />
                <div>
                  <p className="font-semibold">Booking Commissions</p>
                  <p className="text-sm text-gray-600">
                    From flights, hotels, cabs, trains, and buses via B2B API partners
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MonitorSmartphone className="text-green-500 mt-1" />
                <div>
                  <p className="font-semibold">Promoted Listings</p>
                  <p className="text-sm text-gray-600">
                    From hotels, guides, and local experiences
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Wallet className="text-green-500 mt-1" />
                <div>
                  <p className="font-semibold">Affiliate Income</p>
                  <p className="text-sm text-gray-600">
                    From other travel platforms and services
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-6 text-gray-800">Marketing Strategy Highlights</h3>

            <ul className="space-y-4">
              <li className="bg-gray-50 p-4 rounded-xl flex items-start gap-4">
                <FaYoutube className="text-red-500 mt-1 text-lg" />
                <div>
                  <p className="font-semibold">Regional Content</p>
                  <p className="text-sm text-gray-600">
                    YouTube Shorts and Instagram Reels in Tamil, Telugu, and Hindi
                  </p>
                </div>
              </li>
              <li className="bg-gray-50 p-4 rounded-xl flex items-start gap-4">
                <FaUserFriends className="text-blue-500 mt-1 text-lg" />
                <div>
                  <p className="font-semibold">Referral Program</p>
                  <p className="text-sm text-gray-600">
                    College and travel club partnerships with incentives
                  </p>
                </div>
              </li>
              <li className="bg-gray-50 p-4 rounded-xl flex items-start gap-4">
                <FiSearch className="text-green-600 mt-1 text-lg" />
                <div>
                  <p className="font-semibold">SEO-Focused Content</p>
                  <p className="text-sm text-gray-600">
                    Blogs on budget trips and destination guides
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
