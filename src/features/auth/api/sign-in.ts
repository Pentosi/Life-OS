import { supabase } from "@/lib/supabase";

type SignInParams = {
  email: string;
  password: string;
};

export async function signIn({
  email,
  password,
}: SignInParams) {
  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    throw error;
  }

  return data;
}