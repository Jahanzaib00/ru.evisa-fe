/**
 * IP Geolocation utility
 * Uses ipapi.co free service (no authentication required)
 * Rate limit: 30,000 requests/month
 */

import axios from "axios";

/**
 * Get user's country code from IP address
 * @returns Country code (ISO 3166-1 alpha-2) or null if unavailable
 */
async function getUserCountryFromIP(): Promise<string | null> {
  if (typeof window === "undefined") return null;

  try {
    const response = await axios.get("https://api.country.is/", {
      timeout: 5000,
      headers: {
        Accept: "application/json",
      },
    });

    return response.data.country || null;
  } catch (error) {
    return null;
  }
}

/**
 * Auto-select nationality based on user's IP
 * @param eligibleCountryCodes - Array of eligible country codes
 * @param fallbackCode - Optional fallback country code
 * @returns Selected country code
 */
export async function autoSelectNationality(
  eligibleCountryCodes: string[],
  fallbackCode?: string
): Promise<string> {
  const userCountryCode = await getUserCountryFromIP();

  if (userCountryCode) {
    const isEligible = eligibleCountryCodes.some(
      (code) => code.toLowerCase() === userCountryCode.toLowerCase()
    );

    if (isEligible) {
      return userCountryCode.toUpperCase();
    }
  }

  return fallbackCode || eligibleCountryCodes[0] || "";
}
