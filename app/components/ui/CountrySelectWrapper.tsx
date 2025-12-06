import { forwardRef } from "react";
import CountrySelect from "./CountrySelect";

interface CountrySelectWrapperProps {
  label?: string;
  value?: string;
  onChange?: (...event: any[]) => void;
  onBlur?: (...event: any[]) => void;
  name?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const CountrySelectWrapper = forwardRef<
  HTMLButtonElement,
  CountrySelectWrapperProps
>(({ onChange, value, ...props }, ref) => {
  return (
    <CountrySelect
      ref={ref}
      value={value || ""}
      onChange={(val) => {
        if (onChange) onChange(val);
      }}
      {...props}
    />
  );
});

CountrySelectWrapper.displayName = "CountrySelectWrapper";

export default CountrySelectWrapper;
