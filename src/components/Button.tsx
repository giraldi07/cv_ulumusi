import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  // UBAH: focus:ring-orange-500 -> focus:ring-[#AB1F24]
  const baseStyle = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#AB1F24] dark:focus:ring-offset-slate-900 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  const variants = {
    // UBAH: Background, Hover (Gelap), dan Shadow Red
    primary: "bg-[#AB1F24] hover:bg-[#8e191d] text-white shadow-lg shadow-[#AB1F24]/30",
    
    secondary: "bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600",
    
    // UBAH: Border & Text ke Merah, Hover ke merah sangat muda (red-50)
    outline: "border-2 border-[#AB1F24] text-[#AB1F24] hover:bg-red-50 dark:text-red-500 dark:border-red-500 dark:hover:bg-slate-800"
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};