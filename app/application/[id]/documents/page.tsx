'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { API_BASE_URL } from '@/app/lib/constants/api';
import Button from '@/app/components/ui/Button';
import { LoadingSpinner } from '@/app/components/ui/Loader';
import TravelerAccordion from '@/app/components/application/TravelerAccordion';
import FileUpload from '@/app/components/ui/FileUpload';

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  passportUrl?: string;
  photoUrl?: string;
  completed?: boolean;
}

export default function DocumentsPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [currentTravelerId, setCurrentTravelerId] = useState<string>('');
  const [uploadsComplete, setUploadsComplete] = useState<Record<string, boolean>>({});

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

        // Check which travelers have completed uploads
        const completionStatus: Record<string, boolean> = {};
        data.travelers.forEach((t: Traveler) => {
          completionStatus[t.id] = !!(t.passportUrl && t.photoUrl);
        });
        setUploadsComplete(completionStatus);
      }
    } catch (error) {
      console.error('Failed to fetch application:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePassportUpload = (travelerId: string, url: string) => {
    setTravelers((prev) =>
      prev.map((t) => (t.id === travelerId ? { ...t, passportUrl: url } : t))
    );
    checkCompletionStatus(travelerId);
  };

  const handlePhotoUpload = (travelerId: string, url: string) => {
    setTravelers((prev) =>
      prev.map((t) => (t.id === travelerId ? { ...t, photoUrl: url } : t))
    );
    checkCompletionStatus(travelerId);
  };

  const checkCompletionStatus = (travelerId: string) => {
    const traveler = travelers.find((t) => t.id === travelerId);
    if (traveler?.passportUrl && traveler?.photoUrl) {
      setUploadsComplete((prev) => ({ ...prev, [travelerId]: true }));
    }
  };

  const allTravelersComplete = travelers.every((t) => uploadsComplete[t.id]);

  const handleContinue = () => {
    if (!allTravelersComplete) {
      alert('Please upload passport and photo for all travelers before continuing.');
      return;
    }
    router.push(`/application/${params.id}/citizenship`);
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
          Upload Documents
        </h1>
        <p className="text-gray-600">
          Upload a clear scan or photo of each traveler's passport and a recent passport-style photo.
        </p>
      </div>

      <TravelerAccordion
        travelers={travelers.map((t) => ({ ...t, completed: uploadsComplete[t.id] }))}
        activeTravelerId={currentTravelerId}
        onTravelerChange={setCurrentTravelerId}
        renderContent={(travelerBasic) => {
          const traveler = travelers.find((t) => t.id === travelerBasic.id);
          return (
            <div className="space-y-6">
              <FileUpload
                label="Passport Scan"
                uploadType="passport"
                applicationId={params.id}
                travelerId={travelerBasic.id}
                currentFileUrl={traveler?.passportUrl}
                onUploadComplete={(url) => handlePassportUpload(travelerBasic.id, url)}
                helperText="Upload a clear scan or photo of the passport bio page"
                required
              />

              <FileUpload
                label="Passport Photo"
                uploadType="photo"
                applicationId={params.id}
                travelerId={travelerBasic.id}
                currentFileUrl={traveler?.photoUrl}
                onUploadComplete={(url) => handlePhotoUpload(travelerBasic.id, url)}
                helperText="Upload a recent passport-style photo (2x2 inches, white background)"
                required
              />
            </div>
          );
        }}
      />

      <div className="flex justify-between mt-8">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.back()}
        >
          Back
        </Button>
        <Button
          type="button"
          onClick={handleContinue}
          disabled={!allTravelersComplete}
          className="min-w-[200px]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
