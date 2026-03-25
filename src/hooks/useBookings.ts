import { useEffect, useState } from 'react';

import { supabase } from '../lib/supabase';
import { type IBooking } from '../types';

export const useBookings = () => {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = async (signal?: AbortSignal) => {
    try {
      const query = supabase
        .from('bookings')
        .select('*')
        .order('date', { ascending: true })
        .order('time', { ascending: true });

      const { data, error: supabaseError } = signal
        ? await query.abortSignal(signal)
        : await query;

      if (supabaseError) throw supabaseError;

      setBookings(data || []);
    } catch (err) {
      if (signal && signal.aborted) return;
      setError(err instanceof Error ? err.message : 'Failed to load bookings');
    } finally {
      if (!signal || !signal.aborted) {
        setLoading(false);
      }
    }
  };

  const updateStatus = async (
    id: string,
    status: IBooking['status'],
  ): Promise<boolean> => {
    try {
      const { error: supabaseError } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', id);

      if (supabaseError) throw supabaseError;

      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === id ? { ...booking, status } : booking,
        ),
      );

      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    fetchBookings(abortController.signal);
    return () => abortController.abort();
  }, []);

  return { bookings, loading, error, updateStatus, refetch: fetchBookings };
};
