import Contact from "@/components/contact";
import Features from "@/components/features-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import React from "react";

export default function page() {
  return (
    <>
      <HeroSection />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
      {/* Footer */}
      <FooterSection />
    </>
  );
}
