import { ReactNode } from "react";

export interface BadgeProps {
  /**
   * The variant/color scheme of the badge
   * @default 'default'
   */
  variant?: "default" | "success" | "error" | "warning" | "info" | "primary";
  /**
   * The size of the badge
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";
  /**
   * The content to display in the badge
   */
  children: ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

const variantStyles = {
  default: "bg-gray-lightest text-gray-dark",
  success: "bg-green-100 text-success",
  error: "bg-red-100 text-accent",
  warning: "bg-yellow-100 text-warning",
  info: "bg-blue-100 text-primary-light",
  primary: "bg-blue-100 text-primary",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-xs",
  lg: "px-4 py-1.5 text-sm",
};

/**
 * Badge component for displaying status indicators and labels
 * Follows the government design system color scheme
 */
export default function Badge({
  variant = "default",
  size = "md",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Helper function to get badge variant based on status string
 * Useful for application/payment status badges
 */
export function getStatusBadgeVariant(
  status: string
): "default" | "success" | "error" | "warning" | "info" | "primary" {
  const normalizedStatus = status.toUpperCase();

  switch (normalizedStatus) {
    case "APPROVED":
    case "COMPLETED":
    case "ACTIVE":
      return "success";

    case "REJECTED":
    case "FAILED":
    case "CANCELLED":
      return "error";

    case "PENDING":
    case "PROCESSING":
      return "warning";

    case "DRAFT":
    case "INACTIVE":
      return "default";

    case "SUBMITTED":
    case "IN_REVIEW":
      return "info";

    case "REFUNDED":
      return "primary";

    default:
      return "default";
  }
}
