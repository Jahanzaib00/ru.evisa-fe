interface CalloutProps {
  children: React.ReactNode;
}

export function WarningCallout({ children }: CalloutProps) {
  return (
    <div className="border-l-4 border-warning bg-yellow-50 p-4 md:p-6 my-6 rounded-r-lg shadow-sm">
      <div className="flex items-start gap-3">
        <svg
          className="w-6 h-6 text-warning flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div className="text-sm md:text-base text-gray-dark font-medium flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export function TipCallout({ children }: CalloutProps) {
  return (
    <div className="border-l-4 border-primary-light bg-blue-50 p-4 md:p-6 my-6 rounded-r-lg shadow-sm">
      <div className="flex items-start gap-3">
        <svg
          className="w-6 h-6 text-primary-light flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <div className="text-sm md:text-base text-gray-dark font-medium flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export function TakeawayCallout({ children }: CalloutProps) {
  return (
    <div className="border-l-4 border-success bg-green-50 p-4 md:p-6 my-6 rounded-r-lg shadow-sm">
      <div className="flex items-start gap-3">
        <svg
          className="w-6 h-6 text-success flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="text-sm md:text-base text-gray-dark font-medium flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export function FailureCallout({ children }: CalloutProps) {
  return (
    <div className="border-l-4 border-accent bg-red-50 p-4 md:p-6 my-6 rounded-r-lg shadow-md">
      <div className="flex items-start gap-3">
        <svg
          className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="text-sm md:text-base text-gray-dark font-semibold flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
