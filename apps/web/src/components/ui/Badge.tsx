import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'accent';
  className?: string;
}

const variantStyles = {
  default: 'bg-cream-dark text-text-secondary',
  success: 'bg-success-light text-success',
  accent: 'bg-accent-light text-accent',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
