-- Supabase Database Setup for Contact Form
-- Run this SQL in your Supabase SQL Editor to set up the contact messages table
-- This creates the necessary table structure and security policies

-- Create the contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new'
);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anonymous users to insert new messages
CREATE POLICY "Anyone can submit contact messages" ON contact_messages
  FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Create a policy to allow authenticated users to view all messages (for admin purposes)
CREATE POLICY "Authenticated users can view all messages" ON contact_messages
  FOR SELECT 
  TO authenticated
  USING (true);

-- Optional: Create a policy to allow authenticated users to update message status
CREATE POLICY "Authenticated users can update message status" ON contact_messages
  FOR UPDATE 
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Grant necessary permissions
GRANT INSERT ON contact_messages TO anon;
GRANT SELECT, UPDATE ON contact_messages TO authenticated; 