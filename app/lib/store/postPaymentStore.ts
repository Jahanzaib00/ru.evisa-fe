import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ServiceType } from "@/app/lib/config/services";

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  gender?: string;
  birthDay?: number;
  birthMonth?: number;
  birthYear?: number;
  cityOfBirth?: string;
  countryOfBirth?: string;
  maritalStatus?: string;
  email?: string;
  aliases?: string[];
  fatherFamilyName?: string;
  fatherFirstName?: string;
  motherFamilyName?: string;
  motherFirstName?: string;
  phoneNumber?: string;
  phoneType?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  stateProvinceRegion?: string;
  postalCode?: string;
  country?: string;
  passportNumber?: string;
  passportType?: string;
  passportIssueDay?: number;
  passportIssueMonth?: number;
  passportIssueYear?: number;
  passportExpiryDay?: number;
  passportExpiryMonth?: number;
  passportExpiryYear?: number;
  nationalityOnPassport?: string;
  isEPassport?: boolean;
  nationalIdNumber?: string;
  countryOfResidence?: string;
  passportUrl?: string;
  photoUrl?: string;
  hasOtherCitizenship?: boolean;
  otherCitizenshipCountry?: string;
  citizenshipAcquisition?: string;
  previousCitizenship?: string;
  hasOtherPassports?: boolean;
  isEmployed?: boolean;
  jobTitle?: string;
  employerName?: string;
  employerAddressLine1?: string;
  employerCity?: string;
  employerCountry?: string;
  employerPhone?: string;
  emergencyContactFirstName?: string;
  emergencyContactLastName?: string;
  emergencyContactEmail?: string;
  emergencyContactPhone?: string;
  isGlobalEntryMember?: boolean;
  globalEntryPassId?: string;
  socialMediaPlatforms?: string[];
  socialMediaHandles?: Record<string, string>;
  eligibilityQ1?: boolean;
  eligibilityQ2?: boolean;
  eligibilityQ3?: boolean;
  eligibilityQ4?: boolean;
  eligibilityQ5?: boolean;
  eligibilityQ6?: boolean;
  eligibilityQ7?: boolean;
  eligibilityQ8?: boolean;
  eligibilityQ9?: boolean;
}

interface Application {
  id: string;
  status: string;
  serviceType: ServiceType; // Required for dynamic step rendering
  nationality?: string;
  totalApplicants?: number;
  totalAmount?: number;
  usPointOfContactType?: string;
  usPointOfContactName?: string;
  usContactAddressLine1?: string;
  usContactAddressLine2?: string;
  usContactCity?: string;
  usContactState?: string;
  usContactZipCode?: string;
  usContactPhone?: string;
  usStayAddressLine1?: string;
  usStayAddressLine2?: string;
  usStayCity?: string;
  usStayState?: string;
  usStayZipCode?: string;
  isTransiting?: boolean;
  transitDestination?: string;
  pointOfEntry?: string;
  arrivalDate?: string;
  flightVesselNumber?: string;
  purposeOfVisit?: string;
  serviceExtras?: Record<string, any>;
  travelers?: Traveler[];
}

interface PostPaymentStore {
  application: Application | null;
  currentTravelerId: string | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setApplication: (application: Application | null) => void;
  setCurrentTravelerId: (id: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  updateApplicationField: (field: keyof Application, value: any) => void;
  updateTravelerField: (
    travelerId: string,
    field: keyof Traveler,
    value: any
  ) => void;
  clearStore: () => void;
}

export const usePostPaymentStore = create<PostPaymentStore>()(
  persist(
    (set, get) => ({
      application: null,
      currentTravelerId: null,
      isLoading: false,
      error: null,

      setApplication: (application) => set({ application }),

      setCurrentTravelerId: (id) => set({ currentTravelerId: id }),

      setLoading: (loading) => set({ isLoading: loading }),

      setError: (error) => set({ error }),

      updateApplicationField: (field, value) =>
        set((state) => ({
          application: state.application
            ? { ...state.application, [field]: value }
            : null,
        })),

      updateTravelerField: (travelerId, field, value) =>
        set((state) => {
          if (!state.application?.travelers) return state;

          return {
            application: {
              ...state.application,
              travelers: state.application.travelers.map((t) =>
                t.id === travelerId ? { ...t, [field]: value } : t
              ),
            },
          };
        }),

      clearStore: () =>
        set({
          application: null,
          currentTravelerId: null,
          isLoading: false,
          error: null,
        }),
    }),
    {
      name: "post-payment-storage",
      partialize: (state) => ({
        application: state.application,
        currentTravelerId: state.currentTravelerId,
      }),
    }
  )
);

export const useTravelers = () =>
  usePostPaymentStore((state) => state.application?.travelers ?? []);

export const useApplication = () =>
  usePostPaymentStore((state) => state.application);
