'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { travelerEmploymentSchema, type TravelerEmploymentFormData } from '@/app/lib/validations/application';
import { usePostPaymentStore } from '@/app/lib/store/postPaymentStore';
import { usePostPaymentApplication } from '@/app/lib/hooks/usePostPaymentApplication';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';
import TravelerAccordion from '@/app/components/application/TravelerAccordion';
import CountrySelect from '@/app/components/ui/CountrySelectWrapper';

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  isEmployed?: boolean;
  jobTitle?: string;
  employerName?: string;
  employerAddressLine1?: string;
  employerCity?: string;
  employerCountry?: string;
  employerPhone?: string;
}

export default function EmploymentPage({
  params: paramsPromise
}: {
  params: Promise<{ id: string }>
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>('');
  const [isEmployed, setIsEmployed] = useState(false);
  const { travelers } = usePostPaymentStore();
  const { updateTravelerEmployment, isLoading, error } = usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TravelerEmploymentFormData>({
    resolver: zodResolver(travelerEmploymentSchema),
  });

  const watchEmployed = watch('isEmployed');

  useEffect(() => {
    setIsEmployed(watchEmployed);
  }, [watchEmployed]);

  // Set initial traveler on mount
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, [travelers]);

  const loadTravelerData = (traveler: Traveler) => {
    setValue('isEmployed', traveler.isEmployed ?? false);
    setValue('jobTitle', traveler.jobTitle || '');
    setValue('employerName', traveler.employerName || '');
    setValue('employerAddressLine1', traveler.employerAddressLine1 || '');
    setValue('employerCity', traveler.employerCity || '');
    setValue('employerCountry', traveler.employerCountry || '');
    setValue('employerPhone', traveler.employerPhone || '');
    setIsEmployed(traveler.isEmployed ?? false);
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = async (data: TravelerEmploymentFormData) => {
    if (!currentTravelerId) return;

    const success = await updateTravelerEmployment(currentTravelerId, data);
    if (success) {
      const currentIndex = travelers.findIndex((t) => t.id === currentTravelerId);
      if (currentIndex < travelers.length - 1) {
        const nextTraveler = travelers[currentIndex + 1];
        setCurrentTravelerId(nextTraveler.id);
        loadTravelerData(nextTraveler);
      } else {
        router.push(`/application/${params.id}/emergency-contact`);
      }
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Employment Information
        </h1>
        <p className="text-gray-600">
          Provide current employment details for each traveler.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      <TravelerAccordion
        travelers={travelers}
        activeTravelerId={currentTravelerId}
        onTravelerChange={handleTravelerChange}
        renderContent={() => (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-dark mb-3">
                Are you currently employed?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="false"
                    {...register('isEmployed')}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">No</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="true"
                    {...register('isEmployed')}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">Yes</span>
                </label>
              </div>
            </div>

            {isEmployed && (
              <>
                <Input
                  label="Job Title"
                  placeholder="Your current position"
                  error={errors.jobTitle?.message}
                  required
                  {...register('jobTitle')}
                />

                <Input
                  label="Employer Name"
                  placeholder="Company or organization name"
                  error={errors.employerName?.message}
                  required
                  {...register('employerName')}
                />

                <Input
                  label="Employer Address"
                  placeholder="Street address"
                  error={errors.employerAddressLine1?.message}
                  required
                  {...register('employerAddressLine1')}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="City"
                    placeholder="City"
                    error={errors.employerCity?.message}
                    required
                    {...register('employerCity')}
                  />

                  <CountrySelect
                    label="Country"
                    error={errors.employerCountry?.message}
                    required
                    {...register('employerCountry')}
                  />
                </div>

                <Input
                  label="Employer Phone"
                  placeholder="+1 234 567 8900"
                  type="tel"
                  error={errors.employerPhone?.message}
                  {...register('employerPhone')}
                />
              </>
            )}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="min-w-[200px]"
              >
                {isLoading ? 'Saving...' : 'Save & Continue'}
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
}
