/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans selection:bg-blue-100 selection:text-blue-905 antialiased">
      {/* Decorative top tiny indicator */}
      <div className="h-1 bg-neutral-200"></div>

      {/* Main Structural Layout Block */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col"
      >
        {/* Header Section (Hero and Início CTA) */}
        <HeaderSection />

        {/* Sobre Section (Direct authentic philosophy copy) */}
        <AboutSection />

        {/* Serviços Section (Icons, Cards, and discreet leads interest links) */}
        <ServicesSection />

        {/* Footer Section (Final Conversion Spotlight & Highlight button) */}
        <FooterSection />
      </motion.div>
    </div>
  );
}
