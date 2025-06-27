// Supabase client configuration
// This file sets up the connection to the Supabase backend database
// Used for handling contact form submissions and other database operations

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for the contact form data
export interface ContactFormData {
  id?: string
  username: string
  email: string
  subject: string
  message: string
  created_at?: string
} 