// React Imports
import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { SystemMode } from '@core/types'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'
import Cubes from '@/components/react-bits/Cubes'
import Particles from '@/components/react-bits/Particles'
import DotGrid from '@/components/react-bits/DotGrid'

const HeroSection = ({ mode }: { mode: SystemMode }) => {
  // States
  const [transform, setTransform] = useState('')

  // Vars - Hero images matching Laravel structure
  const heroImages = [
    '/images/markytech/dashboard/markytech-hero-1.webp', // Base layer
    '/images/markytech/dashboard/markytech-hero-2.webp', // Overlay 1
    '/images/markytech/dashboard/markytech-hero-3.webp' // Overlay 2
  ]
  const heroSectionBgLight = '/images/front-pages/landing-page/hero-bg-light.png'
  const heroSectionBgDark = '/images/front-pages/landing-page/hero-bg-dark.png'
  const heroThemeImageLight = '/images/markytech/dashboard/markytech-hero-light-2.webp'
  const heroThemeImageDark = '/images/markytech/dashboard/markytech-hero-dark-2.webp'

  // Hooks
  const { mode: muiMode } = useColorScheme()
  const heroSectionBg = useImageVariant(mode, heroSectionBgLight, heroSectionBgDark)
  const heroThemeImage = useImageVariant(mode, heroThemeImageLight, heroThemeImageDark)

  const _mode = (muiMode === 'system' ? mode : muiMode) || mode
  const isAboveLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'))
  const isAboveXL = useMediaQuery('(min-width: 1200px)')

  // Load dotlottie web component script
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const existingScript = document.querySelector('script[src*="dotlottie-wc"]')

      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js'
        script.type = 'module'
        document.body.appendChild(script)

        return () => {
          const scriptToRemove = document.querySelector('script[src*="dotlottie-wc"]')
          if (scriptToRemove) {
            document.body.removeChild(scriptToRemove)
          }
        }
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && isAboveXL) {
      const heroSection = document.getElementById('home') // Keep using 'home' as per Vuexy
      const animationImg = document.querySelectorAll('.hero-dashboard-img')
      const animationElements = document.querySelectorAll('.hero-elements-img')
      const nav = document.querySelector('.layout-navbar')

      // Define z-depths for each layer (in rem) - matching Laravel
      const zDepths = [1, 2, 3]

      const handleHeroMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent
        // Apply translateZ to overlay elements
        animationElements.forEach((layer, index) => {
          const zDepth = zDepths[index] || zDepths[zDepths.length - 1]
          ;(layer as HTMLElement).style.transform = `translateZ(${zDepth}rem)`
        })
        // Apply 3D transform to container
        const x = (window.innerWidth - mouseEvent.pageX * 2) / 100
        const y = (window.innerHeight - mouseEvent.pageY * 2) / 100
        animationImg.forEach(layer => {
          ;(layer as HTMLElement).style.transform =
            `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`
        })
      }

      const handleNavMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent
        // Different z-depth for navbar hover
        animationElements.forEach((layer, index) => {
          const zDepth = `${(index + 1) * 0.5}rem`
          ;(layer as HTMLElement).style.transform = `translateZ(${zDepth})`
        })
        const x = (window.innerWidth - mouseEvent.pageX * 2) / 100
        const y = (window.innerHeight - mouseEvent.pageY * 2) / 100
        animationImg.forEach(layer => {
          ;(layer as HTMLElement).style.transform =
            `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`
        })
      }

      const handleMouseOut = () => {
        animationElements.forEach(layer => {
          ;(layer as HTMLElement).style.transform = 'translateZ(0)'
        })
        animationImg.forEach(layer => {
          ;(layer as HTMLElement).style.transform = 'perspective(1200px) scale(1) rotateX(0) rotateY(0)'
        })
      }

      if (heroSection) {
        heroSection.addEventListener('mousemove', handleHeroMouseMove)
        heroSection.addEventListener('mouseout', handleMouseOut)
      }

      if (nav) {
        nav.addEventListener('mousemove', handleNavMouseMove)
      }

      return () => {
        if (heroSection) {
          heroSection.removeEventListener('mousemove', handleHeroMouseMove)
          heroSection.removeEventListener('mouseout', handleMouseOut)
        }
        if (nav) {
          nav.removeEventListener('mousemove', handleNavMouseMove)
        }
      }
    }
  }, [isAboveXL])

  return (
    <section id='home' className='overflow-hidden pbs-[75px] -mbs-[75px] relative'>
      <img
        src={heroSectionBg}
        alt='hero-bg'
        className={classnames('bs-[95%] sm:bs-[85%] md:bs-[80%]', styles.heroSectionBg, {
          [styles.bgLight]: _mode === 'light',
          [styles.bgDark]: _mode === 'dark'
        })}
      />
      <div className='absolute inset-0'>
        {/* <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        /> */}
        <DotGrid
          baseColor={_mode === 'dark' ? '#1d3139' : '#a8d5c4'}
          activeColor={_mode === 'dark' ? '#59B9D7' : '#52bccd'}
          dotSize={4}
          gap={15}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div className={classnames('pbs-[88px] overflow-hidden', frontCommonStyles.layoutSpacing)}>
        <div className='md:max-is-[550px] mbs-0 mbe-7 mli-auto text-center relative'>
          {/* Hero Title - Futuristic Solutions */}
          <div className={styles.heroTitle}>
            <Typography className={styles.heroTitleFuturistic}>Futuristic</Typography>
            <Typography className={styles.heroTitleSolutions}>Solutions</Typography>
          </div>

          {/* Hero Subtitle */}
          <Typography className={styles.heroSubTitle} color='text.primary'>
            We craft cutting-edge web application with innovative technology,
            <br className='hidden lg:block' />
            stunning visuals, and seamless user experiences that push the
            <br className='hidden lg:block' />
            boundaries of digital possibility
          </Typography>

          {/* Hero Buttons */}
          <div className={styles.heroButtonContainer}>
            <span className={styles.heroButtonItem}>
              Contact Us
              <img
                src='/images/markytech/front pages/Join-community-arrow.png'
                alt='Join community arrow'
                height='48'
                width='60'
              />
            </span>
            <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
              <Button component={Link} href='/#ContactUs' size='large' variant='contained' color='primary'>
                Start Your Project
              </Button>
              <Button component={Link} href='/#Portfolio' size='large' variant='outlined' color='primary'>
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Dashboard Images with 3D Animation - Matching Laravel Structure */}
      <div id='heroDashboardAnimation' className='hero-animation-img'>
        <div id='heroAnimationImg' className='position-relative hero-dashboard-img'>
          {/* markytech-hero-2 - lowest z-index: 1 (bottom layer) */}
          <Image
            src={heroImages[1]}
            alt='hero dashboard 2'
            width={800}
            height={600}
            className='animation-img position-relative'
            style={{
              maxWidth: '100%',
              height: 'auto',
              width: '100%',
              display: 'block',
              zIndex: 1,
              visibility: 'visible'
            }}
          />
          {/* markytech-hero-1 - z-index: 2 */}
          <Image
            src={heroImages[0]}
            alt='hero dashboard 1'
            width={800}
            height={600}
            className='position-absolute hero-elements-img animation-img'
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              maxWidth: '100%',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              zIndex: 2,
              pointerEvents: 'none'
            }}
          />
          {/* markytech-hero-light-2/markytech-hero-dark-2 - z-index: 3 */}
          <Image
            src={heroThemeImage}
            alt='hero dashboard theme'
            width={800}
            height={600}
            className='position-absolute hero-elements-img animation-img'
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              maxWidth: '100%',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              zIndex: 3,
              pointerEvents: 'none'
            }}
          />
          {/* markytech-hero-3 - highest z-index: 4 (top layer) */}
          <Image
            src={heroImages[2]}
            alt='hero dashboard 3'
            width={800}
            height={600}
            className='position-absolute hero-elements-img animation-img'
            style={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              maxWidth: '100%',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              zIndex: 4,
              pointerEvents: 'none'
            }}
          />
        </div>
        {/* Wave Animation Background - Matching Laravel */}
        <dotlottie-wc src='/images/markytech/lottie/wave-2.json' id='waveAnimation' autoplay loop />
      </div>
      <div className='landing-hero-blank position-relative' style={{ paddingBlockStart: '15rem', height: '10px' }} />
    </section>
  )
}

export default HeroSection
