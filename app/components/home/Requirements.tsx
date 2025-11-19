import Container from "../ui/Container";
import Section from "../ui/Section";

interface ChecklistItem {
  text: string;
}

const requiredDocuments: ChecklistItem[] = [
  { text: "Valid passport (6+ months validity)" },
  { text: "Digital passport-style photo" },
  { text: "Valid email address" },
  { text: "Credit/debit card for payment" },
  { text: "U.S. contact information (hotel/address)" },
];

const eligibilityCriteria: ChecklistItem[] = [
  { text: "Citizen of Visa Waiver Program country" },
  { text: "Traveling for tourism or business (90 days or less)" },
  { text: "Have not been denied U.S. visa previously" },
  { text: "Hold a valid e-passport (biometric passport)" },
];

export default function Requirements() {
  return (
    <Section id="requirements" padding="xl">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-4">
            What You Need to Apply
          </h2>
          <p className="text-lg text-gray mx-auto">
            Make sure you have these documents and meet the eligibility
            requirements
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Required Documents */}
          <div className="bg-white border-2 border-primary-light rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-dark">
                Required Documents
              </h3>
            </div>

            <ul className="space-y-4">
              {requiredDocuments.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-success shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-white border-2 border-success rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-8 h-8 text-success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-gray-dark">Eligibility</h3>
            </div>

            <ul className="space-y-4">
              {eligibilityCriteria.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-success shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray text-lg">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Info Link */}
        <div className="text-center mt-10">
          <a
            href="#faq"
            className="inline-flex items-center gap-2 text-primary-light font-semibold hover:text-primary transition-colors"
          >
            View Full Requirements & FAQ
            <svg
              className="w-5 h-5"
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
          </a>
        </div>
      </Container>
    </Section>
  );
}
