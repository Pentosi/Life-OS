-- =============================================================================
-- Life OS
-- Migration: Initial Schema
-- Description:
--   Creates the shared PostgreSQL foundation used by the entire application.
--   This migration intentionally contains no application tables.
-- =============================================================================

BEGIN;

-- =============================================================================
-- Extensions
-- =============================================================================

-- Modern UUID generation
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- =============================================================================
-- Enumerated Types
-- =============================================================================

-- ---------------------------------------------------------------------------
-- Task Priority
-- ---------------------------------------------------------------------------
CREATE TYPE task_priority AS ENUM (
    'low',
    'medium',
    'high',
    'urgent'
);

-- ---------------------------------------------------------------------------
-- Task Status
-- ---------------------------------------------------------------------------
CREATE TYPE task_status AS ENUM (
    'todo',
    'in_progress',
    'completed',
    'cancelled'
);

-- ---------------------------------------------------------------------------
-- Goal Status
-- ---------------------------------------------------------------------------
CREATE TYPE goal_status AS ENUM (
    'not_started',
    'active',
    'completed',
    'cancelled'
);

-- ---------------------------------------------------------------------------
-- Habit Frequency
-- ---------------------------------------------------------------------------
CREATE TYPE habit_frequency AS ENUM (
    'daily',
    'weekly',
    'monthly',
    'custom'
);

-- ---------------------------------------------------------------------------
-- Supported Tag Targets
-- ---------------------------------------------------------------------------
CREATE TYPE resource_type AS ENUM (
    'project',
    'task',
    'note',
    'journal_entry',
    'habit',
    'goal',
    'calendar_event'
);

COMMIT;