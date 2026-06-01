'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <CheckCircle className="w-16 h-16 text-teal mx-auto mb-6" />
        <h3 className="font-display text-3xl text-navy mb-4">Message Received</h3>
        <p className="text-navy/70 text-lg">
          Thank you. We&apos;ll get back to you within 1-2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-sans text-sm font-medium text-navy mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-3.5 border border-cream-deeper focus:border-teal rounded-sm outline-none transition-all"
            placeholder="Alex Rivera"
          />
        </div>
        <div>
          <label className="block font-sans text-sm font-medium text-navy mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3.5 border border-cream-deeper focus:border-teal rounded-sm outline-none transition-all"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label className="block font-sans text-sm font-medium text-navy mb-2">
          Company / Organization
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-5 py-3.5 border border-cream-deeper focus:border-teal rounded-sm outline-none transition-all"
          placeholder="Acme Ventures"
        />
      </div>

      <div>
        <label className="block font-sans text-sm font-medium text-navy mb-2">
          How can we help you? <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-5 py-3.5 border border-cream-deeper focus:border-teal rounded-sm outline-none resize-y min-h-[140px] transition-all"
          placeholder="We're looking to expand into the Philippines and need support with market entry strategy and local partnerships..."
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-navy hover:bg-navy-dark text-white font-medium rounded-sm transition-all disabled:opacity-70 group"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
        <ArrowRight className="group-hover:translate-x-1 transition" />
      </button>

      <p className="text-xs text-navy/50 text-center">
        Or email us directly at <a href="mailto:info@purlieu.us" className="underline hover:text-navy">info@purlieu.us</a>
      </p>
    </form>
  )
}