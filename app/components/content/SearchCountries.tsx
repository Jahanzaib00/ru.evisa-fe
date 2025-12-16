"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Country } from "@/app/lib/data/countries";

interface SearchCountriesProps {
  countries: Country[];
  basePath?: string; // Optional base path for links (e.g., "/esta/countries" or "/uk-eta/countries")
}

export default function SearchCountries({ countries, basePath = "/countries" }: SearchCountriesProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter countries based on search query
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return countries
      .filter(
        (country) =>
          country.name.toLowerCase().includes(query) ||
          country.code.toLowerCase().includes(query) ||
          country.region.toLowerCase().includes(query)
      )
      .slice(0, 10); // Show top 10 results
  }, [searchQuery, countries]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by country name or region... (e.g., 'France', 'Europe', 'Asia')"
          className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Search Results Dropdown */}
      {searchQuery.trim() && (
        <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto">
          {filteredCountries.length > 0 ? (
            <div className="p-2">
              {filteredCountries.map((country) => {
                const joinedInfo = country.vwpJoinedYear
                  ? `Since ${country.vwpJoinedYear}`
                  : country.etaPhase
                  ? `Phase ${country.etaPhase}`
                  : "Eligible";

                return (
                  <Link
                    key={country.slug}
                    href={`${basePath}/${country.slug}`}
                    className="block p-4 hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setSearchQuery("")}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 text-4xl">
                        {country.flagEmoji || "🌍"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {country.name}
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="bg-gray-100 px-2 py-1 rounded uppercase font-semibold">
                            {country.code}
                          </span>
                          <span>{country.region}</span>
                          <span>{joinedInfo}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <svg
                className="w-12 h-12 mx-auto mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm">
                No countries found for &quot;{searchQuery}&quot;
              </p>
              <p className="text-xs mt-1">
                Try searching by country name or region
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
