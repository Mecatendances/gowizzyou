import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'text-xs font-semibold uppercase tracking-[0.2em] text-text-label',
        className,
      )}
    >
      {children}
    </span>
  );
}
