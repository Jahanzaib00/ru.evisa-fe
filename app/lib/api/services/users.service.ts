import { api } from "../client";
import type {
  User,
  Application,
  PaginatedResponse,
} from "../types";

interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export const usersService = {
  async getProfile(): Promise<User> {
    return api.get<User>("/users/me");
  },

  async updateProfile(data: UpdateUserRequest): Promise<User> {
    return api.put<User>("/users/me", data);
  },

  async getMyApplications(): Promise<Application[]> {
    return api.get<Application[]>("/users/me/applications");
  },

  async getAllUsers(params?: {
    page?: number;
    limit?: number;
  }): Promise<PaginatedResponse<User>> {
    return api.get<PaginatedResponse<User>>("/users", { params });
  },

  async getUserById(id: string): Promise<User> {
    return api.get<User>(`/users/${id}`);
  },

  async updateUser(id: string, data: UpdateUserRequest): Promise<User> {
    return api.put<User>(`/users/${id}`, data);
  },

  async deactivateUser(id: string): Promise<{ message: string }> {
    return api.patch<{ message: string }>(`/users/${id}/deactivate`, {});
  },

  async activateUser(id: string): Promise<{ message: string }> {
    return api.patch<{ message: string }>(`/users/${id}/activate`, {});
  },

  async getUserApplications(id: string): Promise<Application[]> {
    return api.get<Application[]>(`/users/${id}/applications`);
  },
};
