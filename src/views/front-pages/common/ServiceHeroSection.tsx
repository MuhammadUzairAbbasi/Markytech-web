'use client'

// React Imports
import { ReactNode } from 'react'
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import { useColorScheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { SystemMode } from '@core/types'

// Styles Imports
import styles from './styles.module.css'
import Squares from '@/components/react-bits/Squares'

interface ServiceHeroSectionProps {
  mode: SystemMode
  title1: string
  title2: string
  description: string
  buttonText?: string
  buttonHref?: string
  graphic: ReactNode // SVG or any graphic content
}

const ServiceHeroSection = ({
  mode,
  title1,
  title2,
  description,
  buttonText = 'Contact Us',
  buttonHref = '#ContactUs',
  graphic
}: ServiceHeroSectionProps) => {
  // Hooks
  const { mode: muiMode } = useColorScheme()
  const _mode = (muiMode === 'system' ? mode : muiMode) || mode

  return (
    <section
      id='hero-animation'
      className={classnames(styles.serviceHeroSection, 'overflow-hidden relative', {
        [styles.serviceHeroSectionDark]: _mode === 'dark'
      })}
    >
      <div className='absolute inset-0'>
        <Squares
          direction='diagonal'
          speed={0.5}
          borderColor={_mode === 'dark' ? '#1d3139' : '#a8d5c4'}
          squareSize={40}
          hoverFillColor={_mode === 'dark' ? '#59B9D7' : '#52bccd'}
        />
      </div>
      <div className='container relative'>
        <Grid container spacing={6} alignItems='center'>
          {/* Content Column */}
          <Grid size={{ xs: 12, lg: 6 }} className='pt-10'>
            <div className={styles.serviceHeroContent}>
              <Typography
                variant='h1'
                className={styles.serviceHeroTitle1}
                sx={{
                  fontSize: { xs: '2.3rem', sm: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 3
                }}
              >
                {title1}
              </Typography>
              <Typography
                variant='h2'
                className={styles.serviceHeroTitle2}
                sx={{
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '4rem' },
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#52bccd',
                  mb: 4
                }}
              >
                {title2}
              </Typography>
              <Typography
                variant='body1'
                className={styles.serviceHeroDescription}
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1rem', md: '1.2rem' },
                  lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
                  color: 'text.primary',
                  opacity: 0.8,
                  mb: 5
                }}
              >
                {description}
              </Typography>
              <Button
                component={Link}
                href={buttonHref}
                variant='contained'
                size='large'
                className={styles.serviceHeroButton}
                sx={{
                  backgroundColor: '#52bccd',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                  padding: { xs: '0.6rem 1.5rem', sm: '0.75rem 2rem', md: '0.75rem 3rem' },
                  '&:hover': {
                    backgroundColor: '#3fa5b8'
                  }
                }}
              >
                {buttonText}
              </Button>
            </div>
          </Grid>

          {/* Graphic Column */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <div className={styles.serviceHeroGraphic}>{graphic}</div>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default ServiceHeroSection
