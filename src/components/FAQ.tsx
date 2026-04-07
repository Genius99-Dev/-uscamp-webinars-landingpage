"use client";

import { useState } from "react";
import { webinarData } from "@/data/webinar-data";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4" style={{ background: "#111" }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">Sıkça Sorulan Sorular</h2>
          <div className="w-16 h-1 bg-[#e31e26] mx-auto" />
        </div>
        <div className="flex flex-col gap-3">
          {webinarData.faq.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
              >
                <span className="text-white font-medium">{item.q}</span>
                <span className="text-white ml-4 shrink-0">
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: open === i ? "200px" : "0",
                  opacity: open === i ? 1 : 0,
                }}
              >
                <div className="px-5 pb-4 text-gray-400">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
