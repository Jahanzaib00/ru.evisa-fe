"use client";

import { useState } from "react";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import {
  getService,
  getCurrencySymbol,
  getProcessingTier,
  getDefaultProcessingTier,
} from "@/app/lib/config/services";

export default function MobileOrderSummary() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { totalApplicants, serviceType, processingTier } =
    useApplicationStore();

  // Get pricing from service config
  const service = serviceType ? getService(serviceType) : null;
  const governmentFee = service?.pricing.government || 0;

  // Get the processing tier (default if not set)
  const tier =
    serviceType && processingTier
      ? getProcessingTier(serviceType, processingTier) ||
        getDefaultProcessingTier(serviceType)
      : serviceType
        ? getDefaultProcessingTier(serviceType)
        : null;
  const serviceFee = tier?.serviceFee || 0;
  const processingTimeLabel = tier?.label || "Стандарт";

  const currency = service?.pricing.currency || "USD";
  const currencySymbol = getCurrencySymbol(currency);

  const grandTotal = (governmentFee + serviceFee) * totalApplicants;
  const isMultipleTravelers = totalApplicants > 1;

  return (
    <div className="md:hidden mb-6">
      {/* Collapsed View */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full bg-white border border-gray-light rounded-lg p-4
            hover:border-primary/30 ${
              isExpanded ? "rounded-b-none border-b-0" : ""
            }`}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Скрыть сводку заказа" : "Показать сводку заказа"}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-dark">
              Сводка заказа
            </span>
            <svg
              className={`w-4 h-4 text-gray transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {!isExpanded && (
            <p className="text-xl font-bold text-gray-dark">
              {currencySymbol}
              {grandTotal.toFixed(2)}
            </p>
          )}
        </div>
      </button>

      {/* Expanded View */}
      {isExpanded && (
        <div className="border border-t-0 border-gray-light rounded-b-lg bg-white px-4 pb-4 -mt-1">
          {/* Pricing Breakdown */}
          <div className="pt-4 space-y-3 text-sm">
            {governmentFee > 0 && (
              <div className="flex justify-between items-baseline">
                <span className="text-gray">Государственные сборы</span>
                <div className="text-right">
                  {isMultipleTravelers && (
                    <p className="text-xs text-gray mb-0.5">
                      {currencySymbol}
                      {governmentFee.toFixed(2)} × {totalApplicants}
                    </p>
                  )}
                  <span className="font-semibold text-gray-dark">
                    {currencySymbol}
                    {(governmentFee * totalApplicants).toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            <div className="flex justify-between items-baseline">
              <div>
                {tier && (
                  <p className="text-sm text-gray mt-0.5">
                    {processingTimeLabel} — сервисный сбор
                  </p>
                )}
              </div>
              <div className="text-right">
                {isMultipleTravelers && (
                  <p className="text-xs text-gray mb-0.5">
                    {currencySymbol}
                    {serviceFee.toFixed(2)} × {totalApplicants}
                  </p>
                )}
                <span className="font-semibold text-gray-dark">
                  {currencySymbol}
                  {(serviceFee * totalApplicants).toFixed(2)}
                </span>
              </div>
            </div>

          </div>

          {/* Total */}
          <div className="border-t border-gray-light mt-4 pt-4">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-medium text-gray-dark">Итого</span>
              <div className="text-right">
                {isMultipleTravelers && (
                  <p className="text-xs text-gray mb-1">За всех заявителей</p>
                )}
                <p className="text-2xl font-bold text-gray-dark">
                  {currencySymbol}
                  {grandTotal.toFixed(2)} {currency.toUpperCase()}
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-4 pt-4 border-t border-gray-light">
            <div className="flex items-center gap-2 text-xs text-gray">
              <svg
                className="w-4 h-4 text-success shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Мы принимаем надёжные меры для защиты ваших данных.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
