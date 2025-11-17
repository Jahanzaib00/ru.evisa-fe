/**
 * Application Constants
 * Central configuration for application flow and limits
 */

// Application limits
export const MIN_APPLICANTS = 1;
export const MAX_APPLICANTS = 10;

// Processing time
export const EXPECTED_DELIVERY_HOURS = 4; // Super Rush processing time
export const STANDARD_PROCESSING_HOURS = 4; // Standard processing time

// ESTA validity
export const ESTA_VALIDITY_YEARS = 2;
export const ESTA_MAX_STAY_DAYS = 90;
export const ESTA_ENTRY_TYPE = "Multiple entry";

// Form steps
export const APPLICATION_STEPS = {
  TRIP_DETAILS: 1,
  PERSONAL_DETAILS: 2,
  PASSPORT_DETAILS: 3,
  REVIEW: 4,
} as const;
