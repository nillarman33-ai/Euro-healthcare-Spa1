/*
# Create spa bookings table

1. New Tables
- `spa_bookings`
- `id` (uuid, primary key)
- `full_name` (text, guest name)
- `email` (text, contact email)
- `phone` (text, contact phone)
- `service` (text, selected treatment)
- `booking_date` (date, preferred date)
- `booking_time` (text, preferred time)
- `therapist` (text, preferred therapist or flexible)
- `payment_preference` (text, deposit or pay at spa)
- `created_at` (timestamp, submission time)

2. Security
- Enable RLS on `spa_bookings`.
- Allow anonymous and authenticated guests to submit bookings.
- Allow anonymous and authenticated guests to read, update, and delete only is intentionally omitted because bookings are private operational records and are write-only from the public website.

3. Important Notes
- This is a single-tenant booking inbox with no sign-in requirement.
- The website only needs INSERT access; staff-side administration can be added separately with protected access.
*/

CREATE TABLE IF NOT EXISTS public.spa_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  booking_date date NOT NULL,
  booking_time text NOT NULL,
  therapist text NOT NULL DEFAULT 'No preference',
  payment_preference text NOT NULL DEFAULT 'Pay at spa',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.spa_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit spa bookings" ON public.spa_bookings;
CREATE POLICY "Public can submit spa bookings"
  ON public.spa_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public cannot read spa bookings" ON public.spa_bookings;
CREATE POLICY "Public cannot read spa bookings"
  ON public.spa_bookings
  FOR SELECT
  TO anon, authenticated
  USING (false);

DROP POLICY IF EXISTS "Public cannot update spa bookings" ON public.spa_bookings;
CREATE POLICY "Public cannot update spa bookings"
  ON public.spa_bookings
  FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "Public cannot delete spa bookings" ON public.spa_bookings;
CREATE POLICY "Public cannot delete spa bookings"
  ON public.spa_bookings
  FOR DELETE
  TO anon, authenticated
  USING (false);

CREATE INDEX IF NOT EXISTS spa_bookings_booking_date_idx ON public.spa_bookings (booking_date);
