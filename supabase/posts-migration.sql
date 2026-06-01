-- ============================================================
-- Purlieu Management — Insights Posts Table
-- Run this in your Supabase project SQL editor
-- ============================================================

create table if not exists public.posts (
  id            uuid        primary key default gen_random_uuid(),
  slug          text        unique not null,
  title         text        not null,
  excerpt       text        not null,
  content       text        not null,          -- stored as HTML
  category      text        not null default 'Insights',
  read_time     text        not null default '5 min read',
  featured      boolean     not null default false,
  published     boolean     not null default true,
  published_at  timestamptz not null default now(),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Row Level Security
alter table public.posts enable row level security;

-- Anyone can read published posts
create policy "Public can read published posts"
  on public.posts
  for select
  using (published = true);

-- Only service role (used by admin API routes) can write
-- No client-side write policies needed — admin uses service role key server-side
