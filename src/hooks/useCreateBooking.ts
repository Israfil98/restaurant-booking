import { useState } from 'react';

import { supabase } from '../lib/supabase';
import { type IBookingFormData } from '../types';

export const useCreateBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBooking = async (
    formData: IBookingFormData,
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase.from('bookings').insert({
        customer_name: formData.name,
        customer_email: formData.email,
        date: formData.date,
        time: formData.time,
        party_size: Number(formData.partySize),
        notes: formData.notes || null,
      });

      if (supabaseError) throw supabaseError;

      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create booking');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { createBooking, loading, error };
};
