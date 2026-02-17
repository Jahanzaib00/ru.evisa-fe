"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { useApplication, useTravelers } from "@/app/lib/store/postPaymentStore";
import { applicationsService } from "@/app/lib/api/services/applications.service";
import { getService, StepType } from "@/app/lib/config/services";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";

interface SharedReviewStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

// ---- Presentational helpers ----

function ReviewSection({
  title,
  onEdit,
  children,
}: {
  title: string;
  onEdit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <Button variant="outline" size="sm" onClick={onEdit}>
          Edit
        </Button>
      </div>
      {children}
    </div>
  );
}

function ReviewGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      {children}
    </div>
  );
}

function ReviewField({
  label,
  value,
}: {
  label: string;
  value?: string | number | boolean | null;
}) {
  if (value == null || value === "") return null;
  return (
    <div>
      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
      <p className="font-medium text-gray-900">{String(value)}</p>
    </div>
  );
}

// ---- Main component ----

export default function SharedReviewStep({
  applicationId,
  onNext,
  onBack,
}: SharedReviewStepProps) {
  const router = useRouter();
  const params = useParams<{ destination: string; id: string }>();
  const application = useApplication();
  const travelers = useTravelers();

  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
    }
  }, [travelers]);

  // Map StepType → 1-based step index from the service config.
  // This is the single source of truth for edit links and section visibility.
  const stepIndexByType = useMemo(() => {
    if (!application) return {} as Partial<Record<StepType, number>>;
    const service = getService(application.serviceType);
    return service.steps.reduce<Partial<Record<StepType, number>>>(
      (acc, step, i) => {
        acc[step.type] = i + 1;
        return acc;
      },
      {},
    );
  }, [application?.serviceType]);

  // True if this service includes a given step type
  const hasStep = (type: StepType) => type in stepIndexByType;

  // Navigate to a step using the router (no window.location.href)
  const goToStep = (type: StepType) => {
    const index = stepIndexByType[type];
    if (index) {
      router.push(
        `/${params.destination}/application/${applicationId}/${index}`,
      );
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      await applicationsService.submit(applicationId);
      onNext();
    } catch (err: any) {
      setSubmitError(
        err.response?.data?.message ||
          err.message ||
          "Failed to submit application",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentTraveler = travelers.find((t) => t.id === currentTravelerId);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Review & Submit
        </h1>
        <p className="text-gray-600">
          Please review all information carefully before submitting your
          application.
        </p>
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          {submitError}
        </div>
      )}

      <TravelerAccordion
        travelers={travelers}
        activeTravelerId={currentTravelerId}
        onTravelerChange={setCurrentTravelerId}
        renderContent={() =>
          currentTraveler ? (
            <div className="space-y-6">
              {/* Personal Information */}
              {hasStep(StepType.PERSONAL) && (
                <ReviewSection
                  title="Personal Information"
                  onEdit={() => goToStep(StepType.PERSONAL)}
                >
                  <ReviewGrid>
                    <ReviewField
                      label="Full Name"
                      value={[
                        currentTraveler.firstName,
                        currentTraveler.middleName,
                        currentTraveler.lastName,
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                    <ReviewField
                      label="Date of Birth"
                      value={
                        currentTraveler.birthMonth &&
                        currentTraveler.birthDay &&
                        currentTraveler.birthYear
                          ? `${currentTraveler.birthMonth}/${currentTraveler.birthDay}/${currentTraveler.birthYear}`
                          : null
                      }
                    />
                    <ReviewField
                      label="Gender"
                      value={currentTraveler.gender}
                    />
                    <ReviewField
                      label="Place of Birth"
                      value={[
                        currentTraveler.cityOfBirth,
                        currentTraveler.countryOfBirth,
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    />
                    <ReviewField label="Email" value={currentTraveler.email} />
                    <ReviewField
                      label="Marital Status"
                      value={currentTraveler.maritalStatus}
                    />
                  </ReviewGrid>
                </ReviewSection>
              )}

              {/* Passport & Citizenship */}
              {hasStep(StepType.PASSPORT) && (
                <ReviewSection
                  title="Passport & Citizenship"
                  onEdit={() => goToStep(StepType.PASSPORT)}
                >
                  <ReviewGrid>
                    <ReviewField
                      label="Passport Number"
                      value={currentTraveler.passportNumber}
                    />
                    <ReviewField
                      label="Passport Type"
                      value={currentTraveler.passportType}
                    />
                    <ReviewField
                      label="Nationality"
                      value={currentTraveler.nationalityOnPassport}
                    />
                    <ReviewField
                      label="Country of Residence"
                      value={currentTraveler.countryOfResidence}
                    />
                    <ReviewField
                      label="Issue Date"
                      value={
                        currentTraveler.passportIssueMonth &&
                        currentTraveler.passportIssueDay &&
                        currentTraveler.passportIssueYear
                          ? `${currentTraveler.passportIssueMonth}/${currentTraveler.passportIssueDay}/${currentTraveler.passportIssueYear}`
                          : null
                      }
                    />
                    <ReviewField
                      label="Expiry Date"
                      value={
                        currentTraveler.passportExpiryMonth &&
                        currentTraveler.passportExpiryDay &&
                        currentTraveler.passportExpiryYear
                          ? `${currentTraveler.passportExpiryMonth}/${currentTraveler.passportExpiryDay}/${currentTraveler.passportExpiryYear}`
                          : null
                      }
                    />
                  </ReviewGrid>
                </ReviewSection>
              )}

              {/* U.S. Travel Details (ESTA-specific) */}
              {hasStep(StepType.TRAVEL) && application && (
                <ReviewSection
                  title="U.S. Travel Details"
                  onEdit={() => goToStep(StepType.TRAVEL)}
                >
                  <ReviewGrid>
                    <ReviewField
                      label="Purpose of Visit"
                      value={application.purposeOfVisit}
                    />
                    <ReviewField
                      label="Point of Entry"
                      value={application.pointOfEntry}
                    />
                    <ReviewField
                      label="Arrival Date"
                      value={application.arrivalDate}
                    />
                    <ReviewField
                      label="Flight / Vessel Number"
                      value={application.flightVesselNumber}
                    />
                  </ReviewGrid>
                </ReviewSection>
              )}

              {/* Contact Information */}
              {hasStep(StepType.CONTACT) && (
                <ReviewSection
                  title="Contact Information"
                  onEdit={() => goToStep(StepType.CONTACT)}
                >
                  <ReviewGrid>
                    <ReviewField
                      label="Phone Number"
                      value={
                        currentTraveler.phoneNumber
                          ? `${currentTraveler.phoneNumber}${currentTraveler.phoneType ? ` (${currentTraveler.phoneType})` : ""}`
                          : null
                      }
                    />
                    <ReviewField
                      label="Home Address"
                      value={[
                        currentTraveler.addressLine1,
                        currentTraveler.addressLine2,
                        currentTraveler.city,
                        currentTraveler.stateProvinceRegion,
                        currentTraveler.postalCode,
                        currentTraveler.country,
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    />
                  </ReviewGrid>
                </ReviewSection>
              )}

              {/* Employment */}
              {hasStep(StepType.EMPLOYMENT) && (
                <ReviewSection
                  title="Employment"
                  onEdit={() => goToStep(StepType.EMPLOYMENT)}
                >
                  <ReviewGrid>
                    <ReviewField
                      label="Employment Status"
                      value={
                        currentTraveler.isEmployed === true
                          ? "Employed"
                          : currentTraveler.isEmployed === false
                            ? "Not Employed"
                            : null
                      }
                    />
                    {currentTraveler.isEmployed && (
                      <>
                        <ReviewField
                          label="Job Title"
                          value={currentTraveler.jobTitle}
                        />
                        <ReviewField
                          label="Employer"
                          value={currentTraveler.employerName}
                        />
                      </>
                    )}
                  </ReviewGrid>
                </ReviewSection>
              )}

              {/* Eligibility Questions */}
              {hasStep(StepType.ELIGIBILITY) && (
                <ReviewSection
                  title="Eligibility Questions"
                  onEdit={() => goToStep(StepType.ELIGIBILITY)}
                >
                  <p className="text-sm text-gray-600">
                    All eligibility questions have been answered.{" "}
                    <button
                      className="text-primary underline"
                      onClick={() => goToStep(StepType.ELIGIBILITY)}
                    >
                      Review answers
                    </button>
                  </p>
                </ReviewSection>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500">
              Loading traveler information...
            </p>
          )
        }
      />

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </div>
  );
}
