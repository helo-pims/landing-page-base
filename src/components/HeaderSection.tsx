/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { getWhatsappLink } from "../utils/whatsapp";

export default function HeaderSection() {
  const mainCtaLink = getWhatsappLink("Olá! Gostaria de entender mais sobre as suas soluções baseadas em Landing Page.");

  return (
    <header className="relative bg-white text-gray-900 border-b border-gray-100 overflow-hidden">
      {/* Structural SVG Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.14] pointer-events-none select-none">
        <svg width="100%" height="100%">
          <pattern id="grid-pattern-hero" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#0a34a8" strokeWidth="1.2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
        </svg>
      </div>

      {/* Decorative Blur Dot Layer (Pure solid colors with opacity, no gradients) */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-50 opacity-45 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-slate-100 opacity-60 blur-3xl pointer-events-none"></div>

      {/* Top Brand Banner */}
      <div className="relative max-w-6xl mx-auto px-12 py-6 flex items-center justify-between z-10">
        <div className="flex flex-col gap-1">
          <span className="font-display font-medium text-lg tracking-tight text-gray-900">
            HELO LABS<span className="text-blue-600">.</span>
          </span>
          <span className="text-xs text-gray-400 font-medium tracking-wide">
            Preview de Projeto • Estrutura escalável para conversão de Leads.
          </span>
        </div>
        
        <a
          href={mainCtaLink}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 cursor-pointer z-10"
        >
          <span>Entre em Contato</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Main Hero Header Area */}
      <div className="relative max-w-6xl mx-auto px-12 pt-14 pb-24 grid lg:grid-cols-12 gap-12 items-center z-10">
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-gray-500 tracking-[0.15em] uppercase">
              Captação de Alta Performance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-gray-900 tracking-tight leading-none"
          >
            Exemplo base de landing page para captação de leads
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-gray-500 max-w-xl leading-relaxed font-normal"
          >
            Uma arquitetura técnica robusta, otimizada e responsiva de conversão direta, criada para direcionar visitantes qualificados para o seu WhatsApp comercial com atrito zero.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
          >
            <a
              href={mainCtaLink}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-blue-700 transition-all duration-200 cursor-pointer group shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
              <span>Quero mais detalhes!</span>
              <ArrowRight className="w-4 h-4 min-w-4 text-gray-405 group-hover:translate-x-1 group-hover:text-white transition-all text-gray-450" />
            </a>

            <div className="flex items-center justify-center gap-6 px-1 text-xs font-mono text-gray-400 py-2 sm:py-0">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                Início Imediato
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Foco Comercial
              </span>
            </div>
          </motion.div>
        </div>

        {/* Decorative High-End Layered Visual Area representing Landing Page Construction & Customization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block relative"
        >
          {/* Base shadow layer */}
          <div className="absolute top-6 left-6 right-0 bottom-0 bg-gray-100 rounded-3xl border border-gray-150 opacity-50 translate-x-3 translate-y-3 pointer-events-none"></div>

          {/* Core Designer Canvas Card */}
          <div className="relative bg-white p-6 rounded-3xl border border-gray-200 shadow-2xl space-y-6 z-10 overflow-hidden">
            {/* Visual Header / Builder Mock Controls */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-gray-200"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-450 bg-blue-400"></span>
                  <span className="w-3 h-3 rounded-full bg-purple-400"></span>
                </span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-semibold ml-1">Sua Página Personalizada</span>
              </div>
              <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-widest font-semibold animate-pulse">
                Ativada
              </span>
            </div>

            {/* Main Visual Schema / Landing Page Under Construction Blueprint */}
            <div className="relative border border-dashed border-gray-200 rounded-2xl bg-gray-50/50 p-5 space-y-4 overflow-hidden min-h-[220px]">
              
              

              {/* Wireframe Hero Mock block */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="h-2.5 w-1/4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-2 w-10 bg-blue-100 rounded"></div>
                </div>
                <div className="h-6 w-5/6 bg-gray-300 rounded-md"></div>
                <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
              </div>

              {/* Grid / Layer system mockup */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-2.5 bg-white rounded-lg border border-gray-150 flex flex-col justify-between h-14">
                  <div className="w-3.5 h-3.5 bg-blue-50 rounded text-blue-600 flex items-center justify-center text-[8px] font-bold">W</div>
                  <div className="h-1.5 w-4/5 bg-gray-200 rounded"></div>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-gray-150 flex flex-col justify-between h-14">
                  <div className="w-3.5 h-3.5 bg-purple-50 rounded text-purple-600 flex items-center justify-center text-[8px] font-bold">H</div>
                  <div className="h-1.5 w-3/4 bg-gray-200 rounded"></div>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-gray-150 flex flex-col justify-between h-14">
                  <div className="w-3.5 h-3.5 bg-gray-50 rounded text-gray-500 flex items-center justify-center text-[8px] font-bold">M</div>
                  <div className="h-1.5 w-1/2 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Responsive Layout Canvas stack (Represents mobile simulation) */}
              <motion.div
                animate={{ rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white border border-gray-200 rounded-xl p-3 shadow-md space-y-2.5 max-w-[140px] absolute bottom-3 right-3 z-20 pointer-events-none"
              >
               <div className="flex items-center justify-between border-b border-gray-50 pb-1.5 gap-2">
  <span className="text-[7px] font-mono font-bold text-gray-400">MOBILE_FIRST</span>
  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
</div>
                <div className="space-y-1.5">
                  <div className="h-1.5 w-2/3 bg-gray-200 rounded"></div>
                  <div className="h-1.5 w-full bg-blue-100 rounded"></div>
                  <div className="h-2.5 w-1/2 bg-gray-500 rounded"></div>
                </div>
              </motion.div>

              {/* Looping wireframe construction metrics */}
              <div className="space-y-1 pt-1.5">
                <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 font-semibold uppercase">
                  <span>responsividade</span>
                  <span className="text-gray-300">0.05s</span>
                </div>
                <div className="h-1 w-full bg-gray-150 rounded overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-1/3 bg-blue-600 rounded"
                  />
                </div>
              </div>

            </div>

            {/* Bottom Section details (Design specifications indicators) */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="block text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider">Arquitetura</span>
                <span className="text-lg font-display font-semibold text-gray-900 font-mono">Escalável</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="block text-[10px] text-gray-400 font-mono font-bold uppercase tracking-wider">Design</span>
                <span className="text-lg font-display font-semibold text-gray-900 font-mono">Moderno</span>
              </div>
            </div>

            {/* Indicator of system stability and pure direct access to Whatsapp numbers */}
            <div className="bg-blue-50/50 rounded-lg p-3 text-[11px] text-blue-800 font-medium flex items-center justify-between border border-blue-100/50">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Estrutura testada e fluida</span>
              </div>
             
            </div>

          </div>

          {/* Overlay Tiny Secondary Floating Gear badge for motion accent */}
          <motion.div 
            initial={{ x: 10, y: 10 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 bg-white py-2 px-3.5 rounded-lg border border-gray-150 shadow-lg flex items-center gap-2 z-20 pointer-events-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping"></span>
            <span className="text-[9px] font-mono text-gray-500 font-bold tracking-wider uppercase">Landing Page</span>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
