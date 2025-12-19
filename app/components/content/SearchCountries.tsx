"use client";

/**
 * SearchCountries Component - Enhanced Version for Countries Hub
 * Provides comprehensive search and filter functionality
 * Features:
 * - Live search by country name, capital, code
 * - Filter by region
 * - Quick results preview
 * - Mobile and desktop optimized
 * - SEO-friendly with proper links
 */

import { useState, useMemo } from "react";
import { Country } from "@/app/lib/data/countries";
import { ServiceConfig } from "@/app/lib/config/services";
import { Search, Filter, X } from "lucide-react";
import Link from "next/link";

interface SearchCountriesProps {
  countries: Country[];
  destination: string;
  service: ServiceConfig;
  basePath?: string; // Legacy support - optional base path
}

export default function SearchCountries({
  countries,
  destination,
  service,
  basePath,
}: SearchCountriesProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  // Get unique regions
  const regions = useMemo(() => {
    const uniqueRegions = Array.from(new Set(countries.map((c) => c.region)));
    return uniqueRegions.sort();
  }, [countries]);

  // Filter countries based on search and region
  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch =
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (country.capitalCity &&
          country.capitalCity
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) ||
        country.region.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion =
        selectedRegion === "all" || country.region === selectedRegion;

      return matchesSearch && matchesRegion;
    });
  }, [countries, searchQuery, selectedRegion]);

  const clearSearch = () => {
    setSearchQuery("");
    setSelectedRegion("all");
  };

  // Construct link URL - support both new and legacy patterns
  const getCountryUrl = (country: Country) => {
    if (basePath) {
      return `${basePath}/${country.slug}`;
    }
    return `/${destination}/${service.slug}-for-${country.slug}`;
  };

  return (
    <div className="space-y-4">
      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search for your country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
            aria-label="Search countries"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Region Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full md:w-64 pl-10 pr-10 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none appearance-none bg-white cursor-pointer transition-colors"
            aria-label="Filter by region"
          >
            <option value="all">All Regions ({countries.length})</option>
            {regions.map((region) => {
              const count = countries.filter((c) => c.region === region).length;
              return (
                <option key={region} value={region}>
                  {region} ({count})
                </option>
              );
            })}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
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
        </div>
      </div>

      {/* Results Count and Clear */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">
          {filteredCountries.length === countries.length ? (
            <>
              Showing all <strong>{countries.length}</strong> countries
            </>
          ) : (
            <>
              Showing <strong>{filteredCountries.length}</strong> of{" "}
              <strong>{countries.length}</strong> countries
            </>
          )}
        </span>
        {(searchQuery || selectedRegion !== "all") && (
          <button
            onClick={clearSearch}
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
          >
            <X className="w-4 h-4" />
            Clear filters
          </button>
        )}
      </div>

      {/* Quick Results Preview (when searching) */}
      {searchQuery && filteredCountries.length > 0 && (
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Search className="w-5 h-5 text-blue-600" />
            Search Results
          </h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {filteredCountries.slice(0, 8).map((country) => (
              <Link
                key={country.slug}
                href={getCountryUrl(country)}
                className="block p-3 bg-white rounded-lg hover:bg-blue-100 transition-colors border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flagEmoji || "🌍"}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {country.name}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2 flex-wrap">
                      <span>{country.region}</span>
                      {country.capitalCity && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span>Capital: {country.capitalCity}</span>
                        </>
                      )}
                      {country.vwpJoinedYear && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span className="text-green-600 font-medium">
                            VWP since {country.vwpJoinedYear}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
            {filteredCountries.length > 8 && (
              <p className="text-sm text-gray-600 text-center pt-2 pb-1">
                + {filteredCountries.length - 8} more{" "}
                {filteredCountries.length - 8 === 1 ? "country" : "countries"}.
                Scroll down to see all results.
              </p>
            )}
          </div>
        </div>
      )}

      {/* No Results Message */}
      {searchQuery && filteredCountries.length === 0 && (
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 text-center">
          <div className="text-yellow-600 mb-2">
            <Search className="w-12 h-12 mx-auto mb-3" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">No countries found</h3>
          <p className="text-gray-700 mb-4">
            No countries match &quot;{searchQuery}&quot;
            {selectedRegion !== "all" && ` in ${selectedRegion}`}.
          </p>
          <button
            onClick={clearSearch}
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            Clear search and show all countries
          </button>
        </div>
      )}

      {/* Search Tips (when no active search) */}
      {!searchQuery && selectedRegion === "all" && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600">
            <strong>Tip:</strong> Type your country name or use the region
            filter to quickly find if you&apos;re eligible for {service.name}.
          </p>
        </div>
      )}
    </div>
  );
}
