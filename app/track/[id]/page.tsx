"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { applicationsService } from "@/app/lib/api/services/applications.service";
import { extractErrorMessage, logError } from "@/app/lib/utils/errorHandler";
import Header from "@/app/components/layout/Header";
import { Spinner } from "@/app/components/ui/Loader";
import {
  FileEdit,
  Send,
  Search,
  CheckCircle,
  XCircle,
  Clock,
  CreditCard,
  Calendar,
  Users,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";

interface TrackingInfo {
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
}

const STATUS_INFO = {
  DRAFT: {
    label: "Draft",
    color: "bg-gray-50 text-gray-800 border-gray-200",
    icon: FileEdit,
    description: "Application not yet submitted",
  },
  SUBMITTED: {
    label: "Submitted",
    color: "bg-blue-50 text-blue-800 border-blue-200",
    icon: Send,
    description: "Application submitted and under review",
  },
  UNDER_REVIEW: {
    label: "Under Review",
    color: "bg-purple-50 text-purple-800 border-purple-200",
    icon: Search,
    description: "Being reviewed by authorities",
  },
  APPROVED: {
    label: "Approved",
    color: "bg-green-50 text-green-800 border-green-200",
    icon: CheckCircle,
    description: "ETA approved - ready to travel",
  },
  DENIED: {
    label: "Denied",
    color: "bg-red-50 text-red-800 border-red-200",
    icon: XCircle,
    description: "Application denied - contact support",
  },
};

export default function TrackStatusPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const params = use(paramsPromise);
  const [tracking, setTracking] = useState<TrackingInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracking = async () => {
      try {
        const data = await applicationsService.getTrackingInfo(params.id);
        setTracking(data);
      } catch (err: any) {
        logError(err, "Fetching tracking info");
        const errorMsg = extractErrorMessage(
          err,
          "Failed to load tracking information. Please check your application ID."
        );
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    fetchTracking();
  }, [params.id]);

  const statusInfo =
    tracking && STATUS_INFO[tracking.status as keyof typeof STATUS_INFO];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Track Your Application
          </h1>
          <p className="text-gray-600">
            Application ID: <span className="font-mono">{params.id}</span>
          </p>
        </div>

        {loading && (
          <div className="bg-white rounded-lg shadow-sm p-12 flex justify-center">
            <Spinner size="lg" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Error</p>
                <p className="mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {tracking && statusInfo && (
          <div className="space-y-6">
            {/* Status Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <statusInfo.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {statusInfo.label}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {statusInfo.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Details */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Application Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Processing Type
                    </p>
                    <p className="font-semibold text-gray-900">
                      {tracking.processingType}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Total Applicants
                    </p>
                    <p className="font-semibold text-gray-900">
                      {tracking.totalApplicants}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Payment Status</p>
                    <p className="font-semibold text-gray-900">
                      {tracking.paymentStatus}
                    </p>
                  </div>
                </div>

                {tracking.submittedAt && (
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Submitted At</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(tracking.submittedAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Created At</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(tracking.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Last Updated</p>
                    <p className="font-semibold text-gray-900">
                      {new Date(tracking.updatedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travelers */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Travelers ({tracking.travelers.length})
              </h3>
              <div className="space-y-3">
                {tracking.travelers.map((traveler, index) => (
                  <div
                    key={traveler.id}
                    className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-semibold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {traveler.firstName} {traveler.lastName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            {tracking.status === "DRAFT" && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-4">
                  <FileEdit className="w-5 h-5 text-blue-600 mt-0.5" />
                  <p className="text-blue-800">
                    Your application is incomplete. Continue filling out your
                    application to submit it.
                  </p>
                </div>
                <button
                  onClick={() =>
                    router.push(`/application/${params.id}/step-1-personal`)
                  }
                  className="bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-light transition-colors inline-flex items-center gap-2"
                >
                  Continue Application
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>
            )}

            {/* Back Button */}
            <div className="flex justify-center pt-6">
              <button
                onClick={() => router.push("/")}
                className="text-primary hover:text-primary-light font-medium transition-colors inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
