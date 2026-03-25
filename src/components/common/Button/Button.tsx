import { type ReactNode } from 'react';
import { Link } from 'react-router';

interface IButtonProps {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
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
  onClick,
}: IButtonProps) => {
  const baseStyles = `rounded-lg px-8 py-3 font-display text-sm font-medium tracking-wide transition-colors ${variantStyles[variant]} ${className}`;

  if (href.startsWith('#') || href.startsWith('/#')) {
    return (
      <a href={href} onClick={onClick} className={baseStyles}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} onClick={onClick} className={baseStyles}>
      {children}
    </Link>
  );
};

export default Button;
