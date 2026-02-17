import { z } from "zod";

// ============================================
// U.S. CONTACT INFORMATION
// ============================================
export const usContactSchema = z.object({
  usPointOfContactType: z.string().optional(),
  usPointOfContactName: z.string().min(1, "Contact name is required"),
  usContactAddressLine1: z.string().min(1, "Address is required"),
  usContactAddressLine2: z.string().optional(),
  usContactCity: z.string().min(1, "City is required"),
  usContactState: z.string().min(1, "State is required"),
  usContactZipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
  usContactPhone: z.string().regex(/^\+?1?\d{10,}$/, "Invalid phone number"),
});

export type UsContactFormData = z.infer<typeof usContactSchema>;

// ============================================
// U.S. STAY ADDRESS
// ============================================
export const usStaySchema = z.object({
  usStayAddressLine1: z.string().min(1, "Address is required"),
  usStayAddressLine2: z.string().optional(),
  usStayCity: z.string().min(1, "City is required"),
  usStayState: z.string().min(1, "State is required"),
  usStayZipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Invalid ZIP code"),
});

export type UsStayFormData = z.infer<typeof usStaySchema>;

// ============================================
// TRAVEL DETAILS
// ============================================
export const travelDetailsSchema = z
  .object({
    isTransiting: z.boolean(),
    transitDestination: z.string().optional(),
    pointOfEntry: z.string().optional(),
    arrivalDate: z.string().optional(),
    flightVesselNumber: z.string().optional(),
    purposeOfVisit: z.enum(["TOURISM", "BUSINESS", "TRANSIT"], {
      message: "Purpose of visit is required",
    }),
  })
  .refine((data) => !data.isTransiting || data.transitDestination, {
    message: "Transit destination is required when transiting",
    path: ["transitDestination"],
  });

export type TravelDetailsFormData = z.infer<typeof travelDetailsSchema>;

// ============================================
// TRAVELER PERSONAL INFORMATION
// ============================================
export const travelerPersonalSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last name is required"),
  aliases: z.array(z.string()).optional(),
  gender: z.enum(["M", "F", "X"], { message: "Gender is required" }),
  birthDay: z.number().min(1).max(31),
  birthMonth: z.number().min(1).max(12),
  birthYear: z.number().min(1900).max(new Date().getFullYear()),
  cityOfBirth: z.string().min(1, "City of birth is required"),
  countryOfBirth: z.string().min(1, "Country of birth is required"),
  maritalStatus: z.enum(["SINGLE", "MARRIED", "DIVORCED", "WIDOWED"], {
    message: "Marital status is required",
  }),
  email: z.string().email("Invalid email address"),
});

export type TravelerPersonalFormData = z.infer<typeof travelerPersonalSchema>;

// ============================================
// TRAVELER PARENTS INFORMATION
// ============================================
export const travelerParentsSchema = z.object({
  fatherFamilyName: z.string().optional(),
  fatherFirstName: z.string().optional(),
  motherFamilyName: z.string().optional(),
  motherFirstName: z.string().optional(),
});

export type TravelerParentsFormData = z.infer<typeof travelerParentsSchema>;

// ============================================
// TRAVELER CONTACT INFORMATION
// ============================================
export const travelerContactSchema = z.object({
  phoneNumber: z.string().min(1, "Phone number is required"),
  phoneType: z.enum(["MOBILE", "HOME", "WORK"], {
    message: "Phone type is required",
  }),
  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  stateProvinceRegion: z.string().min(1, "State/Province is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
});

export type TravelerContactFormData = z.infer<typeof travelerContactSchema>;

// ============================================
// TRAVELER PASSPORT INFORMATION
// ============================================
export const travelerPassportSchema = z.object({
  passportNumber: z.string().min(1, "Passport number is required"),
  passportType: z.enum(["REGULAR", "DIPLOMATIC", "SERVICE", "OFFICIAL"], {
    message: "Passport type is required",
  }),
  passportIssueDay: z.number().min(1).max(31),
  passportIssueMonth: z.number().min(1).max(12),
  passportIssueYear: z.number().min(1900),
  passportExpiryDay: z.number().min(1).max(31),
  passportExpiryMonth: z.number().min(1).max(12),
  passportExpiryYear: z.number().min(2024),
  nationalityOnPassport: z.string().min(1, "Nationality is required"),
  isEPassport: z.boolean(),
  nationalIdNumber: z.string().optional(),
  countryOfResidence: z.string().min(1, "Country of residence is required"),
});

export type TravelerPassportFormData = z.infer<typeof travelerPassportSchema>;

// ============================================
// TRAVELER CITIZENSHIP
// ============================================
export const travelerCitizenshipSchema = z
  .object({
    hasOtherCitizenship: z.boolean(),
    otherCitizenshipCountry: z.string().optional(),
    citizenshipAcquisition: z.enum(
      ["BIRTH", "PARENTS", "NATURALIZATION", "OTHER"],
      {
        message: "Citizenship acquisition is required",
      },
    ),
    previousCitizenship: z.string().optional(),
    hasOtherPassports: z.boolean(),
    otherPassportDetails: z.any().optional(),
  })
  .refine((data) => !data.hasOtherCitizenship || data.otherCitizenshipCountry, {
    message: "Other citizenship country is required",
    path: ["otherCitizenshipCountry"],
  });

export type TravelerCitizenshipFormData = z.infer<
  typeof travelerCitizenshipSchema
>;

// ============================================
// TRAVELER EMPLOYMENT
// ============================================
export const travelerEmploymentSchema = z
  .object({
    isEmployed: z.boolean(),
    jobTitle: z.string().optional(),
    employerName: z.string().optional(),
    employerAddressLine1: z.string().optional(),
    employerAddressLine2: z.string().optional(),
    employerCity: z.string().optional(),
    employerStateProvince: z.string().optional(),
    employerCountry: z.string().optional(),
    employerPhone: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.isEmployed) {
        return (
          data.jobTitle &&
          data.employerName &&
          data.employerCity &&
          data.employerCountry
        );
      }
      return true;
    },
    {
      message: "Employment details are required when employed",
      path: ["jobTitle"],
    },
  );

export type TravelerEmploymentFormData = z.infer<
  typeof travelerEmploymentSchema
>;

// ============================================
// TRAVELER EMERGENCY CONTACT
// ============================================
export const travelerEmergencyContactSchema = z.object({
  emergencyContactFirstName: z.string().optional(),
  emergencyContactLastName: z.string().optional(),
  emergencyContactEmail: z.string().optional(),
  emergencyContactPhone: z.string().optional(),
});

export type TravelerEmergencyContactFormData = z.infer<
  typeof travelerEmergencyContactSchema
>;

// ============================================
// TRAVELER GLOBAL ENTRY
// ============================================
export const travelerGlobalEntrySchema = z
  .object({
    isGlobalEntryMember: z.boolean(),
    globalEntryPassId: z.string().optional(),
  })
  .refine((data) => !data.isGlobalEntryMember || data.globalEntryPassId, {
    message: "Global Entry Pass ID is required for members",
    path: ["globalEntryPassId"],
  });

export type TravelerGlobalEntryFormData = z.infer<
  typeof travelerGlobalEntrySchema
>;

// ============================================
// TRAVELER SOCIAL MEDIA (Optional)
// ============================================
export const travelerSocialMediaSchema = z.object({
  socialMediaPlatforms: z.array(z.string()).optional(),
  socialMediaHandles: z.record(z.string(), z.string()).optional(),
});

export type TravelerSocialMediaFormData = z.infer<
  typeof travelerSocialMediaSchema
>;

// ============================================
// TRAVELER ELIGIBILITY QUESTIONS
// ============================================
export const travelerEligibilitySchema = z.object({
  eligibilityQ1: z.boolean(),
  eligibilityQ2: z.boolean(),
  eligibilityQ3: z.boolean(),
  eligibilityQ4: z.boolean(),
  eligibilityQ5: z.boolean(),
  eligibilityQ6: z.boolean(),
  eligibilityQ7: z.boolean(),
  eligibilityQ8: z.boolean(),
  eligibilityQ9: z.boolean(),
});

export type TravelerEligibilityFormData = z.infer<
  typeof travelerEligibilitySchema
>;

// ============================================
// CONSOLIDATED SCHEMAS FOR NEW 7-STEP FLOW
// ============================================

// STEP 1: Personal + Parents
export const step1PersonalSchema = travelerPersonalSchema.merge(
  travelerParentsSchema,
);
export type Step1PersonalFormData = z.infer<typeof step1PersonalSchema>;

// STEP 2: Passport + Citizenship + Global Entry
export const step2PassportSchema = travelerPassportSchema
  .merge(travelerCitizenshipSchema)
  .merge(travelerGlobalEntrySchema);
export type Step2PassportFormData = z.infer<typeof step2PassportSchema>;

// STEP 3: US Contact + US Stay + Travel Details
// NOTE: US Contact and Stay sections are currently commented out in the form
// Only validate travel details for now
export const step3USTravelSchema = travelDetailsSchema;
export type Step3USTravelFormData = z.infer<typeof step3USTravelSchema>;

// STEP 4: Contact + Emergency Contact
export const step4ContactSchema = travelerContactSchema.merge(
  travelerEmergencyContactSchema.partial(),
);
export type Step4ContactFormData = z.infer<typeof step4ContactSchema>;

// STEP 5: Employment (keep as is)
export type Step5EmploymentFormData = TravelerEmploymentFormData;

// STEP 6: Eligibility + Social Media
export const step6EligibilitySchema = travelerEligibilitySchema.merge(
  travelerSocialMediaSchema,
);
export type Step6EligibilityFormData = z.infer<typeof step6EligibilitySchema>;
