"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCameraRetro,
  FaFilm,
  FaBullhorn,
  FaPodcast,
  FaHome,
  FaVideo,
} from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    title: "Cobertura de Eventos",
    icon: <FaBullhorn size={28} className="text-[#F26722]" />,
    desc: "Cobertura completa de eventos sociais e corporativos, captando cada momento especial.",
    link: "#",
  },
  {
    title: "Fotografia em Estúdio",
    icon: <FaCameraRetro size={28} className="text-[#F26722]" />,
    desc: "Sessões fotográficas profissionais em estúdio, ideais para branding e lifestyle.",
    link: "#",
  },
  {
    title: "Comunicação & Branding",
    icon: <FaHome size={28} className="text-[#F26722]" />,
    desc: "Desenvolvimento de identidade visual, branding e estratégias de comunicação.",
    link: "#",
  },
  {
    title: "Produção de Podcasts",
    icon: <FaPodcast size={28} className="text-[#F26722]" />,
    desc: "Produção completa de podcasts com qualidade profissional, desde gravação até edição.",
    link: "#",
  },
  {
    title: "Aluguer de Estúdio",
    icon: <FaHome size={28} className="text-[#F26722]" />,
    desc: "Aluguer de estúdios equipados para sessões de fotografia e gravação de vídeo.",
    link: "#",
  },
  {
    title: "Vídeos Profissionais",
    icon: <FaVideo size={28} className="text-[#F26722]" />,
    desc: "Produção de vídeos de alta qualidade para eventos, empresas ou projetos criativos.",
    link: "#",
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="bg-gradient-to-b from-neutral-900 to-black p-6 rounded-xl shadow hover:shadow-lg transition h-full flex flex-col justify-between">
            <div>
              <div className="mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </div>

            <div className="mt-4">
              <Link href={service.link}>
                <span className="text-sm text-[#F26722] hover:underline transition">
                  Saber mais →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
