'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'

interface Props {
  postId: string
  slug: string
}

export function AdminInsightsList({ postId, slug }: Props) {
  const router = useRouter()
  const [deleting, setDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm(`Delete "${slug}"? This cannot be undone.`)) return
    setDeleting(true)
    const res = await fetch(`/api/posts?id=${postId}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    } else {
      alert('Failed to delete post.')
      setDeleting(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      className="font-sans text-xs text-red-400 hover:text-red-600 transition-colors disabled:opacity-40 flex items-center gap-1"
    >
      <Trash2 size={13} />
      {deleting ? 'Deleting…' : 'Delete'}
    </button>
  )
}
