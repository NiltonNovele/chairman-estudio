"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCamera,
  FaVideo,
  FaBroadcastTower,
  FaMagic,
  FaHome,
  FaPodcast,
  FaBullhorn,
} from "react-icons/fa";

const services = [
  {
    title: "Cobertura de Eventos",
    icon: <FaBroadcastTower size={28} />,
    description:
      "Registo fotográfico e em vídeo de casamentos, aniversários, conferências e outros eventos especiais.",
  },
  {
    title: "Fotografia em Estúdio",
    icon: <FaCamera size={28} />,
    description:
      "Sessões fotográficas profissionais em estúdio com iluminação e cenários personalizados.",
  },
  {
    title: "Comunicação & Branding",
    icon: <FaBullhorn size={28} />,
    description:
      "Criação de conteúdos visuais e estratégicos para fortalecer a identidade da sua marca.",
  },
  {
    title: "Produção de Podcasts",
    icon: <FaPodcast size={28} />,
    description:
      "Gravação, edição e publicação de podcasts com qualidade profissional.",
  },
  {
    title: "Aluguer de Estúdio",
    icon: <FaHome size={28} />,
    description:
      "Espaço totalmente equipado para fotografia, filmagem ou gravações profissionais.",
  },
  {
    title: "Vídeos Profissionais",
    icon: <FaVideo size={28} />,
    description:
      "Produção de vídeos institucionais, promocionais e criativos para empresas e criadores.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-[#0d0d0d] to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Os Nossos <span className="text-[#F26722]">Serviços</span>
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Descubra as soluções criativas e profissionais que temos para si.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-[#F26722] mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
