import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import {
  getAllPostsAdmin,
  createPost,
  updatePost,
  deletePost,
} from '@/lib/db/posts'
import { markdownToHtml, titleToSlug } from '@/lib/markdown'

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get('admin-token')?.value
  return !!token && token === process.env.ADMIN_PASSWORD
}

// GET /api/posts — list all posts (admin only)
export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const posts = await getAllPostsAdmin()
  return NextResponse.json({ posts })
}

// POST /api/posts — create a new post
export async function POST(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { title, rawContent, excerpt, category, readTime, featured, published, publishedAt } = body

  if (!title || !rawContent || !excerpt) {
    return NextResponse.json({ error: 'title, rawContent, and excerpt are required.' }, { status: 400 })
  }

  const slug = body.slug || titleToSlug(title)
  const content = markdownToHtml(rawContent)

  const post = await createPost({
    slug,
    title,
    excerpt,
    content,
    category: category || 'Insights',
    read_time: readTime || '5 min read',
    featured: featured ?? false,
    published: published ?? true,
    published_at: publishedAt || new Date().toISOString(),
  })

  return NextResponse.json({ post }, { status: 201 })
}

// PATCH /api/posts — update a post
export async function PATCH(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { id, rawContent, ...rest } = body

  if (!id) {
    return NextResponse.json({ error: 'id is required.' }, { status: 400 })
  }

  const updates: Record<string, unknown> = { ...rest }
  if (rawContent) {
    updates.content = markdownToHtml(rawContent)
  }

  const post = await updatePost(id, updates)
  return NextResponse.json({ post })
}

// DELETE /api/posts?id=xxx
export async function DELETE(req: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'id is required.' }, { status: 400 })
  }

  await deletePost(id)
  return NextResponse.json({ ok: true })
}
