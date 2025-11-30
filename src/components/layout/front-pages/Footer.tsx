'use client'

// MUI Imports
import Grid from '@mui/material/Grid2'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

import type { Mode } from '@core/types'

// Component Imports
import Link from '@components/Link'
import Logo from '@components/layout/shared/Logo'
import CustomTextField from '@core/components/mui/TextField'

// Hooks Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

// Styles Imports
import styles from './styles.module.css'

const Footer = ({ mode }: { mode: Mode }) => {
  // Vars
  const footerImageLight = '/images/markytech/background/footer-bg.png'
  const footerImageDark = '/images/markytech/background/footer-bg.png'

  // Hooks
  const dashboardImage = useImageVariant(mode, footerImageLight, footerImageDark)

  return (
    <footer className={frontLayoutClasses.footer}>
      <div className='relative'>
        <img src={dashboardImage} alt='footer bg' className='absolute inset-0 is-full bs-full object-cover -z-[1]' />
        <div className={classnames('plb-12 text-white', frontCommonStyles.layoutSpacing)}>
          <Grid container rowSpacing={10} columnSpacing={12}>
            <Grid size={{ xs: 12, lg: 5 }}>
              <div className='flex flex-col items-start gap-6'>
                <Link href='/'>
                  <Logo color='var(--mui-palette-common-white)' />
                </Link>
                <Typography color='white' className='md:max-is-[390px] opacity-[0.78]'>
                  MarkyTech is a creative digital agency that transforms ideas into powerful digital experiences. We
                  specialize in Web Development, Mobile App Development, UI / UX Design and Digital Marketing.
                </Typography>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 3, lg: 2 }}>
              <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                Explore
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography component={Link} href='/#AboutUs' color='white' className='opacity-[0.78]'>
                  About Us
                </Typography>
                <Link href='/#OurServices' className='flex items-center gap-[10px]'>
                  <Typography color='white' className='opacity-[0.78]'>
                    Services
                  </Typography>
                </Link>
                <Typography component={Link} href='/#Portfolio' color='white' className='opacity-[0.78]'>
                  Portfolio
                </Typography>
                <Typography component={Link} href='/#ContactUs' color='white' className='opacity-[0.78]'>
                  Contact Us
                </Typography>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 3, lg: 2 }}>
              <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                Our Services
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography
                  component={Link}
                  href='/agentic-ai'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  Agentic AI
                </Typography>
                <Typography
                  component={Link}
                  href='/web-service'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  Custom Web Development
                </Typography>
                <Typography
                  component={Link}
                  href='/mobileApp-service'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  Mobile App Development
                </Typography>
                <Typography
                  component={Link}
                  href='/ui-ux-service'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  UI / UX Design
                </Typography>
                <Typography
                  component={Link}
                  href='/digital-marketing-service'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  Digital Marketing
                </Typography>
              </div>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
              <Typography color='white' className='font-medium mbe-6 opacity-[0.92]'>
                Get in Touch
              </Typography>
              <div className='flex flex-col gap-4'>
                <Typography
                  component={Link}
                  href='https://share.google/g6ClPjofGmO4jsBFM'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  MarkyTech, Office # 303, Al-Khaleej Tower, Shaheed-e-Millat Rd, Bihar Muslim Society BMCHS Sharafabad,
                  Karachi, 74550, Pakistan
                </Typography>
                <Typography
                  component={Link}
                  href='mailto:info@markytech.com'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  info@markytech.com
                </Typography>
                <Typography
                  component={Link}
                  href='tel:+92 21 37120489'
                  target='_blank'
                  color='white'
                  className='opacity-[0.78]'
                >
                  +92 21 37120489
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='bg-[#016875]'>
        <div
          className={classnames(
            'flex flex-wrap items-center justify-center sm:justify-between gap-4 plb-[15px]',
            frontCommonStyles.layoutSpacing
          )}
        >
          <Typography className='text-white' variant='body2'>
            <span>{`© ${new Date().getFullYear()}, Made with `}</span>
            <span>{`❤️`}</span>
            <span>{` by `}</span>
            <Link href='https://markytech.com/' target='_blank' className='font-medium text-white'>
              Markytech
            </Link>
          </Typography>
          <div className='flex gap-1.5 items-center'>
            <IconButton component={Link} size='small' href='https://github.com/markytech' target='_blank'>
              <i className='tabler-brand-github-filled text-white text-lg' />
            </IconButton>
            <IconButton component={Link} size='small' href='https://www.facebook.com/markytech/' target='_blank'>
              <i className='tabler-brand-facebook-filled text-white text-lg' />
            </IconButton>
            <IconButton component={Link} size='small' href='https://instagram.com/markytech.official' target='_blank'>
              <i className='tabler-brand-instagram-filled text-white text-lg' />
            </IconButton>
            <IconButton component={Link} size='small' href='https://linkedin.com/company/markytech' target='_blank'>
              <i className='tabler-brand-linkedin-filled text-white text-lg' />
            </IconButton>
            <IconButton component={Link} size='small' href='https://x.com/markytech' target='_blank'>
              <i className='tabler-brand-twitter-filled text-white text-lg' />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
