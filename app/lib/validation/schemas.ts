import * as z from 'zod';

// Trip Details Schema
export const tripDetailsSchema = z.object({
  passportExpiryDay: z.string().optional(),
  passportExpiryMonth: z.string().optional(),
  passportExpiryYear: z.string().optional(),
  travelMonth: z.string().optional(),
  travelYear: z.string().optional(),
  addPassportLater: z.boolean().default(false)
}).refine((data) => {
  // If not adding passport later, validate expiry is at least 6 months from now
  if (data.addPassportLater) return true;

  if (!data.passportExpiryDay || !data.passportExpiryMonth || !data.passportExpiryYear) {
    return false;
  }

  const expiry = new Date(
    parseInt(data.passportExpiryYear),
    parseInt(data.passportExpiryMonth) - 1,
    parseInt(data.passportExpiryDay)
  );

  const sixMonthsFromNow = new Date();
  sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);

  return expiry > sixMonthsFromNow;
}, {
  message: 'Passport must be valid for at least 6 months from today',
  path: ['passportExpiryYear']
});

// Single Traveler Schema
export const travelerSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  birthDay: z.string().min(1, 'Day is required'),
  birthMonth: z.string().min(1, 'Month is required'),
  birthYear: z.string().min(1, 'Year is required'),
  email: z.string().email('Invalid email address'),
  marketingOptIn: z.boolean().default(false)
}).refine((data) => {
  // Validate date of birth is at least 1 year ago (infants can travel)
  const dob = new Date(
    parseInt(data.birthYear),
    parseInt(data.birthMonth) - 1,
    parseInt(data.birthDay)
  );

  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return dob < oneYearAgo;
}, {
  message: 'Invalid date of birth',
  path: ['birthYear']
});

// Personal Details Schema (Multiple Travelers)
export const personalDetailsSchema = z.object({
  travelers: z.array(travelerSchema).min(1, 'At least one traveler is required')
});

// Passport Details Schema (Single Traveler)
export const passportSchema = z.object({
  nationalityOnPassport: z.string().min(1, 'Nationality is required'),
  addLater: z.boolean().default(false),
  passportNumber: z.string().optional(),
  expiryDay: z.string().optional(),
  expiryMonth: z.string().optional(),
  expiryYear: z.string().optional(),
  countryOfBirth: z.string().min(1, 'Country of birth is required'),
  countryOfResidence: z.string().min(1, 'Country of residence is required')
}).refine((data) => {
  // If not adding later, passport number is required
  if (!data.addLater && !data.passportNumber) return false;
  return true;
}, {
  message: 'Passport number is required',
  path: ['passportNumber']
}).refine((data) => {
  // If not adding later, validate passport number format (alphanumeric, 6-20 chars)
  if (!data.addLater && data.passportNumber) {
    return /^[A-Z0-9]{6,20}$/i.test(data.passportNumber);
  }
  return true;
}, {
  message: 'Invalid passport number format',
  path: ['passportNumber']
}).refine((data) => {
  // If not adding later, expiry date is required
  if (!data.addLater) {
    return !!(data.expiryDay && data.expiryMonth && data.expiryYear);
  }
  return true;
}, {
  message: 'Expiry date is required',
  path: ['expiryDay']
}).refine((data) => {
  // If not adding later, validate passport expiry is at least 6 months from now
  if (data.addLater) return true;

  if (!data.expiryDay || !data.expiryMonth || !data.expiryYear) {
    return false;
  }

  const expiry = new Date(
    parseInt(data.expiryYear),
    parseInt(data.expiryMonth) - 1,
    parseInt(data.expiryDay)
  );

  const sixMonthsFromNow = new Date();
  sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6);

  return expiry > sixMonthsFromNow;
}, {
  message: 'Passport must be valid for at least 6 months',
  path: ['expiryYear']
});

// Passport Details Schema (Multiple Travelers)
export const passportDetailsSchema = z.object({
  travelers: z.array(passportSchema)
});

// Travel Information Schema
export const travelInfoSchema = z.object({
  usAddress1: z.string().min(1, 'Address is required'),
  usAddress2: z.string().optional(),
  usCity: z.string().min(1, 'City is required'),
  usState: z.string().min(1, 'State is required'),
  usZipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  emergencyContactName: z.string().optional(),
  emergencyContactPhone: z.string().optional(),
  emergencyContactEmail: z.string().email('Invalid email').optional().or(z.literal(''))
});

// Eligibility Questions Schema
export const eligibilitySchema = z.object({
  communicableDisease: z.boolean(),
  criminalRecord: z.boolean(),
  visaDenial: z.boolean(),
  countryTravel: z.boolean(),
  terroristActivity: z.boolean(),
  immigrationViolation: z.boolean()
});

// Payment Schema
export const paymentSchema = z.object({
  cardNumber: z.string()
    .min(13, 'Invalid card number')
    .max(19, 'Invalid card number')
    .regex(/^\d+$/, 'Card number must contain only digits'),
  expiryMonth: z.string()
    .length(2, 'Invalid month')
    .regex(/^(0[1-9]|1[0-2])$/, 'Invalid month'),
  expiryYear: z.string()
    .length(2, 'Invalid year'),
  cvv: z.string()
    .min(3, 'CVV must be 3-4 digits')
    .max(4, 'CVV must be 3-4 digits')
    .regex(/^\d+$/, 'CVV must contain only digits'),
  cardholderName: z.string().min(1, 'Cardholder name is required'),
  termsAccepted: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions'
  })
}).refine((data) => {
  // Validate expiry date is not in the past
  const now = new Date();
  const currentYear = parseInt(now.getFullYear().toString().slice(-2));
  const currentMonth = now.getMonth() + 1;

  const expiryYear = parseInt(data.expiryYear);
  const expiryMonth = parseInt(data.expiryMonth);

  if (expiryYear < currentYear) return false;
  if (expiryYear === currentYear && expiryMonth < currentMonth) return false;

  return true;
}, {
  message: 'Card has expired',
  path: ['expiryMonth']
});

// Luhn Algorithm for card validation
export function validateCardNumber(cardNumber: string): boolean {
  const digits = cardNumber.replace(/\s/g, '');
  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

// Detect card type
export function getCardType(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\s/g, '');

  if (cleaned.match(/^4/)) return 'visa';
  if (cleaned.match(/^5[1-5]/)) return 'mastercard';
  if (cleaned.match(/^3[47]/)) return 'amex';
  if (cleaned.match(/^6011/)) return 'discover';

  return 'unknown';
}
