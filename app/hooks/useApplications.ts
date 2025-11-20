import { useState, useEffect } from "react";
import { applicationsService } from "../lib/api/services/applications.service";
import type { Application, ApplicationStatus } from "../lib/api/types";

interface UseApplicationsResult {
  applications: Application[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseApplicationsParams {
  page?: number;
  limit?: number;
  status?: ApplicationStatus;
  autoFetch?: boolean;
}

/**
 * Hook for fetching user's applications
 * Provides consistent data fetching pattern across the app
 */
export function useApplications(
  params: UseApplicationsParams = {}
): UseApplicationsResult {
  const { page, limit, status, autoFetch = true } = params;
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApplications = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await applicationsService.getMyApplications({
        page,
        limit,
        status,
      });

      // Handle both paginated and non-paginated responses
      const data = response.data || [];
      setApplications(Array.isArray(data) ? data : []);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        "Failed to load applications";
      setError(errorMessage);
      console.error("Error fetching applications:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchApplications();
    }
  }, [page, limit, status, autoFetch]);

  return {
    applications,
    isLoading,
    error,
    refetch: fetchApplications,
  };
}
