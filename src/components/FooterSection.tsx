/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, Heart, Globe, ArrowRight } from "lucide-react";
import { getWhatsappLink, WHATS_PHONE } from "../utils/whatsapp";

export default function FooterSection() {
  const footerCtaLink = getWhatsappLink("Olá! Gostaria de agendar uma reunião comercial para entendermos como suas soluções podem acelerar meu negócio.");

  return (
    <footer id="contato" className="bg-gray-100 text-gray-900 border-t border-gray-100">
      
      {/* Eye-catching, prominent core call-to-action block */}
      <div className="max-w-6xl mx-auto px-12 py-16">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden shadow-sm">
          {/* Subtle color highlight indicator at top line (solid color, no gradients) */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-gray-400">
              Pronto para Avançar?
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-gray-900 tracking-tight leading-tight">
              Pronto para transformar sua operação?
            </h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed font-normal">
              Fale diretamente comigo e receba um diagnóstico consultivo claro e direto sobre as suas necessidades de automação, páginas ou dados.
            </p>
          </div>

          {/* Flashy Highlighted Call to Action Button */}
          <div className="flex flex-col items-center justify-center space-y-3 pt-4">
            <a
              href={footerCtaLink}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full text-base font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:shadow-blue-200 transition-all duration-200 cursor-pointer group"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span>Iniciar Projeto no WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-xs font-mono text-gray-400">
              Atendimento direto e imediato
            </span>
          </div>
        </div>

        {/* Corporate copyright and clean links bar */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base tracking-tight text-gray-900">
                HELO LABS<span className="text-blue-600">.</span>
              </span>
            </div>
            <p className="text-gray-450 text-gray-400">
              © {new Date().getFullYear()}
            </p>
          </div>

          
<div className="flex items-center gap-1.5 text-gray-400 font-mono">
  <span>Made by</span>
  <a 
    href="https://www.linkedin.com/in/heloisa-pimentel-s/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="font-bold text-gray-500 hover:text-blue-500 transition-colors duration-200"
  >
    Heloisa-Pimentel
  </a>
  <Heart className="w-3.5 h-3.5 text-gray-300" />
</div>
        </div>

      </div>
    </footer>
  );
}
