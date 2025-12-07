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

  // Post-payment unified progress endpoint
  async saveProgress(
    id: string,
    data: {
      application?: Record<string, any>;
      travelers?: Array<{ id: string } & Record<string, any>>;
    }
  ): Promise<Application> {
    return api.patch<Application>(`/applications/${id}/progress`, data);
  },

  // Helper methods for convenience (wrapper around saveProgress)
  async updateUsContact(id: string, data: any): Promise<Application> {
    return this.saveProgress(id, { application: data });
  },

  async updateUsStay(id: string, data: any): Promise<Application> {
    return this.saveProgress(id, { application: data });
  },

  async updateTravelDetails(id: string, data: any): Promise<Application> {
    return this.saveProgress(id, { application: data });
  },

  async updateTravelerPersonal(id: string, travelerId: string, data: any): Promise<Application> {
    return this.saveProgress(id, { travelers: [{ id: travelerId, ...data }] });
  },

  async updateTravelerParents(id: string, travelerId: string, data: any): Promise<Application> {
    return this.saveProgress(id, { travelers: [{ id: travelerId, ...data }] });
  },

  async updateTravelerContact(id: string, travelerId: string, data: any): Promise<Application> {
    return this.saveProgress(id, { travelers: [{ id: travelerId, ...data }] });
  },

  async updateTravelerPassport(id: string, travelerId: string, data: any): Promise<Application> {
    return this.saveProgress(id, { travelers: [{ id: travelerId, ...data }] });
  },

  async updateTravelerCitizenship(id: string, travelerId: string, data: any): Promise<Application> {
    return this.saveProgress(id, { travelers: [{ id: travelerId, ...data }] });
  },

  async updateTravelerEmployment(id: string, travelerId: string, data: any): Promise<Application> {
    return this.saveProgress(id, { travelers: [{ id: travelerId, ...data }] });
  },

  async updateTravelerEmergencyContact(id: string, travelerId: string, data: any): Promise<Application> {
    return this.saveProgress(id, { travelers: [{ id: travelerId, ...data }] });
  },

  async updateTravelerGlobalEntry(id: string, travelerId: string, data: any): Promise<Application> {
    return this.saveProgress(id, { travelers: [{ id: travelerId, ...data }] });
  },

  async updateTravelerSocialMedia(id: string, travelerId: string, data: any): Promise<Application> {
    return this.saveProgress(id, { travelers: [{ id: travelerId, ...data }] });
  },

  async updateTravelerEligibility(id: string, travelerId: string, data: any): Promise<Application> {
    return this.saveProgress(id, { travelers: [{ id: travelerId, ...data }] });
  },

  async getTrackingInfo(id: string): Promise<{
    id: string;
    status: string;
    processingType: string;
    totalApplicants: number;
    travelers: Array<{
      id: string;
      firstName: string;
      lastName: string;
    }>;
    paymentStatus: string;
    submittedAt: string | null;
    createdAt: string;
    updatedAt: string;
  }> {
    return api.get(`/applications/${id}/track`);
  },
};
