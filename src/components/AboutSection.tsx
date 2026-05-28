/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CLIENT_STATS_DATA } from "../data/servicesData";

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-gray-200 px-12 py-16 border-b border-gray-300">
  <div className="max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Column: Context / Brand Philosophy */}
      <div className="lg:col-span-5 space-y-4">
        {/* Ajustado para text-gray-800 para não sumir no fundo cinza */}
        <span className="text-xs font-mono font-bold tracking-[0.2em] text-gray-800 uppercase">
          Sobre a Operação
        </span>
        <h2 className="text-3xl font-display font-semibold text-gray-900 tracking-tight leading-tight">
          Construção de canais digitais de alta performance e atrito zero.
        </h2>
        <div className="h-0.5 w-12 bg-gray-900 rounded"></div>
      </div>

      {/* Right Column: Main authentic copy block */}
      <div className="lg:col-span-7 space-y-8">
        {/* Ajustado para text-gray-900 para o texto principal ficar bem escuro */}
        <div className="space-y-4 text-gray-900 leading-relaxed text-base font-normal">
          <p>
            Trabalho sem rodeios ou termos técnicos vazios. Com a união de engenharia de software ágil à estratégia comercial de conversão direta. O objetivo de qualquer fluxo digital é conectar quem precisa de uma solução com quem é capaz de entregá-la — no menor espaço de tempo viável.
          </p>
          {/* Ajustado para text-white e border-white puro, garantindo o contraste */}
          <p className="border-l-2 border-gray-400 pl-4 italic text-gray-400 text-sm">
            Placeholder: Dentro da sua Landing Page, este espaço é reservado para resumir a história, valores e o posicionamento exclusivo da sua marca de forma autêntica. Podemos usar um parágrafo enxuto que passe confiança imediata ao visitante sobre as capacidades da sua operação técnica.
          </p>
        </div>

        {/* Micro Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-1700">
          {CLIENT_STATS_DATA.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl font-display font-bold text-gray-900">
                {stat.value}
              </div>
              {/* Ajustado para text-gray-800 para dar leitura no fundo */}
              <div className="text-xs font-mono text-gray-800 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
