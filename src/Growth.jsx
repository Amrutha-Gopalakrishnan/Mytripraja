import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";
import React from "react";

const growthData = [
  {
    year: "Y1",
    title: "Southern India Focus",
    desc: "Tamil Nadu, Kerala, and Karnataka with local language support",
    tags: ["Tamil", "Malayalam", "Kannada", "English"],
    bg: "#F4F4FF",
  },
  {
    year: "Y2",
    title: "Hindi-Speaking Regions",
    desc: "Expansion to Uttar Pradesh, Rajasthan, and Bihar with enhanced AI features",
    tags: [
      "Hindi",
      "+ 4 more languages",
      "Plan by Voice",
      "Chat-based Planning",
      "Community Recommendations",
    ],
    tagColors: ["#E9F5FF", "#E9F5FF", "#DBF7E8", "#DBF7E8", "#DBF7E8"],
    bg: "#F4F4FF",
  },
  {
    year: "Y3+",
    title: "Pan-India & Advanced Services",
    desc: "Complete national coverage with expanded service offerings",
    tags: ["Forex", "Visa Services", "Travel Insurance", "Subscription Boxes"],
    tagColors: ["#DBF7E8", "#DBF7E8", "#DBF7E8", "#DBF7E8"],
    bg: "#F4F4FF",
  },
];

export default function Growth() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex justify-center py-10 px-4" id="growth">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm p-6 max-w-5xl w-full space-y-8"
      >
        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="bg-[#653CE3] p-2 rounded-full text-white">
            <FaRocket />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Growth Plan and Scaling
          </h2>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {growthData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex space-x-6"
            >
              {/* Year Circle */}
              <div className="flex flex-col items-center pt-2">
                <div className="bg-[#653CE3] text-white text-sm font-semibold px-4 py-2 rounded-full">
                  {item.year}
                </div>
                {i !== growthData.length - 1 && (
                  <div className="h-full w-1 bg-[#E5E7EB] mt-2"></div>
                )}
              </div>

              {/* Content Box */}
              <div
                className="flex-1 p-4 rounded-lg"
                style={{ backgroundColor: item.bg }}
              >
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-md"
                      style={{
                        backgroundColor:
                          item.tagColors?.[index] || "#EFEBFF",
                        color: "#4B5563",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ultimate Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-[#653CE3] to-[#5436DB] text-white rounded-lg p-5"
        >
          <h4 className="font-semibold mb-1">Ultimate Vision</h4>
          <p className="text-sm">
            To become India's #1 Travel OS for every Indian user — from solo
            backpackers to big families.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
