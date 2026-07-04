import { supabase } from "@/lib/supabase";
import type { AuthError, Session, User } from "@supabase/supabase-js";

export interface SignUpData {
  email: string;
  password: string;
  fullName: string;
}

export interface SignInData {
  email: string;
  password: string;
  remember: boolean;
}

class AuthService {
  async signUp({ email, password, fullName }: SignUpData) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    return { data, error };
  }

  async signIn({ email, password }: SignInData) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { data, error };
  }

  async signOut() {
    const { error } = await supabase.auth.signOut();

    return { error };
  }

  async forgotPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo:
        `${window.location.origin}/reset-password`,
    });

    return { error };
  }

  async updatePassword(password: string) {
    const { data, error } = await supabase.auth.updateUser({
      password,
    });

    return { data, error };
  }

  async resendVerification(email: string) {
    const { data, error } = await supabase.auth.resend({
      type: "signup",
      email,
    });

    return { data, error };
  }

  async refreshSession() {
    return await supabase.auth.refreshSession();
  }

  async getSession() {
    return await supabase.auth.getSession();
  }

  async getUser() {
    return await supabase.auth.getUser();
  }

  onAuthStateChange(
    callback: (
      event: string,
      session: Session | null,
    ) => void,
  ) {
    return supabase.auth.onAuthStateChange(callback);
  }
}

export const authService = new AuthService();

export type { AuthError, Session, User };