"use client";

import { useRouter } from "next/navigation";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import {
  ServiceType,
  getService,
  getCurrencySymbol,
  getDefaultProcessingTier,
} from "@/app/lib/config/services";
import { useApplicationStore } from "@/app/lib/store/applicationStore";
import { trackCTAClick } from "@/app/lib/analytics";
import { ArrowRight, Globe2, Clock, Shield } from "lucide-react";
import { getFlagEmoji } from "@/app/lib/countries";

interface ServiceCardProps {
  serviceType: ServiceType;
  available: boolean;
}

function ServiceCard({ serviceType, available }: ServiceCardProps) {
  const router = useRouter();
  const { setServiceType } = useApplicationStore();

  const handleApply = () => {
    if (!available) return;

    const service = getService(serviceType);
    setServiceType(serviceType);
    trackCTAClick(`popular_service_${serviceType}`);
    router.push(`/${service.destination}/apply`);
  };

  const handleNotify = () => {
    trackCTAClick(`notify_${serviceType}`);
    router.push("/support?notify=" + serviceType);
  };

  // Get service config
  const service = available ? getService(serviceType) : null;

  if (!available) {
    // Coming soon card
    return (
      <div className="bg-gray-50 rounded-2xl p-8 border-2 border-dashed border-gray-300 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          <Globe2 className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {serviceType.replace("_", " ")}
        </h3>
        <p className="text-gray-600 mb-6">Coming Soon</p>
        <Button
          variant="outline"
          size="md"
          onClick={handleNotify}
          className="w-full"
        >
          Notify Me
        </Button>
      </div>
    );
  }

  if (!service) return null;

  const currencySymbol = getCurrencySymbol(service.pricing.currency);
  const defaultTier = getDefaultProcessingTier(serviceType);
  const totalPrice = service.pricing.government + defaultTier.serviceFee;
  const eligibleCount = service.eligibleNationalities.length;

  return (
    <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="text-4xl">
            {getFlagEmoji(service.destinationCode)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
            <p className="text-sm text-gray-600">
              {eligibleCount} eligible countries
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
          <span>Processed in {service.processing.superRush || service.processing.standard}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Shield className="w-4 h-4 text-primary flex-shrink-0" />
          <span>Valid for {service.validity.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Globe2 className="w-4 h-4 text-primary flex-shrink-0" />
          <span>{service.validity.stays}</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-600">from</span>
          <span className="text-3xl font-bold text-gray-900">
            {currencySymbol}
            {totalPrice.toFixed(2)}
          </span>
          <span className="text-sm text-gray-600">
            {service.pricing.currency}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Includes government & processing fees
        </p>
      </div>

      {/* CTA */}
      <Button variant="primary" size="lg" fullWidth onClick={handleApply}>
        Apply
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
}

export default function PopularServices() {
  return (
    <Section background="white" id="popular-services">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Popular Travel Authorizations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fast, secure applications for the world's most requested travel
            documents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard serviceType={ServiceType.US_ESTA} available={true} />
          <ServiceCard serviceType={ServiceType.UK_ETA} available={true} />
          <ServiceCard serviceType={ServiceType.CANADA_ETA} available={true} />
          <ServiceCard serviceType={ServiceType.THAILAND_TDAC} available={true} />
          <ServiceCard serviceType={ServiceType.INDONESIA_EVOA} available={true} />
          <ServiceCard serviceType={ServiceType.MALAYSIA_MDAC} available={true} />
        </div>
      </Container>
    </Section>
  );
}
