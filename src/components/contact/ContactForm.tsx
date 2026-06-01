'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

const initial: FormState = { name: '', email: '', company: '', message: '' }

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data?.error || 'Submission failed.')
      }

      setStatus('success')
      setForm(initial)
    } catch (err: unknown) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-16 px-6">
        <CheckCircle size={48} className="text-gold mb-6" strokeWidth={1.5} />
        <h3 className="font-display font-semibold text-navy text-3xl mb-3">
          Message Received
        </h3>
        <p className="font-sans text-base text-navy/60 max-w-sm leading-relaxed">
          Thank you for reaching out. Burton reviews all inquiries personally and
          will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">

      {/* Name + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-sans text-xs font-semibold tracking-[0.12em] uppercase text-navy/60 mb-2">
            Name <span className="text-gold">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 bg-white border border-cream-deeper focus:border-navy/40 focus:outline-none rounded-sm font-sans text-sm text-navy placeholder:text-navy/30 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="company" className="block font-sans text-xs font-semibold tracking-[0.12em] uppercase text-navy/60 mb-2">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Company or organization"
            className="w-full px-4 py-3 bg-white border border-cream-deeper focus:border-navy/40 focus:outline-none rounded-sm font-sans text-sm text-navy placeholder:text-navy/30 transition-colors"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-sans text-xs font-semibold tracking-[0.12em] uppercase text-navy/60 mb-2">
          Email <span className="text-gold">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 bg-white border border-cream-deeper focus:border-navy/40 focus:outline-none rounded-sm font-sans text-sm text-navy placeholder:text-navy/30 transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-sans text-xs font-semibold tracking-[0.12em] uppercase text-navy/60 mb-2">
          Message <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe what you're working on and how Purlieu might help..."
          className="w-full px-4 py-3 bg-white border border-cream-deeper focus:border-navy/40 focus:outline-none rounded-sm font-sans text-sm text-navy placeholder:text-navy/30 transition-colors resize-none"
        />
      </div>

      {/* Error */}
      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-sm">
          <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
          <p className="font-sans text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-navy text-white font-sans text-sm font-semibold tracking-wide rounded-sm hover:bg-navy-mid disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message
          </>
        )}
      </button>

      <p className="font-sans text-xs text-navy/40">
        All inquiries are reviewed personally by Burton Crapps.
      </p>
    </form>
  )
}
