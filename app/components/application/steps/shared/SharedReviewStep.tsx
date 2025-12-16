"use client";

import { useEffect, useState } from "react";
import { useApplication, useTravelers } from "@/app/lib/store/postPaymentStore";
import { applicationsService } from "@/app/lib/api/services/applications.service";
import Button from "@/app/components/ui/Button";
import TravelerAccordion from "@/app/components/application/TravelerAccordion";

interface SharedReviewStepProps {
  applicationId: string;
  onNext: () => void;
  onBack: () => void;
  editStepUrls?: {
    personal?: string;
    passport?: string;
    contact?: string;
    employment?: string;
    eligibility?: string;
  };
}

export default function SharedReviewStep({
  applicationId,
  onNext,
  onBack,
  editStepUrls = {},
}: SharedReviewStepProps) {
  const application = useApplication();
  const travelers = useTravelers();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
    }
  }, [travelers]);

  const handleTravelerChange = (travelerId: string) => {
    setCurrentTravelerId(travelerId);
  };

  const submitApplication = async (applicationId: string): Promise<boolean> => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      // Call the backend API to submit the application
      const response = await applicationsService.submit(applicationId);

      return true;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to submit application";
      setSubmitError(errorMessage);
      console.error("Error submitting application:", err);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions before submitting.");
      return;
    }

    const success = await submitApplication(applicationId);
    if (success) {
      onNext();
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

      {/* Traveler-Specific Information */}
      <TravelerAccordion
        travelers={travelers}
        activeTravelerId={currentTravelerId}
        onTravelerChange={handleTravelerChange}
        renderContent={() =>
          currentTraveler ? (
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Personal Information
                  </h3>
                  {editStepUrls.personal && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = editStepUrls.personal!}
                    >
                      Edit
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Full Name</p>
                    <p className="font-medium">
                      {currentTraveler.firstName} {currentTraveler.middleName}{" "}
                      {currentTraveler.lastName}
                    </p>
                  </div>
                  {currentTraveler.birthMonth &&
                    currentTraveler.birthDay &&
                    currentTraveler.birthYear && (
                      <div>
                        <p className="text-gray-600">Date of Birth</p>
                        <p className="font-medium">
                          {currentTraveler.birthMonth}/{currentTraveler.birthDay}/
                          {currentTraveler.birthYear}
                        </p>
                      </div>
                    )}
                  {currentTraveler.gender && (
                    <div>
                      <p className="text-gray-600">Gender</p>
                      <p className="font-medium">{currentTraveler.gender}</p>
                    </div>
                  )}
                  {(currentTraveler.cityOfBirth ||
                    currentTraveler.countryOfBirth) && (
                    <div>
                      <p className="text-gray-600">Place of Birth</p>
                      <p className="font-medium">
                        {currentTraveler.cityOfBirth}
                        {currentTraveler.cityOfBirth &&
                          currentTraveler.countryOfBirth &&
                          ", "}
                        {currentTraveler.countryOfBirth}
                      </p>
                    </div>
                  )}
                  {currentTraveler.email && (
                    <div>
                      <p className="text-gray-600">Email</p>
                      <p className="font-medium">{currentTraveler.email}</p>
                    </div>
                  )}
                  {currentTraveler.maritalStatus && (
                    <div>
                      <p className="text-gray-600">Marital Status</p>
                      <p className="font-medium">
                        {currentTraveler.maritalStatus}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Passport Information */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Passport & Citizenship
                  </h3>
                  {editStepUrls.passport && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = editStepUrls.passport!}
                    >
                      Edit
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {currentTraveler.passportNumber && (
                    <div>
                      <p className="text-gray-600">Passport Number</p>
                      <p className="font-medium">
                        {currentTraveler.passportNumber}
                      </p>
                    </div>
                  )}
                  {currentTraveler.passportType && (
                    <div>
                      <p className="text-gray-600">Passport Type</p>
                      <p className="font-medium">
                        {currentTraveler.passportType}
                      </p>
                    </div>
                  )}
                  {currentTraveler.nationalityOnPassport && (
                    <div>
                      <p className="text-gray-600">Nationality</p>
                      <p className="font-medium">
                        {currentTraveler.nationalityOnPassport}
                      </p>
                    </div>
                  )}
                  {currentTraveler.countryOfResidence && (
                    <div>
                      <p className="text-gray-600">Country of Residence</p>
                      <p className="font-medium">
                        {currentTraveler.countryOfResidence}
                      </p>
                    </div>
                  )}
                  {currentTraveler.passportIssueMonth &&
                    currentTraveler.passportIssueDay &&
                    currentTraveler.passportIssueYear && (
                      <div>
                        <p className="text-gray-600">Issue Date</p>
                        <p className="font-medium">
                          {currentTraveler.passportIssueMonth}/
                          {currentTraveler.passportIssueDay}/
                          {currentTraveler.passportIssueYear}
                        </p>
                      </div>
                    )}
                  {currentTraveler.passportExpiryMonth &&
                    currentTraveler.passportExpiryDay &&
                    currentTraveler.passportExpiryYear && (
                      <div>
                        <p className="text-gray-600">Expiry Date</p>
                        <p className="font-medium">
                          {currentTraveler.passportExpiryMonth}/
                          {currentTraveler.passportExpiryDay}/
                          {currentTraveler.passportExpiryYear}
                        </p>
                      </div>
                    )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Contact Information
                  </h3>
                  {editStepUrls.contact && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = editStepUrls.contact!}
                    >
                      Edit
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {currentTraveler.phoneNumber && (
                    <div>
                      <p className="text-gray-600">Phone Number</p>
                      <p className="font-medium">
                        {currentTraveler.phoneNumber}
                        {currentTraveler.phoneType &&
                          ` (${currentTraveler.phoneType})`}
                      </p>
                    </div>
                  )}
                  {currentTraveler.addressLine1 && (
                    <div>
                      <p className="text-gray-600">Home Address</p>
                      <p className="font-medium">
                        {currentTraveler.addressLine1}
                        {currentTraveler.addressLine2 &&
                          `, ${currentTraveler.addressLine2}`}
                        {currentTraveler.city && (
                          <>
                            <br />
                            {currentTraveler.city}
                            {currentTraveler.stateProvinceRegion &&
                              `, ${currentTraveler.stateProvinceRegion}`}
                            {currentTraveler.postalCode &&
                              ` ${currentTraveler.postalCode}`}
                          </>
                        )}
                        {currentTraveler.country && (
                          <>
                            <br />
                            {currentTraveler.country}
                          </>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Employment Information */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Employment
                  </h3>
                  {editStepUrls.employment && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = editStepUrls.employment!}
                    >
                      Edit
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Employment Status</p>
                    <p className="font-medium">
                      {currentTraveler.isEmployed ? "Employed" : "Not Employed"}
                    </p>
                  </div>
                  {currentTraveler.isEmployed && (
                    <>
                      {currentTraveler.jobTitle && (
                        <div>
                          <p className="text-gray-600">Job Title</p>
                          <p className="font-medium">
                            {currentTraveler.jobTitle}
                          </p>
                        </div>
                      )}
                      {currentTraveler.employerName && (
                        <div>
                          <p className="text-gray-600">Employer</p>
                          <p className="font-medium">
                            {currentTraveler.employerName}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Eligibility Questions */}
              {editStepUrls.eligibility && (
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Eligibility Questions
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.location.href = editStepUrls.eligibility!}
                    >
                      Edit
                    </Button>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-600">
                      All eligibility questions have been answered.{" "}
                      <button
                        className="text-primary underline"
                        onClick={() => window.location.href = editStepUrls.eligibility!}
                      >
                        Review answers
                      </button>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>Loading traveler information...</div>
          )
        }
      />

      {/* Terms and Conditions */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Terms and Conditions
        </h3>
        <div className="mb-4 p-4 bg-white border border-gray-200 rounded max-h-60 overflow-y-auto text-sm">
          <p className="mb-2">
            By submitting this application, I certify that:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>
              All information provided is true and accurate to the best of my
              knowledge
            </li>
            <li>
              I have read and understood the eligibility requirements for this
              visa application
            </li>
            <li>
              I understand that providing false information may result in denial
              of entry
            </li>
            <li>
              I agree to comply with all immigration laws and regulations
            </li>
            <li>
              I authorize the processing of my personal information for the
              purpose of this application
            </li>
          </ul>
        </div>

        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <span className="text-sm text-gray-700">
            I have reviewed all information and agree to the terms and
            conditions stated above
          </span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!agreedToTerms || isSubmitting}
          className="min-w-[200px]"
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </div>
  );
}
