import { useEffect, useState } from 'react';

import { supabase } from '../lib/supabase';
import { type IMenuItem } from '../types';

export const useMenuItems = () => {
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchMenuItems = async () => {
      try {
        const { data, error: supabaseError } = await supabase
          .from('menu_items')
          .select('*')
          .eq('available', true)
          .order('category')
          .abortSignal(abortController.signal);

        if (supabaseError) throw supabaseError;

        setMenuItems(data || []);
      } catch (err) {
        if (!abortController.signal.aborted) {
          setError(err instanceof Error ? err.message : 'Failed to load menu');
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchMenuItems();

    return () => abortController.abort();
  }, []);

  return { menuItems, loading, error };
};
