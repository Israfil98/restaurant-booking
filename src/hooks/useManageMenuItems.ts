import { useEffect, useState } from 'react';

import { supabase } from '../lib/supabase';
import { type IMenuItem } from '../types';

export const useManageMenuItems = () => {
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
          .order('category')
          .order('name')
          .abortSignal(abortController.signal);

        if (supabaseError) throw supabaseError;

        setMenuItems(data || []);
      } catch (err) {
        if (!abortController.signal.aborted) {
          setError(
            err instanceof Error ? err.message : 'Failed to load menu items',
          );
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

  const addItem = async (
    item: Omit<IMenuItem, 'id' | 'image_url'>,
  ): Promise<boolean> => {
    try {
      const { data, error: supabaseError } = await supabase
        .from('menu_items')
        .insert(item)
        .select()
        .single();

      if (supabaseError) throw supabaseError;

      setMenuItems((prev) => [...prev, data]);
      return true;
    } catch {
      return false;
    }
  };

  const updateItem = async (
    id: string,
    updates: Partial<Omit<IMenuItem, 'id' | 'image_url'>>,
  ): Promise<boolean> => {
    try {
      const { error: supabaseError } = await supabase
        .from('menu_items')
        .update(updates)
        .eq('id', id);

      if (supabaseError) throw supabaseError;

      setMenuItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...updates } : item)),
      );
      return true;
    } catch {
      return false;
    }
  };

  const deleteItem = async (id: string): Promise<boolean> => {
    try {
      const { error: supabaseError } = await supabase
        .from('menu_items')
        .delete()
        .eq('id', id);

      if (supabaseError) throw supabaseError;

      setMenuItems((prev) => prev.filter((item) => item.id !== id));
      return true;
    } catch {
      return false;
    }
  };

  return { menuItems, loading, error, addItem, updateItem, deleteItem };
};
