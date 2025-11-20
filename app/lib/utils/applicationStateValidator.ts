import { applicationsService } from "../api/services/applications.service";
import { ApplicationStatus } from "../api/types";
import { logError } from "./errorHandler";

interface ApplicationValidationResult {
  isValid: boolean;
  applicationId: string | null;
  shouldCreateNew: boolean;
  message?: string;
}

/**
 * Validates if an application ID can be used for the current flow
 * Checks if the application exists and is in PENDING_PAYMENT status
 *
 * @param applicationId - The application ID to validate
 * @returns Validation result with instructions on next action
 */
export async function validateApplicationState(
  applicationId: string | null
): Promise<ApplicationValidationResult> {
  // No application ID in localStorage
  if (!applicationId) {
    return {
      isValid: false,
      applicationId: null,
      shouldCreateNew: true,
    };
  }

  try {
    // Check if application exists and get its status
    const application = await applicationsService.getById(applicationId);

    // Application exists and is in correct state - continue with it
    if (application.status === ApplicationStatus.PENDING_PAYMENT) {
      return {
        isValid: true,
        applicationId: application.id,
        shouldCreateNew: false,
      };
    }

    // Application exists but in wrong state (paid, submitted, etc.)
    // Silently create a new one
    logError(
      new Error(
        `Application ${applicationId} is in ${application.status} status`
      ),
      "Application state validation"
    );

    return {
      isValid: false,
      applicationId: null,
      shouldCreateNew: true,
      message: "Previous application was completed. Starting new application.",
    };
  } catch (error: any) {
    // Application doesn't exist or server error
    // Silently create a new one
    logError(error, "Application validation");

    return {
      isValid: false,
      applicationId: null,
      shouldCreateNew: true,
    };
  }
}

/**
 * Verifies application state before proceeding to next step
 * If application is invalid, returns false to prevent navigation
 *
 * @param applicationId - The application ID to verify
 * @returns True if can proceed, false otherwise
 */
export async function canProceedWithApplication(
  applicationId: string | null
): Promise<boolean> {
  if (!applicationId) {
    return false;
  }

  try {
    const application = await applicationsService.getById(applicationId);
    return application.status === ApplicationStatus.PENDING_PAYMENT;
  } catch (error) {
    logError(error, "Application verification");
    return false;
  }
}

/**
 * Checks if an application has travelers data already saved
 * Useful for detecting if user is resuming an application
 *
 * @param applicationId - The application ID to check
 * @returns True if travelers exist, false otherwise
 */
export async function hasExistingTravelers(
  applicationId: string
): Promise<boolean> {
  try {
    const application = await applicationsService.getById(applicationId);
    return (
      (application?.travelers && application.travelers.length > 0) || false
    );
  } catch (error) {
    logError(error, "Check existing travelers");
    return false;
  }
}
