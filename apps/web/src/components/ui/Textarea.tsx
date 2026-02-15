import { cn } from '@/lib/utils';
import { type TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'rounded-xl border border-border bg-white px-4 py-3 text-base text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 min-h-[120px] resize-y',
            error && 'border-error focus:border-error focus:ring-error/20',
            className,
          )}
          {...props}
        />
        {error && <p className="text-sm text-error">{error}</p>}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
export { Textarea };
