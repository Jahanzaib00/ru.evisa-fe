interface StepMarkerProps {
  children: string;
  stepNumber?: number;
}

export default function StepMarker({ children, stepNumber }: StepMarkerProps) {
  return (
    <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed list-none ml-0">
      {stepNumber && (
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-white text-sm font-bold flex-shrink-0 mt-0.5">
          {stepNumber}
        </span>
      )}
      <span className="flex-1 text-gray-dark">{children}</span>
    </li>
  );
}
