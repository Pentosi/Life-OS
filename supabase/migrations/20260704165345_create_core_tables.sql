-- =============================================================================
-- Life OS
-- Migration: Core Tables
-- Description:
--   Creates the foundational user tables used across the application.
-- =============================================================================

BEGIN;

-- =============================================================================
-- Profiles
-- =============================================================================

CREATE TABLE public.profiles (
    id UUID PRIMARY KEY
        REFERENCES auth.users(id)
        ON DELETE CASCADE,

    display_name TEXT,

    avatar_url TEXT,

    timezone TEXT NOT NULL DEFAULT 'UTC',

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT profiles_display_name_length
        CHECK (
            display_name IS NULL
            OR char_length(trim(display_name)) BETWEEN 2 AND 100
        )
);

COMMENT ON TABLE public.profiles IS
'Stores application-specific user profile information. Authentication is managed by auth.users.';

COMMENT ON COLUMN public.profiles.id IS
'Matches auth.users.id exactly.';

-- =============================================================================
-- User Settings
-- =============================================================================

CREATE TABLE public.user_settings (
    user_id UUID PRIMARY KEY
        REFERENCES public.profiles(id)
        ON DELETE CASCADE,

    theme TEXT NOT NULL DEFAULT 'system',

    language TEXT NOT NULL DEFAULT 'en',

    timezone TEXT NOT NULL DEFAULT 'UTC',

    week_start SMALLINT NOT NULL DEFAULT 1,

    notifications_enabled BOOLEAN NOT NULL DEFAULT TRUE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT user_settings_week_start_check
        CHECK (week_start IN (0, 1))
);

COMMENT ON TABLE public.user_settings IS
'Stores user preferences and application settings.';

COMMIT;