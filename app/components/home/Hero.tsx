"use client";

import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import CountrySelect from "../ui/CountrySelect";
import { trackCTAClick } from "@/app/lib/analytics";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { useNationalityAutoSelect } from "@/app/hooks/useNationalityAutoSelect";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  const { nationality, setNationality } = useApplicationStore();

  // Auto-select nationality based on IP using custom hook
  useNationalityAutoSelect(nationality, setNationality);

  const handleApplyNow = () => {
    trackCTAClick("hero");
    router.push("/apply");
  };

  return (
    <Section id="hero">
      <Container maxWidth="lg" className="text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-dark leading-tight mb-6">
          Apply Now for Your United States ESTA
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          Mandatory for visa-free travel to the United States under the Visa
          Waiver Program.
          <br />
          <span className="font-semibold text-gray-dark">
            Approved in a day
          </span>
          . Valid for 2 years.
        </p>

        {/* Country Selection Form */}
        <div className="bg-white border-2 border-gray-100 rounded-lg p-6 md:p-8 mb-6 shadow-sm max-w-3xl mx-auto text-start">
          <div className="space-y-5">
            <CountrySelect
              label="Select your nationality"
              value={nationality}
              onChange={setNationality}
              placeholder="Choose your country"
              valueType="name"
            />

            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleApplyNow}
              disabled={!nationality}
            >
              Apply Now
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
