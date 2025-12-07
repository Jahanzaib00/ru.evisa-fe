"use client";

import { forwardRef } from "react";

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

interface RadioGroupProps {
  label?: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  layout?: "horizontal" | "vertical";
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      label,
      options,
      value,
      onChange,
      onBlur,
      error,
      helperText,
      required = false,
      disabled = false,
      layout = "horizontal",
    },
    ref
  ) => {
    const handleChange = (optionValue: string) => {
      if (!disabled && onChange) {
        onChange(optionValue);
      }
    };

    const groupName = `radio-group-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full" ref={ref}>
        {label && (
          <label className="block text-sm font-medium text-gray-dark mb-3">
            {label}
            {required && <span className="text-accent ml-1">*</span>}
          </label>
        )}

        <div
          className={`flex ${
            layout === "horizontal"
              ? "flex-row space-x-4"
              : "flex-col space-y-3"
          }`}
          role="radiogroup"
          aria-label={label}
          aria-required={required}
          onBlur={onBlur}
        >
          {options.map((option) => {
            const isSelected = value === option.value;
            const radioId = `${groupName}-${option.value}`;

            return (
              <label
                key={option.value}
                htmlFor={radioId}
                className={`
                  relative flex items-start cursor-pointer
                  ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                <div className="flex items-center h-6">
                  <input
                    type="radio"
                    id={radioId}
                    name={groupName}
                    value={option.value}
                    checked={isSelected}
                    onChange={() => handleChange(option.value)}
                    disabled={disabled}
                    className="sr-only"
                  />
                  <div
                    className={`
                      w-5 h-5 rounded-full border-2 flex items-center justify-center
                      transition-all duration-200
                      ${
                        error
                          ? "border-accent"
                          : isSelected
                          ? "border-primary"
                          : "border-gray-light"
                      }
                      ${!disabled && !isSelected ? "hover:border-primary" : ""}
                    `}
                  >
                    {isSelected && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    )}
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <span
                    className={`text-sm font-medium ${
                      isSelected ? "text-gray-dark" : "text-gray-dark"
                    }`}
                  >
                    {option.label}
                  </span>
                  {option.description && (
                    <p className="text-sm text-gray mt-0.5">
                      {option.description}
                    </p>
                  )}
                </div>
              </label>
            );
          })}
        </div>

        {error && (
          <p className="mt-2 text-sm text-accent font-medium">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-2 text-sm text-gray">{helperText}</p>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export default RadioGroup;
