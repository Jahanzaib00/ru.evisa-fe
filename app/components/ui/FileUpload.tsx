"use client";

import { useState, useRef, ChangeEvent } from "react";
import {
  Upload,
  X,
  Check,
  Loader2,
  FileText,
  Image as ImageIcon,
} from "lucide-react";
import {
  uploadsService,
  type UploadType,
} from "@/app/lib/api/services/uploads.service";

interface FileUploadProps {
  label: string;
  uploadType: UploadType;
  applicationId: string;
  travelerId: string;
  currentFileUrl?: string;
  onUploadComplete: (url: string) => void;
  accept?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
}

export default function FileUpload({
  label,
  uploadType,
  applicationId,
  travelerId,
  currentFileUrl,
  onUploadComplete,
  accept = uploadType === "photo"
    ? "image/jpeg,image/png"
    : "image/jpeg,image/png,application/pdf",
  helperText,
  error,
  required = false,
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [preview, setPreview] = useState<string | null>(currentFileUrl || null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);
    setUploading(true);
    setProgress(0);

    try {
      // Upload file using uploads service
      const publicUrl = await uploadsService.uploadFile(
        file,
        applicationId,
        travelerId,
        uploadType,
        (progress) => setProgress(progress)
      );

      // Set preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => setPreview(e.target?.result as string);
        reader.readAsDataURL(file);
      } else {
        setPreview("pdf");
      }

      onUploadComplete(publicUrl);
    } catch (err: any) {
      console.error("Upload error:", err);
      setUploadError(err.message || "Upload failed. Please try again.");
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-dark mb-1.5">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}

      <div
        className={`
          border-2 border-dashed rounded-lg transition-colors
          ${
            error || uploadError
              ? "border-accent"
              : "border-gray-light hover:border-primary"
          }
          ${preview ? "p-4" : "p-6"}
        `}
      >
        {preview ? (
          // File uploaded - show preview
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {preview === "pdf" ? (
                <FileText className="w-10 h-10 text-blue-600" />
              ) : (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              <div>
                <p className="text-sm font-medium text-gray-dark flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-1" />
                  File uploaded
                </p>
                <p className="text-xs text-gray mt-0.5">
                  {uploadType === "passport" ? "Passport scan" : "Photo"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemove}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Remove file"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        ) : (
          // No file - show upload UI
          <div className="text-center">
            <input
              ref={fileInputRef}
              type="file"
              accept={accept}
              onChange={handleFileSelect}
              className="hidden"
              disabled={uploading}
            />

            {uploading ? (
              <div className="space-y-3">
                <Loader2 className="w-12 h-12 text-primary mx-auto animate-spin" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-dark">
                    Uploading... {progress}%
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  {uploadType === "photo" ? (
                    <ImageIcon className="w-6 h-6 text-primary" />
                  ) : (
                    <Upload className="w-6 h-6 text-primary" />
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleClick}
                  className="text-sm font-semibold text-primary hover:text-blue-700 transition-colors"
                >
                  Click to upload
                </button>
                <p className="text-xs text-gray mt-1">
                  {uploadType === "photo"
                    ? "JPG or PNG (max 10MB)"
                    : "JPG, PNG or PDF (max 10MB)"}
                </p>
              </>
            )}
          </div>
        )}
      </div>

      {(error || uploadError) && (
        <p className="mt-1.5 text-sm text-accent font-medium">
          {error || uploadError}
        </p>
      )}
      {helperText && !error && !uploadError && (
        <p className="mt-1.5 text-sm text-gray">{helperText}</p>
      )}
    </div>
  );
}
