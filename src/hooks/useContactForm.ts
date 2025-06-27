// Custom hook for handling contact form submission
// This hook manages form state, validation, and submission to Supabase
// Provides loading states and error handling for better UX

import { useState } from 'react'
import { supabase, ContactFormData } from '@/lib/supabase'
import { toast } from 'sonner'

interface UseContactFormReturn {
  isSubmitting: boolean
  submitForm: (formData: ContactFormData) => Promise<boolean>
}

export const useContactForm = (): UseContactFormReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = async (formData: ContactFormData): Promise<boolean> => {
    setIsSubmitting(true)
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            username: formData.username,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }
        ])

      if (error) {
        console.error('Supabase error:', error)
        toast.error('[TRANSMISSION_FAILED] Unable to send encrypted message. Retry protocol initiated.')
        return false
      }

      toast.success('[MESSAGE_TRANSMITTED] Secure communication established. Response protocol: 24-48 hours.')
      return true
    } catch (err) {
      console.error('Network error:', err)
      toast.error('[NETWORK_ERROR] Connection unstable. Check encryption keys and retry.')
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isSubmitting,
    submitForm
  }
} 