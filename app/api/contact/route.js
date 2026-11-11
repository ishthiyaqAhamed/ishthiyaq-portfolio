import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

const DEFAULT_GMAIL_USER = 'ishthiyaqahamed@gmail.com'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function stripControlChars(value) {
  if (typeof value !== 'string') return ''
  let out = ''
  for (const ch of value) {
    const code = ch.charCodeAt(0)
    if (code >= 0x20 && code !== 0x7f) {
      out += ch
    } else if (ch === '\t' || ch === '\n' || ch === '\r') {
      out += ' '
    }
  }
  return out.replace(/\s+/g, ' ').trim()
}

function normalizeMultiline(value) {
  if (typeof value !== 'string') return ''
  let out = ''
  for (const ch of value) {
    const code = ch.charCodeAt(0)
    if (ch === '\r') continue
    if (ch === '\n' || ch === '\t' || (code >= 0x20 && code !== 0x7f)) {
      out += ch
    }
  }
  return out.trim()
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 })
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 })
  }

  // Honeypot check to silently drop automated spam submissions
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 })
  }

  const name = stripControlChars(body.name)
  const email = stripControlChars(body.email).toLowerCase()
  const subject = stripControlChars(body.subject)
  const message = normalizeMultiline(body.message)

  if (!name) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  }
  if (name.length > 120) {
    return NextResponse.json({ error: 'Name must be 120 characters or fewer.' }, { status: 400 })
  }

  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  if (!subject) {
    return NextResponse.json({ error: 'Please enter a subject.' }, { status: 400 })
  }
  if (subject.length > 200) {
    return NextResponse.json({ error: 'Subject must be 200 characters or fewer.' }, { status: 400 })
  }

  if (!message) {
    return NextResponse.json({ error: 'Please enter your message.' }, { status: 400 })
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message must be 5000 characters or fewer.' }, { status: 400 })
  }

  const gmailUser = (process.env.GMAIL_USER || DEFAULT_GMAIL_USER).trim()
  const gmailAppPassword = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '')
  const recipientEmail = (process.env.CONTACT_TO_EMAIL || gmailUser || DEFAULT_GMAIL_USER).trim()

  if (!gmailAppPassword) {
    console.error('[contact] Missing GMAIL_APP_PASSWORD environment variable.')
    return NextResponse.json(
      { error: 'Direct message delivery is not configured yet. Please email ishthiyaqahamed@gmail.com directly.' },
      { status: 500 }
    )
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    const receivedAt = new Date().toUTCString()
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject)
    const safeMessageHtml = escapeHtml(message).replaceAll('\n', '<br />')

    await transporter.sendMail({
      from: {
        name: 'Portfolio Contact',
        address: gmailUser,
      },
      to: recipientEmail,
      replyTo: {
        name,
        address: email,
      },
      subject: `[Portfolio DM] ${subject}`,
      text: [
        'New Direct Message from your Portfolio (ishthiyaq.online)',
        '',
        `From: ${name} <${email}>`,
        `Subject: ${subject}`,
        `Received: ${receivedAt}`,
        '',
        'Message:',
        message,
        '',
        '---',
        `Reply directly to this email to respond to ${name} (${email}).`,
      ].join('\n'),
      html: `
        <div style="background:#050505;padding:32px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#f4f4f5;">
          <div style="max-width:600px;margin:0 auto;background:#0c0c0f;border:1px solid #27272a;border-radius:16px;overflow:hidden;">
            <div style="padding:24px 28px;border-bottom:1px solid #27272a;">
              <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#60a5fa;font-weight:600;margin-bottom:8px;">
                Portfolio Direct Message
              </div>
              <h1 style="margin:0;font-size:20px;line-height:1.35;color:#f4f4f5;">
                ${safeSubject}
              </h1>
            </div>
            <div style="padding:24px 28px;">
              <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
                <tr>
                  <td style="padding:6px 0;width:90px;font-size:12px;color:#a1a1aa;text-transform:uppercase;letter-spacing:1px;">From</td>
                  <td style="padding:6px 0;font-size:14px;color:#f4f4f5;font-weight:600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-size:12px;color:#a1a1aa;text-transform:uppercase;letter-spacing:1px;">Email</td>
                  <td style="padding:6px 0;font-size:14px;">
                    <a href="mailto:${safeEmail}" style="color:#60a5fa;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-size:12px;color:#a1a1aa;text-transform:uppercase;letter-spacing:1px;">Sent</td>
                  <td style="padding:6px 0;font-size:13px;color:#a1a1aa;">${escapeHtml(receivedAt)}</td>
                </tr>
              </table>
              <div style="background:#09090b;border:1px solid #27272a;border-radius:12px;padding:18px 20px;font-size:14px;line-height:1.7;color:#e4e4e7;">
                ${safeMessageHtml}
              </div>
              <p style="margin:20px 0 0;font-size:12px;color:#71717a;">
                Hit Reply in Gmail to respond directly to ${safeName} (${safeEmail}).
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (error) {
    console.error('[contact] Failed to deliver email via Gmail SMTP:', error)
    return NextResponse.json(
      { error: 'Unable to send message right now. Please try again or email ishthiyaqahamed@gmail.com directly.' },
      { status: 500 }
    )
  }
}

