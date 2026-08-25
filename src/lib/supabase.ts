import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});

export type BookingPayload = {
  full_name: string;
  email: string;
  phone: string;
  service: string;
  booking_date: string;
  booking_time: string;
  therapist: string;
  payment_preference: string;
};

export async function submitBooking(payload: BookingPayload): Promise<{ ok: boolean; error?: string }> {
  const { error } = await supabase.from('spa_bookings').insert(payload);
  if (error) {
    return { ok: false, error: error.message };
  }
  return { ok: true };
}
