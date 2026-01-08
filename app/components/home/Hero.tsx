"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { trackCTAClick } from "@/app/lib/analytics";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { useNationalityAutoSelect } from "@/app/hooks/useNationalityAutoSelect";
import { ArrowRight } from "lucide-react";
import CountrySelect from "../ui/CountrySelect";

// Destination options
const DESTINATIONS = [
  { code: "US", name: "United States", slug: "united-states", flag: "🇺🇸" },
  { code: "UK", name: "United Kingdom", slug: "united-kingdom", flag: "🇬🇧" },
];

export default function Hero() {
  const router = useRouter();
  const { nationality, setNationality } = useApplicationStore();
  const [destination, setDestination] = useState(DESTINATIONS[0].slug);

  // Auto-select nationality based on IP using custom hook
  useNationalityAutoSelect(nationality, setNationality);

  const handleApplyNow = () => {
    trackCTAClick("hero");
    router.push(`/${destination}/apply`);
  };

  return (
    <Section id="hero">
      <Container maxWidth="lg" className="text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight mb-6">
          Apply for Your Travel Authorization
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          Electronic Travel Authorization for visa-free travel to the{" "}
          <span className="font-semibold text-gray-dark">United Kingdom</span>{" "}
          and{" "}
          <span className="font-semibold text-gray-dark">United States</span>
          <br />
        </p>

        {/* Country Selection Form */}
        <div className="bg-white border-2 border-gray-100 rounded-lg p-6 md:p-8 mb-6 shadow-sm max-w-3xl mx-auto text-start">
          <div className="space-y-5">
            {/* Destination Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-dark mb-2">
                Where are you traveling to?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {DESTINATIONS.map((dest) => (
                  <button
                    key={dest.code}
                    onClick={() => setDestination(dest.slug)}
                    className={`
                      flex items-center gap-3 p-4 rounded-lg border-2 transition-all
                      ${
                        destination === dest.slug
                          ? "border-primary bg-primary-light/10"
                          : "border-gray-200 hover:border-gray-300"
                      }
                    `}
                  >
                    <span className="text-3xl">{dest.flag}</span>
                    <span className="hidden md:block font-semibold text-gray-dark">
                      {dest.name}
                    </span>
                    <span className="block md:hidden font-semibold text-gray-dark">
                      {dest.code}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Nationality Selector */}
            <CountrySelect
              label="Select your nationality"
              value={nationality}
              onChange={setNationality}
              placeholder="Choose your country"
              valueType="name"
            />

            <Button
              variant="secondary"
              size="md"
              fullWidth
              onClick={handleApplyNow}
              disabled={!nationality}
              className="px-2 text-lg md:text-xl"
            >
              Get started!
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
