"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/gallery/gallery-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nossa <span className="text-[#F26722]">Galeria</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore alguns dos momentos inesquecíveis que captámos — desde
          casamentos a sessões de estúdio e tudo o mais.
        </p>
      </motion.div>
    </section>
  );
}
