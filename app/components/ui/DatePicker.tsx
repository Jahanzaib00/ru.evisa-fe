import Select from "./Select";
import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface DatePickerProps<T extends FieldValues> {
  label: string;
  required?: boolean;
  register: UseFormRegister<T>;
  dayFieldName: Path<T>;
  monthFieldName: Path<T>;
  yearFieldName: Path<T>;
  dayError?: string;
  monthError?: string;
  yearError?: string;
  yearRange?: "past" | "future";
  yearCount?: number;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function DatePicker<T extends FieldValues>({
  label,
  required = false,
  register,
  dayFieldName,
  monthFieldName,
  yearFieldName,
  dayError,
  monthError,
  yearError,
  yearRange = "past",
  yearCount = 100,
}: DatePickerProps<T>) {
  const currentYear = new Date().getFullYear();
  const years =
    yearRange === "past"
      ? Array.from({ length: yearCount }, (_, i) => currentYear - i)
      : Array.from({ length: yearCount }, (_, i) => currentYear + i);

  return (
    <div>
      <label className="block text-sm font-medium text-gov-gray-dark mb-1.5">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <div className="grid grid-cols-3 gap-3">
        <Select {...register(dayFieldName)} error={dayError}>
          <option value="">Day</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Select>

        <Select {...register(monthFieldName)} error={monthError}>
          <option value="">Month</option>
          {MONTHS.map((month, i) => (
            <option key={i + 1} value={i + 1}>
              {month}
            </option>
          ))}
        </Select>

        <Select {...register(yearFieldName)} error={yearError}>
          <option value="">Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}
