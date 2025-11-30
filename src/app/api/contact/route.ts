import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY is not set')

    return false
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${secretKey}&response=${token}`
    })

    const data = await response.json()

    return data.success === true
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)

    return false
  }
}

// Send email using nodemailer
async function sendEmail(formData: {
  firstName: string
  lastName: string
  email: string
  service: string
  message: string
}) {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  })

  // Email content
  const mailOptions = {
    from: `"${formData.firstName} ${formData.lastName}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    replyTo: formData.email,
    to: 'muhammaduzair25k@gmail.com',
    subject: `New Contact Form Submission - ${formData.service}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #52bccd; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #52bccd; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #52bccd; }
            .footer { margin-top: 20px; padding: 10px; text-align: center; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${formData.firstName} ${formData.lastName}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${formData.email}</div>
              </div>
              <div class="field">
                <div class="label">Service:</div>
                <div class="value">${formData.service || 'Not specified'}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${formData.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the MarkyTech website contact form.</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      New Contact Form Submission
      
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Service: ${formData.service || 'Not specified'}
      
      Message:
      ${formData.message}
    `
  }

  // Send email
  const info = await transporter.sendMail(mailOptions)

  return info
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, service, message, recaptchaToken } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'All required fields must be filled' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA token is required' }, { status: 400 })
    }

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken)

    if (!isRecaptchaValid) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed. Please try again.' }, { status: 400 })
    }

    // Send email
    await sendEmail({
      firstName,
      lastName,
      email,
      service: service || 'Not specified',
      message
    })

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 })
  } catch (error: any) {
    console.error('Contact form error:', error)

    return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 })
  }
}
