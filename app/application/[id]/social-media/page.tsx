'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { travelerSocialMediaSchema, type TravelerSocialMediaFormData } from '@/app/lib/validations/application';
import { API_BASE_URL } from '@/app/lib/constants/api';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';
import { LoadingSpinner } from '@/app/components/ui/Loader';
import TravelerAccordion from '@/app/components/application/TravelerAccordion';

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  socialMediaPlatforms?: string[];
  socialMediaHandles?: Record<string, string>;
}

const SOCIAL_PLATFORMS = [
  'Facebook',
  'Twitter',
  'Instagram',
  'LinkedIn',
  'YouTube',
  'TikTok',
];

export default function SocialMediaPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TravelerSocialMediaFormData>({
    resolver: zodResolver(travelerSocialMediaSchema),
  });

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
    setSelectedPlatforms(traveler.socialMediaPlatforms || []);
    setValue('socialMediaPlatforms', traveler.socialMediaPlatforms || []);
    setValue('socialMediaHandles', traveler.socialMediaHandles || {});
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const handlePlatformToggle = (platform: string) => {
    const newPlatforms = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter((p) => p !== platform)
      : [...selectedPlatforms, platform];

    setSelectedPlatforms(newPlatforms);
    setValue('socialMediaPlatforms', newPlatforms);
  };

  const onSubmit = async (data: TravelerSocialMediaFormData) => {
    if (!currentTravelerId) return;

    setSubmitting(true);
    try {
      const token = localStorage.getItem('access_token');
      await axios.put(
        `${API_BASE_URL}/applications/${params.id}/travelers/${currentTravelerId}/social-media`,
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
        router.push(`/application/${params.id}/eligibility`);
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
          Social Media (Optional)
        </h1>
        <p className="text-gray-600">
          Providing social media information is optional but may expedite your application.
        </p>
      </div>

      <TravelerAccordion
        travelers={travelers}
        activeTravelerId={currentTravelerId}
        onTravelerChange={handleTravelerChange}
        renderContent={() => (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> This information is optional. Select the platforms you use and provide your usernames/handles (not full URLs).
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-gray-900">
                Select platforms you use:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {SOCIAL_PLATFORMS.map((platform) => (
                  <label
                    key={platform}
                    className={`
                      flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all
                      ${
                        selectedPlatforms.includes(platform)
                          ? 'border-primary bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }
                    `}
                  >
                    <input
                      type="checkbox"
                      checked={selectedPlatforms.includes(platform)}
                      onChange={() => handlePlatformToggle(platform)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{platform}</span>
                  </label>
                ))}
              </div>
            </div>

            {selectedPlatforms.length > 0 && (
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-900">
                  Enter your username/handle for each platform:
                </p>
                <div className="space-y-4">
                  {selectedPlatforms.map((platform) => (
                    <Input
                      key={platform}
                      label={`${platform} Handle`}
                      placeholder={`@username`}
                      {...register(`socialMediaHandles.${platform}` as any)}
                    />
                  ))}
                </div>
              </div>
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
