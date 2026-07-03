import { z } from "zod";

const envSchema = z.object({
    VITE_SUPABASE_URL: z.url(),
    VITE_SUPABASE_ANON_KEY: z.string().min(1),
});

const parsed = envSchema.safeParse(import.meta.env);

if (!parsed.success) {
    console.error("❌ Invalid environment variables", parsed.error.flatten());

    throw new Error("Invalid environment variables.");
}

export const env = {
    SUPABASE_URL: parsed.data.VITE_SUPABASE_URL,
    SUPABASE_ANON_KEY: parsed.data.VITE_SUPABASE_ANON_KEY,
} as const;