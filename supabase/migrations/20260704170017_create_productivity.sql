-- =============================================================================
-- Life OS
-- Migration: Productivity
-- Description:
--   Creates projects, tasks and task dependencies.
-- =============================================================================

BEGIN;

-- =============================================================================
-- Projects
-- =============================================================================

CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL
        REFERENCES public.profiles(id)
        ON DELETE CASCADE,

    name TEXT NOT NULL,

    description TEXT,

    color TEXT,

    icon TEXT,

    is_archived BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    deleted_at TIMESTAMPTZ,

    CONSTRAINT projects_name_length
        CHECK (char_length(trim(name)) BETWEEN 1 AND 100)
);

COMMENT ON TABLE public.projects IS
'User-created projects that organize tasks.';

-- =============================================================================
-- Tasks
-- =============================================================================

CREATE TABLE public.tasks (

    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL
        REFERENCES public.profiles(id)
        ON DELETE CASCADE,

    project_id UUID
        REFERENCES public.projects(id)
        ON DELETE SET NULL,

    title TEXT NOT NULL,

    description TEXT,

    priority task_priority NOT NULL DEFAULT 'medium',

    status task_status NOT NULL DEFAULT 'todo',

    due_date TIMESTAMPTZ,

    reminder_at TIMESTAMPTZ,

    estimated_minutes INTEGER,

    completed_at TIMESTAMPTZ,

    position INTEGER NOT NULL DEFAULT 0,

    is_archived BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    deleted_at TIMESTAMPTZ,

    CONSTRAINT tasks_title_length
        CHECK (
            char_length(trim(title))
            BETWEEN 1 AND 255
        ),

    CONSTRAINT tasks_estimated_minutes_positive
        CHECK (
            estimated_minutes IS NULL
            OR estimated_minutes > 0
        ),

    CONSTRAINT tasks_completed_status
        CHECK (
            status <> 'completed'
            OR completed_at IS NOT NULL
        )
);

COMMENT ON TABLE public.tasks IS
'Core task table for inbox and project tasks.';

-- =============================================================================
-- Task Dependencies
-- =============================================================================

CREATE TABLE public.task_dependencies (

    task_id UUID NOT NULL
        REFERENCES public.tasks(id)
        ON DELETE CASCADE,

    depends_on_task_id UUID NOT NULL
        REFERENCES public.tasks(id)
        ON DELETE CASCADE,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    PRIMARY KEY (
        task_id,
        depends_on_task_id
    ),

    CONSTRAINT no_self_dependency
        CHECK (
            task_id <> depends_on_task_id
        )
);

COMMENT ON TABLE public.task_dependencies IS
'Represents dependency relationships between tasks.';

COMMIT;