import { type UseFormRegisterReturn } from 'react-hook-form';

interface IFormTextareaProps {
  label: string;
  placeholder?: string;
  rows?: number;
  register: UseFormRegisterReturn;
  error?: string;
}

const FormTextarea = ({
  label,
  placeholder,
  rows = 3,
  register,
  error,
}: IFormTextareaProps) => {
  return (
    <div>
      <label className="font-display text-cream mb-2 block text-sm font-medium">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        rows={rows}
        {...register}
        className={`bg-cream/5 text-cream placeholder-warm-gray/50 focus:border-burgundy-light min-h-25 w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none ${
          error ? 'border-red-400' : 'border-cream/10'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default FormTextarea;
