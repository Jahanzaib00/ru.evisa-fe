import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ApplicationStatus, ServiceType } from "../api/types";
import {
  getService,
  ProcessingTierType,
  getProcessingTier,
  getDefaultProcessingTier,
} from "../config/services";

interface Traveler {
  firstName: string;
  lastName: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  email: string;
  marketingOptIn: boolean;
  passportNumber?: string;
  passportExpiryDay?: string;
  passportExpiryMonth?: string;
  passportExpiryYear?: string;
  nationalityOnPassport?: string;
  countryOfBirth?: string;
  countryOfResidence?: string;
}

interface TripDetails {
  passportExpiryDay?: string;
  passportExpiryMonth?: string;
  passportExpiryYear?: string;
  travelMonth?: string;
  travelYear?: string;
}

interface TravelInfo {
  usAddress1: string;
  usAddress2?: string;
  usCity: string;
  usState: string;
  usZipCode: string;
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactEmail?: string;
}

interface EligibilityAnswers {
  communicableDisease: boolean;
  criminalRecord: boolean;
  visaDenial: boolean;
  countryTravel: boolean;
  terroristActivity: boolean;
  immigrationViolation: boolean;
}

interface ApplicationState {
  // Basic Info
  nationality: string;
  destination: string;
  serviceType: ServiceType | null;
  totalApplicants: number;

  // Application Management
  applicationId: string | null;
  applicationStatus: ApplicationStatus | null;

  // Progress Tracking
  currentStep: number;
  completedSteps: number[];

  // Form Data
  tripDetails: TripDetails;
  travelers: Traveler[];
  travelInfo: TravelInfo | null;
  eligibility: EligibilityAnswers | null;

  processingTier: ProcessingTierType | null;

  // Payment
  orderId: string | null;

  // Actions
  setNationality: (nationality: string) => void;
  setDestination: (destination: string) => void;
  setServiceType: (serviceType: ServiceType | null) => void;
  setProcessingTier: (tier: ProcessingTierType) => void;
  setTotalApplicants: (count: number) => void;
  setApplicationId: (id: string | null) => void;
  setApplicationStatus: (status: ApplicationStatus | null) => void;
  setCurrentStep: (step: number) => void;
  completeStep: (step: number) => void;
  updateTripDetails: (details: TripDetails) => void;
  updateTravelers: (travelers: Traveler[]) => void;
  updateTraveler: (index: number, data: Partial<Traveler>) => void;
  updateTravelersPassport: (passportData: any[]) => void;
  updateTravelInfo: (info: TravelInfo) => void;
  updateEligibility: (answers: EligibilityAnswers) => void;
  processPayment: (paymentData: any) => void;
  reset: () => void;

  // Computed
  getTotalAmount: () => number;
  canUpdateApplication: () => boolean;
}

export const useApplicationStore = create<ApplicationState>()(
  persist(
    (set, get) => ({
      // Initial State
      nationality: "",
      destination: "",
      serviceType: null,
      totalApplicants: 1,
      applicationId: null,
      applicationStatus: null,
      currentStep: 1,
      completedSteps: [],
      tripDetails: {},
      travelers: [],
      travelInfo: null,
      eligibility: null,
      processingTier: null,
      orderId: null,

      // Actions
      setNationality: (nationality) => set({ nationality }),

      setDestination: (destination) => set({ destination }),

      setServiceType: (serviceType) => set({ serviceType }),

      setProcessingTier: (tier) => set({ processingTier: tier }),

      setTotalApplicants: (count) =>
        set({
          totalApplicants: count,
          travelers: Array.from(
            { length: count },
            (_, i) =>
              get().travelers[i] || {
                firstName: "",
                lastName: "",
                birthDay: "",
                birthMonth: "",
                birthYear: "",
                email: "",
                marketingOptIn: false,
              },
          ),
        }),

      setApplicationId: (id) => set({ applicationId: id }),

      setApplicationStatus: (status) => set({ applicationStatus: status }),

      setCurrentStep: (step) => set({ currentStep: step }),

      completeStep: (step) =>
        set((state) => ({
          completedSteps: [...new Set([...state.completedSteps, step])],
        })),

      updateTripDetails: (details) => set({ tripDetails: details }),

      updateTravelers: (travelers) => set({ travelers }),

      updateTraveler: (index, data) =>
        set((state) => ({
          travelers: state.travelers.map((t, i) =>
            i === index ? { ...t, ...data } : t,
          ),
        })),

      updateTravelersPassport: (passportData) =>
        set((state) => ({
          travelers: state.travelers.map((t, i) => ({
            ...t,
            ...passportData[i],
          })),
        })),

      updateTravelInfo: (info) => set({ travelInfo: info }),

      updateEligibility: (answers) => set({ eligibility: answers }),

      processPayment: (paymentData) =>
        set({
          orderId: paymentData.transactionId,
        }),

      reset: () =>
        set({
          nationality: "",
          destination: "",
          serviceType: null,
          totalApplicants: 1,
          applicationId: null,
          applicationStatus: null,
          currentStep: 1,
          completedSteps: [],
          tripDetails: {},
          travelers: [],
          travelInfo: null,
          eligibility: null,
          processingTier: null,
          orderId: null,
        }),

      // Computed Values
      getTotalAmount: () => {
        const state = get();
        if (!state.serviceType) return 0;

        try {
          const service = getService(state.serviceType);

          // Get the processing tier (default if not set)
          const tier = state.processingTier
            ? getProcessingTier(state.serviceType, state.processingTier) ||
              getDefaultProcessingTier(state.serviceType)
            : getDefaultProcessingTier(state.serviceType);

          const baseFee =
            (service.pricing.government + tier.serviceFee) *
            state.totalApplicants;
          return parseFloat(baseFee.toFixed(2));
        } catch {
          return 0;
        }
      },

      canUpdateApplication: () => {
        const state = get();
        return (
          state.applicationId !== null &&
          state.applicationStatus === ApplicationStatus.PENDING_PAYMENT
        );
      },
    }),
    {
      name: "esta-application-storage",
      partialize: (state) => ({
        nationality: state.nationality,
        destination: state.destination,
        serviceType: state.serviceType,
        totalApplicants: state.totalApplicants,
        applicationId: state.applicationId,
        applicationStatus: state.applicationStatus,
        currentStep: state.currentStep,
        completedSteps: state.completedSteps,
        tripDetails: state.tripDetails,
        travelers: state.travelers,
        travelInfo: state.travelInfo,
        eligibility: state.eligibility,
        processingTier: state.processingTier,
      }),
    },
  ),
);
