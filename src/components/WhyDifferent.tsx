"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Süreç Sırasıyla Anlatılıyor",
    desc: "Bir webinar bitince bir sonraki başlıyor. USMLE'den ERAS'a, match stratejisinden vize sürecine — doğru sırayla öğreniyorsun.",
  },
  {
    number: "02",
    title: "Anlatan Kişiler Süreci Yaşadı",
    desc: "Her konuşmacı uluslararası doktor olarak bu süreci bizzat geçirdi. Sana teori değil, gerçek deneyim aktarıyorlar.",
  },
  {
    number: "03",
    title: "Tamamen Ücretsiz",
    desc: "6 webinar, 6 uzman, sıfır ücret. Kayıt olman yeterli.",
  },
];

export default function WhyDifferent() {
  return (
    <section
      className="relative py-20 px-4"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #121418 100%)" }}
    >
      {/* Speakers section'ından ayrıştıran ince marka gradienti */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e31e26]/60 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            <span className="text-white">Bu Seri Diğer Webinarlardan </span>
            <span className="text-[#e31e26]">Farklı</span>
          </h2>
          <div className="w-16 h-1 bg-[#e31e26] mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {benefits.map((b) => (
            <motion.div
              key={b.number}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#e31e26]/40 hover:bg-white/[0.07]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl font-bold text-[#e31e26] leading-none">
                  {b.number}
                </span>
                <span className="text-2xl text-white/30 leading-none">·</span>
                <h3 className="text-xl font-semibold text-white leading-tight">
                  {b.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
