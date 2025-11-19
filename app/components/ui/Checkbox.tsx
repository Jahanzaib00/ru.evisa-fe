import { InputHTMLAttributes, forwardRef, ReactNode } from "react";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = "", ...props }, ref) => {
    return (
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          type="checkbox"
          className={`mt-0.5 w-5 h-5 rounded border-gray-light text-primary
                     focus:ring-2 focus:ring-primary focus:ring-opacity-20
                     transition-colors cursor-pointer
                     disabled:cursor-not-allowed disabled:opacity-50
                     ${className}`}
          {...props}
        />
        {label && (
          <label
            htmlFor={props.id}
            className="text-sm text-gray-dark cursor-pointer select-none flex-1"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
