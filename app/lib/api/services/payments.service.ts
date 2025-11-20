import { api } from "../client";
import type {
  PaymentIntentRequest,
  PaymentIntentResponse,
  Payment,
} from "../types";

export const paymentsService = {
  async createPaymentIntent(
    data: PaymentIntentRequest
  ): Promise<PaymentIntentResponse> {
    return api.post<PaymentIntentResponse>(
      "/payments/create-payment-intent",
      data
    );
  },

  async getPaymentStatus(applicationId: string): Promise<Payment> {
    return api.get<Payment>(
      `/payments/application/${applicationId}`
    );
  },
};
