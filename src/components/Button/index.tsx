import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 transform active:scale-95 cursor-pointer font-display';
  
  const variants = {
    primary: 'bg-brand-navy hover:bg-brand-navy-dark text-white shadow-md shadow-brand-navy/10 hover:shadow-lg hover:shadow-brand-navy/20',
    secondary: 'bg-brand-green hover:bg-green-700 text-white shadow-md shadow-brand-green/10 hover:shadow-lg hover:shadow-brand-green/20',
    outline: 'border border-brand-navy/30 text-brand-navy hover:bg-brand-navy hover:text-white',
    ghost: 'text-brand-navy hover:bg-brand-navy/5'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs md:text-sm',
    md: 'px-5 py-2.5 text-sm md:text-base',
    lg: 'px-7 py-3 text-base md:text-lg'
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
