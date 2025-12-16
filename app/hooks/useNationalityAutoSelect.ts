import { useEffect } from "react";
import { ALL_COUNTRIES } from "@/app/lib/countries";
import { autoSelectNationality } from "@/app/lib/ipGeolocation";

/**
 * Custom hook to auto-select nationality based on user's IP
 * Reusable across Hero and Apply page
 */
export function useNationalityAutoSelect(
  currentNationality: string | undefined,
  setNationality: (nationality: string) => void
) {
  useEffect(() => {
    // Only auto-select if nationality is not already set
    if (!currentNationality) {
      const autoSelect = async () => {
        const eligibleCodes = ALL_COUNTRIES.map((c) => c.code);
        const countryCode = await autoSelectNationality(eligibleCodes);

        const country = ALL_COUNTRIES.find(
          (c) => c.code.toUpperCase() === countryCode.toUpperCase()
        );

        if (country) {
          setNationality(country.name);
        }
      };

      autoSelect();
    }
  }, [currentNationality, setNationality]);
}
