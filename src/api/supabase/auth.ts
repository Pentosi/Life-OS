import { supabase } from "./client";

export const authApi = {
    client: supabase.auth,
}; 