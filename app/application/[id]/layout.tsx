"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode, use, useState, useEffect, useMemo } from "react";
import {
  Menu,
  X,
  Check,
  ChevronRight,
  Phone,
  Plane,
  User,
  Mail,
  FileText,
  Briefcase,
  AlertCircle,
  Shield,
  ClipboardCheck,
} from "lucide-react";
import { usePostPaymentApplication } from "@/app/lib/hooks/usePostPaymentApplication";
import { LoadingSpinner } from "@/app/components/ui/Loader";
import Image from "next/image";

interface Step {
  id: string;
  label: string;
  shortLabel: string;
  href: string;
  icon: ReactNode;
  description?: string;
  completed?: boolean;
}

// Check if a step has required data completed
function checkStepCompleted(stepId: string, application: any): boolean {
  if (!application) return false;

  const travelers = application.travelers || [];
  if (travelers.length === 0) return false;

  switch (stepId) {
    case "step-1-personal":
      return travelers.every((t: any) => t.firstName && t.lastName && t.email);
    case "step-2-passport":
      return travelers.every(
        (t: any) => t.passportNumber && t.nationalityOnPassport
      );
    case "step-3-us-travel":
      return !!application.purposeOfVisit;
    case "step-4-contact":
      return travelers.every((t: any) => t.phoneNumber && t.addressLine1);
    case "step-5-employment":
      return travelers.every((t: any) => t.isEmployed !== undefined);
    case "step-6-eligibility":
      return travelers.every(
        (t: any) =>
          t.eligibilityQ1 !== undefined && t.eligibilityQ2 !== undefined
      );
    case "step-7-review":
      return false; // Review is never "completed"
    default:
      return false;
  }
}

const STEPS: Step[] = [
  {
    id: "step-1-personal",
    label: "Personal Information",
    shortLabel: "Personal",
    href: "/step-1-personal",
    icon: <User className="w-5 h-5" />,
    description: "Your details",
  },
  {
    id: "step-2-passport",
    label: "Passport Details",
    shortLabel: "Passport",
    href: "/step-2-passport",
    icon: <FileText className="w-5 h-5" />,
    description: "Document info",
  },
  {
    id: "step-3-us-travel",
    label: "U.S. Travel Details",
    shortLabel: "Travel",
    href: "/step-3-us-travel",
    icon: <Plane className="w-5 h-5" />,
    description: "Trip information",
  },
  {
    id: "step-4-contact",
    label: "Contact Information",
    shortLabel: "Contact",
    href: "/step-4-contact",
    icon: <Mail className="w-5 h-5" />,
    description: "Address & phone",
  },
  {
    id: "step-5-employment",
    label: "Employment Details",
    shortLabel: "Employment",
    href: "/step-5-employment",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Work information",
  },
  {
    id: "step-6-eligibility",
    label: "Eligibility Questions",
    shortLabel: "Eligibility",
    href: "/step-6-eligibility",
    icon: <Shield className="w-5 h-5" />,
    description: "Security questions",
  },
  {
    id: "step-7-review",
    label: "Review & Submit",
    shortLabel: "Review",
    href: "/step-7-review",
    icon: <ClipboardCheck className="w-5 h-5" />,
    description: "Final check",
  },
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
  const { loadApplication, isLoading, error, application } =
    usePostPaymentApplication();

  const currentStepIndex = STEPS.findIndex((step) =>
    pathname.includes(step.href)
  );
  const currentStep = STEPS[currentStepIndex];

  const stepCompletionStatus = useMemo(
    () => STEPS.map((step) => checkStepCompleted(step.id, application)),
    [application]
  );
  const completedCount = stepCompletionStatus.filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / STEPS.length) * 100);

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
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <p className="text-red-800 mb-4 font-medium">{error}</p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-light transition-colors font-semibold"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header - Sticky */}
      <header className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors active:bg-gray-200"
                aria-label="Toggle navigation"
              >
                {sidebarOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <h1 className="text-base font-bold text-gray-900 truncate">
                  {currentStep?.shortLabel || "Application"}
                </h1>
              </div>
            </div>
          </div>

          {/* Mobile Progress Ring */}
          <div className="relative w-12 h-12 ml-2">
            <svg className="w-full h-full transform -rotate-90">
              {/* Background circle */}
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              {/* Progress circle */}
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="#112e51"
                strokeWidth="3"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${
                  2 * Math.PI * 20 * (1 - progressPercentage / 100)
                }`}
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary">
              {progressPercentage}%
            </span>
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="h-1 bg-gray-200">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      <div className="lg:flex lg:h-[calc(100vh-0px)]">
        {/* Sidebar - Desktop: Always visible, Mobile: Overlay */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-40 w-80 bg-white border-r border-gray-200
            transform transition-transform duration-300 ease-in-out lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            overflow-y-auto lg:shadow-lg
          `}
        >
          <div className="flex flex-col h-full">
            {/* Desktop Header */}
            <div className="hidden lg:block px-6 py-6 border-b border-gray-200 bg-linear-to-br from-primary to-primary-light">
              <Link href="/" className="flex items-center group">
                <Image
                  src="/images/logo.png"
                  alt="ESTA Application Online"
                  width={140}
                  height={40}
                  className="h-10 md:h-12 w-auto transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Progress Section */}
            <div className="px-6 py-5 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  Overall Progress
                </span>
                <span className="text-sm font-bold text-primary-light">
                  {progressPercentage}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-light transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                {completedCount} of {STEPS.length} steps completed
              </p>
            </div>

            {/* Navigation Steps */}
            <nav className="flex-1 px-4 py-5 space-y-1 overflow-y-auto">
              <p className="px-3 mb-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Application Steps
              </p>
              {STEPS.map((step) => {
                const isActive = pathname.includes(step.href);
                // Check if step is actually completed based on data
                const isCompleted = checkStepCompleted(step.id, application);

                return (
                  <Link
                    key={step.id}
                    href={`/application/${params?.id}${step.href}`}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      group relative flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200
                      ${
                        isActive
                          ? "bg-primary text-white shadow-md"
                          : isCompleted
                          ? "bg-green-50 text-success hover:bg-green-100"
                          : "text-gray-700 hover:bg-gray-100"
                      }
                    `}
                  >
                    {/* Step Number / Icon Container */}
                    <div
                      className={`
                        shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all
                        ${
                          isActive
                            ? "bg-white/20 text-white shadow-inner"
                            : isCompleted
                            ? "bg-success text-white"
                            : "bg-gray-200 text-gray-600"
                        }
                      `}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5" strokeWidth={3} />
                      ) : (
                        step.icon
                      )}
                    </div>

                    {/* Step Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p
                          className={`text-sm font-semibold truncate ${
                            isActive ? "text-white" : ""
                          }`}
                        >
                          {step.shortLabel}
                        </p>
                      </div>
                      {step.description && (
                        <p
                          className={`text-xs truncate mt-0.5 ${
                            isActive
                              ? "text-blue-100"
                              : isCompleted
                              ? "text-green-700"
                              : "text-gray-500"
                          }`}
                        >
                          {step.description}
                        </p>
                      )}
                    </div>

                    {/* Active Indicator / Arrow */}
                    {isActive && (
                      <ChevronRight
                        className="w-5 h-5 text-white shrink-0"
                        strokeWidth={2.5}
                      />
                    )}

                    {/* Completed Badge */}
                    {isCompleted && !isActive && (
                      <div className="shrink-0 text-xs font-medium text-success">
                        ✓
                      </div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Help Section */}
            <div className="px-6 py-5 border-t border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      Need Assistance?
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                      Our expert support team is available 24/7 to help you
                      complete your application.
                    </p>
                    <a
                      href="/support"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-light transition-colors"
                    >
                      Contact Support
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                <Shield className="w-4 h-4 text-success shrink-0" />
                <span>256-bit encrypted & secure</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 py-6 lg:px-8 lg:py-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
