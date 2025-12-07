import { FieldValues, UseFormSetError } from "react-hook-form";

/**
 * Wrapper for form submission that properly handles async errors
 * and ensures React Hook Form's submission state is reset on failure.
 *
 * Usage:
 * const onSubmit = useFormSubmit(setError, async (data) => {
 *   const success = await someApiCall(data);
 *   if (!success) throw new Error("API call failed");
 *   // Navigate or do something on success
 * });
 */
export function useFormSubmit<T extends FieldValues>(
  setError: UseFormSetError<T>,
  submitFn: (data: T) => Promise<void>
) {
  // Don't use useCallback - just return the wrapper function directly
  // This ensures it works even when submitFn changes on every render
  return async (data: T) => {
    try {
      await submitFn(data);
    } catch (error: any) {
      // Set form-level error to reset submission state
      setError("root", {
        type: "manual",
        message: error.message || "An error occurred. Please try again.",
      });
    }
  };
}
