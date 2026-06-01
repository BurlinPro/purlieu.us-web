'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Lock, Loader2 } from 'lucide-react'

export function AdminLoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      window.location.reload()
    } else {
      const data = await res.json()
      setError(data.error || 'Incorrect password.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center p-6">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <Image src="/images/logo-mark.jpg" alt="Purlieu" width={28} height={42} className="object-contain" />
          <span className="font-display font-semibold text-white tracking-widest uppercase text-lg">
            Purlieu
          </span>
        </div>

        <div className="bg-white rounded-sm p-8 border border-cream-deeper shadow-xl">
          <div className="flex items-center gap-2.5 mb-6">
            <Lock size={16} className="text-gold" />
            <h1 className="font-display font-semibold text-navy text-xl">Admin Access</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block font-sans text-xs font-semibold tracking-[0.12em] uppercase text-navy/50 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                className="w-full px-4 py-3 border border-cream-deeper focus:border-navy/40 focus:outline-none rounded-sm font-sans text-sm text-navy"
                placeholder="Enter admin password"
              />
            </div>

            {error && (
              <p className="font-sans text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 bg-navy text-white font-sans text-sm font-semibold rounded-sm hover:bg-navy-mid disabled:opacity-60 transition-colors"
            >
              {loading ? <Loader2 size={15} className="animate-spin" /> : null}
              {loading ? 'Verifying…' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center font-sans text-xs text-white/30 mt-6">
          Purlieu Management · Site Admin
        </p>
      </div>
    </div>
  )
}
