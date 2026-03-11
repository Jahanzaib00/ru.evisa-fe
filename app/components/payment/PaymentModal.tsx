"use client";

import { useState, useEffect } from "react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Spinner } from "@/app/components/ui/Loader";
import { extractErrorMessage, logError } from "@/app/lib/utils/errorHandler";
import { COMPANY_NAME } from "@/app/lib/constants";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
);

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientSecret: string;
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

function PaymentForm({
  amount,
  onSuccess,
  onError,
  onClose,
}: {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
  onClose: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      onError(
        "Payment system is not ready. Please refresh the page and try again.",
      );
      return;
    }

    setIsProcessing(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
        },
        redirect: "if_required",
      });

      if (error) {
        // Log Stripe error
        logError(error, "Stripe payment confirmation");

        // Extract and display user-friendly error message
        const errorMessage = extractErrorMessage(
          error,
          "Payment failed. Please check your card details and try again.",
        );
        onError(errorMessage);
        setIsProcessing(false);
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        // Payment successful
        onSuccess();
      } else if (paymentIntent) {
        // Payment in unexpected state
        logError(
          new Error(
            `Unexpected payment intent status: ${paymentIntent.status}`,
          ),
          "Payment status",
        );
        onError(
          "Payment is being processed. Please wait a moment and check your email for confirmation.",
        );
        setIsProcessing(false);
      }
    } catch (err: any) {
      // Log unexpected error
      logError(err, "Payment submission");

      // Extract and display error message
      const errorMessage = extractErrorMessage(
        err,
        "An unexpected error occurred during payment. Please try again.",
      );
      onError(errorMessage);
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Stripe Payment Element */}
      <PaymentElement
        options={{
          layout: "tabs",
          wallets: {
            applePay: "auto",
            googlePay: "auto",
          },
        }}
      />

      {/* Payment Button */}
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className={`w-full ${
          isProcessing
            ? "bg-gray-light hover:bg-gray"
            : "bg-blue hover:bg-blue-light"
        } text-white font-semibold
                   py-4 px-6 rounded-lg transition-colors disabled:opacity-50
                   disabled:cursor-not-allowed text-base flex items-center justify-center gap-2`}
      >
        {isProcessing ? (
          <Spinner size="sm" variant="white" />
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {isProcessing
          ? "Processing..."
          : `Pay $${(amount / 100).toFixed(2)} USD`}
      </button>

      {/* Terms Acknowledgment */}
      <div className="text-xs text-center">
        <p>
          By submitting payment I acknowledge that I have read and accept the{" "}
          {COMPANY_NAME}{" "}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline font-medium"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline font-medium"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Cancel Button */}
      <button
        type="button"
        onClick={onClose}
        disabled={isProcessing}
        className="w-full text-gray hover:text-gray-dark font-medium py-2 transition-colors"
      >
        Cancel
      </button>
    </form>
  );
}

export default function PaymentModal({
  isOpen,
  onClose,
  clientSecret,
  amount,
  onSuccess,
  onError,
}: PaymentModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const options = {
    clientSecret,
    appearance: {
      theme: "stripe" as const,
      variables: {
        colorPrimary: "#1a56db",
        colorBackground: "#ffffff",
        colorText: "#1f2937",
        colorDanger: "#dc2626",
        fontFamily: "system-ui, sans-serif",
        spacingUnit: "4px",
        borderRadius: "8px",
      },
    },
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="bg-white rounded-xl max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-light px-6 py-4 flex items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-dark mb-0!">Payment</h2>
        </div>

        {/* Payment Form */}
        <div className="px-6 py-6">
          <Elements stripe={stripePromise} options={options}>
            <PaymentForm
              amount={amount}
              onSuccess={onSuccess}
              onError={onError}
              onClose={onClose}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
}
