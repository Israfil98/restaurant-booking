import { type UseFormRegisterReturn } from 'react-hook-form';

interface IFormSelectProps {
  label: string;
  options: { value: string; label: string }[];
  register: UseFormRegisterReturn;
  error?: string;
  required?: boolean;
}

const FormSelect = ({
  label,
  options,
  register,
  error,
  required = false,
}: IFormSelectProps) => {
  return (
    <div>
      <label className="font-display text-cream mb-2 block text-sm font-medium">
        {label}
        {required && <span className="text-burgundy-light ml-1">*</span>}
      </label>
      <select
        {...register}
        className={`bg-cream/5 text-cream focus:border-burgundy-light w-full appearance-none rounded-lg border px-4 py-3 text-sm transition-colors outline-none ${
          error ? 'border-red-400' : 'border-cream/10'
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default FormSelect;
