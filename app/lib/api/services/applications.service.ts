import { apiClient } from "../client";
import type {
  Application,
  CreateApplicationRequest,
  SaveDraftRequest,
  ApiResponse,
  PaginatedResponse,
  ApplicationStatus,
} from "../types";

export const applicationsService = {
  async create(
    data: Partial<CreateApplicationRequest>
  ): Promise<ApiResponse<Application>> {
    return apiClient.post<ApiResponse<Application>>("/applications", data);
  },

  async getAll(params?: {
    page?: number;
    limit?: number;
    status?: ApplicationStatus;
  }): Promise<ApiResponse<PaginatedResponse<Application>>> {
    return apiClient.get<ApiResponse<PaginatedResponse<Application>>>(
      "/applications",
      {
        params,
      }
    );
  },

  async getMyApplications(params?: {
    page?: number;
    limit?: number;
    status?: ApplicationStatus;
  }): Promise<ApiResponse<PaginatedResponse<Application>>> {
    return apiClient.get<ApiResponse<PaginatedResponse<Application>>>(
      "/applications/my",
      {
        params,
      }
    );
  },

  async getById(id: string): Promise<ApiResponse<Application>> {
    return apiClient.get<ApiResponse<Application>>(`/applications/${id}`);
  },

  async update(
    id: string,
    data: Partial<CreateApplicationRequest>
  ): Promise<ApiResponse<Application>> {
    return apiClient.put<ApiResponse<Application>>(`/applications/${id}`, data);
  },

  async saveDraft(
    id: string,
    data: SaveDraftRequest
  ): Promise<ApiResponse<{ message: string; applicationId: string }>> {
    return apiClient.post<
      ApiResponse<{ message: string; applicationId: string }>
    >(`/applications/${id}/draft`, data);
  },

  async submit(
    id: string
  ): Promise<ApiResponse<{ message: string; applicationNumber: string }>> {
    return apiClient.post<
      ApiResponse<{ message: string; applicationNumber: string }>
    >(`/applications/${id}/submit`);
  },

  async updateStatus(
    id: string,
    status: ApplicationStatus,
    adminNotes?: string
  ): Promise<ApiResponse<Application>> {
    return apiClient.patch<ApiResponse<Application>>(
      `/applications/${id}/status`,
      {
        status,
        adminNotes,
      }
    );
  },

  async delete(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.delete<ApiResponse<{ message: string }>>(
      `/applications/${id}`
    );
  },

  async saveTravelers(
    id: string,
    travelers: any[]
  ): Promise<ApiResponse<Application>> {
    return apiClient.post<ApiResponse<Application>>(
      `/applications/${id}/travelers`,
      travelers
    );
  },
};
