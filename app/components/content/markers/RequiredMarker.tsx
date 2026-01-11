interface RequiredMarkerProps {
  children: string;
}

export default function RequiredMarker({ children }: RequiredMarkerProps) {
  return (
    <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed list-none ml-0">
      <svg
        className="w-5 h-5 md:w-6 md:h-6 text-success flex-shrink-0 mt-1"
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
      <span className="flex-1 text-gray-dark">{children}</span>
    </li>
  );
}
