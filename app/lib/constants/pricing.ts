/**
 * Pricing Constants
 * Central source of truth for all pricing-related values
 */

// Official ESTA Fees
export const GOVERNMENT_FEE = 40.0; // Official U.S. government ESTA fee
export const SERVICE_FEE = 5.0; // Our processing and support service fee
export const DENIAL_PROTECTION_FEE = 17.99; // Optional denial protection per applicant

// Calculated totals
export const BASE_TOTAL_FEE = GOVERNMENT_FEE + SERVICE_FEE; // $45.00

// Service features included
export const INCLUDED_SERVICES = [
  "Form error checking & validation",
  "Real-time status monitoring",
  "Email & SMS notifications",
  "24/7 multilingual support",
  "Resubmission assistance (if needed)",
  "Document review & guidance",
] as const;
