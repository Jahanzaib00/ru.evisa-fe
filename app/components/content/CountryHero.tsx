/**
 * CountryHero Component
 * Reusable hero section for country pages
 * Service-aware with dynamic trust signals and CTA
 */

import Link from "next/link";
import { Country } from "@/app/lib/data/countries";
import { ServiceConfig } from "@/app/lib/config/services";

interface CountryHeroProps {
  country: Country;
  service: ServiceConfig;
}

export default function CountryHero({ country, service }: CountryHeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          {country.flagEmoji && (
            <div className="text-7xl md:text-8xl mb-6">{country.flagEmoji}</div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {service.name} for {country.name} Citizens
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Complete guide to applying for {service.destination} travel
            authorization from {country.name}
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              99% Approval Rate
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              {service.processing.standard} Processing
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Secure & Trusted
            </span>
          </div>

          <Link
            href="/apply"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl"
          >
            Start Your {service.name} Application
          </Link>
        </div>
      </div>
    </section>
  );
}
