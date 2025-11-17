/**
 * Country utility functions and data
 */

export interface Country {
  code: string;
  name: string;
}

/**
 * Get flag emoji for a country code
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @returns Flag emoji or empty string if invalid code
 */
export const getFlagEmoji = (countryCode: string): string => {
  if (!countryCode || countryCode.length !== 2) return "";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

/**
 * List of countries eligible for ESTA (Visa Waiver Program)
 * Source: https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visa-waiver-program.html
 */
export const ELIGIBLE_COUNTRIES: Country[] = [
  { code: "AD", name: "Andorra" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "BE", name: "Belgium" },
  { code: "BN", name: "Brunei" },
  { code: "CL", name: "Chile" },
  { code: "HR", name: "Croatia" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "EE", name: "Estonia" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "GR", name: "Greece" },
  { code: "HU", name: "Hungary" },
  { code: "IS", name: "Iceland" },
  { code: "IE", name: "Ireland" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italy" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "LV", name: "Latvia" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MT", name: "Malta" },
  { code: "MC", name: "Monaco" },
  { code: "NL", name: "Netherlands" },
  { code: "NZ", name: "New Zealand" },
  { code: "NO", name: "Norway" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Qatar" },
  { code: "SM", name: "San Marino" },
  { code: "SG", name: "Singapore" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "ES", name: "Spain" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "TW", name: "Taiwan" },
  { code: "GB", name: "United Kingdom" },
];

/**
 * Get country name by country code
 * @param code - ISO 3166-1 alpha-2 country code
 * @returns Country name or undefined if not found
 */
export const getCountryName = (code: string): string | undefined => {
  return ELIGIBLE_COUNTRIES.find(
    (country) => country.code.toLowerCase() === code.toLowerCase()
  )?.name;
};

/**
 * Get country by code
 * @param code - ISO 3166-1 alpha-2 country code
 * @returns Country object or undefined if not found
 */
export const getCountryByCode = (code: string): Country | undefined => {
  return ELIGIBLE_COUNTRIES.find(
    (country) => country.code.toLowerCase() === code.toLowerCase()
  );
};

/**
 * Check if a country is eligible for ESTA
 * @param code - ISO 3166-1 alpha-2 country code
 * @returns true if country is eligible, false otherwise
 */
export const isEligibleCountry = (code: string): boolean => {
  return ELIGIBLE_COUNTRIES.some(
    (country) => country.code.toLowerCase() === code.toLowerCase()
  );
};
