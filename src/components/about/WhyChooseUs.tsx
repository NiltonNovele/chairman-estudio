"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCameraRetro,
  FaVideo,
  FaUserCheck,
  FaStar,
  FaClock,
  FaThumbsUp,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCameraRetro size={28} className="text-[#F26722]" />,
    title: "Fotografia de Alto Nível",
    description:
      "Captura de imagens nítidas e profissionais com um olhar criativo aguçado.",
  },
  {
    icon: <FaVideo size={28} className="text-[#F26722]" />,
    title: "Videografia Cinematográfica",
    description:
      "Produção de vídeos com qualidade cinematográfica, personalizados para a sua marca ou evento.",
  },
  {
    icon: <FaUserCheck size={28} className="text-[#F26722]" />,
    title: "Serviço Profissional",
    description:
      "Abordagem corporativa que valoriza excelência, confiança e fiabilidade.",
  },
  {
    icon: <FaStar size={28} className="text-[#F26722]" />,
    title: "Direção Criativa",
    description:
      "Combinação de storytelling e design-thinking para resultados visuais únicos.",
  },
  {
    icon: <FaClock size={28} className="text-[#F26722]" />,
    title: "Entrega Pontual",
    description:
      "Orgulhamo-nos de respeitar o seu tempo e entregar sempre dentro do prazo.",
  },
  {
    icon: <FaThumbsUp size={28} className="text-[#F26722]" />,
    title: "Satisfação do Cliente",
    description:
      "O nosso trabalho fala por si; os nossos clientes adoram os resultados.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Porquê Escolher a{" "}
          <span className="text-[#F26722]">ChairmanMediaHouse</span>
        </motion.h2>
        <p className="text-gray-300 mb-12">
          Eis o que nos diferencia dos restantes.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 p-6 rounded-lg border border-white/10 shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
