'use client'

// React Imports
import { useEffect } from 'react'

// Next Imports
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { useColorScheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import { useKeenSlider } from 'keen-slider/react'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'
import AppKeenSlider from '@/libs/styles/AppKeenSlider'

// Image paths - using Next.js static image paths from public folder
const sectionTitleIcon = '/images/markytech/background/section-title-icon.png'
const adastraLogo = '/images/markytech/Company Logo/Adastra.png'
const attorneyNeedsLight = '/images/markytech/Company Logo/attorney needs-light.png'
const attorneyNeedsDark = '/images/markytech/Company Logo/attorney needs.png'
const bringLogo = '/images/markytech/Company Logo/Bring.png'
const consolidataLogo = '/images/markytech/Company Logo/consolidata.png'
const supernovaLogo = '/images/markytech/Company Logo/supernova.png'
const dwaniqueLogo = '/images/markytech/Company Logo/dwanique.png'
const markyimportsLogo = '/images/markytech/Company Logo/markyimports.png'
const mynaturLogo = '/images/markytech/Company Logo/mynatur.png'
const qayamLogo = '/images/markytech/Company Logo/qayam.png'
const thrillerLogo = '/images/markytech/Company Logo/thriller.png'
const gmpaLogo = '/images/markytech/Company Logo/gmpa.png'
const houserLogo = '/images/markytech/Company Logo/houser.png'
const ibicoLogo = '/images/markytech/Company Logo/ibico.png'
const justusLogo = '/images/markytech/Company Logo/justus.png'
const khataLogo = '/images/markytech/Company Logo/khata.png'
const rendoorLogo = '/images/markytech/Company Logo/rendoor.png'
const signalrgbLogo = '/images/markytech/Company Logo/signalrgb.jpg'

// Client data interface
interface ClientLogo {
  id: string
  name: string
  logo: string
  darkLogo?: string // Optional dark theme logo
}

const clients: ClientLogo[] = [
  {
    id: 'adastra',
    name: 'Adastra',
    logo: adastraLogo
  },
  {
    id: 'attorney-needs',
    name: 'Attorney Needs',
    logo: attorneyNeedsLight,
    darkLogo: attorneyNeedsDark
  },
  {
    id: 'bring',
    name: 'Brrring',
    logo: bringLogo
  },
  {
    id: 'consolidata',
    name: 'Consolidata',
    logo: consolidataLogo
  },
  {
    id: 'supernova',
    name: 'Super Nova',
    logo: supernovaLogo
  },
  {
    id: 'dwanique',
    name: 'Dwanique',
    logo: dwaniqueLogo
  },
  {
    id: 'markyimports',
    name: 'MarkyImports',
    logo: markyimportsLogo
  },
  {
    id: 'mynatur',
    name: 'MyNatur',
    logo: mynaturLogo
  },
  {
    id: 'qayam',
    name: 'Qayam',
    logo: qayamLogo
  },
  {
    id: 'thriller',
    name: 'Thriller',
    logo: thrillerLogo
  },
  {
    id: 'gmpa',
    name: 'GMPA',
    logo: gmpaLogo
  },
  {
    id: 'houser',
    name: 'Houser',
    logo: houserLogo
  },
  {
    id: 'ibico',
    name: 'Ibico',
    logo: ibicoLogo
  },
  {
    id: 'justus',
    name: 'Justus',
    logo: justusLogo
  },
  {
    id: 'khata',
    name: 'Khata',
    logo: khataLogo
  },
  {
    id: 'rendoor',
    name: 'Rendoor',
    logo: rendoorLogo
  },
  {
    id: 'signalrgb',
    name: 'SignalRGB',
    logo: signalrgbLogo
  }
]

const OurClient = () => {
  const { mode } = useColorScheme()
  const isDarkTheme = mode === 'dark'

  // Keen Slider setup - matching clients-swiper.js config
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 20
      },
      breakpoints: {
        '(min-width: 768px)': {
          slides: {
            perView: 3,
            spacing: 20
          }
        },
        '(min-width: 1024px)': {
          slides: {
            perView: 5,
            spacing: 20
          }
        }
      }
    },
    [
      slider => {
        // Autoplay functionality - matching clients-swiper.js (3500ms delay)
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3500) // Matching 3500ms delay from clients-swiper.js
        }

        slider.on('created', nextTimeout)
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)

        // Pause on hover
        const sliderElement = slider.container

        sliderElement.addEventListener('mouseenter', () => {
          mouseOver = true
          clearNextTimeout()
        })
        sliderElement.addEventListener('mouseleave', () => {
          mouseOver = false
          nextTimeout()
        })
      }
    ]
  )

  return (
    <section id='landingClients' className={classnames('plb-[100px]', styles.fullWidthSection)}>
      <div className='container'>
        <div className='text-center mb-8'>
          <Chip size='small' variant='tonal' color='primary' label='Our Clients' />
        </div>
        <Typography variant='h3' className='text-center mb-4 position-relative fw-extrabold z-1'>
          <span className='position-relative'>
            People We Have Worked With
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
          We&apos;re proud to have partnered with these amazing companies and individuals.
        </Typography>
      </div>
      <div className={classnames(styles.swiperClientsLogosCarousel, 'overflow-hidden')}>
        <AppKeenSlider>
          <div ref={sliderRef} className='keen-slider'>
            {clients.map(client => (
              <div key={client.id} className='keen-slider__slide'>
                <div className={styles.clientLogoWrapper}>
                  <Image
                    src={isDarkTheme && client.darkLogo ? client.darkLogo : client.logo}
                    alt={client.name}
                    width={200}
                    height={80}
                    className={styles.clientLogoXl}
                  />
                </div>
              </div>
            ))}
          </div>
        </AppKeenSlider>
      </div>
    </section>
  )
}

export default OurClient
