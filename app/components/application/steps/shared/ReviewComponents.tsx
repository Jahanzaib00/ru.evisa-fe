/**
 * Shared primitives for step-level ReviewSnapshot components.
 * Each step file exports a ReviewSnapshot using these helpers.
 */

export interface ReviewSnapshotProps {
  traveler: any;
  application: any;
}

export function ReviewGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      {children}
    </div>
  );
}

export function ReviewField({
  label,
  value,
}: {
  label: string;
  value?: string | number | boolean | null;
}) {
  if (value == null || value === "") return null;
  return (
    <div>
      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
      <p className="font-medium text-gray-900">{String(value)}</p>
    </div>
  );
}
