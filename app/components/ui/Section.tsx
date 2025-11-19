import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "blue" | "dark";
  padding?: "sm" | "md" | "lg" | "xl";
}

export default function Section({
  id,
  children,
  className = "",
  background = "white",
  padding = "lg",
}: SectionProps) {
  const backgroundStyles = {
    white: "bg-white",
    gray: "bg-gray-lightest",
    blue: "bg-primary",
    dark: "bg-gray-dark",
  };

  const paddingStyles = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
    xl: "py-20 md:py-32",
  };

  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </section>
  );
}
