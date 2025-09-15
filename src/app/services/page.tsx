"use client";

import React from "react";
import MainHeader from "../../components/MainHeader";
import ServiceHero from "../../components/services/ServiceHero";
import ServiceGrid from "../../components/services/ServiceGrid";
import CtaBooking from "../../components/services/CtaBooking";
import FooterSection from "../../components/FooterSection";

export default function ServicesPage() {
  return (
    <>
      <MainHeader />
      <ServiceHero />

      {/* Services Grid Section */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Os nossos serviços
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto">
            Descubra a vasta gama de serviços profissionais de fotografia e
            videografia que oferecemos para tornar os seus momentos
            inesquecíveis.
          </p>
          <ServiceGrid />
        </div>
      </section>

      {/* Booking Call-To-Action Section */}
      <CtaBooking />

      <FooterSection />
    </>
  );
}
