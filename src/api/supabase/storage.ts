import { supabase } from "./client";

export const storageApi = {
    client: supabase.storage,
};