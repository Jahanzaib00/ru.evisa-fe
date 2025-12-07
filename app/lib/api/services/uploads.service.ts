import { api } from "../client";

export type UploadType = "passport" | "photo";

interface PresignedUrlResponse {
  uploadUrl: string;
  fileKey: string;
  expiresIn: number;
}

interface SaveUploadResponse {
  travelerId: string;
  uploadType: UploadType;
  url: string;
}

export const uploadsService = {
  /**
   * Step 1: Get presigned URL from backend
   */
  async getPresignedUrl(
    applicationId: string,
    travelerId: string,
    uploadType: UploadType,
    fileExtension: string
  ): Promise<PresignedUrlResponse> {
    return await api.post<PresignedUrlResponse>(
      `/applications/${applicationId}/uploads/presigned-url`,
      {
        travelerId,
        uploadType,
        fileExtension,
      }
    );
  },

  /**
   * Step 2: Upload file directly to S3 using presigned URL
   */
  async uploadToS3(
    presignedUrl: string,
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable && onProgress) {
          const percentComplete = Math.round((e.loaded * 100) / e.total);
          onProgress(percentComplete);
        }
      });

      xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
          resolve();
        } else {
          reject(new Error(`Upload failed with status ${xhr.status}`));
        }
      });

      xhr.addEventListener("error", () => {
        reject(new Error("Upload failed"));
      });

      xhr.open("PUT", presignedUrl);
      xhr.setRequestHeader("Content-Type", file.type);
      xhr.send(file);
    });
  },

  /**
   * Step 3: Save the uploaded file URL to database
   */
  async saveUpload(
    applicationId: string,
    travelerId: string,
    uploadType: UploadType,
    fileKey: string
  ): Promise<SaveUploadResponse> {
    return await api.post<SaveUploadResponse>(
      `/applications/${applicationId}/uploads/save`,
      {
        travelerId,
        uploadType,
        fileKey,
      }
    );
  },

  /**
   * Complete upload flow: get presigned URL, upload to S3, save to DB
   */
  async uploadFile(
    file: File,
    applicationId: string,
    travelerId: string,
    uploadType: UploadType,
    onProgress?: (progress: number) => void
  ): Promise<string> {
    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      throw new Error("File size must be less than 10MB");
    }

    // Get file extension
    const extension = file.name.split(".").pop()?.toLowerCase() || "";

    // Validate file type
    const validExtensions =
      uploadType === "photo"
        ? ["jpg", "jpeg", "png"]
        : ["jpg", "jpeg", "png", "pdf"];

    if (!validExtensions.includes(extension)) {
      throw new Error(
        `Invalid file type. Allowed: ${validExtensions.join(", ")}`
      );
    }

    // Step 1: Get presigned URL
    const { uploadUrl, fileKey } = await this.getPresignedUrl(
      applicationId,
      travelerId,
      uploadType,
      extension
    );

    // Step 2: Upload to S3
    await this.uploadToS3(uploadUrl, file, onProgress);

    // Step 3: Save to database
    const { url } = await this.saveUpload(
      applicationId,
      travelerId,
      uploadType,
      fileKey
    );

    return url;
  },
};
