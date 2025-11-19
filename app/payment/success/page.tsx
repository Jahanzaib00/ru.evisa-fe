"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/app/lib/analytics";
import Header from "@/app/components/layout/Header";

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    trackEvent({
      action: "payment_success_viewed",
      category: "conversion",
      label: "payment_success_page",
    });

    // Clear browser history to prevent back navigation to payment/checkout pages
    // This prevents users from accidentally re-submitting or seeing stale data
    if (typeof window !== "undefined" && window.history.length > 1) {
      // Replace current state to prevent back navigation
      window.history.replaceState(null, "", "/payment/success");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-lightest">
      <Header />
      <div className="flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          {/* Success Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center">
            {/* Success Icon */}
            <div className="mx-auto w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-dark mb-4">
              Payment Successful!
            </h1>
            <p className="text-lg text-gray mb-8">
              Your ESTA application payment has been processed successfully.
            </p>

            {/* Details Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
              <h2 className="font-semibold text-gray-dark mb-4 text-lg">
                What happens next?
              </h2>
              <div className="space-y-3 text-sm text-gray">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <p>
                    <span className="font-semibold text-gray-dark">
                      Email Confirmation:
                    </span>{" "}
                    You will receive a confirmation email within the next few
                    minutes with your receipt and application details.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <p>
                    <span className="font-semibold text-gray-dark">
                      Processing:
                    </span>{" "}
                    Your application will be processed and you'll receive
                    updates via email.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <p>
                    <span className="font-semibold text-gray-dark">
                      Expected Delivery:
                    </span>{" "}
                    You should receive your approved ESTA within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => router.replace("/")}
                className="w-full bg-primary hover:bg-primary-light text-white font-semibold
                       py-3.5 px-6 rounded-lg transition-colors text-base"
              >
                Return to Home
              </button>
              <button
                onClick={() => router.replace("/orders")}
                className="w-full border border-gray-light hover:bg-gray-lightest
                       text-gray-dark font-medium py-3 px-6 rounded-lg transition-colors"
              >
                View My Applications
              </button>
            </div>

            {/* Support Info */}
            <div className="mt-8 pt-6 border-t border-gray-light">
              <p className="text-sm text-gray">
                Need help?{" "}
                <a
                  href="/contact"
                  className="text-primary hover:underline font-medium"
                >
                  Contact our support team
                </a>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray">
              Keep this page for your records or check your email for the
              confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
