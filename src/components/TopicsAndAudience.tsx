"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, User } from "lucide-react";

const webinarSeries = [
  {
    number: "01",
    title: "ABD'de Doktorluk: Gerçekler, Mitler ve Yol Haritası",
    date: "9 Mayıs 2026",
    speaker: "Dr. Furkan Hamamcı",
    speakerTitle: "USCAMP Kurucu",
    topics: [
      "ABD'de doktorluk süreci hakkında yaygın mitler ve gerçekler",
      "USMLE, ECFMG ve MATCH sürecinin genel yol haritası",
      "Türk hekimler için en uygun stratejiler",
    ],
  },
  {
    number: "02",
    title: "Klinik Deneyim (USCE) ve Güçlü CV Oluşturma",
    date: "16 Mayıs 2026",
    speaker: "Dr. Furkan Hamamcı & Seher Sena Elağöz, MD",
    speakerTitle: "USCAMP Eğitmen & Mentor",
    topics: [
      "Observership ve hands-on staj farkları",
      "ABD'de staj başvuru süreci ve zamanlama",
      "MATCH için güçlü bir CV nasıl oluşturulur",
    ],
  },
  {
    number: "03",
    title: "USMLE Çalışma Stratejileri",
    date: "23 Mayıs 2026",
    speaker: "Melih Tarık Özdemir",
    speakerTitle: "USCAMP Eğitmen",
    topics: [
      "Step 1 ve Step 2 CK için verimli çalışma planı",
      "Kaynak seçimi ve soru bankası stratejileri",
      "Sık yapılan hatalar ve çözüm önerileri",
    ],
  },
  {
    number: "04",
    title: "ERAS Başvurusu & Vize Süreci",
    date: "30 Mayıs 2026",
    speaker: "Berk Kaan Aktaş, MD & Alperen Öztürk, MD",
    speakerTitle: "USCAMP Mentor",
    topics: [
      "ERAS başvuru dosyası nasıl hazırlanır",
      "Personal Statement yazım teknikleri",
      "Vize türleri ve başvuru süreçleri",
    ],
  },
  {
    number: "05",
    title: "Match Şansını Artırma, Branş Seçimi ve ABD'de Asistanlık Hayatı",
    date: "6 Haziran 2026",
    speaker: "Berk Kaan Aktaş, MD & Alperen Öztürk, MD",
    speakerTitle: "USCAMP Mentor",
    topics: [
      "MATCH şansını artıran stratejiler",
      "Branş seçiminde dikkat edilmesi gerekenler",
      "ABD'de asistanlık hayatı nasıl geçiyor",
    ],
  },
  {
    number: "06",
    title: "Başarı Hikayeleri & Soru-Cevap",
    date: "13 Haziran 2026",
    speaker: "USCAMP Mentorları",
    speakerTitle: "Berk Kaan, Alperen Öztürk, Büşra Cangüt, Ebubekir Uçar, Miray Kurtça",
    topics: [
      "ABD'de MATCH'e kabul olan doktorların hikayeleri",
      "Süreçte karşılaşılan zorluklar ve çözümleri",
      "Katılımcılardan gelen sorulara canlı yanıtlar",
    ],
  },
];

export default function TopicsAndAudience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = webinarSeries[activeIndex];

  return (
    <section className="py-20 px-4" style={{ background: "linear-gradient(160deg, #f9fafb 0%, #f1f3f5 30%, #e8eaed 60%, #dfe2e6 100%)", boxShadow: "inset 0 2px 20px rgba(0,0,0,0.04)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-[#e31e26]">Amerika&apos;da Doktorluk Webinar Serisi:</span>
            <br />
            <span className="text-gray-900">Süreci Baştan Sona Uzman Mentörlerden Öğren</span>
          </h2>
          <div className="w-16 h-1 bg-[#e31e26] mb-4" />
          <p className="text-gray-600">Süreç hakkında bilgin olmasa da, nereden başlayacağını bilmesen de — bu ücretsiz 6 webinarlık serimizde tüm süreci uzmanlardan öğreneceksin.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sol: Webinar Listesi */}
          <motion.div
            className="lg:w-[45%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col">
              {webinarSeries.map((webinar, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex gap-4 py-4 px-4 rounded-xl cursor-pointer transition-all duration-300 border-l-4 ${
                    activeIndex === index
                      ? "bg-white shadow-md border-l-[#e31e26]"
                      : "border-l-transparent hover:bg-white/60 hover:border-l-gray-300"
                  }`}
                >
                  <span className={`text-2xl font-bold min-w-[40px] ${activeIndex === index ? "text-[#e31e26]" : "text-gray-300"}`}>
                    {webinar.number}
                  </span>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-sm leading-tight ${activeIndex === index ? "text-[#06539f]" : "text-gray-900"}`}>
                      {webinar.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#e31e26]" />
                      <span className="text-xs text-gray-500">{webinar.date}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 mt-1 shrink-0 transition-colors ${activeIndex === index ? "text-[#e31e26]" : "text-gray-300"}`} />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sağ: Seçili Webinar Detay */}
          <motion.div
            className="lg:w-[55%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
              {/* Konuşmacı */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#06539f] to-[#e31e26] flex items-center justify-center shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{active.speaker}</h4>
                  <p className="text-sm text-[#e31e26]">{active.speakerTitle}</p>
                </div>
              </div>

              {/* Webinar Başlığı */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{active.title}</h3>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-4 h-4 text-[#e31e26]" />
                <span className="text-sm text-gray-500">{active.date} • Pazar • 21:00 (Türkiye Saati)</span>
              </div>

              {/* Konu Başlıkları */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Bu webinarda ele alınacak konular</p>
                <div className="space-y-3">
                  {active.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e31e26]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[#e31e26]">{i + 1}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{topic}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-[#e31e26] hover:bg-[#c41920] text-white font-bold py-3 rounded-lg transition-colors cursor-pointer text-sm"
              >
                Bu Webinara Kayıt Ol
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
