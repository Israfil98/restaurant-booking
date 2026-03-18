import { type ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'outline';
  className?: string;
}

const variantStyles = {
  primary: 'bg-burgundy text-cream hover:bg-burgundy-light',
  outline: 'border border-cream/20 text-cream hover:border-cream/40',
};

const Button = ({
  children,
  href,
  variant = 'primary',
  className = '',
}: IButtonProps) => {
  return (
    <a
      href={href}
      className={`font-display rounded-lg px-8 py-3 text-sm font-medium tracking-wide transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
