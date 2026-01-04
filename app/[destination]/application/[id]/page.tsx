'use client';

import { use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/app/components/ui/Loader';

interface ApplicationHubPageProps {
  params: Promise<{ destination: string; id: string }>;
}

export default function ApplicationHubPage({ params: paramsPromise }: ApplicationHubPageProps) {
  const router = useRouter();
  const params = use(paramsPromise);

  // Redirect to first step
  useEffect(() => {
    router.replace(`/${params.destination}/application/${params.id}/1`);
  }, [router, params.destination, params.id]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600">Loading application...</p>
      </div>
    </div>
  );
}
