"use client";

import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/layout/Header";
import Alert from "../components/ui/Alert";
import Badge, { getStatusBadgeVariant } from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { LoadingSpinner } from "../components/ui/Loader";
import { useApplications } from "../hooks/useApplications";

export default function OrdersPage() {
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const { applications, isLoading, error } = useApplications({
    autoFetch: !!user,
  });

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [user, authLoading, router]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-gray-lightest flex items-center justify-center">
        <LoadingSpinner text="Loading your applications..." size="xl" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-lightest">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-dark">My Applications</h2>
          <p className="mt-2 text-gray">
            View and track the status of your ESTA applications
          </p>
        </div>

        {error && <Alert variant="error" message={error} className="mb-6" />}

        {applications.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <svg
              className="mx-auto h-16 w-16 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-dark">
              No applications yet
            </h3>
            <p className="mt-2 text-gray">
              Get started by submitting your first ESTA application.
            </p>
            <Link href="/apply" className="mt-6 inline-block">
              <Button variant="primary" size="md">
                Start New Application
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {applications.map((application, index) => (
              <div
                key={application.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-dark">
                        Application #{index + 1}
                      </h3>
                      <p className="text-sm text-gray mt-1">
                        {application.firstName} {application.lastName}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-3 sm:mt-0">
                      <Badge
                        variant={getStatusBadgeVariant(application.status)}
                      >
                        {application.status}
                      </Badge>
                      {application.payment && (
                        <Badge
                          variant={getStatusBadgeVariant(
                            application.payment.status
                          )}
                        >
                          Payment: {application.payment.status}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    <div>
                      <p className="text-xs text-gray font-medium">Email</p>
                      <p className="text-sm text-gray-dark">
                        {application.email}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray font-medium">Submitted</p>
                      <p className="text-sm text-gray-dark">
                        {formatDate(application.createdAt)}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray font-medium">
                        Last Updated
                      </p>
                      <p className="text-sm text-gray-dark">
                        {formatDate(application.updatedAt)}
                      </p>
                    </div>
                    {application.payment && (
                      <div>
                        <p className="text-xs text-gray font-medium">
                          Amount Paid
                        </p>
                        <p className="text-sm text-gray-dark">
                          ${(application.payment.amount / 100).toFixed(2)}{" "}
                          {application.payment.currency.toUpperCase()}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 sm:flex-none"
                    >
                      View Details
                    </Button>
                    {application.status === "DRAFT" && (
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex-1 sm:flex-none"
                      >
                        Complete Application
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        {/* <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-dark mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/"
              className="flex items-center p-4 border-2 border-gray-light rounded-lg hover:border-primary-light hover:bg-blue-50 transition duration-150 ease-in-out group"
            >
              <div className="shrink-0">
                <svg
                  className="h-6 w-6 text-primary-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-dark group-hover:text-primary-light">
                  New Application
                </p>
              </div>
            </Link>

            <button className="flex items-center p-4 border-2 border-gray-light rounded-lg hover:border-primary-light hover:bg-blue-50 transition duration-150 ease-in-out group">
              <div className="shrink-0">
                <svg
                  className="h-6 w-6 text-primary-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-dark group-hover:text-primary-light">
                  Update Profile
                </p>
              </div>
            </button>

            <button className="flex items-center p-4 border-2 border-gray-light rounded-lg hover:border-primary-light hover:bg-blue-50 transition duration-150 ease-in-out group">
              <div className="shrink-0">
                <svg
                  className="h-6 w-6 text-primary-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-dark group-hover:text-primary-light">
                  Help & Support
                </p>
              </div>
            </button>
          </div>
        </div> */}
      </main>
    </div>
  );
}
