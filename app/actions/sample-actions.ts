'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

// Define the form schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

// Type for the form state
export type ContactFormState = {
  success?: boolean;
  error?: string;
  data?: {
    name: string;
    email: string;
    message: string;
  };
};

// Server action for contact form
export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    // Parse and validate the form data
    const validatedFields = contactFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    // Here you would typically save to a database or send an email
    // For demo purposes, we're just returning the validated data
    
    // Revalidate the contact page to show updated data
    revalidatePath('/contact');

    // Return success state with the validated data
    return {
      success: true,
      data: validatedFields,
    };
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: error.errors.map(err => `${err.path}: ${err.message}`).join(', '),
      };
    }

    // Handle other errors
    return {
      success: false,
      error: 'Something went wrong. Please try again.',
    };
  }
}

// Example of another server action for a newsletter subscription
export async function subscribeToNewsletter(
  prevState: { success?: boolean; error?: string; email?: string },
  formData: FormData
): Promise<{ success?: boolean; error?: string; email?: string }> {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const email = formData.get('email') as string;

  try {
    // Validate email
    const validatedEmail = z.string().email().parse(email);

    // Here you would typically add the email to your newsletter service
    
    // Return success state
    return {
      success: true,
      email: validatedEmail,
    };
  } catch (error) {
    return {
      success: false,
      error: 'Please enter a valid email address',
    };
  }
}
