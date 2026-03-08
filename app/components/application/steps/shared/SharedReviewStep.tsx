"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import { useApplication, useTravelers } from "@/app/lib/store/postPaymentStore";
import { applicationsService } from "@/app/lib/api/services/applications.service";
import {
  getService,
  StepType,
  type StepField,
} from "@/app/lib/config/services";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";

interface SharedReviewStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
}

// ── Presentational primitives ──────────────────────────────────────────────

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
  value?: string | null;
}) {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  );
}

// ── Field resolution — mirrors StepField formats ───────────────────────────

function resolveField(
  field: StepField,
  traveler: any,
  application: any,
): string | null {
  const src = field.source === "application" ? application : traveler;
  if (!src) return null;

  if (field.concat) {
    const parts = field.concat.map((k) => src[k]).filter(Boolean);
    return parts.length ? parts.join(field.separator ?? " ") : null;
  }
  if (field.date) {
    const { day, month, year } = field.date;
    return src[day] && src[month] && src[year]
      ? `${src[day]}/${src[month]}/${src[year]}`
      : null;
  }
  if (field.boolean) {
    const val = src[field.boolean.key];
    return val == null
      ? null
      : val
        ? field.boolean.trueLabel
        : field.boolean.falseLabel;
  }
  if (field.map) {
    const val = src[field.map.key];
    return val ? (field.map.values[val] ?? val) : null;
  }
  if (field.key) {
    const val = src[field.key];
    return val != null && val !== "" ? String(val) : null;
  }
  return null;
}

// ── Main component ─────────────────────────────────────────────────────────

export default function SharedReviewStep({
  applicationId,
  onNext,
  onBack,
}: SharedReviewStepProps) {
  const router = useRouter();
  const params = useParams<{ destination: string; id: string }>();
  const application = useApplication();
  const travelers = useTravelers();

  const [currentTravelerId, setCurrentTravelerId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
    }
  }, [travelers]);

  // All steps except REVIEW, with their 1-based index for edit navigation
  const steps = useMemo(() => {
    if (!application) return [];
    return getService(application.serviceType)
      .steps.map((step, i) => ({ ...step, index: i + 1 }))
      .filter((step) => step.type !== StepType.REVIEW);
  }, [application?.serviceType]);

  const goToStep = (index: number) =>
    router.push(`/${params.destination}/application/${applicationId}/${index}`);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      await applicationsService.submit(applicationId);
      setIsSubmitted(true);
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
  const shortRef = applicationId.split("-")[0].toUpperCase();

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Application Submitted Successfully
        </h1>
        <p className="text-gray-600 mb-2">
          Your application is being processed. You will receive a confirmation email shortly.
        </p>
        <p className="text-sm text-gray-500 mb-8">
          Reference: <span className="font-mono font-semibold text-gray-700">{shortRef}</span>
        </p>
        <Button
          onClick={() => router.push(`/track/${applicationId}`)}
          className="min-w-[200px]"
        >
          Track Application
        </Button>
      </div>
    );
  }

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
              {steps.map((step) => (
                <div key={step.type} className="border-b border-gray-200 pb-6">
                  {/* Section header */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => goToStep(step.index)}
                    >
                      Edit
                    </Button>
                  </div>

                  {/* Fields — driven entirely by config */}
                  <ReviewGrid>
                    {(step.fields ?? [])
                      .filter((f) => f.label) // skip completion-only fields (no label)
                      .map((field, i) => {
                        if (field.summary) {
                          return (
                            <p
                              key={i}
                              className="text-sm text-gray-600 col-span-2"
                            >
                              {field.summary}{" "}
                              <button
                                className="text-primary underline"
                                onClick={() => goToStep(step.index)}
                              >
                                Review answers
                              </button>
                            </p>
                          );
                        }
                        return (
                          <ReviewField
                            key={i}
                            label={field.label!}
                            value={resolveField(
                              field,
                              currentTraveler,
                              application,
                            )}
                          />
                        );
                      })}
                  </ReviewGrid>
                </div>
              ))}
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
