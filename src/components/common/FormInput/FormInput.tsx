import { type UseFormRegisterReturn } from 'react-hook-form';

interface IFormInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
  required?: boolean;
}

const FormInput = ({
  label,
  type = 'text',
  placeholder,
  register,
  error,
  required = false,
}: IFormInputProps) => {
  return (
    <div>
      <label className="font-display text-cream mb-2 block text-sm font-medium">
        {label}
        {required && <span className="text-burgundy-light ml-1">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`bg-cream/5 text-cream placeholder-warm-gray/50 focus:border-burgundy-light w-full rounded-lg border px-4 py-3 text-sm transition-colors outline-none ${
          error ? 'border-red-400' : 'border-cream/10'
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
};

export default FormInput;
