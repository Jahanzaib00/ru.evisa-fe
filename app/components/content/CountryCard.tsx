/**
 * CountryCard Component
 * Reusable card component for displaying countries in a grid
 * Multi-service aware - adapts content based on service type
 */

import Link from "next/link";
import { Country } from "@/app/lib/data/countries";
import { ServiceType } from "@/app/lib/config/services";

interface CountryCardProps {
  country: Country;
  href: string;
  serviceType: ServiceType;
}

export default function CountryCard({
  country,
  href,
  serviceType,
}: CountryCardProps) {
  // Get service-specific detail to display
  const getServiceDetail = () => {
    switch (serviceType) {
      case ServiceType.US_ESTA:
        return country.vwpJoinedYear
          ? `VWP since ${country.vwpJoinedYear}`
          : "VWP eligible";
      case ServiceType.UK_ETA:
        return country.etaPhase
          ? `Phase ${country.etaPhase} rollout`
          : "ETA eligible";
      case ServiceType.CANADA_ETA:
        return country.canadaEtaEligible
          ? "eTA eligible"
          : "eTA required";
      case ServiceType.INDONESIA_EVOA:
        return "eVOA eligible";
      default:
        return "Eligible";
    }
  };

  return (
    <Link
      href={href}
      className="block bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="flex flex-col items-center text-center space-y-3">
        {country.flagEmoji && (
          <span className="text-5xl">{country.flagEmoji}</span>
        )}
        <div className="w-full">
          <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
            {country.name}
          </h3>
          <div className="space-y-1 text-xs md:text-sm text-gray-500">
            <p>{getServiceDetail()}</p>
            {country.population && (
              <p className="text-xs text-gray-400">
                {(country.population / 1000000).toFixed(1)}M people
              </p>
            )}
          </div>
        </div>
        <span className="text-blue-600 font-semibold text-sm group-hover:underline flex items-center gap-1">
          View guide
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
