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
  THAILAND_TDAC = "THAILAND_TDAC",
  INDONESIA_EVOA = "INDONESIA_EVOA",
  MALAYSIA_MDAC = "MALAYSIA_MDAC",
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
  label: string; // e.g., "Standard", "Rush", "Fast Track"
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
    currency: string; // USD, GBP, EUR, etc.
  };

  // Processing Tiers - different service fees and processing times
  processingTiers: ProcessingTier[];

  // Validity
  validity: {
    duration: string; // e.g., "2 years", "30 days", "Single use"
    stays: string; // e.g., "90 days per visit", "30 days per entry"
    multipleEntry: boolean; // Whether the authorization allows multiple entries
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

  // Pre-payment flow options
  /** Skip the processing-options step (flat-fee services). Defaults to false. */
  skipProcessingOptions?: boolean;

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
      label: "Fast Track",
      description: "1 hour processing",
      processingTime: 1,
      serviceFee: 39.95,
    },
  ],

  validity: {
    duration: "2 years",
    stays: "90 days per visit",
    multipleEntry: true,
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
      title: "Apply now for your United States ESTA",
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
      label: "Fast Track",
      description: "1 hour processing",
      processingTime: 1,
      serviceFee: 31.95,
    },
  ],

  validity: {
    duration: "2 years",
    stays: "180 days per visit",
    multipleEntry: true,
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
      title: "Apply now for your United Kingdom ETA",
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
      label: "Fast Track",
      description: "1 hour processing",
      processingTime: 1,
      serviceFee: 44.95,
    },
  ],

  validity: {
    duration: "5 years",
    stays: "6 months per visit",
    multipleEntry: true,
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
      title: "Apply now for your Canada eTA",
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
      description:
        "Provide your personal details as they appear on your passport",
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
// Thailand TDAC Configuration
// ============================================
export const THAILAND_TDAC_CONFIG: ServiceConfig = {
  type: ServiceType.THAILAND_TDAC,
  slug: "thailand-tdac",
  name: "Thailand Digital Arrival Card",
  destination: "thailand",
  destinationCode: "TH",

  // All non-Thai nationals are required to complete TDAC
  eligibleNationalities: [
    "AD",
    "AE",
    "AF",
    "AG",
    "AL",
    "AM",
    "AO",
    "AR",
    "AT",
    "AU",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BN",
    "BO",
    "BR",
    "BS",
    "BT",
    "BW",
    "BY",
    "BZ",
    "CA",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CL",
    "CM",
    "CN",
    "CO",
    "CR",
    "CU",
    "CV",
    "CY",
    "CZ",
    "DE",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "ER",
    "ES",
    "ET",
    "FI",
    "FJ",
    "FM",
    "FR",
    "GA",
    "GB",
    "GD",
    "GE",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GR",
    "GT",
    "GW",
    "GY",
    "HK",
    "HN",
    "HR",
    "HT",
    "HU",
    "ID",
    "IE",
    "IL",
    "IN",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KI",
    "KM",
    "KN",
    "KP",
    "KR",
    "KW",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "ME",
    "MG",
    "MH",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MR",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MY",
    "MZ",
    "NA",
    "NE",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NR",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PG",
    "PH",
    "PK",
    "PL",
    "PT",
    "PW",
    "PY",
    "QA",
    "RO",
    "RS",
    "RU",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SI",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "SS",
    "ST",
    "SV",
    "SY",
    "SZ",
    "TD",
    "TG",
    "TJ",
    "TL",
    "TM",
    "TN",
    "TO",
    "TR",
    "TT",
    "TV",
    "TW",
    "TZ",
    "UA",
    "UG",
    "US",
    "UY",
    "UZ",
    "VA",
    "VC",
    "VE",
    "VN",
    "VU",
    "WS",
    "YE",
    "ZA",
    "ZM",
    "ZW",
  ],

  pricing: {
    government: 0,

    currency: "USD",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Standard",
      description: "24 hour processing",
      processingTime: 24,
      serviceFee: 19.99,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Rush",
      description: "4 hour processing",
      processingTime: 4,
      serviceFee: 29.99,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Fast Track",
      description: "1 hour processing",
      processingTime: 1,
      serviceFee: 39.99,
    },
  ],

  validity: {
    duration: "30 days after arrival",
    stays: "30 days per entry",
    multipleEntry: false,
  },

  processing: {
    standard: "24 hours",
    rush: "4 hours",
    superRush: "1 hour",
  },

  meta: {
    title: "Thailand TDAC Application | Digital Arrival Card Online",
    description:
      "Apply for your Thailand Digital Arrival Card (TDAC) online. Fast, hassle-free processing with expert review and 24/7 support.",
    keywords: [
      "thailand tdac",
      "thailand digital arrival card",
      "tdac application",
      "thailand arrival card",
      "thailand travel",
      "tdac online",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Apply now for your Thailand Digital Arrival Card",
      description:
        "The Thailand Digital Arrival Card (TDAC) is mandatory for {nationality} passport holders planning to enter {destination}",
    },
    personalDetails: {
      title: "Your personal details",
      description: "Enter the details as they appear on your passport.",
      emailHelperText:
        "Your completed Thailand TDAC will be sent to this email address.",
    },
    passportDetails: {
      title: "Passport details",
      description: "Enter your passport information.",
    },
  },

  steps: [
    {
      type: StepType.TRAVEL,
      component: "TDACTripDetailsStep",
      title: "Trip details",
      description: "General details",
      fields: [
        { label: "Phone Number", key: "phoneNumber", required: true },
        {
          label: "Arrival Date",
          key: "arrivalDate",
          source: "application",
          required: true,
        },
        {
          label: "Flight Number",
          key: "flightVesselNumber",
          source: "application",
        },
      ],
    },
    {
      type: StepType.PERSONAL,
      component: "TDACPersonalDetailsStep",
      title: "Personal details",
      description: "Basic personal information",
      fields: [
        {
          label: "Gender",
          map: {
            key: "gender",
            values: { M: "Male", F: "Female" },
          },
          required: true,
        },
        {
          label: "Country of Residence",
          key: "countryOfResidence",
          required: true,
        },
        {
          label: "Employment Status",
          map: {
            key: "jobTitle",
            values: {
              EMPLOYED: "Employed",
              RETIRED: "Retired",
              STUDENT: "Student",
              UNEMPLOYED: "Unemployed",
            },
          },
          required: true,
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
    "Expert form review & validation",
    "Real-time application tracking",
    "Email & SMS notifications",
    "24/7 multilingual support",
    "Error-free submission guarantee",
    "Dedicated support agent",
  ],
};

// ============================================
// Indonesia eVOA Configuration
// ============================================
export const INDONESIA_EVOA_CONFIG: ServiceConfig = {
  type: ServiceType.INDONESIA_EVOA,
  slug: "indonesia-evoa",
  name: "Indonesia eVOA",
  destination: "indonesia",
  destinationCode: "ID",

  // Countries eligible for Indonesia eVOA (Visa on Arrival)
  eligibleNationalities: [
    "AE",
    "AR",
    "AT",
    "AU",
    "BA",
    "BE",
    "BG",
    "BH",
    "BR",
    "CA",
    "CH",
    "CN",
    "CY",
    "CZ",
    "DE",
    "DK",
    "EE",
    "EG",
    "ES",
    "FI",
    "FR",
    "GB",
    "GR",
    "HK",
    "HR",
    "HU",
    "IE",
    "IN",
    "IS",
    "IT",
    "JO",
    "JP",
    "KR",
    "KW",
    "LI",
    "LT",
    "LU",
    "LV",
    "MC",
    "ME",
    "MK",
    "MT",
    "MX",
    "MY",
    "NL",
    "NO",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PH",
    "PL",
    "PT",
    "QA",
    "RO",
    "RS",
    "RU",
    "SA",
    "SE",
    "SG",
    "SI",
    "SK",
    "TH",
    "TN",
    "TR",
    "TW",
    "UA",
    "US",
    "VA",
    "VN",
    "ZA",
  ],

  pricing: {
    government: 32.36,
    currency: "USD",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Standard",
      description: "24 hour processing",
      processingTime: 24,
      serviceFee: 19.99,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Rush",
      description: "4 hour processing",
      processingTime: 4,
      serviceFee: 29.99,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Fast Track",
      description: "1 hour processing",
      processingTime: 1,
      serviceFee: 34.99,
    },
  ],

  validity: {
    duration: "90 days after issued",
    stays: "30 days",
    multipleEntry: false,
  },

  processing: {
    standard: "24 hours",
    rush: "4 hours",
    superRush: "1 hour",
  },

  meta: {
    title: "Indonesia eVOA Application | Electronic Visa on Arrival Online",
    description:
      "Apply for your Indonesia eVOA (Electronic Visa on Arrival) online. Fast, hassle-free processing with expert review and 24/7 support.",
    keywords: [
      "indonesia evoa",
      "indonesia visa on arrival",
      "indonesia e-visa",
      "evoa application",
      "indonesia travel visa",
      "bali visa",
      "indonesia online visa",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Apply now for your Indonesia eVOA",
      description:
        "The Indonesia eVOA (Electronic Visa on Arrival) is required for {nationality} passport holders planning to enter {destination}",
    },
    personalDetails: {
      title: "Your personal details",
      description: "Enter the details as they appear on your passport.",
      emailHelperText:
        "Your completed Indonesia eVOA will be sent to this email address.",
    },
    passportDetails: {
      title: "Passport details",
      description: "Enter your passport information.",
    },
  },

  steps: [
    {
      type: StepType.TRAVEL,
      component: "EVOATripDetailsStep",
      title: "Trip details",
      description: "General details",
      fields: [
        { label: "Phone Number", key: "phoneNumber", required: true },
        {
          label: "Arrival Date",
          key: "arrivalDate",
          source: "application",
          required: true,
        },
        {
          label: "Flight Number",
          key: "flightVesselNumber",
          source: "application",
        },
      ],
    },
    {
      type: StepType.PERSONAL,
      component: "EVOAPersonalDetailsStep",
      title: "Personal details",
      description: "Basic personal information",
      fields: [
        {
          label: "Gender",
          map: {
            key: "gender",
            values: { M: "Male", F: "Female" },
          },
          required: true,
        },
        {
          label: "Country of Residence",
          key: "countryOfResidence",
          required: true,
        },
        {
          label: "Employment Status",
          map: {
            key: "jobTitle",
            values: {
              EMPLOYED: "Employed",
              RETIRED: "Retired",
              STUDENT: "Student",
              UNEMPLOYED: "Unemployed",
            },
          },
          required: true,
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
    "Expert form review & validation",
    "Real-time application tracking",
    "Email & SMS notifications",
    "24/7 multilingual support",
    "Error-free submission guarantee",
    "Dedicated support agent",
  ],
};

// ============================================
// Malaysia MDAC Configuration
// ============================================
export const MALAYSIA_MDAC_CONFIG: ServiceConfig = {
  type: ServiceType.MALAYSIA_MDAC,
  slug: "malaysia-mdac",
  name: "Malaysia Digital Arrival Card",
  destination: "malaysia",
  destinationCode: "MY",

  // All non-Malaysian nationals are required to complete MDAC
  eligibleNationalities: [
    "AD",
    "AE",
    "AF",
    "AG",
    "AL",
    "AM",
    "AO",
    "AR",
    "AT",
    "AU",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BN",
    "BO",
    "BR",
    "BS",
    "BT",
    "BW",
    "BY",
    "BZ",
    "CA",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CL",
    "CM",
    "CN",
    "CO",
    "CR",
    "CU",
    "CV",
    "CY",
    "CZ",
    "DE",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "ER",
    "ES",
    "ET",
    "FI",
    "FJ",
    "FM",
    "FR",
    "GA",
    "GB",
    "GD",
    "GE",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GR",
    "GT",
    "GW",
    "GY",
    "HK",
    "HN",
    "HR",
    "HT",
    "HU",
    "ID",
    "IE",
    "IL",
    "IN",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KI",
    "KM",
    "KN",
    "KP",
    "KR",
    "KW",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "ME",
    "MG",
    "MH",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MR",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MZ",
    "NA",
    "NE",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NR",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PG",
    "PH",
    "PK",
    "PL",
    "PT",
    "PW",
    "PY",
    "QA",
    "RO",
    "RS",
    "RU",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SI",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "SS",
    "ST",
    "SV",
    "SY",
    "SZ",
    "TD",
    "TG",
    "TH",
    "TJ",
    "TL",
    "TM",
    "TN",
    "TO",
    "TR",
    "TT",
    "TV",
    "TW",
    "TZ",
    "UA",
    "UG",
    "US",
    "UY",
    "UZ",
    "VA",
    "VC",
    "VE",
    "VN",
    "VU",
    "WS",
    "YE",
    "ZA",
    "ZM",
    "ZW",
  ],

  pricing: {
    government: 0,

    currency: "USD",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Standard",
      description: "24 hour processing",
      processingTime: 24,
      serviceFee: 9.95,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Rush",
      description: "4 hour processing",
      processingTime: 4,
      serviceFee: 14.95,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Fast Track",
      description: "1 hour processing",
      processingTime: 1,
      serviceFee: 17.95,
    },
  ],

  validity: {
    duration: "90 days after arrival",
    stays: "90 days per entry",
    multipleEntry: false,
  },

  processing: {
    standard: "24 hours",
    rush: "4 hours",
    superRush: "1 hour",
  },

  meta: {
    title: "Malaysia MDAC Application | Digital Arrival Card Online",
    description:
      "Apply for your Malaysia Digital Arrival Card (MDAC) online. Fast, hassle-free processing with expert review and 24/7 support.",
    keywords: [
      "malaysia mdac",
      "malaysia digital arrival card",
      "mdac application",
      "malaysia arrival card",
      "malaysia travel",
      "mdac online",
      "malaysia entry card",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Apply now for your Malaysia Digital Arrival Card",
      description:
        "The Malaysia Digital Arrival Card (MDAC) is mandatory for {nationality} passport holders planning to enter {destination}",
    },
    personalDetails: {
      title: "Your personal details",
      description: "Enter the details as they appear on your passport.",
      emailHelperText:
        "Your completed Malaysia MDAC will be sent to this email address.",
    },
    passportDetails: {
      title: "Passport details",
      description: "Enter your passport information.",
    },
  },

  steps: [
    {
      type: StepType.TRAVEL,
      component: "MDACTripDetailsStep",
      title: "Trip details",
      description: "General details",
      fields: [
        { label: "Phone Number", key: "phoneNumber", required: true },
        {
          label: "Arrival Date",
          key: "arrivalDate",
          source: "application",
          required: true,
        },
        {
          label: "Flight Number",
          key: "flightVesselNumber",
          source: "application",
        },
      ],
    },
    {
      type: StepType.PERSONAL,
      component: "MDACPersonalDetailsStep",
      title: "Personal details",
      description: "Basic personal information",
      fields: [
        {
          label: "Gender",
          map: {
            key: "gender",
            values: { M: "Male", F: "Female" },
          },
          required: true,
        },
        {
          label: "Country of Residence",
          key: "countryOfResidence",
          required: true,
        },
        {
          label: "Employment Status",
          map: {
            key: "jobTitle",
            values: {
              EMPLOYED: "Employed",
              RETIRED: "Retired",
              STUDENT: "Student",
              UNEMPLOYED: "Unemployed",
            },
          },
          required: true,
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
    "Expert form review & validation",
    "Real-time application tracking",
    "Email & SMS notifications",
    "24/7 multilingual support",
    "Error-free submission guarantee",
    "Dedicated support agent",
  ],
};

// ============================================
// Service Registry
// ============================================
export const SERVICES: Record<ServiceType, ServiceConfig> = {
  [ServiceType.US_ESTA]: US_ESTA_CONFIG,
  [ServiceType.UK_ETA]: UK_ETA_CONFIG,
  [ServiceType.CANADA_ETA]: CANADA_ETA_CONFIG,
  [ServiceType.THAILAND_TDAC]: THAILAND_TDAC_CONFIG,
  [ServiceType.INDONESIA_EVOA]: INDONESIA_EVOA_CONFIG,
  [ServiceType.MALAYSIA_MDAC]: MALAYSIA_MDAC_CONFIG,
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
    thailand: ServiceType.THAILAND_TDAC,
    indonesia: ServiceType.INDONESIA_EVOA,
    malaysia: ServiceType.MALAYSIA_MDAC,
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
): { subtotal: number; total: number; perApplicant: number; currency: string } {
  const service = getService(serviceType);

  // Get the processing tier (default if not specified)
  const tier = processingTierType
    ? getProcessingTier(serviceType, processingTierType) ||
      getDefaultProcessingTier(serviceType)
    : getDefaultProcessingTier(serviceType);

  const perApplicant = service.pricing.government + tier.serviceFee;
  const total = perApplicant * applicants;

  return {
    subtotal: total,
    total,
    perApplicant,
    currency: service.pricing.currency,
  };
}
