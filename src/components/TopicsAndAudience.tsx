"use client";

import { useState } from "react";
import { webinarData } from "@/data/webinar-data";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function TopicsAndAudience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4" style={{ background: "linear-gradient(160deg, #f9fafb 0%, #f1f3f5 30%, #e8eaed 60%, #dfe2e6 100%)", boxShadow: "inset 0 2px 20px rgba(0,0,0,0.04)" }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

        {/* Sol: Webinar Programı - Agenda */}
        <motion.div
          className="lg:w-[58%]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Webinar Programımız</h2>
          <div className="w-16 h-1 bg-[#e31e26] mb-10" />

          <div className="flex flex-col">
            {webinarData.topics.map((topic, index) => (
              <div
                key={index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="cursor-pointer py-5 border-b border-gray-300 last:border-b-0 group hover:bg-white hover:px-4 rounded-lg transition-all duration-300"
              >
                <div className="flex gap-5">
                  {/* Numara */}
                  <span className="text-3xl font-bold text-[#e31e26] min-w-[48px] leading-none pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* İçerik */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#06539f] transition-colors duration-300">
                        {topic.title}
                      </h3>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                    </div>
                    <p className="text-gray-600 text-sm">{topic.desc}</p>
                    {openIndex === index && (
                      <div className="mt-3 space-y-2">
                        {topic.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#e31e26] mt-2 shrink-0" />
                            <span className="text-gray-500 text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sağ: Hedef Kitle */}
        <motion.div
          className="lg:w-[42%]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Webinarımız Kimler İçin?</h2>
          <div className="w-16 h-1 bg-[#e31e26] mb-10" />

          <div className="flex flex-col gap-5">
            {webinarData.audience.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-xl p-6 hover:shadow-lg hover:border-[#e31e26]/30 hover:scale-[1.02] transition-all duration-300"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
