import { AxiosError } from "axios";

/**
 * Extracts a user-friendly error message from various error types
 * Handles Axios errors, API response errors, and generic errors
 */
export function extractErrorMessage(
  error: unknown,
  defaultMessage: string = "An unexpected error occurred. Please try again."
): string {
  // Handle Axios errors
  if (error && typeof error === "object" && "response" in error) {
    const axiosError = error as AxiosError<any>;

    // Try multiple paths for the error message
    // Backend might return: { message, error, statusCode } or { data: { message }, statusCode, ... }
    const response = axiosError.response;

    if (response?.data) {
      // Path 1: response.data.message (NestJS exception format)
      if (response.data.message) {
        if (Array.isArray(response.data.message)) {
          // Validation errors come as array
          return response.data.message.join(", ");
        }
        return response.data.message;
      }

      // Path 2: response.data.data.message (wrapped response)
      if (response.data.data?.message) {
        if (Array.isArray(response.data.data.message)) {
          return response.data.data.message.join(", ");
        }
        return response.data.data.message;
      }

      // Path 3: response.data.error
      if (response.data.error && typeof response.data.error === "string") {
        return response.data.error;
      }
    }

    // If no message in response data, use status text
    if (response?.statusText) {
      return response.statusText;
    }
  }

  // Handle standard Error objects
  if (error instanceof Error) {
    return error.message;
  }

  // Handle string errors
  if (typeof error === "string") {
    return error;
  }

  // Fallback to default message
  return defaultMessage;
}

/**
 * Checks if an error is a specific type of error
 */
export function isErrorType(error: unknown, errorType: string): boolean {
  const message = extractErrorMessage(error, "");
  return message.toLowerCase().includes(errorType.toLowerCase());
}

/**
 * Checks if error is a network error
 */
export function isNetworkError(error: unknown): boolean {
  if (error && typeof error === "object" && "code" in error) {
    return (error as any).code === "ERR_NETWORK";
  }
  return isErrorType(error, "network");
}

/**
 * Checks if error is an authentication error
 */
export function isAuthError(error: unknown): boolean {
  if (error && typeof error === "object" && "response" in error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.status === 401;
  }
  return false;
}

/**
 * Checks if error is a validation error
 */
export function isValidationError(error: unknown): boolean {
  if (error && typeof error === "object" && "response" in error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.status === 400;
  }
  return false;
}

/**
 * Checks if error is a not found error
 */
export function isNotFoundError(error: unknown): boolean {
  if (error && typeof error === "object" && "response" in error) {
    const axiosError = error as AxiosError;
    return axiosError.response?.status === 404;
  }
  return false;
}

/**
 * Logs error to console in development and to error tracking service in production
 */
export function logError(error: unknown, context?: string): void {
  if (process.env.NODE_ENV === "development") {
    console.error(`[Error${context ? ` - ${context}` : ""}]:`, error);
  } else {
    // In production, you might want to send to error tracking service like Sentry
    // Example: Sentry.captureException(error, { tags: { context } });
    console.error(`[Error${context ? ` - ${context}` : ""}]:`, error);
  }
}
