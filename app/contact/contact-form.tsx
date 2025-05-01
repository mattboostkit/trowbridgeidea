'use client';

import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { submitContactForm } from "@/app/actions/sample-actions";
import { useFormState, useFormStatus } from "react-dom";

// Submit button with loading state
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? (
        <>
          <div className="h-4 w-4 mr-2 animate-spin rounded-full border-2 border-background border-t-foreground"></div>
          <span>Sending...</span>
        </>
      ) : (
        <>
          <Send className="h-4 w-4 mr-2" />
          <span>Send Message</span>
        </>
      )}
    </Button>
  );
}

// Contact form with server action
export function ContactFormClient() {
  const [state, formAction] = useFormState(submitContactForm, {});
  
  return (
    <div className="space-y-6">
      {state?.success ? (
        <div className="p-6 bg-muted rounded-lg text-center">
          <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for contacting us. We'll get back to you shortly.
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" name="email" type="email" placeholder="Your email" required />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              rows={5}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="newsletter" />
            <label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
              I would like to receive newsletters about exhibitions and special events
            </label>
          </div>
          
          {state?.error && (
            <div className="text-sm font-medium text-destructive">{state.error}</div>
          )}

          <SubmitButton />
        </form>
      )}
    </div>
  );
}
