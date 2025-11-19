export interface SpinnerProps {
  /**
   * Size of the spinner
   * @default 'md'
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Color variant of the spinner
   * @default 'primary'
   */
  variant?: "primary" | "white" | "gray";
  /**
   * Additional CSS classes
   */
  className?: string;
}

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-2",
  xl: "h-12 w-12 border-2",
};

const variantClasses = {
  primary: "border-primary border-b-transparent",
  white: "border-white border-b-transparent",
  gray: "border-gray border-b-transparent",
};

/**
 * Spinner component for inline loading states
 * Use for buttons, inline elements, or small loading indicators
 */
export function Spinner({
  size = "md",
  variant = "primary",
  className = "",
}: SpinnerProps) {
  return (
    <div
      className={`animate-spin rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export interface LoadingSpinnerProps {
  /**
   * Text to display below the spinner
   */
  text?: string;
  /**
   * Size of the spinner
   * @default 'xl'
   */
  size?: "sm" | "md" | "lg" | "xl";
  /**
   * Color variant of the spinner
   * @default 'primary'
   */
  variant?: "primary" | "white" | "gray";
  /**
   * Additional CSS classes for the container
   */
  className?: string;
}

/**
 * LoadingSpinner component for centered section loading states
 * Use for page sections, modals, or content areas that need a centered loader
 */
export function LoadingSpinner({
  text = "Loading...",
  size = "xl",
  variant = "primary",
  className = "",
}: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center py-12 ${className}`}>
      <div className="text-center">
        <Spinner size={size} variant={variant} className="mx-auto mb-4" />
        {text && <p className="text-gray text-sm">{text}</p>}
      </div>
    </div>
  );
}
