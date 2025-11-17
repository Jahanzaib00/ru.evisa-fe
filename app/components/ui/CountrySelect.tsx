"use client";

import { useState, useRef, useEffect, forwardRef } from "react";
import { Country, ELIGIBLE_COUNTRIES, getFlagEmoji } from "@/app/lib/countries";

interface CountrySelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  valueType?: "name" | "code"; // Whether value is country name or code
}

const CountrySelect = forwardRef<HTMLButtonElement, CountrySelectProps>(
  (
    {
      label,
      value,
      onChange,
      error,
      helperText,
      required = false,
      disabled = false,
      placeholder = "Select a country",
      valueType = "name",
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Find selected country
    const selectedCountry = ELIGIBLE_COUNTRIES.find((country) =>
      valueType === "code" ? country.code === value : country.name === value
    );

    // Filter countries based on search
    const filteredCountries = ELIGIBLE_COUNTRIES.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
          setSearchTerm("");
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        // Focus search input when dropdown opens
        setTimeout(() => searchInputRef.current?.focus(), 0);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    const handleSelect = (country: Country) => {
      onChange(valueType === "code" ? country.code : country.name);
      setIsOpen(false);
      setSearchTerm("");
    };

    const toggleDropdown = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    return (
      <div className="w-full relative" ref={dropdownRef}>
        {label && (
          <label className="block text-sm font-medium text-gov-gray-dark mb-1.5">
            {label}
            {required && <span className="text-accent ml-1">*</span>}
          </label>
        )}

        {/* Trigger Button */}
        <button
          ref={ref}
          type="button"
          onClick={toggleDropdown}
          disabled={disabled}
          className={`w-full px-4 py-3 text-base border rounded-md transition-colors text-left
                     flex items-center justify-between
                     ${
                       error
                         ? "border-accent focus:border-accent focus:ring-accent"
                         : "border-gov-gray-light focus:border-primary focus:ring-primary"
                     }
                     focus:outline-none focus:ring-2 focus:ring-opacity-20
                     bg-white text-gov-gray-dark
                     disabled:bg-gov-gray-lightest disabled:cursor-not-allowed
                     ${isOpen ? "ring-2 ring-primary ring-opacity-20" : ""}`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="flex items-center gap-2">
            {selectedCountry ? (
              <>
                <span className="text-2xl leading-none">
                  {getFlagEmoji(selectedCountry.code)}
                </span>
                <span>{selectedCountry.name}</span>
              </>
            ) : (
              <span className="text-gov-gray">{placeholder}</span>
            )}
          </span>
          <svg
            className={`w-5 h-5 text-gov-gray transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 8l4 4 4-4"
            />
          </svg>
        </button>

        {/* Dropdown Panel */}
        {isOpen && (
          <div
            className="fixed z-9999 mt-1 bg-white border border-gov-gray-light rounded-md shadow-lg max-h-80 overflow-hidden"
            style={{
              width: dropdownRef.current?.offsetWidth,
              top: dropdownRef.current?.getBoundingClientRect().bottom,
              left: dropdownRef.current?.getBoundingClientRect().left,
            }}
          >
            {/* Search Input */}
            <div className="p-3 border-b border-gov-gray-light sticky top-0 bg-white">
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search countries..."
                className="w-full px-3 py-2 text-sm border border-gov-gray-light rounded-md
                         focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Countries List */}
            <div className="overflow-y-auto max-h-64" role="listbox">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => {
                  const isSelected =
                    valueType === "code"
                      ? country.code === value
                      : country.name === value;

                  return (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => handleSelect(country)}
                      className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors
                               hover:bg-gov-gray-lightest
                               ${
                                 isSelected
                                   ? "bg-primary bg-opacity-10 text-white font-medium hover:text-primary"
                                   : "text-gov-gray-dark"
                               }`}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <span className="text-2xl leading-none shrink-0">
                        {getFlagEmoji(country.code)}
                      </span>
                      <span className="flex-1">{country.name}</span>
                      {isSelected && (
                        <svg
                          className="w-5 h-5 shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  );
                })
              ) : (
                <div className="px-4 py-8 text-center text-gov-gray text-sm">
                  No eligible country found
                </div>
              )}
            </div>
          </div>
        )}

        {/* Error/Helper Text */}
        {error && (
          <p className="mt-1.5 text-sm text-accent font-medium">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-gov-gray">{helperText}</p>
        )}
      </div>
    );
  }
);

CountrySelect.displayName = "CountrySelect";

export default CountrySelect;
