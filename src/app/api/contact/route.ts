import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Purlieu Management <noreply@purlieu.us>',
      to: ['burt@purlieu.us'],
      replyTo: email,
      subject: `New Inquiry — ${name}${company ? ` · ${company}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #F8F6F1; margin: 0; padding: 24px; }
              .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 4px; overflow: hidden; border: 1px solid #EDE8DF; }
              .header { background: #0B2545; padding: 28px 32px; }
              .header-title { color: #ffffff; font-size: 20px; font-weight: 600; margin: 0; letter-spacing: 0.04em; }
              .header-sub { color: rgba(255,255,255,0.5); font-size: 12px; margin: 6px 0 0; letter-spacing: 0.08em; text-transform: uppercase; }
              .accent { display: block; width: 32px; height: 2px; background: #B8935A; margin-bottom: 14px; }
              .body { padding: 32px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #9CA3AF; margin-bottom: 5px; }
              .value { font-size: 15px; color: #0B2545; line-height: 1.6; }
              .message-box { background: #F8F6F1; border-left: 3px solid #B8935A; padding: 16px 20px; border-radius: 0 4px 4px 0; margin-top: 6px; }
              .footer { padding: 16px 32px; border-top: 1px solid #EDE8DF; font-size: 11px; color: #9CA3AF; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <span class="accent"></span>
                <p class="header-title">New Website Inquiry</p>
                <p class="header-sub">Purlieu Management — purlieu.us</p>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${name}</div>
                </div>
                ${company ? `
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${email}" style="color:#1A3F6F;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">
                    <div class="value">${message.replace(/\n/g, '<br />')}</div>
                  </div>
                </div>
              </div>
              <div class="footer">
                Submitted via purlieu.us · Reply directly to this email to respond to ${name}
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error('[Contact] Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('[Contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
