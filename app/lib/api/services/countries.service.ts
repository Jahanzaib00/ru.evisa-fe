import { api } from "../client";
import type { Country } from "../types";

export const countriesService = {
  async getEligibleCountries(): Promise<Country[]> {
    return api.get<Country[]>("/countries/eligible");
  },

  async getAllCountries(): Promise<Country[]> {
    return api.get<Country[]>("/countries/all");
  },

  async checkEligibility(countryCode: string): Promise<Country> {
    return api.get<Country>(`/countries/${countryCode}/eligible`);
  },
};
