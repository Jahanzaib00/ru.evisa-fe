// API Response Types
export interface ApiResponse<T> {
  data: T;
  statusCode: number;
  timestamp: string;
  path: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

// Auth Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  phoneNumber?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Application Types
export enum ApplicationType {
  INDIVIDUAL = "INDIVIDUAL",
  GROUP = "GROUP",
}

// Service Types (matches backend Prisma enum)
export enum ServiceType {
  US_ESTA = "US_ESTA",
  UK_ETA = "UK_ETA",
  CANADA_ETA = "CANADA_ETA",
  THAILAND_TDAC = "THAILAND_TDAC",
  INDONESIA_EVOA = "INDONESIA_EVOA",
  MALAYSIA_MDAC = "MALAYSIA_MDAC",
}

export enum TravelPurpose {
  TOURISM = "TOURISM",
  BUSINESS = "BUSINESS",
  TRANSIT = "TRANSIT",
  MEDICAL = "MEDICAL",
}

export enum ApplicationStatus {
  DRAFT = "DRAFT",
  PENDING_PAYMENT = "PENDING_PAYMENT",
  SUBMITTED = "SUBMITTED",
  UNDER_REVIEW = "UNDER_REVIEW",
  APPROVED = "APPROVED",
  DENIED = "DENIED",
}

export interface Application {
  id: string;
  userId: string;
  status: ApplicationStatus;
  applicationType: ApplicationType;
  serviceType: ServiceType;
  destination?: string;
  currency?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: string;
  cityOfBirth?: string;
  countryOfBirth?: string;
  email: string;
  phoneNumber: string;
  nationality: string;
  otherNationality?: string;
  hasOtherNationality?: boolean;
  passportNumber: string;
  passportCountry: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  nationalIdNumber?: string;
  purposeOfTravel: TravelPurpose;
  estimatedArrivalDate?: string;
  accommodationAddress?: string;
  accommodationCity?: string;
  carrierName?: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactEmail?: string;
  occupation?: string;
  employer?: string;
  hasVisitedUSBefore?: boolean;
  lastUSVisitDate?: string;
  hasCommunicableDisease?: boolean;
  hasBeenArrested?: boolean;
  hasViolatedVisa?: boolean;
  termsAccepted: boolean;
  certificationAccepted: boolean;
  applicationNumber?: string;
  submittedAt?: string;
  approvedAt?: string;
  createdAt: string;
  updatedAt: string;
  payment?: Payment;
  travelers?: any[];
}

export interface CreateApplicationRequest {
  applicationType: ApplicationType;
  serviceType: ServiceType;
  destination?: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: string;
  cityOfBirth: string;
  countryOfBirth: string;
  email: string;
  phoneNumber: string;
  nationality: string;
  otherNationality?: string;
  hasOtherNationality?: boolean;
  passportNumber: string;
  passportCountry: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  totalAmount?: number;
  totalApplicants?: number;
}

export interface SaveDraftRequest {
  step: string;
  data: Record<string, any>;
}

// Payment Types
export enum PaymentStatus {
  PENDING = "PENDING",
  SUCCEEDED = "SUCCEEDED",
  FAILED = "FAILED",
  CANCELED = "CANCELED",
}

export interface Payment {
  id: string;
  applicationId: string;
  stripePaymentIntentId: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  paymentMethod?: string;
  receiptUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentIntentRequest {
  applicationId: string;
  amount?: number;
  currency?: string;
  guestEmail?: string;
}

export interface PaymentIntentResponse {
  clientSecret: string;
  paymentIntentId: string;
  amount: number;
  currency: string;
}

// Country Types
export interface Country {
  code: string;
  name: string;
  eligible: boolean;
}
