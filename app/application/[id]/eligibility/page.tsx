'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { travelerEligibilitySchema, type TravelerEligibilityFormData } from '@/app/lib/validations/application';
import { API_BASE_URL } from '@/app/lib/constants/api';
import Button from '@/app/components/ui/Button';
import { LoadingSpinner } from '@/app/components/ui/Loader';
import TravelerAccordion from '@/app/components/application/TravelerAccordion';

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
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

const ELIGIBILITY_QUESTIONS = [
  {
    id: 'eligibilityQ1',
    text: 'Do you have a physical or mental disorder; or are you a drug abuser or addict; or do you currently have any of the following diseases: Communicable diseases of public health significance such as Tuberculosis (TB), and others.',
  },
  {
    id: 'eligibilityQ2',
    text: 'Have you ever been arrested or convicted for a crime that resulted in serious damage to property, or serious harm to another person or government authority?',
  },
  {
    id: 'eligibilityQ3',
    text: 'Have you ever violated any law related to possessing, using, or distributing illegal drugs?',
  },
  {
    id: 'eligibilityQ4',
    text: 'Do you seek to engage in or have you ever engaged in terrorist activities, espionage, sabotage, or genocide?',
  },
  {
    id: 'eligibilityQ5',
    text: 'Have you ever committed fraud or misrepresented yourself or others to obtain, or assist others to obtain, a visa or entry into the United States?',
  },
  {
    id: 'eligibilityQ6',
    text: 'Are you currently seeking employment in the United States or were you previously employed in the United States without prior permission from the U.S. government?',
  },
  {
    id: 'eligibilityQ7',
    text: 'Have you ever been denied a U.S. visa you applied for with your current or previous passport, or have you ever been refused admission to the United States or withdrawn your application for admission at a U.S. port of entry?',
  },
  {
    id: 'eligibilityQ8',
    text: 'Have you ever stayed in the United States longer than the admission period granted to you by the U.S. government?',
  },
  {
    id: 'eligibilityQ9',
    text: 'Have you traveled to, or been present in Iran, Iraq, Libya, North Korea, Somalia, Sudan, Syria, or Yemen on or after March 1, 2011?',
  },
];

export default function EligibilityPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TravelerEligibilityFormData>({
    resolver: zodResolver(travelerEligibilitySchema),
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
    setValue('eligibilityQ1', traveler.eligibilityQ1 ?? false);
    setValue('eligibilityQ2', traveler.eligibilityQ2 ?? false);
    setValue('eligibilityQ3', traveler.eligibilityQ3 ?? false);
    setValue('eligibilityQ4', traveler.eligibilityQ4 ?? false);
    setValue('eligibilityQ5', traveler.eligibilityQ5 ?? false);
    setValue('eligibilityQ6', traveler.eligibilityQ6 ?? false);
    setValue('eligibilityQ7', traveler.eligibilityQ7 ?? false);
    setValue('eligibilityQ8', traveler.eligibilityQ8 ?? false);
    setValue('eligibilityQ9', traveler.eligibilityQ9 ?? false);
  };

  const handleTravelerChange = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler) {
      setCurrentTravelerId(travelerId);
      loadTravelerData(traveler);
    }
  };

  const onSubmit = async (data: TravelerEligibilityFormData) => {
    if (!currentTravelerId) return;

    setSubmitting(true);
    try {
      const token = localStorage.getItem('access_token');
      await axios.put(
        `${API_BASE_URL}/applications/${params.id}/travelers/${currentTravelerId}/eligibility`,
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
        router.push(`/application/${params.id}/review-submit`);
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
          Eligibility Questions
        </h1>
        <p className="text-gray-600">
          Please answer all questions honestly. Most travelers answer "No" to all questions.
        </p>
      </div>

      <TravelerAccordion
        travelers={travelers}
        activeTravelerId={currentTravelerId}
        onTravelerChange={handleTravelerChange}
        renderContent={() => (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Answer "Yes" or "No" to each question. Answering "Yes" does not automatically disqualify you, but may require additional documentation.
              </p>
            </div>

            {ELIGIBILITY_QUESTIONS.map((question, index) => (
              <div key={question.id} className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-sm font-medium text-gray-900 mb-4">
                  {index + 1}. {question.text}
                </p>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="false"
                      {...register(question.id as any)}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700">No</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="true"
                      {...register(question.id as any)}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700">Yes</span>
                  </label>
                </div>
              </div>
            ))}

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
