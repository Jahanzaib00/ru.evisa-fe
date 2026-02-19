/**
 * Service Configuration System
 *
 * Central source of truth for all visa/ETA services
 * Defines metadata, pricing, steps, and business logic for each service
 */

export enum ServiceType {
  US_ESTA = "US_ESTA",
  UK_ETA = "UK_ETA",
  CANADA_ETA = "CANADA_ETA",
}

export enum StepType {
  PERSONAL = "PERSONAL",
  PASSPORT = "PASSPORT",
  TRAVEL = "TRAVEL",
  CONTACT = "CONTACT",
  EMPLOYMENT = "EMPLOYMENT",
  ELIGIBILITY = "ELIGIBILITY",
  REVIEW = "REVIEW",
}

/**
 * A single field definition that drives BOTH step completion checking AND review display.
 *
 * For completion: fields with `required` set are checked against traveler/application data.
 * For review:     fields with a `label` are rendered in the review step.
 *
 * One config, two purposes — no duplication.
 */
export interface StepField {
  /** Display label shown in the review. Omit to use the field for completion only (not rendered). */
  label?: string;
  /** Where to read the value from. Defaults to "traveler". */
  source?: "traveler" | "application";
  /**
   * Which keys must be non-null for the step to be considered complete.
   * - true  → auto-detect from the field format (key / date keys / boolean key / map key / first concat key)
   * - string[] → explicitly list the keys to check
   * - omit  → not a completion requirement
   */
  required?: boolean | string[];

  // ── Value resolution (choose one) ──────────────────────────────────────────
  /** Single field key. */
  key?: string;
  /** Join multiple field keys into one string. */
  concat?: string[];
  /** Separator for concat. Defaults to " ". */
  separator?: string;
  /** Render three date-part keys as DD/MM/YYYY. */
  date?: { day: string; month: string; year: string };
  /** Render a boolean field with custom labels. */
  boolean?: { key: string; trueLabel: string; falseLabel: string };
  /** Map a raw value to a display string. */
  map?: { key: string; values: Record<string, string> };
  /** Static summary text (e.g. "All questions answered"). No completion check. */
  summary?: string;
}

export interface StepConfig {
  type: StepType;
  component: string;
  title: string;
  description?: string;
  /** Set true for steps that are never "done" (e.g. Review). */
  neverComplete?: boolean;
  /** Unified field definitions — drives both completion checking and review display. */
  fields?: StepField[];
}

export interface PrePaymentStepConfig {
  title: string;
  description?: string;
  emailHelperText?: string; // Custom helper text for email field
}

export enum ProcessingTierType {
  STANDARD = "STANDARD",
  RUSH = "RUSH",
  SUPER_RUSH = "SUPER_RUSH",
}

export interface ProcessingTier {
  type: ProcessingTierType;
  label: string; // e.g., "Standard", "Rush", "Super Rush"
  description: string; // e.g., "24 hour processing"
  processingTime: number; // in hours
  serviceFee: number; // Our service fee for this tier (government fee is separate)
  isDefault?: boolean; // Whether this is the default tier
}

export interface ServiceConfig {
  // Identity
  type: ServiceType;
  slug: string;
  name: string;
  destination: string;
  destinationCode: string; // ISO country code

  // Eligibility
  eligibleNationalities: string[]; // ISO country codes that can apply

  // Pricing
  pricing: {
    government: number; // Government fee (constant)
    denialProtection?: number;
    currency: string; // USD, GBP, EUR, etc.
  };

  // Processing Tiers - different service fees and processing times
  processingTiers: ProcessingTier[];

  // Validity
  validity: {
    years?: number;
    months?: number;
    stays?: string; // e.g., "90 days per visit"
  };

  // Processing times (deprecated - kept for backward compatibility)
  processing: {
    standard: string;
    rush?: string;
    superRush?: string;
  };

  // SEO
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };

  // Pre-payment steps (before user pays)
  prePaymentSteps: {
    tripDetails: PrePaymentStepConfig;
    personalDetails: PrePaymentStepConfig;
    passportDetails: PrePaymentStepConfig;
  };

  // Post-payment form steps (after payment)
  steps: StepConfig[];

  // Included services (for marketing)
  includedServices: string[];
}

// ============================================
// US ESTA Configuration
// ============================================
export const US_ESTA_CONFIG: ServiceConfig = {
  type: ServiceType.US_ESTA,
  slug: "esta",
  name: "United States ESTA",
  destination: "united-states",
  destinationCode: "US",

  eligibleNationalities: [
    // Visa Waiver Program countries
    "AD",
    "AU",
    "AT",
    "BE",
    "BN",
    "CL",
    "HR",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IS",
    "IE",
    "IT",
    "JP",
    "LV",
    "LI",
    "LT",
    "LU",
    "MT",
    "MC",
    "NL",
    "NZ",
    "NO",
    "PL",
    "PT",
    "SM",
    "SG",
    "SK",
    "SI",
    "KR",
    "ES",
    "SE",
    "CH",
    "TW",
    "GB",
  ],

  pricing: {
    government: 40,
    denialProtection: 17.99,
    currency: "USD",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Standard",
      description: "24 hour processing",
      processingTime: 24, // in hours for calculation
      serviceFee: 19.95,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Rush",
      description: "4 hour processing",
      processingTime: 4,
      serviceFee: 29.95,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Super Rush",
      description: "1 hour processing",
      processingTime: 1,
      serviceFee: 39.95,
    },
  ],

  validity: {
    years: 2,
    stays: "90 days per visit",
  },

  processing: {
    standard: "24 hours",
    rush: "4 hours",
    superRush: "1 hour",
  },

  meta: {
    title: "US ESTA Application | Fast ESTA Processing",
    description:
      "Apply for your US ESTA online. Fast processing, 24/7 support, and instant approval for eligible travelers.",
    keywords: [
      "esta",
      "us visa",
      "travel authorization",
      "usa travel",
      "esta application",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Start Application for your United States ESTA",
      description:
        "The United States ESTA is mandatory for {nationality} passport holders planning to enter {destination}",
    },
    personalDetails: {
      title: "Your personal details",
      description: "Enter the details as they appear on your passport.",
      emailHelperText:
        "Your approved United States ESTA will be sent to this email address.",
    },
    passportDetails: {
      title: "Passport details",
      description: "Enter your passport information.",
    },
  },

  steps: [
    {
      type: StepType.PERSONAL,
      component: "ESTAPersonalStep",
      title: "Personal Information",
      description:
        "Provide accurate personal details as they appear on your passport",
      fields: [
        {
          label: "Full Name",
          concat: ["firstName", "middleName", "lastName"],
          required: ["firstName", "lastName"],
        },
        {
          label: "Date of Birth",
          date: { day: "birthDay", month: "birthMonth", year: "birthYear" },
        },
        {
          label: "Gender",
          map: {
            key: "gender",
            values: { M: "Male", F: "Female", X: "Other" },
          },
        },
        { label: "City of Birth", key: "cityOfBirth" },
        { label: "Country of Birth", key: "countryOfBirth" },
        { label: "Marital Status", key: "maritalStatus" },
        { label: "Email", key: "email", required: true },
        {
          label: "Father's Name",
          concat: ["fatherFirstName", "fatherFamilyName"],
        },
        {
          label: "Mother's Name",
          concat: ["motherFirstName", "motherFamilyName"],
        },
      ],
    },
    {
      type: StepType.PASSPORT,
      component: "ESTAPassportStep",
      title: "Passport Information",
      description: "Enter your passport details and upload required documents",
      fields: [
        { label: "Passport Number", key: "passportNumber", required: true },
        { label: "Passport Type", key: "passportType" },
        {
          label: "Issue Date",
          date: {
            day: "passportIssueDay",
            month: "passportIssueMonth",
            year: "passportIssueYear",
          },
        },
        {
          label: "Expiry Date",
          date: {
            day: "passportExpiryDay",
            month: "passportExpiryMonth",
            year: "passportExpiryYear",
          },
        },
        { label: "Nationality", key: "nationalityOnPassport", required: true },
        {
          label: "e-Passport",
          boolean: { key: "isEPassport", trueLabel: "Yes", falseLabel: "No" },
        },
        { label: "Country of Residence", key: "countryOfResidence" },
        { label: "National ID Number", key: "nationalIdNumber" },
        { key: "passportUrl", required: true }, // completion check only — raw URL not shown
      ],
    },
    {
      type: StepType.TRAVEL,
      component: "ESTAUSTravelStep",
      title: "U.S. Travel Details",
      description: "Tell us about your travel plans to the United States",
      fields: [
        {
          label: "Purpose of Visit",
          key: "purposeOfVisit",
          source: "application",
          required: true,
        },
        {
          label: "Transiting",
          boolean: { key: "isTransiting", trueLabel: "Yes", falseLabel: "No" },
          source: "application",
        },
        { label: "Arrival Date", key: "arrivalDate", source: "application" },
        {
          label: "Flight / Vessel Number",
          key: "flightVesselNumber",
          source: "application",
        },
        { label: "Point of Entry", key: "pointOfEntry", source: "application" },
        {
          label: "US Stay Address",
          concat: ["usStayAddressLine1", "usStayCity", "usStayState"],
          separator: ", ",
          source: "application",
        },
        {
          label: "US Point of Contact",
          key: "usPointOfContactName",
          source: "application",
        },
      ],
    },
    {
      type: StepType.CONTACT,
      component: "ESTAContactStep",
      title: "Contact Information",
      description: "Provide your contact details and emergency contact",
      fields: [
        { label: "Phone Number", key: "phoneNumber", required: true },
        { label: "Phone Type", key: "phoneType" },
        {
          label: "Home Address",
          concat: [
            "addressLine1",
            "addressLine2",
            "city",
            "stateProvinceRegion",
            "postalCode",
            "country",
          ],
          separator: ", ",
          required: ["addressLine1"],
        },
        {
          label: "Emergency Contact",
          concat: ["emergencyContactFirstName", "emergencyContactLastName"],
        },
        { label: "Emergency Email", key: "emergencyContactEmail" },
        { label: "Emergency Phone", key: "emergencyContactPhone" },
      ],
    },
    {
      type: StepType.EMPLOYMENT,
      component: "ESTAEmploymentStep",
      title: "Employment Information",
      description: "Tell us about your current employment status",
      fields: [
        {
          label: "Employment Status",
          boolean: {
            key: "isEmployed",
            trueLabel: "Employed",
            falseLabel: "Not Employed",
          },
          required: true,
        },
        { label: "Job Title", key: "jobTitle" },
        { label: "Employer", key: "employerName" },
        { label: "Employer City", key: "employerCity" },
        { label: "Employer Country", key: "employerCountry" },
      ],
    },
    {
      type: StepType.ELIGIBILITY,
      component: "ESTAEligibilityStep",
      title: "Eligibility Questions",
      description: "Please answer all questions truthfully",
      fields: [
        { key: "eligibilityQ1", required: true }, // completion check only
        {
          label: "Status",
          summary: "All 9 eligibility questions have been answered.",
        },
      ],
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Review & Submit",
      description: "Review all information before submission",
      neverComplete: true,
    },
  ],

  includedServices: [
    "Form error checking & validation",
    "Real-time status monitoring",
    "Email & SMS notifications",
    "24/7 multilingual support",
    "Resubmission assistance (if needed)",
    "Document review & guidance",
  ],
};

// ============================================
// UK ETA Configuration
// ============================================
export const UK_ETA_CONFIG: ServiceConfig = {
  type: ServiceType.UK_ETA,
  slug: "uk-eta",
  name: "United Kingdom ETA",
  destination: "united-kingdom",
  destinationCode: "GB",

  eligibleNationalities: [
    // All visa-exempt nationals (85 countries as of 2025)
    "AD",
    "AG",
    "AR",
    "AU",
    "AT",
    "BS",
    "BH",
    "BB",
    "BE",
    "BZ",
    "BR",
    "BN",
    "BG",
    "CA",
    "CL",
    "CR",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "GD",
    "GT",
    "GY",
    "HK",
    "HU",
    "IS",
    "IT",
    "IL",
    "JP",
    "KI",
    "KW",
    "LV",
    "LI",
    "LT",
    "LU",
    "MO",
    "MY",
    "MV",
    "MT",
    "MH",
    "MU",
    "MX",
    "FM",
    "MC",
    "NL",
    "NZ",
    "NI",
    "NO",
    "OM",
    "PW",
    "PA",
    "PG",
    "PY",
    "PE",
    "PL",
    "PT",
    "QA",
    "RO",
    "WS",
    "SM",
    "SA",
    "SC",
    "SG",
    "SB",
    "KR",
    "SK",
    "SI",
    "ES",
    "KN",
    "LC",
    "VC",
    "SE",
    "CH",
    "TO",
    "TV",
    "AE",
    "US",
    "UY",
    "VA",
    "TW",
  ],

  pricing: {
    government: 16,
    denialProtection: 12.99,
    currency: "GBP",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Standard",
      description: "24 hour processing",
      processingTime: 24,
      serviceFee: 14.95,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Rush",
      description: "4 hour processing",
      processingTime: 4,
      serviceFee: 23.95,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Super Rush",
      description: "1 hour processing",
      processingTime: 1,
      serviceFee: 31.95,
    },
  ],

  validity: {
    years: 2,
    stays: "180 days per visit",
  },

  processing: {
    standard: "24 hours",
    rush: "4 hours",
    superRush: "1 hour",
  },

  meta: {
    title: "UK ETA Application | Electronic Travel Authorization",
    description:
      "Apply for your UK ETA online. Fast, secure processing with instant approval for eligible travelers.",
    keywords: [
      "uk eta",
      "uk visa",
      "uk travel authorization",
      "electronic travel authorization",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Start Application for your United Kingdom ETA",
      description:
        "The United Kingdom ETA is mandatory for {nationality} passport holders planning to enter {destination}",
    },
    personalDetails: {
      title: "Your personal details",
      description: "Enter the details as they appear on your passport.",
      emailHelperText:
        "Your approved United Kingdom ETA will be sent to this email address.",
    },
    passportDetails: {
      title: "Passport details",
      description: "Enter your passport information.",
    },
  },

  steps: [
    {
      type: StepType.PERSONAL,
      component: "UKETAPersonalStep",
      title: "Personal Information",
      description: "Provide your basic personal details",
      fields: [
        {
          label: "Full Name",
          concat: ["firstName", "lastName"],
          required: ["firstName", "lastName"],
        },
        {
          label: "Date of Birth",
          date: { day: "birthDay", month: "birthMonth", year: "birthYear" },
        },
        {
          label: "Gender",
          map: {
            key: "gender",
            values: { M: "Male", F: "Female", X: "Other" },
          },
        },
        { label: "Email", key: "email", required: true },
      ],
    },
    {
      type: StepType.PASSPORT,
      component: "UKETAPassportStep",
      title: "Passport Information",
      description: "Enter passport details and upload documents",
      fields: [
        { label: "Passport Number", key: "passportNumber", required: true },
        {
          label: "Expiry Date",
          date: {
            day: "passportExpiryDay",
            month: "passportExpiryMonth",
            year: "passportExpiryYear",
          },
        },
        { key: "passportUrl", required: true }, // completion check only
      ],
    },
    {
      type: StepType.EMPLOYMENT,
      component: "UKETAEmploymentStep",
      title: "Employment Information",
      description: "Tell us about your occupation",
      fields: [
        { label: "Current Occupation", key: "jobTitle", required: true },
      ],
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Review & Submit",
      description: "Review all information before submission",
      neverComplete: true,
    },
  ],

  includedServices: [
    "Application review & validation",
    "Real-time application tracking",
    "Email notifications",
    "24/7 customer support",
    "Secure document storage",
    "Expedited processing options",
  ],
};

// ============================================
// Canada eTA Configuration
// ============================================
export const CANADA_ETA_CONFIG: ServiceConfig = {
  type: ServiceType.CANADA_ETA,
  slug: "canada-eta",
  name: "Canada eTA",
  destination: "canada",
  destinationCode: "CA",

  // Citizens of these countries require an eTA to fly to/transit through Canada.
  // US citizens are excluded — they enter on their passport only.
  eligibleNationalities: [
    "AD", // Andorra
    "AG", // Antigua and Barbuda
    "AU", // Australia
    "AT", // Austria
    "BS", // Bahamas
    "BB", // Barbados
    "BE", // Belgium
    "BN", // Brunei
    "BG", // Bulgaria
    "CL", // Chile
    "HR", // Croatia
    "CY", // Cyprus
    "CZ", // Czech Republic
    "DK", // Denmark
    "EE", // Estonia
    "FI", // Finland
    "FR", // France
    "DE", // Germany
    "GR", // Greece
    "HU", // Hungary
    "IS", // Iceland
    "IE", // Ireland
    "IT", // Italy
    "JP", // Japan
    "KR", // South Korea
    "LV", // Latvia
    "LI", // Liechtenstein
    "LT", // Lithuania
    "LU", // Luxembourg
    "MT", // Malta
    "MX", // Mexico
    "MC", // Monaco
    "NL", // Netherlands
    "NZ", // New Zealand
    "NO", // Norway
    "PG", // Papua New Guinea
    "PL", // Poland
    "PT", // Portugal
    "RO", // Romania
    "WS", // Samoa
    "SM", // San Marino
    "SG", // Singapore
    "SK", // Slovakia
    "SI", // Slovenia
    "SB", // Solomon Islands
    "ES", // Spain
    "SE", // Sweden
    "CH", // Switzerland
    "TW", // Taiwan
    "TL", // Timor-Leste
    "GB", // United Kingdom
  ],

  pricing: {
    government: 7, // CAD $7 — official IRCC government fee
    denialProtection: 14.99,
    currency: "CAD",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Standard",
      description: "24 hour processing",
      processingTime: 24,
      serviceFee: 24.95,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Rush",
      description: "4 hour processing",
      processingTime: 4,
      serviceFee: 39.95,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Super Rush",
      description: "1 hour processing",
      processingTime: 1,
      serviceFee: 44.95,
    },
  ],

  validity: {
    years: 5,
    stays: "6 months per visit",
  },

  processing: {
    standard: "24 hours",
    rush: "4 hours",
    superRush: "1 hour",
  },

  meta: {
    title: "Canada eTA Application | Fast Electronic Travel Authorization",
    description:
      "Apply for your Canada eTA online. Fast processing, 24/7 support, and quick approval for eligible travelers.",
    keywords: [
      "canada eta",
      "canada travel authorization",
      "canadian eta",
      "eta canada",
      "canada visa waiver",
      "apply for canada eta",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Start Application for your Canada eTA",
      description:
        "The Canada eTA is mandatory for {nationality} passport holders planning to enter {destination}",
    },
    personalDetails: {
      title: "Your personal details",
      description: "Enter the details as they appear on your passport.",
      emailHelperText:
        "Your approved Canada eTA will be sent to this email address.",
    },
    passportDetails: {
      title: "Passport details",
      description: "Enter your passport information.",
    },
  },

  // Post-payment form steps — UI components implemented in the post-payment flow
  steps: [
    {
      type: StepType.PERSONAL,
      component: "CanadaETAPersonalStep",
      title: "Personal Information",
      description: "Provide your personal details as they appear on your passport",
      fields: [
        {
          label: "Full Name",
          concat: ["firstName", "lastName"],
          required: ["firstName", "lastName"],
        },
        {
          label: "Date of Birth",
          date: { day: "birthDay", month: "birthMonth", year: "birthYear" },
        },
        {
          label: "Gender",
          map: {
            key: "gender",
            values: { M: "Male", F: "Female", X: "Other" },
          },
        },
        { label: "Marital Status", key: "maritalStatus" },
        { label: "Email", key: "email", required: true },
      ],
    },
    {
      type: StepType.PASSPORT,
      component: "CanadaETAPassportStep",
      title: "Passport Information",
      description: "Enter your passport details and upload required documents",
      fields: [
        { label: "Passport Number", key: "passportNumber", required: true },
        {
          label: "Issue Date",
          date: {
            day: "passportIssueDay",
            month: "passportIssueMonth",
            year: "passportIssueYear",
          },
        },
        {
          label: "Expiry Date",
          date: {
            day: "passportExpiryDay",
            month: "passportExpiryMonth",
            year: "passportExpiryYear",
          },
        },
        { label: "Nationality", key: "nationalityOnPassport", required: true },
        {
          label: "e-Passport",
          boolean: { key: "isEPassport", trueLabel: "Yes", falseLabel: "No" },
        },
        { label: "Country of Residence", key: "countryOfResidence" },
        { key: "passportUrl", required: true }, // completion check only
      ],
    },
    {
      type: StepType.ELIGIBILITY,
      component: "CanadaETAEligibilityStep",
      title: "Eligibility Questions",
      description: "Please answer all questions truthfully",
      fields: [
        { key: "eligibilityQ1", required: true }, // completion check only
        {
          label: "Status",
          summary: "All eligibility questions have been answered.",
        },
      ],
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Review & Submit",
      description: "Review all information before submission",
      neverComplete: true,
    },
  ],

  includedServices: [
    "Application review & validation",
    "Real-time application tracking",
    "Email & SMS notifications",
    "24/7 multilingual support",
    "Secure document storage",
    "Resubmission assistance (if needed)",
  ],
};

// ============================================
// Service Registry
// ============================================
export const SERVICES: Record<ServiceType, ServiceConfig> = {
  [ServiceType.US_ESTA]: US_ESTA_CONFIG,
  [ServiceType.UK_ETA]: UK_ETA_CONFIG,
  [ServiceType.CANADA_ETA]: CANADA_ETA_CONFIG,
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get service configuration by type
 */
export function getService(type: ServiceType): ServiceConfig {
  const service = SERVICES[type];
  if (!service || !service.slug) {
    throw new Error(`Service type ${type} not implemented yet`);
  }
  return service;
}

/**
 * Get service configuration by destination slug
 * Used by [destination] routes for backward compatibility
 */
export function getServiceByDestination(
  destination: string,
): ServiceConfig | undefined {
  const destinationMap: Record<string, ServiceType> = {
    "united-states": ServiceType.US_ESTA,
    "united-kingdom": ServiceType.UK_ETA,
    canada: ServiceType.CANADA_ETA,
  };

  const serviceType = destinationMap[destination.toLowerCase()];
  if (serviceType && SERVICES[serviceType]?.slug) {
    return SERVICES[serviceType];
  }

  return undefined;
}

/**
 * Get service configuration by service slug ONLY
 * Only accepts valid service slugs: esta, uk-eta, canada-eta
 * Returns undefined for invalid slugs (which triggers 404)
 * Used by [service] routes for strict SEO compliance
 */
export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  // Only accept direct service slug matches (esta, uk-eta, etc.)
  const service = Object.values(SERVICES).find((s) => s.slug === slug);

  // Return undefined if not found or not fully implemented
  if (!service || !service.slug) {
    return undefined;
  }

  return service;
}

/**
 * Check if a nationality is eligible for a service
 */
export function isEligible(
  serviceType: ServiceType,
  nationalityCode: string,
): boolean {
  const service = getService(serviceType);
  return service.eligibleNationalities.includes(nationalityCode);
}

/**
 * Get all services available for a nationality traveling to a destination
 */
export function getEligibleServices(
  passportCountry: string,
  destinationCountry: string,
): ServiceConfig[] {
  return Object.values(SERVICES).filter((service) => {
    // Skip unimplemented services
    if (!service.slug) return false;

    // Check destination matches
    if (service.destinationCode !== destinationCountry) return false;

    // Check nationality is eligible
    return service.eligibleNationalities.includes(passportCountry);
  });
}

/**
 * Get currency symbol for a currency code
 */
export function getCurrencySymbol(currencyCode: string): string {
  const symbols: Record<string, string> = {
    USD: "$",
    usd: "$",
    GBP: "£",
    gbp: "£",
    EUR: "€",
    eur: "€",
    CAD: "CA$",
    cad: "CA$",
  };
  return symbols[currencyCode] || "$";
}

/**
 * Get the default processing tier for a service
 */
export function getDefaultProcessingTier(
  serviceType: ServiceType,
): ProcessingTier {
  const service = getService(serviceType);
  const defaultTier = service.processingTiers.find((tier) => tier.isDefault);
  return defaultTier || service.processingTiers[0];
}

/**
 * Get a specific processing tier by type
 */
export function getProcessingTier(
  serviceType: ServiceType,
  tierType: ProcessingTierType,
): ProcessingTier | undefined {
  const service = getService(serviceType);
  return service.processingTiers.find((tier) => tier.type === tierType);
}

/**
 * Calculate total price for a service with processing tier
 */
export function calculatePrice(
  serviceType: ServiceType,
  applicants: number = 1,
  processingTierType?: ProcessingTierType,
  includeDenialProtection: boolean = false,
): { subtotal: number; total: number; perApplicant: number; currency: string } {
  const service = getService(serviceType);

  // Get the processing tier (default if not specified)
  const tier = processingTierType
    ? getProcessingTier(serviceType, processingTierType) ||
      getDefaultProcessingTier(serviceType)
    : getDefaultProcessingTier(serviceType);

  const perApplicant = service.pricing.government + tier.serviceFee;
  const denialProtection =
    includeDenialProtection && service.pricing.denialProtection
      ? service.pricing.denialProtection * applicants
      : 0;

  const subtotal = perApplicant * applicants;
  const total = subtotal + denialProtection;

  return {
    subtotal,
    total,
    perApplicant,
    currency: service.pricing.currency,
  };
}
