/**
 * Helpers for dynamic legal page content.
 * All service data is pulled from the central service config so legal pages
 * never need manual updates when services or pricing change.
 */

import {
  SERVICES,
  getCurrencySymbol,
  type ServiceConfig,
} from "@/app/lib/config/services";

/** All active (implemented) service configs. */
export function getAllServices(): ServiceConfig[] {
  return Object.values(SERVICES).filter((s) => s.slug);
}

/** Format a government fee with currency symbol, e.g. "$40.00 USD". */
export function formatGovernmentFee(service: ServiceConfig): string {
  const symbol = getCurrencySymbol(service.pricing.currency);
  return `${symbol}${service.pricing.government.toFixed(2)} ${service.pricing.currency}`;
}

/** Get the default (standard) processing tier for a service. */
export function getStandardTier(service: ServiceConfig) {
  return (
    service.processingTiers.find((t) => t.isDefault) ??
    service.processingTiers[0]
  );
}

/** Format starting total price (government + standard service fee). */
export function formatStartingPrice(service: ServiceConfig): string {
  const tier = getStandardTier(service);
  const total = service.pricing.government + tier.serviceFee;
  const symbol = getCurrencySymbol(service.pricing.currency);
  return `${symbol}${total.toFixed(2)}`;
}

/** Format a dollar amount with currency symbol. */
export function formatFee(
  amount: number,
  currency: string,
): string {
  const symbol = getCurrencySymbol(currency);
  return `${symbol}${amount.toFixed(2)}`;
}
