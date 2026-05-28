/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bot, Globe, Palette, Rocket, BarChart3 } from "lucide-react";
import { ServiceItem } from "../types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "automacao",
    name: "Automação",
    description: "Sistemas e fluxos inteligentes para eliminar tarefas manuais e otimizar a produtividade do seu time.",
    bullets: [
      "Integrações robustas via n8n, Make e Zapier",
      "Chatbots inteligentes de atendimento e vendas",
      "Gestão de CRM e fluxos automáticos de e-mail"
    ],
    icon: Bot,
    whatsappText: "Olá! Tenho interesse em um projeto automação (n8n, Make, Zapier, Chatbots)."
  },
  {
    id: "paginas-institucionais",
    name: "Páginas Institucionais",
    description: "Criação de landing pages e sites corporativos focados em alta conversão e performance superior.",
    bullets: [
      "Desenvolvimento de sites de alta velocidade",
      "Otimização extrema de SEO e performance técnica",
      "Código limpo, moderno e estruturado de ponta a ponta"
    ],
    icon: Globe,
    whatsappText: "Olá! Tenho interesse em páginas institucionais e desenvolvimento de sites."
  },
  {
    id: "consultoria",
    name: "Consultoria",
    description: "Direcionamento estratégico especializado em design de interface e consistência de marca digital.",
    bullets: [
      "Análise profunda de User Interface (UI)",
      "Estruturação de Styleguides e Design Systems",
      "Melhoria contínua de fluxo e experiência de uso"
    ],
    icon: Palette,
    whatsappText: "Olá! Tenho interesse no serviço de Consultoria de UI e Styleguides."
  },
  {
    id: "mvp",
    name: "MVP (Mínimo Produto Viável)",
    description: "Tire sua primeira versão do papel com agilidade estratégica e arquitetura escalável.",
    bullets: [
      "Validação ágil de produto digital",
      "Foco total na entrega rápida de valor real",
      "Arquitetura modular pensada para futura expansão"
    ],
    icon: Rocket,
    whatsappText: "Olá! Tenho interesse no desenvolvimento de um MVP para meu produto digital."
  },
  {
    id: "analise-de-dados",
    name: "Análise de Dados",
    description: "Decisões orientadas por fatos com dados unificados e visualizações extremamente intuitivas.",
    bullets: [
      "Criação de dashboards sob medida em Looker Studio",
      "Modelagem e relatórios profundos em Power BI",
      "Métricas consolidadas do seu funil comercial"
    ],
    icon: BarChart3,
    whatsappText: "Olá! Tenho interesse em análise de dados e dashboards no Looker Studio ou Power BI."
  }
];

export const CLIENT_STATS_DATA = [
  { value: "Personalize", label: "Projetos Sob Medida para a sua Marca" },
  { value: "Flexivel", label: "Especialidades Integradas" },
  { value: "100%", label: "Compromisso com Resultados" }
];
