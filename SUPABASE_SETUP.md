# Supabase Backend Setup for Contact Form

This guide will help you set up the Supabase backend for the contact form in 221B.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. Node.js and npm installed
3. Your project cloned locally

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Fill in your project details:
   - **Name**: `221B` (or your preferred name)
   - **Database Password**: Create a strong password
   - **Region**: Choose the closest region to your users
5. Click "Create new project"

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (under "Project Configuration")
   - **Anon (public) key** (under "Project API Keys")

## Step 3: Set Up Environment Variables

1. Create a `.env` file in your project root (copy from `env.example`)
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## Step 4: Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste the contents of `src/migrations/supabase-setup.sql`
3. Click "Run" to execute the SQL

This will create:
- A `contact_messages` table to store form submissions
- Proper indexes for performance
- Row Level Security policies for data protection
- Proper permissions for anonymous form submissions

## Step 5: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page
3. Fill out and submit the form
4. Check your Supabase dashboard → **Table Editor** → `contact_messages` to see the submitted data

## Database Schema

The `contact_messages` table includes:

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `username` | VARCHAR(255) | User's display name |
| `email` | VARCHAR(255) | User's email address |
| `subject` | VARCHAR(500) | Message subject |
| `message` | TEXT | Message content |
| `created_at` | TIMESTAMP | Submission timestamp |
| `status` | VARCHAR(50) | Message status (default: 'new') |

## Security Features

- **Row Level Security (RLS)** is enabled
- Anonymous users can only insert new messages
- Authenticated users can view and update messages (for admin purposes)
- All data is validated before insertion

## Viewing Submissions

To view contact form submissions:

1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. Select the `contact_messages` table
4. View all submissions with timestamps and status

## Optional: Admin Panel

You can create an admin interface to manage contact messages by:

1. Setting up Supabase authentication
2. Creating protected routes for admin users
3. Building a dashboard to view, reply to, and manage messages

## Troubleshooting

### Environment Variables Not Loading
- Make sure your `.env` file is in the project root
- Restart your development server after adding environment variables
- Check that the variables start with `VITE_` (required for Vite)

### Database Connection Issues
- Verify your project URL and anon key are correct
- Check that your Supabase project is active
- Ensure the database table was created successfully

### Form Submission Errors
- Check the browser console for error messages
- Verify that all required fields are filled
- Ensure the Supabase client is properly configured

## Next Steps

- Set up email notifications for new contact messages
- Add form validation and spam protection
- Create an admin dashboard for managing messages
- Implement automated responses or chatbot integration

For more information, visit the [Supabase Documentation](https://supabase.com/docs). 