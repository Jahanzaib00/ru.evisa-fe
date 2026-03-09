"use client";

import { ReactNode } from "react";
import Header from "../layout/Header";
import StepProgress from "./StepProgress";
import PricingSidebar from "./PricingSidebar";
import { Spinner } from "../ui/Loader";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { getService, getCurrencySymbol } from "@/app/lib/config/services";

interface ApplicationLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  showSidebar?: boolean;
  showMobileCTA?: boolean;
  mobileButtonText?: string;
  mobileButtonDisabled?: boolean;
  onMobileButtonClick?: () => void;
  onSidebarButtonClick?: () => void;
  sidebarButtonText?: string;
  sidebarButtonDisabled?: boolean;
  showPrevious?: boolean;
  showPricing?: boolean;
  showTotalAmount?: boolean;
  showProcessingFee?: boolean;
  showProgressBar?: boolean;
  onPreviousClick?: () => void;
}

export default function ApplicationLayout({
  children,
  title,
  description,
  showSidebar = true,
  showMobileCTA = true,
  mobileButtonText = "Continue",
  mobileButtonDisabled = false,
  onMobileButtonClick,
  onSidebarButtonClick,
  sidebarButtonText = "Save & Continue",
  sidebarButtonDisabled = false,
  showPrevious = true,
  showPricing = true,
  showTotalAmount = false,
  showProcessingFee = false,
  showProgressBar = true,
  onPreviousClick,
}: ApplicationLayoutProps) {
  const { getTotalAmount, serviceType } = useApplicationStore();

  const service = serviceType ? getService(serviceType) : null;
  const currency = service?.pricing.currency || "USD";
  const currencySymbol = getCurrencySymbol(currency);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Progress Bar */}
      {showProgressBar && <StepProgress />}
      {/* Main Content */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
          !showProgressBar && "py-6 pt-8 lg:py-12"
        } ${showMobileCTA ? "pb-32 md:pb-12" : ""}`}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-dark mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-base text-gray mb-4">{description}</p>
        )}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left Column - Form Content */}
          <div
            className={
              showSidebar
                ? "md:col-span-7"
                : "md:col-span-12 max-w-3xl mx-auto w-full"
            }
          >
            {/* Form Content */}
            {children}
          </div>

          {/* Right Column - Pricing Sidebar (Desktop Only) */}
          {showSidebar && (
            <div className="hidden md:block md:col-span-5">
              <PricingSidebar
                showButton={!!onSidebarButtonClick}
                buttonText={sidebarButtonText}
                buttonDisabled={sidebarButtonDisabled}
                onButtonClick={onSidebarButtonClick}
                showPrevious={showPrevious}
                showPricing={showPricing}
                showTotalAmount={showTotalAmount}
                showProcessingFee={showProcessingFee}
                onPreviousClick={onPreviousClick}
              />
            </div>
          )}
        </div>
      </div>
      {/* Sticky Bottom CTA (Mobile Only) */}
      {showMobileCTA && onMobileButtonClick && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-light p-4 shadow-lg z-40">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray">Total</span>
            <span
              className={`${
                showTotalAmount ? "text-lg" : "text-md"
              } font-bold text-gray-dark`}
              suppressHydrationWarning
            >
              {showTotalAmount
                ? `${currencySymbol}${getTotalAmount().toFixed(
                    2,
                  )} ${currency.toUpperCase()}`
                : "Calculated at checkout"}
            </span>
          </div>
          <button
            type="button"
            onClick={onMobileButtonClick}
            disabled={mobileButtonDisabled}
            className="w-full bg-primary hover:bg-primary-light text-white font-semibold
                     py-3.5 px-6 rounded-md transition-colors disabled:opacity-50
                     disabled:cursor-not-allowed text-base flex items-center justify-center gap-2"
          >
            {mobileButtonDisabled && <Spinner size="sm" variant="white" />}
            {mobileButtonText}
          </button>
        </div>
      )}
    </div>
  );
}
