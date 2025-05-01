'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// Loading state component to show during form submission
const FormSubmitButton = ({ 
  children, 
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();
  
  return (
    <Button
      {...props}
      className={cn(className)}
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-foreground"></div>
          <span>Submitting...</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

// Type for the form props
interface ServerActionFormProps<TState extends Record<string, any>> {
  action: (prevState: TState, formData: FormData) => Promise<TState>;
  initialState: TState;
  children: React.ReactNode | ((state: TState) => React.ReactNode);
  onSuccess?: (state: TState) => void;
  className?: string;
}

// Enhanced form component with server action support
export function ServerActionForm<TState extends Record<string, any>>(
  {
  action,
  initialState,
  children,
  className,
  onSuccess,
  ...props
}: ServerActionFormProps<TState> & Omit<React.FormHTMLAttributes<HTMLFormElement>, 'action'>) {
  const [state, formAction] = useFormState(action, initialState);

  // Call onSuccess callback when state changes and is successful
  React.useEffect(() => {
    if (state && typeof state === 'object' && 'success' in state && state.success === true && onSuccess) {
      onSuccess(state);
    }
  }, [state, onSuccess]);

  return (
    <form action={formAction} className={cn('space-y-4', className)} {...props}>
      {/* Pass the current state to children if they need it */}
      {typeof children === 'function' ? children(state) : children}
      
      {/* Show errors if any */}
      {state && typeof state === 'object' && 'error' in state && state.error && (
        <div className="text-sm font-medium text-destructive">{state.error}</div>
      )}
    </form>
  );
}

// Export the button component
export { FormSubmitButton };
