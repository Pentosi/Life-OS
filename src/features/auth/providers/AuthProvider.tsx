import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";

import { AuthContext } from "../context/AuthContext";
import { authService } from "../services/auth.service";

import type {
  SignInData,
  SignUpData,
} from "../services/auth.service";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshSession = useCallback(async () => {
    setLoading(true);

    try {
      const {
        data: { session },
      } = await authService.getSession();

      setSession(session);
      setUser(session?.user ?? null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    async function initializeAuth() {
      try {
        const {
          data: { session },
        } = await authService.getSession();

        if (!mounted) return;

        setSession(session);
        setUser(session?.user ?? null);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    void initializeAuth();

    const {
      data: { subscription },
    } = authService.onAuthStateChange((_event, session) => {
      if (!mounted) return;

      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = useCallback(
    async (credentials: SignInData) => {
      await authService.signIn(credentials);
      await refreshSession();
    },
    [refreshSession],
  );

  const signUp = useCallback(
    async (credentials: SignUpData) => {
      await authService.signUp(credentials);
      await refreshSession();
    },
    [refreshSession],
  );

  const signOut = useCallback(async () => {
    await authService.signOut();

    setSession(null);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      session,
      loading,
      signIn,
      signUp,
      signOut,
      refreshSession,
    }),
    [
      user,
      session,
      loading,
      signIn,
      signUp,
      signOut,
      refreshSession,
    ],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}