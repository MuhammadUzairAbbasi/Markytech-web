'use client'

// React Imports
import { useEffect, useRef, useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Grid from '@mui/material/Grid2'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'

// Declare global for reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      render: (element: HTMLElement, options: any) => number
      getResponse: (widgetId?: number) => string
      reset: (widgetId?: number) => void
    }
    onRecaptchaSuccess: () => void
    onRecaptchaExpired: () => void
  }
}

const ContactForm = () => {
  const recaptchaRef = useRef<HTMLDivElement>(null)
  const recaptchaWidgetId = useRef<number | null>(null)

  // State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  })

  const [recaptchaCompleted, setRecaptchaCompleted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)

  // Initialize reCAPTCHA callbacks
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onRecaptchaSuccess = () => {
        setRecaptchaCompleted(true)

        if (window.grecaptcha && recaptchaWidgetId.current !== null) {
          const token = window.grecaptcha.getResponse(recaptchaWidgetId.current)

          setRecaptchaToken(token)
        }
      }

      window.onRecaptchaExpired = () => {
        setRecaptchaCompleted(false)
        setRecaptchaToken(null)
      }
    }
  }, [])

  // Load and initialize reCAPTCHA
  useEffect(() => {
    if (typeof window === 'undefined' || !recaptchaRef.current) return

    const initRecaptcha = () => {
      // Check if grecaptcha is already loaded
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          if (recaptchaRef.current && !recaptchaWidgetId.current) {
            try {
              recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
                sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
                callback: 'onRecaptchaSuccess',
                'expired-callback': 'onRecaptchaExpired'
              })
            } catch (error) {
              console.error('Error rendering reCAPTCHA:', error)
            }
          }
        })
      } else {
        // Script not loaded yet, wait a bit and retry
        setTimeout(initRecaptcha, 100)
      }
    }

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="recaptcha/api.js"]')

    if (existingScript) {
      // Script exists, wait for it to be ready
      initRecaptcha()
    } else {
      // Load the script
      const script = document.createElement('script')

      script.src = 'https://www.google.com/recaptcha/api.js'
      script.async = true
      script.defer = true

      script.onload = () => {
        // Wait for grecaptcha to be ready
        initRecaptcha()
      }

      script.onerror = () => {
        console.error('Failed to load reCAPTCHA script')
        setSubmitStatus({
          type: 'error',
          message: 'Failed to load reCAPTCHA. Please refresh the page.'
        })
      }

      document.body.appendChild(script)
    }

    // Cleanup
    return () => {
      if (recaptchaWidgetId.current !== null && window.grecaptcha && window.grecaptcha.reset) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current)
        } catch (error) {
          console.error('Error resetting reCAPTCHA:', error)
        }
      }
    }
  }, [])

  // Handle form input change
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!recaptchaCompleted || !recaptchaToken) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete the reCAPTCHA verification before submitting.'
      })

      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
      })

      // Reset form

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        service: '',
        message: ''
      })
      setRecaptchaCompleted(false)
      setRecaptchaToken(null)

      // Reset reCAPTCHA

      if (window.grecaptcha && recaptchaWidgetId.current !== null) {
        try {
          window.grecaptcha.reset(recaptchaWidgetId.current)
        } catch (error) {
          console.error('Error resetting reCAPTCHA:', error)
        }
      }
    } catch (error: any) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to send message. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className='h-100'>
      <CardContent>
        <Typography variant='h4' className='mb-2'>
          Send a message
        </Typography>
        <Typography className='mb-6'>
          If you would like to discuss anything related to payment, account, licensing,
          <br className='d-none d-lg-block' />
          partnerships, or have pre-sales questions, you&#39;re at the right place.
        </Typography>

        {/* Status Alert */}
        {submitStatus.type && (
          <Alert
            severity={submitStatus.type}
            onClose={() => setSubmitStatus({ type: null, message: '' })}
            sx={{ mb: 4 }}
          >
            {submitStatus.message}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <CustomTextField
                fullWidth
                label='First Name'
                id='contact-form-firstname'
                name='first_name'
                placeholder='John'
                required
                value={formData.firstName}
                onChange={e => handleChange('firstName', e.target.value)}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CustomTextField
                fullWidth
                label='Last Name'
                id='contact-form-lastname'
                name='last_name'
                placeholder='Doe'
                required
                value={formData.lastName}
                onChange={e => handleChange('lastName', e.target.value)}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <CustomTextField
                fullWidth
                label='Email'
                id='contact-form-email'
                name='email'
                type='email'
                placeholder='johndoe@gmail.com'
                required
                value={formData.email}
                onChange={e => handleChange('email', e.target.value)}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth required disabled={isSubmitting}>
                <InputLabel id='contact-form-service-label'>Service</InputLabel>
                <Select
                  labelId='contact-form-service-label'
                  id='contact-form-service'
                  name='service'
                  value={formData.service}
                  label='Service'
                  onChange={(e: any) => handleChange('service', e.target.value)}
                >
                  <MenuItem value=''>Select a service</MenuItem>
                  <MenuItem value='web-development'>Custom Web Development</MenuItem>
                  <MenuItem value='app-development'>Mobile App Development</MenuItem>
                  <MenuItem value='ui ux design'>UI / UX Design</MenuItem>
                  <MenuItem value='digital-marketing'>Digital Marketing</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12 }}>
              <CustomTextField
                fullWidth
                multiline
                rows={7}
                label='Message'
                id='contact-form-message'
                name='message'
                placeholder='Write a message'
                required
                value={formData.message}
                onChange={e => handleChange('message', e.target.value)}
                disabled={isSubmitting}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <div ref={recaptchaRef} />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                type='submit'
                variant='contained'
                disabled={!recaptchaCompleted || isSubmitting}
                sx={{
                  opacity: recaptchaCompleted && !isSubmitting ? 1 : 0.6,
                  cursor: recaptchaCompleted && !isSubmitting ? 'pointer' : 'not-allowed',
                  '&:disabled': {
                    opacity: 0.6,
                    cursor: 'not-allowed'
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress size={20} sx={{ mr: 1 }} />
                    Sending...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm
