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

export interface StepConfig {
  type: StepType; // Step type for logic/UI mapping
  component: string; // Component name to render
  title: string; // Step title
  description?: string; // Optional description
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
  processingTime: string; // e.g., "24 hours"
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
      description: "72 hour processing",
      processingTime: "72 hours",
      serviceFee: 5,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Rush",
      description: "24 hour processing",
      processingTime: "24 hours",
      serviceFee: 20,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Super Rush",
      description: "1 hour processing",
      processingTime: "1 hour",
      serviceFee: 45,
    },
  ],

  validity: {
    years: 2,
    stays: "90 days per visit",
  },

  processing: {
    standard: "72 hours",
    rush: "24 hours",
    superRush: "5 hours",
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
    },
    {
      type: StepType.PASSPORT,
      component: "ESTAPassportStep",
      title: "Passport Information",
      description: "Enter your passport details and upload required documents",
    },
    {
      type: StepType.TRAVEL,
      component: "ESTAUSTravelStep",
      title: "U.S. Travel Details",
      description: "Tell us about your travel plans to the United States",
    },
    {
      type: StepType.CONTACT,
      component: "SharedContactStep",
      title: "Contact Information",
      description: "Provide your contact details and emergency contact",
    },
    {
      type: StepType.EMPLOYMENT,
      component: "SharedEmploymentStep",
      title: "Employment Information",
      description: "Tell us about your current employment status",
    },
    {
      type: StepType.ELIGIBILITY,
      component: "ESTAEligibilityStep",
      title: "Eligibility Questions",
      description: "Please answer all questions truthfully",
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Review & Submit",
      description: "Review all information before submission",
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
      processingTime: "24 hours",
      serviceFee: 5,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Rush",
      description: "4 hour processing",
      processingTime: "4 hours",
      serviceFee: 15,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Super Rush",
      description: "1 hour processing",
      processingTime: "1 hour",
      serviceFee: 35,
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
    },
    {
      type: StepType.PASSPORT,
      component: "UKETAPassportStep",
      title: "Passport Information",
      description: "Enter passport details and upload documents",
    },
    {
      type: StepType.CONTACT,
      component: "SharedContactStep",
      title: "Contact Information",
      description: "Provide your contact details",
    },
    {
      type: StepType.EMPLOYMENT,
      component: "UKETAEmploymentStep",
      title: "Employment Information",
      description: "Tell us about your occupation",
    },
    {
      type: StepType.ELIGIBILITY,
      component: "UKETAEligibilityStep",
      title: "Suitability Questions",
      description: "Answer the eligibility questions",
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Review & Submit",
      description: "Review all information before submission",
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
// Service Registry
// ============================================
export const SERVICES: Record<ServiceType, ServiceConfig> = {
  [ServiceType.US_ESTA]: US_ESTA_CONFIG,
  [ServiceType.UK_ETA]: UK_ETA_CONFIG,
  [ServiceType.CANADA_ETA]: {} as ServiceConfig, // TODO: Implement when needed
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
  destination: string
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
  nationalityCode: string
): boolean {
  const service = getService(serviceType);
  return service.eligibleNationalities.includes(nationalityCode);
}

/**
 * Get all services available for a nationality traveling to a destination
 */
export function getEligibleServices(
  passportCountry: string,
  destinationCountry: string
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
  };
  return symbols[currencyCode] || "$";
}

/**
 * Get the default processing tier for a service
 */
export function getDefaultProcessingTier(
  serviceType: ServiceType
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
  tierType: ProcessingTierType
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
  includeDenialProtection: boolean = false
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
