import { useState, useCallback } from "react";
import { usePostPaymentStore } from "../store/postPaymentStore";
import { applicationsService } from "../api/services/applications.service";
import { extractErrorMessage, logError } from "../utils/errorHandler";

interface UsePostPaymentApplicationReturn {
  isLoading: boolean;
  error: string | null;
  application: any;
  travelers: any[];
  currentTravelerId: string | null;

  // Data loading
  loadApplication: (id: string) => Promise<boolean>;

  saveStep: (travelerData?: any, applicationData?: any) => Promise<boolean>;

  // Utility
  setCurrentTraveler: (id: string) => void;
}

/**
 * Hook for managing post-payment application flow
 * Used after payment is complete to collect remaining traveler information
 */
export function usePostPaymentApplication(): UsePostPaymentApplicationReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    application,
    currentTravelerId,
    setApplication,
    setCurrentTravelerId,
    setError: setStoreError,
  } = usePostPaymentStore();

  /**
   * UNIFIED SAVE FUNCTION - Use this for ALL steps
   * Sends all data in a single API call to the backend's saveProgress endpoint
   *
   * IMPORTANT: travelerData MUST include the 'id' field of the traveler being updated
   */
  const saveStep = useCallback(
    async (travelerData?: any, applicationData?: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        // Build the payload
        const payload: any = {};

        if (applicationData) {
          payload.application = applicationData;
        }

        if (travelerData) {
          // travelerData MUST have an 'id' field
          if (!travelerData.id) {
            throw new Error("Traveler data must include an 'id' field");
          }
          payload.travelers = [travelerData];
        }

        const updated = await applicationsService.saveProgress(
          application.id,
          payload
        );

        // Merge updated data back into store, preserving traveler order
        let mergedApplication = { ...application };

        // Merge application-level fields (exclude travelers to handle separately)
        if (applicationData) {
          const { travelers: _, ...appFields } = updated;
          mergedApplication = { ...mergedApplication, ...appFields };
        }

        // Merge traveler-level fields
        if (travelerData && travelerData.id && application.travelers) {
          const updatedTraveler = updated.travelers?.find((ut: any) => ut.id === travelerData.id);
          mergedApplication.travelers = application.travelers.map((t: any) =>
            t.id === travelerData.id && updatedTraveler
              ? { ...t, ...updatedTraveler }
              : t
          );
        }

        setApplication(mergedApplication);

        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Saving step");
        const errorMsg = extractErrorMessage(err, "Failed to save.");
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Load application data from server
   * Called once in layout on mount
   */
  const loadApplication = useCallback(
    async (id: string): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await applicationsService.getById(id);

        setApplication(data);

        // Set first traveler as current if exists
        if (data.travelers && data.travelers.length > 0) {
          setCurrentTravelerId(data.travelers[0].id);
        }

        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Loading application");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to load application."
        );
        setError(errorMsg);
        setStoreError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [setApplication, setCurrentTravelerId, setStoreError]
  );

  /**
   * Set current traveler being edited
   */
  const setCurrentTraveler = useCallback(
    (id: string) => {
      setCurrentTravelerId(id);
    },
    [setCurrentTravelerId]
  );

  return {
    isLoading,
    error,
    application,
    travelers: application?.travelers || [],
    currentTravelerId,
    loadApplication,
    saveStep,
    setCurrentTraveler,
  };
}
