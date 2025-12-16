import { useState } from "react";
import { useApplicationStore } from "../store/applicationStore";
import { applicationsService } from "../api/services/applications.service";
import { ApplicationStatus, ServiceType } from "../api/types";
import { extractErrorMessage, logError } from "../utils/errorHandler";
import { validateApplicationState } from "../utils/applicationStateValidator";
import { getService } from "../config/services";

interface SaveTravelersData {
  travelers: Array<{
    firstName: string;
    lastName: string;
    birthDay: string;
    birthMonth: string;
    birthYear: string;
    email?: string;
    passportNumber?: string;
    passportExpiryDay?: string;
    passportExpiryMonth?: string;
    passportExpiryYear?: string;
    nationalityOnPassport?: string;
    countryOfBirth?: string;
    countryOfResidence?: string;
  }>;
}

interface UseApplicationReturn {
  isLoading: boolean;
  error: string | null;
  createOrGetApplication: (serviceType: ServiceType) => Promise<string | null>;
  verifyApplicationState: () => Promise<boolean>;
  saveTravelers: (data: SaveTravelersData) => Promise<boolean>;
  submitApplication: () => Promise<boolean>;
}

/**
 * Custom hook for managing application lifecycle with server-side validation
 *
 * Flow:
 * 1. Apply page: createOrGetApplication() - validates existing or creates new
 * 2. Form steps: verifyApplicationState() on mount, saveTravelers() on submit
 * 3. Review/Payment: finalize and process payment
 */
export function useApplication(): UseApplicationReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    applicationId,
    nationality,
    totalApplicants,
    getTotalAmount,
    setApplicationId,
    setApplicationStatus,
  } = useApplicationStore();

  /**
   * Validates existing application or creates a new one
   * Silently handles invalid states (paid, submitted, etc.) by creating new application
   * Called when user clicks "Start Application" on apply page
   */
  const createOrGetApplication = async (serviceType: ServiceType): Promise<string | null> => {
    setIsLoading(true);
    setError(null);

    try {
      // Validate existing application from localStorage
      const validation = await validateApplicationState(applicationId);

      // If valid, continue with existing application
      if (validation.isValid && validation.applicationId) {
        setIsLoading(false);
        return validation.applicationId;
      }

      // Get service configuration for destination and currency
      const serviceConfig = getService(serviceType);

      // Create new application (either no existing or invalid state)
      const response = await applicationsService.create({
        serviceType,
        destination: serviceConfig.destinationCode,
        nationality,
        totalApplicants,
        totalAmount: getTotalAmount(),
      });

      setApplicationId(response.id);
      setApplicationStatus(response.status);
      setIsLoading(false);
      return response.id;
    } catch (err: any) {
      logError(err, "Creating application");
      setError(extractErrorMessage(err, "Failed to start application."));
      setIsLoading(false);
      return null;
    }
  };

  /**
   * Verifies current application is valid before proceeding
   * Called on mount of form pages (personal-details, passport-details)
   * Returns false if application is invalid (triggers redirect to apply page)
   */
  const verifyApplicationState = async (): Promise<boolean> => {
    if (!applicationId) {
      return false;
    }

    try {
      const validation = await validateApplicationState(applicationId);

      // If invalid, clear the application ID from store
      if (!validation.isValid) {
        setApplicationId(null);
        setApplicationStatus(null);
        return false;
      }

      return true;
    } catch (err: any) {
      logError(err, "Verifying application state");
      setApplicationId(null);
      setApplicationStatus(null);
      return false;
    }
  };

  /**
   * Saves traveler data to the server
   * Called when user clicks "Save and Continue" on personal/passport details pages
   * Validates application state before saving
   */
  const saveTravelers = async (data: SaveTravelersData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!applicationId) {
        throw new Error("No application ID. Please start from the beginning.");
      }

      // Verify application is still in valid state before saving
      const validation = await validateApplicationState(applicationId);
      if (!validation.isValid) {
        setError(
          "This application has been completed or is no longer valid. Please start a new application."
        );
        setApplicationId(null);
        setApplicationStatus(null);
        setIsLoading(false);
        return false;
      }

      const travelersData = data.travelers.map((traveler) => ({
        firstName: traveler.firstName,
        lastName: traveler.lastName,
        birthDay: parseInt(traveler.birthDay),
        birthMonth: parseInt(traveler.birthMonth),
        birthYear: parseInt(traveler.birthYear),
        email: traveler.email,
        passportNumber: traveler.passportNumber,
        passportExpiryDay: traveler.passportExpiryDay
          ? parseInt(traveler.passportExpiryDay)
          : undefined,
        passportExpiryMonth: traveler.passportExpiryMonth
          ? parseInt(traveler.passportExpiryMonth)
          : undefined,
        passportExpiryYear: traveler.passportExpiryYear
          ? parseInt(traveler.passportExpiryYear)
          : undefined,
        nationalityOnPassport: traveler.nationalityOnPassport,
        countryOfBirth: traveler.countryOfBirth,
        countryOfResidence: traveler.countryOfResidence,
      }));

      await applicationsService.saveTravelers(applicationId, travelersData);

      setIsLoading(false);
      return true;
    } catch (err: any) {
      logError(err, "Saving travelers");
      const errorMessage = extractErrorMessage(err, "Failed to save travelers.");

      // Check if error is due to application being in wrong state
      if (
        errorMessage.toLowerCase().includes("submitted") ||
        errorMessage.toLowerCase().includes("completed") ||
        errorMessage.toLowerCase().includes("paid")
      ) {
        setError(
          "This application has been completed. Please start a new application."
        );
        setApplicationId(null);
        setApplicationStatus(null);
      } else {
        setError(errorMessage);
      }

      setIsLoading(false);
      return false;
    }
  };

  const submitApplication = async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      if (!applicationId) {
        throw new Error("No application ID.");
      }

      // Update application with final data
      await applicationsService.update(applicationId, {
        totalAmount: getTotalAmount(),
      });

      setIsLoading(false);
      return true;
    } catch (err: any) {
      logError(err, "Finalizing application");
      setError(extractErrorMessage(err, "Failed to finalize application."));
      setIsLoading(false);
      return false;
    }
  };

  return {
    isLoading,
    error,
    createOrGetApplication,
    verifyApplicationState,
    saveTravelers,
    submitApplication,
  };
}
