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
  { code: "US", name: "США", nameEn: "United States" },
  { code: "GB", name: "Великобритания", nameEn: "United Kingdom" },
  { code: "CA", name: "Канада", nameEn: "Canada" },
  { code: "TH", name: "Таиланд", nameEn: "Thailand" },
  { code: "ID", name: "Индонезия", nameEn: "Indonesia" },
  { code: "MY", name: "Малайзия", nameEn: "Malaysia" },
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

// Reverse map: destination slug → country code
const SLUG_TO_CODE: Record<string, string> = Object.fromEntries(
  Object.entries(DESTINATION_SLUG_MAP).map(([code, slug]) => [slug, code]),
);

export default function Hero() {
  const router = useRouter();
  const { nationality, destination, setNationality } = useApplicationStore();
  const [destinationCode, setDestinationCode] = useState(
    (destination && SLUG_TO_CODE[destination]) || "TH",
  );

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
          Ваши документы для поездки —{" "}
          <span className="text-primary-light">просто и быстро</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
          Профессиональная помощь с оформлением ETA, ESTA и цифровых карт прибытия.{}
          <br className="hidden md:block" /> Подайте заявку онлайн за несколько минут с пошаговой поддержкой.
        </p>

        {/* Country Selection Form */}
        <div className="bg-white border-2 border-gray-100 rounded-lg p-6 md:p-8 mb-6 shadow-sm max-w-3xl mx-auto text-start">
          <div className="space-y-5">
            {/* Destination Selector — reuses CountrySelect */}
            <CountrySelect
              label="Куда вы едете?"
              value={destinationCode}
              onChange={setDestinationCode}
              placeholder="Выберите страну назначения"
              valueType="code"
              countries={DESTINATION_COUNTRIES}
            />

            {/* Nationality Selector */}
            <CountrySelect
              label="Ваше гражданство"
              value={nationality}
              onChange={setNationality}
              placeholder="Выберите вашу страну"
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
              Начать оформление!
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
