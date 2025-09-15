"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-white/5 backdrop-blur-md scroll-mt-20">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black/30 via-white/5 to-black/20 opacity-60" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-snug drop-shadow">
            Quem Somos
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            Somos uma agência de produção audiovisual com mais de 10 anos de
            experiência, especializada em criar soluções completas e
            estratégicas para empresas e marcas. A nossa equipa multidisciplinar
            integra especialistas em Audiovisual, Publicidade, Marketing,
            Jornalismo, Design e Media Social, trabalhando de forma colaborativa
            para desenvolver conteúdos de alto impacto.
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            Oferecemos serviços que vão da fotografia e produção de vídeos até à
            gestão de campanhas publicitárias, redes sociais e eventos,
            assegurando sempre uma comunicação clara, coerente e eficaz em todos
            os pontos de contacto com o público-alvo.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white text-black font-bold rounded-lg shadow-xl hover:bg-gray-200 transition"
          >
            Saber Mais
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <Image
              src="/images/about/about1.jpg"
              alt="Produção Audiovisual"
              width={600}
              height={800}
              className="rounded-3xl object-cover w-full aspect-[3/4] shadow-2xl border border-white/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="col-span-1 self-end"
          >
            <Image
              src="/images/about/about2.jpg"
              alt="Sessão Criativa"
              width={600}
              height={800}
              className="rounded-3xl object-cover w-full aspect-[3/4] shadow-2xl border border-white/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 80, rotate: 4 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <Image
              src="/images/about/about3.jpg"
              alt="Campanha Publicitária"
              width={1200}
              height={800}
              className="rounded-3xl object-cover w-full aspect-video shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
