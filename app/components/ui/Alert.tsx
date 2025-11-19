import { ReactNode } from "react";

export interface AlertProps {
  /**
   * The variant/type of alert
   * @default 'info'
   */
  variant?: "error" | "success" | "warning" | "info";
  /**
   * The message to display
   */
  message: string;
  /**
   * Optional title for the alert
   */
  title?: string;
  /**
   * Optional custom icon
   */
  icon?: ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

const variantStyles = {
  error: {
    container: "bg-red-50 border-l-4 border-accent",
    icon: "text-accent",
    title: "text-accent",
    message: "text-gray-dark",
  },
  success: {
    container: "bg-green-50 border-l-4 border-success",
    icon: "text-success",
    title: "text-success",
    message: "text-gray-dark",
  },
  warning: {
    container: "bg-yellow-50 border-l-4 border-warning",
    icon: "text-warning",
    title: "text-warning",
    message: "text-gray-dark",
  },
  info: {
    container: "bg-blue-50 border-l-4 border-primary-light",
    icon: "text-primary-light",
    title: "text-primary",
    message: "text-gray-dark",
  },
};

const defaultIcons = {
  error: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  ),
  success: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  ),
  info: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

/**
 * Alert component for displaying messages to users
 * Supports error, success, warning, and info variants
 */
export default function Alert({
  variant = "info",
  message,
  title,
  icon,
  className = "",
}: AlertProps) {
  const styles = variantStyles[variant];
  const displayIcon = icon || defaultIcons[variant];

  return (
    <div
      className={`${styles.container} p-4 rounded ${className}`}
      role="alert"
    >
      <div className="flex">
        <div className="shrink-0">
          <span className={styles.icon}>{displayIcon}</span>
        </div>
        <div className="ml-3">
          {title && (
            <h3 className={`text-sm font-medium ${styles.title}`}>{title}</h3>
          )}
          <p className={`text-sm ${title ? "mt-1" : ""} ${styles.message}`}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
