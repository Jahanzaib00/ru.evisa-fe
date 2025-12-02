'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { travelerGlobalEntrySchema, type TravelerGlobalEntryFormData } from '@/app/lib/validations/application';
import { API_BASE_URL } from '@/app/lib/constants/api';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';
import { LoadingSpinner } from '@/app/components/ui/Loader';
import TravelerAccordion from '@/app/components/application/TravelerAccordion';

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  isGlobalEntryMember?: boolean;
  globalEntryPassId?: string;
}

export default function GlobalEntryPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [isMember, setIsMember] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TravelerGlobalEntryFormData>({
    resolver: zodResolver(travelerGlobalEntrySchema),
  });

  const watchMember = watch('isGlobalEntryMember');

  useEffect(() => {
    setIsMember(watchMember);
  }, [watchMember]);

  useEffect(() => {
    fetchApplicationData();
  }, [params.id]);

  const fetchApplicationData = async () => {
    try {
      const token = localStorage.getItem('access_token');
      const { data } = await axios.get(`${API_BASE_URL}/applications/${params.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTravelers(data.travelers || []);
      if (data.travelers?.length > 0) {
        setCurrentTravelerId(data.travelers[0].id);
        loadTravelerData(data.travelers[0]);
      }
    } catch (error) {
      console.error('Failed to fetch application:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadTravelerData = (traveler: Traveler) => {
    setValue('isGlobalEntryMember', traveler.isGlobalEntryMember ?? false);
    setValue('globalEntryPassId', traveler.globalEntryPassId || '');
    setIsMember(traveler.isGlobalEntryMember ?? false);
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = async (data: TravelerGlobalEntryFormData) => {
    if (!currentTravelerId) return;

    setSubmitting(true);
    try {
      const token = localStorage.getItem('access_token');
      await axios.put(
        `${API_BASE_URL}/applications/${params.id}/travelers/${currentTravelerId}/global-entry`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const currentIndex = travelers.findIndex((t) => t.id === currentTravelerId);
      if (currentIndex < travelers.length - 1) {
        const nextTraveler = travelers[currentIndex + 1];
        setCurrentTravelerId(nextTraveler.id);
        loadTravelerData(nextTraveler);
        setSubmitting(false);
      } else {
        router.push(`/application/${params.id}/social-media`);
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      alert(error.response?.data?.message || 'Failed to save. Please try again.');
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Global Entry Information
        </h1>
        <p className="text-gray-600">
          Are you a member of the Global Entry program?
        </p>
      </div>

      <TravelerAccordion
        travelers={travelers}
        activeTravelerId={currentTravelerId}
        onTravelerChange={handleTravelerChange}
        renderContent={() => (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Global Entry</strong> is a U.S. Customs and Border Protection (CBP) program that allows expedited clearance for pre-approved, low-risk travelers upon arrival in the United States.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-dark mb-3">
                Are you a Global Entry member?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="false"
                    {...register('isGlobalEntryMember')}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">No</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    value="true"
                    {...register('isGlobalEntryMember')}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">Yes</span>
                </label>
              </div>
            </div>

            {isMember && (
              <Input
                label="Global Entry Pass ID (PASSID)"
                placeholder="Enter your PASSID number"
                error={errors.globalEntryPassId?.message}
                helperText="This is your unique Global Entry identifier"
                required
                {...register('globalEntryPassId')}
              />
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
                disabled={submitting}
                className="min-w-[200px]"
              >
                {submitting ? 'Saving...' : 'Save & Continue'}
              </Button>
            </div>
          </form>
        )}
      />
    </div>
  );
}
