import { useEffect } from 'react';

import { supabase } from '../../../lib/supabase';
import { useAuthStore } from '../../../stores';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser, setLoading]);

  return <>{children}</>;
};

export default AuthProvider;
