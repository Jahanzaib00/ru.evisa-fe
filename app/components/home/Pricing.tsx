"use client";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { trackCTAClick } from "@/app/lib/analytics";
import { SERVICES, ServiceType, getCurrencySymbol } from "@/app/lib/config/services";

export default function Pricing() {
  const handleCTAClick = () => {
    trackCTAClick("pricing");
    window.location.href = "/apply";
  };

  // Use US ESTA as the featured service for homepage (most common)
  const featuredService = SERVICES[ServiceType.US_ESTA];
  const governmentFee = featuredService.pricing.government;
  const serviceFee = featuredService.pricing.service;
  const totalFee = governmentFee + serviceFee;
  const currency = featuredService.pricing.currency;
  const currencySymbol = getCurrencySymbol(currency);

  return (
    <Section id="pricing" background="gray" padding="xl">
      <Container maxWidth="md">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            Clear Pricing - No Hidden Fees
          </h2>
          <p className="text-lg text-gray">
            Complete transparency on what you pay and what you get
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-2 border-primary-light">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Price Breakdown */}
            <div className="md:col-span-3">
              <div className="mb-4">
                <span className="text-sm font-semibold text-primary bg-primary-light px-3 py-1 rounded-full">
                  {featuredService.name}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Total: {currencySymbol}{totalFee.toFixed(2)} {currency.toUpperCase()}
              </h3>

              <table className="w-full mb-6">
                <tbody className="divide-y divide-gray-light">
                  <tr>
                    <td className="py-4 text-gray">Government Fee</td>
                    <td className="py-4 text-right font-semibold text-gray-dark">
                      {currencySymbol}{governmentFee.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 text-gray">Services Fee</td>
                    <td className="py-4 text-right font-semibold text-gray-dark">
                      {currencySymbol}{serviceFee.toFixed(2)}
                    </td>
                  </tr>
                  <tr className="bg-gray-lightest">
                    <td className="py-4 font-bold text-gray-dark">
                      Total <span className="text-xs"> (per applicant) </span>
                    </td>
                    <td className="py-4 text-right font-bold text-2xl text-primary">
                      {currencySymbol}{totalFee.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* What's Included */}
            <div className="md:col-span-2">
              <h4 className="text-lg font-bold text-gray-dark mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6 text-success"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                What's Included
              </h4>

              <ul className="space-y-3">
                {featuredService.includedServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray"
                  >
                    <svg
                      className="w-4 h-4 text-success shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-gray-light">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onClick={handleCTAClick}
            >
              Start Your Application – {currencySymbol}{totalFee.toFixed(2)}
            </Button>
          </div>
        </div>

        {/* Transparency Disclaimer */}
        {/* <div className="mt-8 text-center">
          <p className="text-sm text-gray bg-white rounded-lg p-4 shadow-sm">
            <strong className="text-gray-dark">
              Important Transparency Notice:
            </strong>{" "}
            You can also apply directly at the{" "}
            <a
              href="https://esta.cbp.dhs.gov/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOfficialLinkClick}
              className="text-primary-light font-semibold hover:text-primary underline"
            >
              official U.S. government website
            </a>{" "}
            for the basic fee (${OFFICIAL_ESTA_FEE.toFixed(2)}) without our
            assistance services.
          </p>
        </div> */}
      </Container>
    </Section>
  );
}
