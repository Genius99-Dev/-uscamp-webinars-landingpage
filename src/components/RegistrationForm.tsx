"use client";

import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", specialty: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:border-[#e31e26] focus:ring-1 focus:ring-[#e31e26] focus:outline-none transition-colors";

  return (
    <section id="registration-form" className="bg-black py-20 px-4">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-3">Ücretsiz Kayıt Ol</h2>
          <div className="w-16 h-1 bg-[#e31e26] mx-auto" />
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-green-400 text-xl font-semibold mb-2">Kaydınız alındı!</div>
            <p className="text-gray-400">Detaylar e-posta adresinize gönderilecektir.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="text-gray-300 text-sm mb-1 block">Ad Soyad</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm mb-1 block">E-posta</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm mb-1 block">Telefon</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
                placeholder="+90 5XX XXX XX XX"
              />
            </div>
            <div>
              <label className="text-gray-300 text-sm mb-1 block">Uzmanlık Alanı</label>
              <input
                type="text"
                required
                value={form.specialty}
                onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                className={inputClass}
                placeholder="Örn: Dahiliye, Genel Cerrahi..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#e31e26] hover:bg-[#c41920] text-white w-full py-3 rounded-lg font-bold transition-colors cursor-pointer mt-2"
            >
              Hemen Kayıt Ol
            </button>
            <p className="text-gray-500 text-xs text-center">
              Bilgileriniz gizli tutulacaktır.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
