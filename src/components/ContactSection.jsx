"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function BookSessionSection() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const timeSlots = [
    "09:00",
    "10:00",
    "11:30",
    "13:00",
    "14:30",
    "16:00",
    "17:30",
    "19:00",
  ];

  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-black via-[#0e0e0e] to-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch relative z-10">
        {/* Left Panel - Company Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 flex flex-col justify-center shadow-xl"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Vamos <span className="text-[#F26722]">Fotografar</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Reserve a sua sessão connosco e registe momentos inesquecíveis.
          </p>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:scale-[1.02] transition-all">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#F26722] text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Telefone</p>
                  <p className="text-lg font-medium">+258 84 340 0220</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:scale-[1.02] transition-all">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#F26722] text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-medium">
                    info@chairmanmediahouse.com
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:scale-[1.02] transition-all">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#F26722] text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Localização</p>
                  <p className="text-lg font-medium">
                    Rua Victor Gordon, Maputo, Moçambique
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Panel - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl flex flex-col justify-center shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FaCamera className="text-[#F26722]" />
            Reserva de Sessão
          </h2>

          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 w-full">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all ${
                    step === s
                      ? "bg-[#F26722] border-[#F26722] text-white scale-110"
                      : step > s
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-500 text-gray-400"
                  }`}
                >
                  {step > s ? <FaCheckCircle /> : s}
                </div>
                {s < 3 && (
                  <div className="flex-1 h-[2px] bg-gray-700 mx-2"></div>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-6 text-white">
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {["Nome Completo", "Email", "Telefone"].map((label, idx) => (
                  <div key={idx} className="relative">
                    <input
                      type={
                        label === "Email"
                          ? "email"
                          : label === "Telefone"
                          ? "tel"
                          : "text"
                      }
                      required
                      className="peer w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-[#F26722]"
                      placeholder=" "
                    />
                    <label className="absolute left-0 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#F26722]">
                      {label}
                    </label>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="relative">
                  <label className="block text-gray-400 mb-2">
                    Selecione a Data
                  </label>
                  <input
                    type="date"
                    required
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-[#F26722] text-gray-300"
                  />
                </div>

                <div className="relative">
                  <label className="block text-gray-400 mb-4">
                    Escolha um horário
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-40 overflow-y-auto pr-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-4 rounded-lg border text-sm transition-all ${
                          selectedTime === time
                            ? "bg-[#F26722] border-[#F26722] text-white"
                            : "border-gray-600 text-gray-300 hover:bg-white/10"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <select
                    required
                    className="w-full bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-[#F26722] text-gray-300"
                  >
                    <option value="" className="bg-black">
                      Selecione o tipo de sessão
                    </option>
                    <option value="retrato" className="bg-black">
                      Retrato
                    </option>
                    <option value="casal" className="bg-black">
                      Casal
                    </option>
                    <option value="produto" className="bg-black">
                      Produto
                    </option>
                    <option value="evento" className="bg-black">
                      Evento
                    </option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="relative">
                  <textarea
                    rows={4}
                    className="peer w-full bg-transparent border-b border-gray-600 py-3 placeholder-transparent focus:outline-none focus:border-[#F26722]"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#F26722]">
                    Observações adicionais
                  </label>
                </div>
              </motion.div>
            )}

            {/* Buttons */}
            <div className="flex justify-between pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:bg-white/10 transition"
                >
                  Anterior
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-6 py-3 bg-[#F26722] text-white rounded-full font-semibold hover:bg-[#d4551f] transition"
                >
                  Próximo
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-3 bg-[#F26722] text-white rounded-full font-semibold hover:bg-[#d4551f] transition"
                >
                  Confirmar Reserva
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
