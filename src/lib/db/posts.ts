import { createClient } from '@supabase/supabase-js'

// ── Types ────────────────────────────────────────────────────

export interface DbPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  read_time: string
  featured: boolean
  published: boolean
  published_at: string
  created_at: string
  updated_at: string
}

export type NewPost = Omit<DbPost, 'id' | 'created_at' | 'updated_at'>

// ── Clients ──────────────────────────────────────────────────

function getPublicClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

/** Server-side only — never expose SUPABASE_SERVICE_ROLE_KEY to the client */
function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

/** Returns true if Supabase env vars are configured */
export function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

// ── Public reads (used by pages) ─────────────────────────────

export async function getPublishedPosts(): Promise<DbPost[]> {
  if (!isSupabaseConfigured()) return []
  const { data, error } = await getPublicClient()
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })
  if (error) {
    console.warn('[posts] getPublishedPosts error:', error.message)
    return []
  }
  return data ?? []
}

export async function getPostBySlug(slug: string): Promise<DbPost | null> {
  if (!isSupabaseConfigured()) return null
  const { data, error } = await getPublicClient()
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle()
  if (error) {
    console.warn('[posts] getPostBySlug error:', error.message)
    return null
  }
  return data
}

// ── Admin writes (API routes only) ───────────────────────────

export async function getAllPostsAdmin(): Promise<DbPost[]> {
  const { data, error } = await getAdminClient()
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw new Error(error.message)
  return data ?? []
}

export async function createPost(post: NewPost): Promise<DbPost> {
  const { data, error } = await getAdminClient()
    .from('posts')
    .insert([post])
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function updatePost(id: string, updates: Partial<NewPost>): Promise<DbPost> {
  const { data, error } = await getAdminClient()
    .from('posts')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function deletePost(id: string): Promise<void> {
  const { error } = await getAdminClient()
    .from('posts')
    .delete()
    .eq('id', id)
  if (error) throw new Error(error.message)
}
