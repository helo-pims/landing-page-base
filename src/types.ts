/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from "react";
import { LucideProps } from "lucide-react";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  bullets: string[];
  icon: ComponentType<LucideProps>;
  whatsappText: string;
}

export interface ClientStats {
  value: string;
  label: string;
}
