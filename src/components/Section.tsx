import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = '', id = '' }: SectionProps) => (
  <section
    id={id}
    className={`py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto ${className}`}
  >
    {children}
  </section>
);
