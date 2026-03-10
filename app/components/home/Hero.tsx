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
import type { Country } from "@/app/lib/countries";

// Destination options — uses CountrySelect's Country type
const DESTINATION_COUNTRIES: Country[] = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "CA", name: "Canada" },
  { code: "TH", name: "Thailand" },
  { code: "ID", name: "Indonesia" },
  { code: "MY", name: "Malaysia" },
];

// Map country code → destination slug for routing
const DESTINATION_SLUG_MAP: Record<string, string> = {
  US: "united-states",
  GB: "united-kingdom",
  CA: "canada",
  TH: "thailand",
  ID: "indonesia",
  MY: "malaysia",
};

export default function Hero() {
  const router = useRouter();
  const { nationality, setNationality } = useApplicationStore();
  const [destinationCode, setDestinationCode] = useState("TH");

  useNationalityAutoSelect(nationality, setNationality);

  const handleApplyNow = () => {
    trackCTAClick("hero");
    const slug = DESTINATION_SLUG_MAP[destinationCode] || "united-states";
    router.push(`/${slug}/apply`);
  };

  return (
    <Section id="hero">
      <Container maxWidth="lg" className="text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight mb-6">
          Your Travel Documents,{" "}
          <span className="text-primary-light">Simplified</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
          Expert assistance with ETAs, ESTAs, and Digital Arrival Cards.
          <br className="hidden md:block" />
          Apply online in minutes with guided support and fast processing.
        </p>

        {/* Country Selection Form */}
        <div className="bg-white border-2 border-gray-100 rounded-lg p-6 md:p-8 mb-6 shadow-sm max-w-3xl mx-auto text-start">
          <div className="space-y-5">
            {/* Destination Selector — reuses CountrySelect */}
            <CountrySelect
              label="Where are you traveling to?"
              value={destinationCode}
              onChange={setDestinationCode}
              placeholder="Choose your destination"
              valueType="code"
              countries={DESTINATION_COUNTRIES}
            />

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
