"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaTimes } from "react-icons/fa";

export default function ContactCTASection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center py-28 px-6 flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/contact-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl text-center space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl font-bold">
          Pronto para dimensionar sua com a{" "}
          <span className="text-[#F26722]">Chairman MediaHouse?</span>
        </h2>
        <p className="text-gray-200">
          Vamos fazer mágia juntos – profissionalmente, de forma criativa e na
          hora certa.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          <a
            href="tel:+258843400220"
            className="flex items-center gap-2 text-white hover:text-[#F26722] transition"
          >
            <FaPhoneAlt /> +258 84 340 0220
          </a>
          <a
            href="mailto:info@chairmanmediahouse.com"
            className="flex items-center gap-2 text-white hover:text-[#F26722] transition"
          >
            <FaEnvelope /> info@chairmanmediahouse.com
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => setShowForm(true)}
            className="bg-[#F26722] px-6 py-3 rounded-full hover:bg-white hover:text-[#F26722] transition"
          >
            Enviar Mensagem
          </button>
          <a
            href="https://wa.me/258843400220"
            target="_blank"
            className="bg-green-500 px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-green-400 transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </motion.div>

      {/* Contact Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-8 max-w-md w-full relative text-black shadow-xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
                onClick={() => setShowForm(false)}
              >
                <FaTimes />
              </button>
              <h3 className="text-xl font-semibold mb-4">Mensagem</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu Name"
                  className="w-full border px-4 py-2 rounded-md"
                />
                <input
                  type="email"
                  placeholder="Seu Email"
                  className="w-full border px-4 py-2 rounded-md"
                />
                <textarea
                  placeholder="Sua Mensagem"
                  rows={4}
                  className="w-full border px-4 py-2 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-[#F26722] text-white px-4 py-2 rounded-md w-full hover:bg-black transition"
                >
                  Enviar
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
