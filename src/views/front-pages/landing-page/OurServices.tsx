'use client'

// React Imports
import { useEffect, useRef } from 'react'

// Next Imports
import Link from 'next/link'
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid2'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useColorScheme } from '@mui/material/styles'

// Image paths - using Next.js static image paths from public folder

const codeIcon = '/images/markytech/front pages/code.png'
const mobileIcon = '/images/markytech/front pages/mobile-app.png'
const uiIcon = '/images/markytech/front pages/ui.png'
const digitalMarketingIcon = '/images/markytech/front pages/digital-marketing.png'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Type definitions for VANTA
declare global {
  interface Window {
    THREE: any
    VANTA: {
      NET: (config: VantaNetConfig) => VantaEffect
    }
  }
}

interface VantaNetConfig {
  el: HTMLElement | string
  mouseControls?: boolean
  touchControls?: boolean
  gyroControls?: boolean
  speed?: number
  minHeight?: number
  minWidth?: number
  scale?: number
  scaleMobile?: number
  color?: number
  backgroundColor?: number
  points?: number
  maxDistance?: number
  spacing?: number
}

interface VantaEffect {
  destroy: () => void
  setOptions: (options: Partial<VantaNetConfig>) => void
}

// Service data array
interface ServiceItem {
  id: string
  href: string
  icon: string
  iconAlt: string
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    id: 'web',
    href: '/web-service',
    icon: codeIcon,
    iconAlt: 'Web',
    title: 'Custom Web Development',
    description: 'High-performance, responsive websites built with modern stacks.'
  },
  {
    id: 'mobile',
    href: '/mobileApp-service',
    icon: mobileIcon,
    iconAlt: 'Mobile',
    title: 'Mobile App Development',
    description: 'Native & cross‑platform apps focusing on performance and UX.'
  },
  {
    id: 'ui-ux',
    href: '/ui-ux-service',
    icon: uiIcon,
    iconAlt: 'UI/UX',
    title: 'UI / UX Design',
    description: 'User‑first design systems that improve engagement and conversions.'
  },
  {
    id: 'marketing',
    href: '/digital-marketing-service',
    icon: digitalMarketingIcon,
    iconAlt: 'Marketing',
    title: 'Digital Marketing',
    description: 'Social, PPC and growth campaigns that drive results.'
  }
]

const OurServices = () => {
  // Refs
  const agenticCardRef = useRef<HTMLDivElement>(null)
  const vantaEffectRef = useRef<VantaEffect | null>(null)

  // Hooks
  const { mode: muiMode } = useColorScheme()
  const isDarkTheme = muiMode === 'dark'

  // Load Three.js and VANTA scripts in order
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Load Three.js first (required by VANTA)
    const loadThree = () => {
      return new Promise<void>(resolve => {
        if (window.THREE) {
          resolve()
          
return
        }

        const threeScript = document.createElement('script')

        threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
        threeScript.async = true
        threeScript.onload = () => resolve()

        threeScript.onerror = () => {
          console.error('Failed to load Three.js')
          resolve() // Continue even if it fails
        }

        document.head.appendChild(threeScript)
      })
    }

    // Load VANTA after Three.js
    const loadVanta = () => {
      return new Promise<void>(resolve => {
        if (window.VANTA) {
          resolve()
          
return
        }

        const vantaScript = document.createElement('script')

        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js'
        vantaScript.async = true
        vantaScript.onload = () => resolve()

        vantaScript.onerror = () => {
          console.error('Failed to load VANTA')
          resolve()
        }

        document.body.appendChild(vantaScript)
      })
    }

    // Load scripts sequentially
    loadThree().then(() => loadVanta())
  }, [])

  // Initialize VANTA effect after scripts load
  useEffect(() => {
    let vantaInstance: VantaEffect | null = null

    const initVanta = () => {
      if (agenticCardRef.current && window.VANTA && window.THREE) {
        // Destroy existing instance if any
        if (vantaEffectRef.current) {
          vantaEffectRef.current.destroy()
          vantaEffectRef.current = null
        }

        const config: VantaNetConfig = {
          el: agenticCardRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          speed: 5.0,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: isDarkTheme ? 0xa09fb5 : 0xffffff,
          backgroundColor: isDarkTheme ? 0x026875 : 0x52bccc,
          points: 15.0,
          maxDistance: 25.0,
          spacing: 20.0
        }

        try {
          vantaInstance = window.VANTA.NET(config)
          vantaEffectRef.current = vantaInstance
        } catch (error) {
          console.error('Error initializing VANTA:', error)
        }
      }
    }

    // Wait for both THREE and VANTA to be available
    if (window.THREE && window.VANTA) {
      // Small delay to ensure everything is ready
      setTimeout(initVanta, 100)
    } else {
      // Poll for availability
      const checkReady = setInterval(() => {
        if (window.THREE && window.VANTA) {
          clearInterval(checkReady)
          setTimeout(initVanta, 100)
        }
      }, 100)

      // Cleanup interval after 15 seconds
      setTimeout(() => clearInterval(checkReady), 15000)
    }

    return () => {
      if (vantaInstance) {
        try {
          vantaInstance.destroy()
        } catch (error) {
          console.error('Error destroying VANTA:', error)
        }
      }
    }
  }, [isDarkTheme])

  return (
    <section id='OurServices' className={classnames('section-py', frontCommonStyles.layoutSpacing)}>
      <div className='container'>
        <div className='text-center mb-4'>
          <Chip size='small' variant='tonal' color='primary' label='What We Offer' />
        </div>
        <Typography variant='h4' className='text-center mb-3'>
          <span className='position-relative fw-extrabold z-1'>
            Digital Solutions & Agentic AI
            {/* <Image
              src={sectionTitleIcon}
              alt='section title icon'
              width={200}
              height={50}
              className={classnames(styles.sectionTitleImg, 'position-absolute object-fit-contain bottom-0 z-n1')}
            /> */}
          </span>
        </Typography>
        <Typography className='text-center mb-12'>
          A powerful mix of engineering, design, and intelligent automation.
        </Typography>

        {/* Row 2: Big Card (Agentic AI) + Feature Tiles */}
        <Grid container spacing={4} className='align-items-stretch'>
          {/* Big Card: Agentic AI */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Link href='/agentic-ai' className='text-decoration-none'>
              <Card className={classnames(styles.bigOfferCard, styles.agenticCard, 'h-100')} ref={agenticCardRef}>
                <CardContent
                  className={classnames(
                    'p-4 d-flex flex-column align-items-center justify-content-center text-center',
                    styles.agenticCardBody
                  )}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    minHeight: '100%'
                  }}
                >
                  <Typography
                    variant='h4'
                    className='mb-2'
                    sx={{
                      color: '#ffffff',
                      fontWeight: 900,
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                      textShadow: '0 2px 8px rgba(2, 104, 117, 0.5)',
                      position: 'relative',
                      zIndex: 11,
                      textAlign: 'center',
                      width: '100%'
                    }}
                  >
                    Agentic AI
                  </Typography>
                  <Typography
                    className='mb-0 text-center'
                    sx={{
                      color: '#ffffff',
                      textShadow: '0 1px 4px rgba(2, 104, 117, 0.4)',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      maxWidth: '90%',
                      position: 'relative',
                      zIndex: 11,
                      textAlign: 'center',
                      marginTop: '1rem'
                    }}
                  >
                    Automate workflows with autonomous agents: data extraction, content generation, lead qualification,
                    and customer support – securely integrated into your stack.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>

          {/* Feature tiles - Refactored with array mapping */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Grid container spacing={4}>
              {services.map(service => (
                <Grid key={service.id} size={{ xs: 6 }}>
                  <Link href={service.href} className='text-decoration-none d-block h-100'>
                    <div className={classnames(styles.featureTile, 'h-100 text-center')}>
                      <div className='mb-3 text-primary'>
                        <Image
                          src={service.icon}
                          alt={service.iconAlt}
                          width={64}
                          height={64}
                          className={styles.icon64}
                        />
                      </div>
                      <Typography variant='h6' className='mb-1'>
                        {service.title}
                      </Typography>
                      <Typography variant='body2' className='small mb-0'>
                        {service.description}
                      </Typography>
                    </div>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default OurServices
