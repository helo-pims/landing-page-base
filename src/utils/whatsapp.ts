/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const WHATS_PHONE = "5513991721333";

/**
 * Generates a direct WhatsApp link with a custom encoded message
 */
export function getWhatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATS_PHONE}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
