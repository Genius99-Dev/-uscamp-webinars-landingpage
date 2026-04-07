"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { webinarData } from "@/data/webinar-data";

export default function AboutWebinar() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Üst: 3 bilgi kartı */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4">
            <div className="w-10 h-10 rounded-lg bg-[#e31e26]/15 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#e31e26]" />
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Tarih</p>
              <p className="text-gray-900 font-semibold">{webinarData.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4">
            <div className="w-10 h-10 rounded-lg bg-[#e31e26]/15 flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#e31e26]" />
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Saat</p>
              <p className="text-gray-900 font-semibold">{webinarData.time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4">
            <div className="w-10 h-10 rounded-lg bg-[#06539f]/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#06539f]" />
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Platform</p>
              <p className="text-gray-900 font-semibold">Zoom (Online)</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-6 py-4">
            <div className="w-10 h-10 rounded-lg bg-[#06539f]/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#06539f]" />
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Konuşmacı</p>
              <p className="text-gray-900 font-semibold">2 Uzman Doktor</p>
            </div>
          </div>
        </motion.div>

        {/* Alt: Sol yazı + Sağ görsel */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Sol: Hakkında yazısı */}
          <motion.div
            className="lg:w-[50%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e31e26] mb-3">Webinarımız Hakkında</h2>
            <div className="w-16 h-1 bg-[#e31e26] mb-6" />
            <p className="text-lg text-gray-700 mb-6">ABD'de Doktorluk Yolculuğunuzda Doğru Adımları Atın</p>

            <p className="text-gray-600 leading-relaxed mb-6">
              USMLE sınavları, ECFMG sertifikasyonu, klinik stajlar ve MATCH süreci...
              Amerika'da doktor olmak karmaşık ve zorlu bir yolculuk. Bilgi kirliliği ve
              yanlış yönlendirmeler zaman ve para kaybetmenize neden olabilir.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Bu webinarda, sürecin her aşamasını bizzat yaşamış uzman doktorlardan
              güncel bilgiler alacak, kendi kariyer planınızı oluşturmak için ihtiyacınız
              olan stratejileri öğreneceksiniz.
            </p>

            {/* Öne çıkan rakamlar */}
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">2,500<span className="text-[#e31e26]">+</span></p>
                <p className="text-gray-500 text-sm mt-1">Topluluk Üyesi</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">50<span className="text-[#e31e26]">+</span></p>
                <p className="text-gray-500 text-sm mt-1">Başarılı MATCH</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div>
                <p className="text-3xl font-bold text-gray-900">30<span className="text-[#e31e26]">+</span></p>
                <p className="text-gray-500 text-sm mt-1">Uzman Mentor</p>
              </div>
            </div>
          </motion.div>

          {/* Sağ: Görsel alanı */}
          <motion.div
            className="lg:w-[50%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Ana görsel placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gray-300 flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm">Webinar Tanıtım Görseli</p>
                </div>
              </div>

              {/* Dekoratif köşe aksanları */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#e31e26] rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#06539f] rounded-br-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
