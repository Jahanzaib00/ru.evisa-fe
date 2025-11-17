import { apiClient } from '../client';
import type { Country, ApiResponse } from '../types';

export const countriesService = {
  async getEligibleCountries(): Promise<ApiResponse<Country[]>> {
    return apiClient.get<ApiResponse<Country[]>>('/countries/eligible');
  },

  async getAllCountries(): Promise<ApiResponse<Country[]>> {
    return apiClient.get<ApiResponse<Country[]>>('/countries/all');
  },

  async checkEligibility(countryCode: string): Promise<ApiResponse<Country>> {
    return apiClient.get<ApiResponse<Country>>(`/countries/${countryCode}/eligible`);
  },
};
