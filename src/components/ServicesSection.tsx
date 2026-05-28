/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "../data/servicesData";
import { getWhatsappLink } from "../utils/whatsapp";

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-white px-12 py-16 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-gray-400 uppercase">
            Serviços Especializados
          </span>
          <h2 className="text-3xl font-display font-semibold text-gray-900 tracking-tight">
            Especialidades que impulsionam seus canais de aquisição
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed font-normal">
            Esta seção detalha as especialidades estratégicas para eliminar gargalos operacionais e viabilizar conversões diretas e imediatas.
          </p>
        </div>

        {/* Services Grid (Grid totalmente responsivo, expandindo até 5 colunas em lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES_DATA.map((service) => {
            const IconComponent = service.icon;
            const linkHref = getWhatsappLink(service.whatsappText);

            return (
              <div
                key={service.id}
                className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-gray-300 transition-all duration-250 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Subtle Icon wrapper (with gray-50 bg and soft brand color shifts) */}
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors text-gray-700">
                    <IconComponent className="w-5 h-5 transition-transform group-hover:scale-105 duration-200" />
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-1.5 text-sm tracking-tight">
                    {service.name}
                  </h3>
                  
                  <p className="text-xs text-gray-500 leading-normal mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-6 border-t border-gray-50 pt-4">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-[10px] font-mono text-gray-400 gap-1.5 leading-tight">
                        <span className="text-gray-300 select-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Discrete CTA link to WhatsApp */}
                <div className="pt-3 border-t border-gray-50 mt-auto">
                  <a
                    href={linkHref}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Tenho interesse</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-300 group-hover:text-blue-600 transition-colors" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
