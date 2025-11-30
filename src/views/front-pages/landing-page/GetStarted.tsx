'use client'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { SystemMode } from '@core/types'

// Hooks Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Styles Imports
import styles from './styles.module.css'

const GetStarted = ({ mode }: { mode: SystemMode }) => {
  // Vars
  const getStartedImageLight = '/images/markytech/background/cta-bg-light.png'
  const getStartedImageDark = '/images/markytech/background/cta-bg-dark.png'

  // Hooks
  const getStartedImage = useImageVariant(mode, getStartedImageLight, getStartedImageDark)

  return (
    <section
      id='landingCTA'
      className={classnames('section-py landing-cta position-relative p-lg-0 pb-0', styles.ctaSection)}
      style={{ overflow: 'hidden' }}
    >
      <img src={getStartedImage} alt='background-image' className={styles.ctaBgImage} />
      <div className={classnames('container', styles.ctaContainer)}>
        <Grid container spacing={6} alignItems='center' className={styles.ctaGridContainer}>
          <Grid size={{ xs: 12, lg: 6 }} className={styles.ctaContentGrid}>
            <Typography variant='h3' className={classnames('text-primary fw-bold', styles.ctaTitle)}>
              Ready to Elevate Your Brand?
            </Typography>
            <Typography variant='h5' className={classnames('text-body', styles.ctaDescription)}>
              We craft digital solutions that drive results. Let's bring your vision to life.
            </Typography>
            <Button component={Link} href='#ContactUs' variant='contained' size='large' className={styles.ctaButton}>
              Let's Get Started
            </Button>
          </Grid>
          <Grid size={{ xs: 12, lg: 6 }} className={classnames(styles.ctaVisualGrid, styles.ctaVisualWrapper)}>
            <div className={styles.ctaVisualWrapper}>
              <svg
                className={styles.ctaMetricsSvg}
                viewBox='0 0 400 300'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                aria-label='Growing bar chart'
                style={{ maxWidth: '100%', height: 'auto' }}
              >
                <defs>
                  <linearGradient id='barPrimary' x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop offset='0%' stopColor='#7fe0f4' />
                    <stop offset='100%' stopColor='#52bccd' />
                  </linearGradient>
                  <linearGradient id='barAccent' x1='0%' y1='0%' x2='0%' y2='100%'>
                    <stop offset='0%' stopColor='#b6e3d4' />
                    <stop offset='100%' stopColor='#7fcbb6' />
                  </linearGradient>
                </defs>

                {/* Bars group */}
                <g>
                  {/* Bar 1 */}
                  <rect x='76' y='240' width='36' height='0' rx='6' fill='url(#barAccent)'>
                    <animate
                      attributeName='y'
                      dur='6s'
                      repeatCount='indefinite'
                      keyTimes='0;0.2;0.9;1'
                      values='240;196;196;240'
                    />
                    <animate
                      attributeName='height'
                      dur='6s'
                      repeatCount='indefinite'
                      keyTimes='0;0.2;0.9;1'
                      values='0;44;44;0'
                    />
                  </rect>
                  {/* Bar 2 */}
                  <rect x='126' y='240' width='36' height='0' rx='6' fill='url(#barPrimary)'>
                    <animate
                      attributeName='y'
                      dur='6s'
                      repeatCount='indefinite'
                      keyTimes='0;0.4;0.9;1'
                      values='240;170;170;240'
                    />
                    <animate
                      attributeName='height'
                      dur='6s'
                      repeatCount='indefinite'
                      keyTimes='0;0.4;0.9;1'
                      values='0;70;70;0'
                    />
                  </rect>
                  {/* Bar 3 */}
                  <rect x='176' y='240' width='36' height='0' rx='6' fill='url(#barAccent)'>
                    <animate
                      attributeName='y'
                      dur='6s'
                      repeatCount='indefinite'
                      keyTimes='0;0.6;0.9;1'
                      values='240;140;140;240'
                    />
                    <animate
                      attributeName='height'
                      dur='6s'
                      repeatCount='indefinite'
                      keyTimes='0;0.6;0.9;1'
                      values='0;100;100;0'
                    />
                  </rect>
                  {/* Bar 4 */}
                  <rect x='226' y='240' width='36' height='0' rx='6' fill='url(#barPrimary)'>
                    <animate
                      attributeName='y'
                      dur='6s'
                      repeatCount='indefinite'
                      keyTimes='0;0.8;0.95;1'
                      values='240;108;108;240'
                    />
                    <animate
                      attributeName='height'
                      dur='6s'
                      repeatCount='indefinite'
                      keyTimes='0;0.8;0.95;1'
                      values='0;132;132;0'
                    />
                  </rect>
                  {/* Bar 5 (highlight) */}
                  <rect x='276' y='240' width='36' height='0' rx='6' fill='url(#barPrimary)'>
                    <animate attributeName='y' dur='6s' repeatCount='indefinite' keyTimes='0;1;1' values='240;80;240' />
                    <animate
                      attributeName='height'
                      dur='6s'
                      repeatCount='indefinite'
                      keyTimes='0;1;1'
                      values='0;160;0'
                    />
                  </rect>
                </g>

                {/* Growth arrow */}
                <g>
                  <path
                    d='M80,210 L150,180 L190,160 L240,130 L300,95'
                    fill='none'
                    stroke='#52bccd'
                    strokeWidth='3'
                    strokeLinecap='round'
                    strokeDasharray='6 8'
                  >
                    <animate
                      attributeName='stroke-dashoffset'
                      values='60;0;60'
                      dur='3s'
                      begin='0.3s'
                      repeatCount='indefinite'
                    />
                  </path>
                  <polygon points='300,95 292,100 300,80 308,100' fill='#52bccd' opacity='0.9'>
                    <animate attributeName='opacity' values='0;1;0' dur='3s' begin='0.3s' repeatCount='indefinite' />
                  </polygon>
                </g>

                {/* Caption */}
                <text x='200' y='270' textAnchor='middle' fontSize='14' fill='#6c757d'>
                  Consistent growth with MarkyTech
                </text>
              </svg>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default GetStarted
