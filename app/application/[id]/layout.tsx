"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode, use, useState, useEffect } from "react";
import { Menu, X, Check } from "lucide-react";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { LoadingSpinner } from "@/app/components/ui/Loader";

interface Step {
  id: string;
  label: string;
  href: string;
  completed?: boolean;
}

const STEPS: Step[] = [
  { id: "us-contact", label: "U.S. Contact", href: "/us-contact" },
  { id: "us-stay", label: "U.S. Stay Address", href: "/us-stay" },
  { id: "travel-details", label: "Travel Details", href: "/travel-details" },
  {
    id: "personal-info",
    label: "Personal Information",
    href: "/personal-info",
  },
  { id: "parents", label: "Parents Information", href: "/parents" },
  { id: "contact", label: "Contact Information", href: "/contact" },
  { id: "passport", label: "Passport Details", href: "/passport" },
  { id: "documents", label: "Upload Documents", href: "/documents" },
  { id: "citizenship", label: "Citizenship", href: "/citizenship" },
  { id: "employment", label: "Employment", href: "/employment" },
  {
    id: "emergency-contact",
    label: "Emergency Contact",
    href: "/emergency-contact",
  },
  { id: "global-entry", label: "Global Entry", href: "/global-entry" },
  { id: "social-media", label: "Social Media", href: "/social-media" },
  { id: "eligibility", label: "Eligibility Questions", href: "/eligibility" },
  { id: "review-submit", label: "Review & Submit", href: "/review-submit" },
];

export default function ApplicationLayout({
  children,
  params: paramsPromise,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const params = use(paramsPromise);
  const { loadApplication, isLoading, error } = usePostPaymentApplication();

  const currentStep = STEPS.find((step) => pathname.includes(step.href));

  // Load application data once on mount
  useEffect(() => {
    if (params.id) {
      loadApplication(params.id);
    }
  }, [params.id, loadApplication]);

  // Show loading state while fetching application
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  // Show error state if failed to load
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {currentStep?.label || "Application"}
            </h2>
            <p className="text-sm text-gray-500">
              Application #{params?.id?.slice(0, 8) || "Loading..."}
            </p>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <div className="lg:flex lg:h-screen">
        {/* Sidebar - Desktop: Always visible, Mobile: Collapsible */}
        <aside
          className={`
            fixed lg:sticky top-0 left-0 z-30 h-screen w-80 bg-white border-r border-gray-200
            transform transition-transform duration-300 ease-in-out lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            overflow-y-auto
          `}
        >
          <div className="p-6">
            {/* Desktop Header */}
            <div className="hidden lg:block mb-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                ESTA
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                Application #{params?.id?.slice(0, 8) || "Loading..."}
              </p>
            </div>

            {/* Navigation Steps */}
            <nav className="space-y-1">
              {STEPS.map((step, index) => {
                const isActive = pathname.includes(step.href);
                const isCompleted = step.completed;

                return (
                  <Link
                    key={step.id}
                    href={`/application/${params?.id}${step.href}`}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-start p-3 rounded-lg transition-all group
                      ${
                        isActive
                          ? "bg-blue-50 text-blue-700"
                          : isCompleted
                          ? "text-gray-700 hover:bg-gray-50"
                          : "text-gray-500 hover:bg-gray-50"
                      }
                    `}
                  >
                    <div
                      className={`
                      shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5
                      ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : isCompleted
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }
                    `}
                    >
                      {isCompleted ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <span className="text-xs font-semibold">
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-medium leading-tight ${
                          isActive ? "text-blue-700" : ""
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* Help Section */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">
                Need Help?
              </h3>
              <p className="text-xs text-blue-700 mb-3">
                Our support team is available 24/7 to assist you with your
                application.
              </p>
              <a
                href="/support"
                className="text-xs font-semibold text-blue-600 hover:text-blue-800"
              >
                Contact Support →
              </a>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 lg:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
