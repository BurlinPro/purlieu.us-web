import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import { Mail, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Purlieu Management',
  description: 'Start a conversation about your market expansion goals with Purlieu Management.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="block w-16 h-0.5 bg-teal mx-auto mb-6" />
          <h1 className="font-display font-semibold text-5xl md:text-6xl leading-tight text-navy mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-xl text-navy/70 leading-relaxed">
            Ready to explore new markets or scale your business across borders? 
            We respond to every inquiry personally within 1–2 business days.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-lg mx-auto">
          <ContactForm />
        </div>

        {/* Direct Contact Info */}
        <div className="mt-20 text-center">
          <p className="font-sans text-sm uppercase tracking-widest text-navy/50 mb-4">
            Or reach us directly
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-navy">
            <a 
              href="mailto:info@purlieu.us" 
              className="flex items-center gap-3 hover:text-teal transition-colors"
            >
              <Mail size={20} />
              <span>info@purlieu.us</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/burtoncrapps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-teal transition-colors"
            >
              <Users size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}