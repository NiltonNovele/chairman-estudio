"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCameraRetro,
  FaHandshake,
  FaLightbulb,
  FaHeart,
  FaStar,
} from "react-icons/fa";

export default function AboutIntro() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Conteúdo de Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Quem Somos
          </h2>
          <p className="text-gray-300 leading-relaxed">
            <strong>ChairmanMediaHouse</strong> é uma empresa de fotografia e
            videografia de alto nível, sediada em Midrand, Gauteng, África do
            Sul. Fundada pelo fotógrafo profissional{" "}
            <strong>Ismail (Chairman) Essak</strong>, o estúdio é reconhecido
            pelo olhar apurado, criatividade e excelência na captura de momentos
            únicos.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Com uma abordagem corporativa sólida, o estúdio oferece serviços
            personalizados de fotografia, videografia, edição de vídeo e
            aprimoramento visual. Movidos pela paixão por contar histórias
            visuais, combinamos técnica e intuição artística para entregar
            resultados excepcionais a clientes particulares e corporativos.
          </p>
        </motion.div>

        {/* Colagem de Imagens */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/about/about1.jpg"
            alt="Trabalho ChairmanMediaHouse 1"
            className="rounded-xl object-cover w-full h-[240px]"
          />
          <img
            src="/images/about/about2.jpg"
            alt="Trabalho ChairmanMediaHouse 2"
            className="rounded-xl object-cover w-full h-[240px]"
          />
          <img
            src="/images/about/about3.jpg"
            alt="Trabalho ChairmanMediaHouse 3"
            className="rounded-xl object-cover w-full h-[240px] col-span-2"
          />
        </motion.div>
      </div>

      {/* Secção Missão & Visão */}
      <div className="max-w-6xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-[#F26722]">
            Missão & Visão
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h4 className="text-xl font-semibold mb-2 text-[#F26722]">
                Missão
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Contar histórias visuais inesquecíveis através de momentos
                capturados com excelência e edição premium, criando memórias
                duradouras para indivíduos e marcas.
              </p>
            </div>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h4 className="text-xl font-semibold mb-2 text-[#F26722]">
                Visão
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Tornar-nos uma das principais marcas de fotografia e videografia
                em África do Sul, reconhecida pela excelência, inovação e
                impacto criativo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Secção Valores */}
      <div className="max-w-6xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-[#F26722] mb-10">
            Os Nossos Valores
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Valor 1 */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:ring-2 hover:ring-[#F26722] transition duration-300 text-center">
              <FaCameraRetro className="text-3xl text-[#F26722] mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Criatividade</h4>
              <p className="text-gray-300 text-sm">
                Contamos histórias com originalidade e emoção, capturando
                momentos com excelência artística.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:ring-2 hover:ring-[#F26722] transition duration-300 text-center">
              <FaHandshake className="text-3xl text-[#F26722] mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Profissionalismo</h4>
              <p className="text-gray-300 text-sm">
                Cada sessão, edição e interação reflete os nossos elevados
                padrões e respeito pelos clientes.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:ring-2 hover:ring-[#F26722] transition duration-300 text-center">
              <FaLightbulb className="text-3xl text-[#F26722] mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Inovação</h4>
              <p className="text-gray-300 text-sm">
                Adotamos técnicas, ferramentas e ideias modernas para manter-nos
                na vanguarda da produção visual.
              </p>
            </div>

            {/* Valor 4 */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:ring-2 hover:ring-[#F26722] transition duration-300 text-center">
              <FaStar className="text-3xl text-[#F26722] mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Excelência</h4>
              <p className="text-gray-300 text-sm">
                Entregamos visuais de alta qualidade com atenção ao detalhe em
                cada frame.
              </p>
            </div>

            {/* Valor 5 */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:ring-2 hover:ring-[#F26722] transition duration-300 text-center">
              <FaHeart className="text-3xl text-[#F26722] mb-4 mx-auto" />
              <h4 className="text-xl font-semibold mb-2">Paixão</h4>
              <p className="text-gray-300 text-sm">
                Amamos o que fazemos — e isso reflete-se em cada história visual
                que ajudamos a contar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
