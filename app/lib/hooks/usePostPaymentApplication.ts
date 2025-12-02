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

  // Application-level updates
  updateUsContact: (data: any) => Promise<boolean>;
  updateUsStay: (data: any) => Promise<boolean>;
  updateTravelDetails: (data: any) => Promise<boolean>;

  // Traveler-level updates
  updateTravelerPersonal: (travelerId: string, data: any) => Promise<boolean>;
  updateTravelerParents: (travelerId: string, data: any) => Promise<boolean>;
  updateTravelerContact: (travelerId: string, data: any) => Promise<boolean>;
  updateTravelerPassport: (travelerId: string, data: any) => Promise<boolean>;
  updateTravelerCitizenship: (
    travelerId: string,
    data: any
  ) => Promise<boolean>;
  updateTravelerEmployment: (travelerId: string, data: any) => Promise<boolean>;
  updateTravelerEmergencyContact: (
    travelerId: string,
    data: any
  ) => Promise<boolean>;
  updateTravelerGlobalEntry: (
    travelerId: string,
    data: any
  ) => Promise<boolean>;
  updateTravelerSocialMedia: (
    travelerId: string,
    data: any
  ) => Promise<boolean>;
  updateTravelerEligibility: (
    travelerId: string,
    data: any
  ) => Promise<boolean>;

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
   * Load application data from server
   * Called once in layout on mount
   */
  const loadApplication = useCallback(
    async (id: string): Promise<boolean> => {
      setIsLoading(true);
      setError(null);

      try {
        console.log("Loading application with ID:", id);
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
   * Update US contact information
   */
  const updateUsContact = useCallback(
    async (data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateUsContact(
          application.id,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating US contact");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save US contact information."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update US stay address
   */
  const updateUsStay = useCallback(
    async (data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateUsStay(
          application.id,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating US stay");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save US stay address."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update travel details
   */
  const updateTravelDetails = useCallback(
    async (data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateTravelDetails(
          application.id,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating travel details");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save travel details."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update traveler personal information
   */
  const updateTravelerPersonal = useCallback(
    async (travelerId: string, data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateTravelerPersonal(
          application.id,
          travelerId,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating traveler personal info");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save personal information."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update traveler parents information
   */
  const updateTravelerParents = useCallback(
    async (travelerId: string, data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateTravelerParents(
          application.id,
          travelerId,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating traveler parents");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save parents information."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update traveler contact information
   */
  const updateTravelerContact = useCallback(
    async (travelerId: string, data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateTravelerContact(
          application.id,
          travelerId,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating traveler contact");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save contact information."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update traveler passport information
   */
  const updateTravelerPassport = useCallback(
    async (travelerId: string, data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateTravelerPassport(
          application.id,
          travelerId,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating traveler passport");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save passport information."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update traveler citizenship information
   */
  const updateTravelerCitizenship = useCallback(
    async (travelerId: string, data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateTravelerCitizenship(
          application.id,
          travelerId,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating traveler citizenship");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save citizenship information."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update traveler employment information
   */
  const updateTravelerEmployment = useCallback(
    async (travelerId: string, data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateTravelerEmployment(
          application.id,
          travelerId,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating traveler employment");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save employment information."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update traveler emergency contact
   */
  const updateTravelerEmergencyContact = useCallback(
    async (travelerId: string, data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated =
          await applicationsService.updateTravelerEmergencyContact(
            application.id,
            travelerId,
            data
          );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating emergency contact");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save emergency contact."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update traveler global entry information
   */
  const updateTravelerGlobalEntry = useCallback(
    async (travelerId: string, data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateTravelerGlobalEntry(
          application.id,
          travelerId,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating global entry");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save Global Entry information."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update traveler social media information
   */
  const updateTravelerSocialMedia = useCallback(
    async (travelerId: string, data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateTravelerSocialMedia(
          application.id,
          travelerId,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating social media");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save social media information."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
  );

  /**
   * Update traveler eligibility questions
   */
  const updateTravelerEligibility = useCallback(
    async (travelerId: string, data: any): Promise<boolean> => {
      if (!application?.id) return false;

      setIsLoading(true);
      setError(null);

      try {
        const updated = await applicationsService.updateTravelerEligibility(
          application.id,
          travelerId,
          data
        );
        setApplication(updated);
        setIsLoading(false);
        return true;
      } catch (err: any) {
        logError(err, "Updating eligibility");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to save eligibility information."
        );
        setError(errorMsg);
        setIsLoading(false);
        return false;
      }
    },
    [application?.id, setApplication]
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
    updateUsContact,
    updateUsStay,
    updateTravelDetails,
    updateTravelerPersonal,
    updateTravelerParents,
    updateTravelerContact,
    updateTravelerPassport,
    updateTravelerCitizenship,
    updateTravelerEmployment,
    updateTravelerEmergencyContact,
    updateTravelerGlobalEntry,
    updateTravelerSocialMedia,
    updateTravelerEligibility,
    setCurrentTraveler,
  };
}
