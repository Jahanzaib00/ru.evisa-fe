interface DisqualifierMarkerProps {
  children: string;
}

export default function DisqualifierMarker({ children }: DisqualifierMarkerProps) {
  return (
    <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed list-none ml-0">
      <svg
        className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-1"
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
      <span className="flex-1 text-gray-dark">{children}</span>
    </li>
  );
}
