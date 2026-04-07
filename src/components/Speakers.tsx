import { webinarData } from "@/data/webinar-data";
import { User } from "lucide-react";

export default function Speakers() {
  return (
    <section className="py-20 px-4" style={{ background: "#0a0a0a" }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Konuşmacılar</h2>
          <div className="w-16 h-1 bg-[#e31e26] mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {webinarData.speakers.map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center flex-1"
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#06539f] to-[#e31e26] flex items-center justify-center mb-6">
                <User size={40} className="text-white" />
              </div>
              <h3 className="text-white text-xl font-bold">{s.name}</h3>
              <p className="text-[#e31e26] font-medium mb-3">{s.title}</p>
              <p className="text-gray-400 text-sm text-center">{s.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
