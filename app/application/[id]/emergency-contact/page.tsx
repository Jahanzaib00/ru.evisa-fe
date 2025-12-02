'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { travelerEmergencyContactSchema, type TravelerEmergencyContactFormData } from '@/app/lib/validations/application';
import { usePostPaymentStore } from '@/app/lib/store/postPaymentStore';
import { usePostPaymentApplication } from '@/app/lib/hooks/usePostPaymentApplication';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';
import TravelerAccordion from '@/app/components/application/TravelerAccordion';

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  emergencyContactFirstName?: string;
  emergencyContactLastName?: string;
  emergencyContactEmail?: string;
  emergencyContactPhone?: string;
}

export default function EmergencyContactPage({
  params: paramsPromise
}: {
  params: Promise<{ id: string }>
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>('');
  const { travelers } = usePostPaymentStore();
  const { updateTravelerEmergencyContact, isLoading, error } = usePostPaymentApplication();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TravelerEmergencyContactFormData>({
    resolver: zodResolver(travelerEmergencyContactSchema),
  });

  // Set initial traveler on mount
  useEffect(() => {
    if (travelers.length > 0 && !currentTravelerId) {
      setCurrentTravelerId(travelers[0].id);
      loadTravelerData(travelers[0]);
    }
  }, [travelers]);

  const loadTravelerData = (traveler: Traveler) => {
    setValue('emergencyContactFirstName', traveler.emergencyContactFirstName || '');
    setValue('emergencyContactLastName', traveler.emergencyContactLastName || '');
    setValue('emergencyContactEmail', traveler.emergencyContactEmail || '');
    setValue('emergencyContactPhone', traveler.emergencyContactPhone || '');
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = async (data: TravelerEmergencyContactFormData) => {
    if (!currentTravelerId) return;

    const success = await updateTravelerEmergencyContact(currentTravelerId, data);
    if (success) {
      const currentIndex = travelers.findIndex((t) => t.id === currentTravelerId);
      if (currentIndex < travelers.length - 1) {
        const nextTraveler = travelers[currentIndex + 1];
        setCurrentTravelerId(nextTraveler.id);
        loadTravelerData(nextTraveler);
      } else {
        router.push(`/application/${params.id}/global-entry`);
      }
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Emergency Contact
        </h1>
        <p className="text-gray-600">
          Provide an emergency contact who can be reached on your behalf.
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
                This should be someone who is <strong>not traveling</strong> with you and can be contacted in case of emergency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                placeholder="Contact's first name"
                error={errors.emergencyContactFirstName?.message}
                required
                {...register('emergencyContactFirstName')}
              />

              <Input
                label="Last Name"
                placeholder="Contact's last name"
                error={errors.emergencyContactLastName?.message}
                required
                {...register('emergencyContactLastName')}
              />
            </div>

            <Input
              label="Email Address"
              type="email"
              placeholder="contact@example.com"
              error={errors.emergencyContactEmail?.message}
              required
              {...register('emergencyContactEmail')}
            />

            <Input
              label="Phone Number"
              placeholder="+1 234 567 8900"
              type="tel"
              error={errors.emergencyContactPhone?.message}
              required
              {...register('emergencyContactPhone')}
            />

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
