"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const scrollToForm = () => {
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#111] border-t border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-white text-sm md:text-base">
          Ücretsiz webinara hemen kayıt olun!
        </span>
        <button
          onClick={scrollToForm}
          className="bg-[#e31e26] hover:bg-[#c41920] text-white rounded-lg px-6 py-2 font-bold text-sm transition-colors cursor-pointer"
        >
          Hemen Kayıt Ol
        </button>
      </div>
    </div>
  );
}
