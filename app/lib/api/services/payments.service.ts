import { apiClient } from '../client';
import type {
  PaymentIntentRequest,
  PaymentIntentResponse,
  Payment,
  ApiResponse,
} from '../types';

export const paymentsService = {
  async createPaymentIntent(data: PaymentIntentRequest): Promise<ApiResponse<PaymentIntentResponse>> {
    return apiClient.post<ApiResponse<PaymentIntentResponse>>(
      '/payments/create-payment-intent',
      data
    );
  },

  async getPaymentStatus(applicationId: string): Promise<ApiResponse<Payment>> {
    return apiClient.get<ApiResponse<Payment>>(`/payments/application/${applicationId}`);
  },
};
