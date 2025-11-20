import { api } from "../client";
import type {
  Application,
  CreateApplicationRequest,
  SaveDraftRequest,
  PaginatedResponse,
  ApplicationStatus,
} from "../types";

export const applicationsService = {
  async create(data: Partial<CreateApplicationRequest>): Promise<Application> {
    return api.post<Application>("/applications", data);
  },

  async getAll(params?: {
    page?: number;
    limit?: number;
    status?: ApplicationStatus;
  }): Promise<PaginatedResponse<Application>> {
    return api.get<PaginatedResponse<Application>>("/applications", {
      params,
    });
  },

  async getMyApplications(params?: {
    page?: number;
    limit?: number;
    status?: ApplicationStatus;
  }): Promise<PaginatedResponse<Application>> {
    return api.get<PaginatedResponse<Application>>("/applications/my", {
      params,
    });
  },

  async getById(id: string): Promise<Application> {
    return api.get<Application>(`/applications/${id}`);
  },

  async update(
    id: string,
    data: Partial<CreateApplicationRequest>
  ): Promise<Application> {
    return api.put<Application>(`/applications/${id}`, data);
  },

  async saveDraft(
    id: string,
    data: SaveDraftRequest
  ): Promise<{ message: string; applicationId: string }> {
    return api.post<{ message: string; applicationId: string }>(
      `/applications/${id}/draft`,
      data
    );
  },

  async submit(
    id: string
  ): Promise<{ message: string; applicationNumber: string }> {
    return api.post<{ message: string; applicationNumber: string }>(
      `/applications/${id}/submit`,
      {}
    );
  },

  async updateStatus(
    id: string,
    status: ApplicationStatus,
    adminNotes?: string
  ): Promise<Application> {
    return api.patch<Application>(`/applications/${id}/status`, {
      status,
      adminNotes,
    });
  },

  async delete(id: string): Promise<{ message: string }> {
    return api.delete<{ message: string }>(`/applications/${id}`);
  },

  async saveTravelers(id: string, travelers: any[]): Promise<Application> {
    return api.post<Application>(`/applications/${id}/travelers`, travelers);
  },
};
