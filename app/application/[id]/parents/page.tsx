'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { travelerParentsSchema, type TravelerParentsFormData } from '@/app/lib/validations/application';
import { usePostPaymentStore } from '@/app/lib/store/postPaymentStore';
import { usePostPaymentApplication } from '@/app/lib/hooks/usePostPaymentApplication';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';
import TravelerAccordion from '@/app/components/application/TravelerAccordion';

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  fatherFamilyName?: string;
  fatherFirstName?: string;
  motherFamilyName?: string;
  motherFirstName?: string;
}

export default function ParentsPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>('');
  const { travelers } = usePostPaymentStore();
  const { updateTravelerParents, isLoading, error } = usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TravelerParentsFormData>({
    resolver: zodResolver(travelerParentsSchema),
  });

  // Set initial traveler on mount
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, [travelers]);

  const loadTravelerData = (traveler: Traveler) => {
    setValue('fatherFamilyName', traveler.fatherFamilyName || '');
    setValue('fatherFirstName', traveler.fatherFirstName || '');
    setValue('motherFamilyName', traveler.motherFamilyName || '');
    setValue('motherFirstName', traveler.motherFirstName || '');
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = async (data: TravelerParentsFormData) => {
    if (!currentTravelerId) return;

    const success = await updateTravelerParents(currentTravelerId, data);
    if (success) {
      const currentIndex = travelers.findIndex((t) => t.id === currentTravelerId);
      if (currentIndex < travelers.length - 1) {
        const nextTraveler = travelers[currentIndex + 1];
        setCurrentTravelerId(nextTraveler.id);
        loadTravelerData(nextTraveler);
      } else {
        router.push(`/application/${params.id}/contact`);
      }
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Parents Information
        </h1>
        <p className="text-gray-600">
          Please provide your parents' names for each traveler.
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
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                Enter your parents' names as they appear on official documents.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Father's Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  placeholder="Father's first name"
                  error={errors.fatherFirstName?.message}
                  required
                  {...register('fatherFirstName')}
                />
                <Input
                  label="Family Name"
                  placeholder="Father's family name"
                  error={errors.fatherFamilyName?.message}
                  required
                  {...register('fatherFamilyName')}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Mother's Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  placeholder="Mother's first name"
                  error={errors.motherFirstName?.message}
                  required
                  {...register('motherFirstName')}
                />
                <Input
                  label="Family Name"
                  placeholder="Mother's family name"
                  error={errors.motherFamilyName?.message}
                  required
                  {...register('motherFamilyName')}
                />
              </div>
            </div>

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
