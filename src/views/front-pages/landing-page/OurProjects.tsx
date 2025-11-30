'use client'

// React Imports
import { useEffect } from 'react'

// Next Imports
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import useMediaQuery from '@mui/material/useMediaQuery'
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
const backgroundImage = '/images/markytech/resource/backgroundd.png'
const backgroundImage1 = '/images/markytech/resource/background1.jpg'
const backgroundImage2 = '/images/markytech/resource/background11.jpg'
const backgroundImage3 = '/images/markytech/resource/bg.jpg'
const adastraProject = '/images/markytech/resource/adastra.png'
const adastraLogo = '/images/markytech/Company Logo/Adastra.png'
const rendoorProject = '/images/markytech/projects/rendoor.png'
const rendoorLogo = '/images/markytech/Company Logo/rendoor.png'
const justusProject = '/images/markytech/projects/justus 1.png'
const justusLogo = '/images/markytech/Company Logo/justus.png'
const gmpaProject = '/images/markytech/projects/gmpa1.png'
const gmpaLogo = '/images/markytech/Company Logo/gmpa.png'
const mynaturProject = '/images/markytech/projects/my natur 1.png'
const mynaturLogo = '/images/markytech/Company Logo/mynatur.png'
const ibicoProject = '/images/markytech/projects/ibico1.png'
const ibicoLogo = '/images/markytech/Company Logo/ibico.png'
const qayamProject = '/images/markytech/projects/qayam1.png'
const qayamLogo = '/images/markytech/Company Logo/qayam.png'
const consolidataProject = '/images/markytech/projects/consolidata1.png'
const consolidataLogo = '/images/markytech/Company Logo/consolidata.png'
const bringProject = '/images/markytech/projects/bring 1.png'
const bringLogo = '/images/markytech/Company Logo/Bring.png'
const thrillerProject = '/images/markytech/projects/thriller1.png'
const thrillerLogo = '/images/markytech/Company Logo/thriller.png'
const houserProject = '/images/markytech/projects/houser 1.png'
const houserLogo = '/images/markytech/Company Logo/houser.png'
const khataAppProject = '/images/markytech/projects/khata app.png'
const khataAppLogo = '/images/markytech/Company Logo/khata.png'
const markyImportsProject = '/images/markytech/projects/markyimports1.png'
const markyImportsLogo = '/images/markytech/Company Logo/markyimports.png'
const dwaniqueProject = '/images/markytech/projects/dwanique1.png'
const dwaniqueLogo = '/images/markytech/Company Logo/dwanique.png'

// Project data interface
interface TechIcon {
  name: string
  svg: React.ReactNode
}

interface Project {
  id: string
  number: string
  title: string
  description: string
  backgroundImage: string // Background/base layer image
  projectImage: string // Middle layer - project image
  companyLogo: string // Top layer - company logo
  logoTop: string
  techStack: TechIcon[]
}

import {
  ReactIcon,
  NodeIcon,
  AWSIcon,
  DotNetIcon,
  ReactNativeIcon,
  NextJSIcon,
  BootstrapIcon,
  VueJsIcon,
  mysqlIcon,
  PhpIcon,
  wordpressIcon,
  googlecloudIcon,
  TypescriptIcon,
  LaravelIcon,
  firebaseIcon,
  swiftIcon
} from '@/components/tech-stack-icons'

// Assign lowercase components to uppercase variables for JSX usage
const MySQLIcon = mysqlIcon
const WordPressIcon = wordpressIcon
const GoogleCloudIcon = googlecloudIcon
const FirebaseIcon = firebaseIcon
const SwiftIcon = swiftIcon

// Project data with proper image imports
const projects: Project[] = [
  {
    id: 'adastra',
    number: '01',
    title: 'Ad Astra',
    description:
      'The Ad Astra mobile application, developed by MarkyTech, is a powerful, user-friendly tool designed to streamline and elevate the language access experience for both clients and interpreters. Built with integrating through AWS Connect.',
    backgroundImage: backgroundImage,
    projectImage: adastraProject,
    companyLogo: adastraLogo,
    logoTop: '-4rem',
    techStack: [
      { name: 'React', svg: <ReactIcon /> },
      { name: 'DotNet', svg: <DotNetIcon /> },
      { name: 'AWS', svg: <AWSIcon /> }
    ]
  },
  {
    id: 'rendoor',
    number: '02',
    title: 'Rendoor',
    description:
      'Multi role property services platform designed to connect homeowners, builders, service providers, and real estate agents under one digital ecosystem. It streamlines service requests, quotations, job assignments, and compliance through mobile and web apps tailored to each role.',
    backgroundImage: backgroundImage1,
    projectImage: rendoorProject,
    companyLogo: rendoorLogo,
    logoTop: '-2rem',
    techStack: [
      { name: 'React Native', svg: <ReactNativeIcon /> },
      { name: 'Node.js', svg: <NodeIcon /> }
    ]
  },
  {
    id: 'justus',
    number: '03',
    title: 'Justus',
    description:
      'Blind Justus is an AI-driven app that empowers citizens in legal situations with audio-enhanced case law, AI transcription, video recording, English–Spanish translation, and quick attorney access.',
    backgroundImage: backgroundImage2,
    projectImage: justusProject,
    companyLogo: justusLogo,
    logoTop: '-2.5rem',
    techStack: [
      { name: 'React', svg: <ReactIcon /> },
      { name: 'Node.js', svg: <NodeIcon /> }
    ]
  },
  {
    id: 'gmpa',
    number: '04',
    title: 'GMPA',
    description:
      'MarkyTech had the privilege of partnering with a global consortium of climate research institutions to bring the Global Mitigation Potential Atlas (GMPA) to life — a transformative digital product designed to catalyze global climate action.',
    backgroundImage: backgroundImage3,
    projectImage: gmpaProject,
    companyLogo: gmpaLogo,
    logoTop: '-4rem',
    techStack: [
      { name: 'Next.js', svg: <NextJSIcon /> },
      { name: 'Node.js', svg: <NodeIcon /> }
    ]
  },
  {
    id: 'mynatur',
    number: '05',
    title: 'My Natur',
    description:
      'This project helps users donate to environmental foundations by calculating their carbon footprint through an onboarding process based on lifestyle factors like travel, diet, home size, and shopping habits.',
    backgroundImage: backgroundImage,
    projectImage: mynaturProject,
    companyLogo: mynaturLogo,
    logoTop: '-3.5rem',
    techStack: [
      { name: 'React', svg: <ReactIcon /> },
      { name: 'Next.js', svg: <NextJSIcon /> },
      { name: 'Bootstrap', svg: <BootstrapIcon /> }
    ]
  },
  {
    id: 'ibico',
    number: '06',
    title: 'Ibico',
    description:
      'A complete ERP system that provides end to end functionality from master data to reporting along with inventory, claims, deliveries, returns, asset management, and ledger.',
    backgroundImage: backgroundImage1,
    projectImage: ibicoProject,
    companyLogo: ibicoLogo,
    logoTop: '-4rem',
    techStack: [
      { name: 'Vue.js', svg: <VueJsIcon /> },
      { name: 'DotNet', svg: <DotNetIcon /> },
      { name: 'MySQL', svg: <MySQLIcon /> }
    ]
  },
  {
    id: 'qayam',
    number: '07',
    title: 'Qayam Hunza',
    description:
      'The Hotel Management system is a comprehensive web application designed to streamline hotel operations and enhance guest management. Below are features that were added for 360 hotel management.',
    backgroundImage: backgroundImage2,
    projectImage: qayamProject,
    companyLogo: qayamLogo,
    logoTop: '-3rem',
    techStack: [
      { name: 'React', svg: <ReactIcon /> },
      { name: 'PHP', svg: <PhpIcon /> },
      { name: 'Bootstrap', svg: <BootstrapIcon /> },
      { name: 'MySQL', svg: <MySQLIcon /> }
    ]
  },
  {
    id: 'consolidata',
    number: '08',
    title: 'Consolidata',
    description:
      'Consolidata is a versatile online tool designed for the creation of dynamic, interactive dashboard reports. This innovative platform allows users to effortlessly source data from various platforms such as Facebook Marketplace, Google Ads, and GoHighLevel.',
    backgroundImage: backgroundImage3,
    projectImage: consolidataProject,
    companyLogo: consolidataLogo,
    logoTop: '-3rem',
    techStack: [
      { name: 'React', svg: <ReactIcon /> },
      { name: 'PHP', svg: <PhpIcon /> },
      { name: 'MySQL', svg: <MySQLIcon /> },
      { name: 'WordPress', svg: <WordPressIcon /> },
      { name: 'Google Cloud', svg: <GoogleCloudIcon /> }
    ]
  },
  {
    id: 'bring',
    number: '09',
    title: 'Bring',
    description:
      'Brrring connects Travelers and Buyers, enabling secure product delivery across locations. Travelers earn commissions by delivering requested items, while Buyers post requests, negotiate terms, and track deliveries in real time.',
    backgroundImage: backgroundImage,
    projectImage: bringProject,
    companyLogo: bringLogo,
    logoTop: '-3rem',
    techStack: [
      { name: 'React', svg: <ReactIcon /> },
      { name: 'PHP', svg: <PhpIcon /> },
      { name: 'TypeScript', svg: <TypescriptIcon /> },
      { name: 'MySQL', svg: <MySQLIcon /> }
    ]
  },
  {
    id: 'thriller',
    number: '10',
    title: 'Thriller',
    description:
      'Thriller is an online e-commerce platform, allowing users to buy, sell, or bid on various branded products.',
    backgroundImage: backgroundImage1,
    projectImage: thrillerProject,
    companyLogo: thrillerLogo,
    logoTop: '-4.5rem',
    techStack: [
      { name: 'WordPress', svg: <WordPressIcon /> },
      { name: 'Laravel', svg: <LaravelIcon /> }
    ]
  },
  {
    id: 'khata-app',
    number: '11',
    title: 'Khata App',
    description:
      'KhataApp is an offline-first mobile app for managing personal and business ledgers. It simplifies expense tracking, balance management, and transaction recording — all from your smartphone.',
    backgroundImage: backgroundImage2,
    projectImage: khataAppProject,
    companyLogo: khataAppLogo,
    logoTop: '-2.5rem',
    techStack: [
      { name: 'React', svg: <ReactIcon /> },
      { name: 'AWS', svg: <AWSIcon /> }
    ]
  },
  {
    id: 'marky-imports',
    number: '12',
    title: 'Marky Imports',
    description:
      'Marky Imports is a user-friendly platform that simplifies car imports. It lets users explore import cars with detailed specs and images, request personalized quotes, and connect easily with trusted dealers.',
    backgroundImage: backgroundImage3,
    projectImage: markyImportsProject,
    companyLogo: markyImportsLogo,
    logoTop: '-3.5rem',
    techStack: [
      { name: 'PHP', svg: <PhpIcon /> },
      { name: 'MySQL', svg: <MySQLIcon /> },
      { name: 'Bootstrap', svg: <BootstrapIcon /> }
    ]
  },
  {
    id: 'dwanique',
    number: '13',
    title: 'Dwanique',
    description:
      'Dwanique Autosales is a modern car dealership platform that lets users browse vehicles with detailed specs, prices, and images. It simplifies buying with comparisons, filters, and easy dealer connections.',
    backgroundImage: backgroundImage,
    projectImage: dwaniqueProject,
    companyLogo: dwaniqueLogo,
    logoTop: '-4rem',
    techStack: [
      { name: 'React', svg: <ReactIcon /> },
      { name: 'MySQL', svg: <MySQLIcon /> },
      { name: 'Bootstrap', svg: <BootstrapIcon /> },
      { name: 'AWS', svg: <AWSIcon /> },
      { name: 'Node.js', svg: <NodeIcon /> }
    ]
  },
  {
    id: 'houser',
    number: '14',
    title: 'Houser',
    description:
      'The Houser is a mobile app that helps users evaluate and rank properties through personalized questions. It allows custom scoring for each preference, enabling a tailored and insightful property assessment.',
    backgroundImage: backgroundImage1,
    projectImage: houserProject,
    companyLogo: houserLogo,
    logoTop: '-3rem',
    techStack: [
      { name: 'Firebase', svg: <FirebaseIcon /> },
      { name: 'Swift', svg: <SwiftIcon /> }
    ]
  }
]

const OurProjects = () => {
  const { mode } = useColorScheme()
  const isAboveXL = useMediaQuery('(min-width: 1200px)')
  const _mode = mode || 'light'

  // Keen Slider setup - matching portfolio-swiper.js config
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
            perView: 1,
            spacing: 20
          }
        },
        '(min-width: 1024px)': {
          slides: {
            perView: 1,
            spacing: 20
          }
        }
      }
    },
    [
      slider => {
        // Autoplay functionality - matching portfolio-swiper.js (4500ms delay)
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
          }, 1000000) // Matching 4500ms delay from portfolio-swiper.js
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

  // Portfolio 3D parallax animation setup - matching HeroSection
  useEffect(() => {
    if (typeof window !== 'undefined' && isAboveXL) {
      const portfolioSection = document.getElementById('Portfolio')
      const animationImg = document.querySelectorAll('.hero-dashboard-img')
      const animationElements = document.querySelectorAll('.hero-elements-img')
      const nav = document.querySelector('.layout-navbar')

      // Define z-depths for each layer (in rem) - matching HeroSection
      const zDepths = [1, 3] // project image: 1rem, logo: 2rem

      const handlePortfolioMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent


        // Apply translateZ to overlay elements
        animationElements.forEach((layer, index) => {
          const zDepth = zDepths[index] || zDepths[zDepths.length - 1]

          ;(layer as HTMLElement).style.transform = `translateZ(${zDepth}rem)`
        })

        // Apply 3D transform to container
        const x = (window.innerWidth - mouseEvent.pageX * 2) / 180
        const y = (window.innerHeight - mouseEvent.pageY * 2) / 180

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

      if (portfolioSection) {
        portfolioSection.addEventListener('mousemove', handlePortfolioMouseMove)
        portfolioSection.addEventListener('mouseout', handleMouseOut)
      }

      if (nav) {
        nav.addEventListener('mousemove', handleNavMouseMove)
      }

      return () => {
        if (portfolioSection) {
          portfolioSection.removeEventListener('mousemove', handlePortfolioMouseMove)
          portfolioSection.removeEventListener('mouseout', handleMouseOut)
        }

        if (nav) {
          nav.removeEventListener('mousemove', handleNavMouseMove)
        }
      }
    }
  }, [isAboveXL])

  return (
    <section id='Portfolio' className={classnames('plb-[100px]', frontCommonStyles.layoutSpacing)}>
      <div className='container'>
        <div className='text-center mb-4'>
          <Chip size='small' variant='tonal' color='primary' label='Featured Projects' />
        </div>
        <Typography variant='h4' className='text-center mb-3 position-relative fw-extrabold z-1'>
          <span className='position-relative'>Our Featured Projects</span>
        </Typography>
        <Typography className='text-center mb-12'>
          Explore our portfolio of successful projects and innovative solutions.
        </Typography>

        <div className={classnames(styles.swiperProjectsCarousel, 'overflow-hidden')}>
          <AppKeenSlider>
            <div ref={sliderRef} className='keen-slider'>
              {projects.map((project, index) => (
                <div key={project.id} className='keen-slider__slide'>
                  <div className={styles.projectShowcaseCard}>
                    <div className={styles.projectRow}>
                      <div
                        id={`projectDashboardAnimation-${index}`}
                        className='hero-animation-img'
                        style={{ width: '100%', height: '100%' }}
                      >
                        <div
                          id={`projectAnimationImg-${index}`}
                          className='position-relative hero-dashboard-img'
                          style={{ width: '100%', height: '100%', minHeight: '450px' }}
                        >
                          {/* Background Layer - position: relative, z-index: 1 (base layer) */}
                          <Image
                            src={project.backgroundImage}
                            alt={`${project.title} background`}
                            fill
                            className='animation-img position-relative'
                            style={{
                              width: '100%',
                              height: '100%',
                              display: 'block',
                              zIndex: 1,
                              visibility: 'visible',
                              objectFit: 'cover'
                            }}
                          />
                          {/* Project Image Layer - position: absolute, z-index: 2 */}
                          <Image
                            src={project.projectImage}
                            alt={project.title}
                            fill
                            className='position-absolute hero-elements-img animation-img'
                            style={{
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block',
                              zIndex: 2,
                              pointerEvents: 'none'
                            }}
                          />
                          {/* Company Logo Layer - position: absolute, z-index: 3 (top layer) */}
                          <div
                            className='position-absolute hero-elements-img animation-img'
                            style={{
                              top: project.logoTop,
                              zIndex: 3,
                              pointerEvents: 'none'
                            }}
                          >
                            <img
                              src={project.companyLogo}
                              alt={`${project.title} logo`}
                              style={{
                                width: '100px',
                                height: 'auto',
                                marginTop: '1rem',
                                marginLeft: '10rem',
                                display: 'block',
                                objectFit: 'contain'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className={styles.projectContentColumn}>
                        <div className={styles.projectContentContainer}>
                          <div className={styles.projectNumber}>{project.number}</div>
                          <Typography variant='h4' className={styles.projectTitle}>
                            {project.title}
                          </Typography>
                          <Typography className={classnames(styles.projectDescription, 'project-description')}>
                            {project.description}
                          </Typography>
                          <div className={styles.projectTechStack}>
                            {project.techStack.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className={classnames(styles.techIcon, {
                                  [styles.techIconDark]: _mode === 'dark'
                                })}
                              >
                                {tech.svg}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AppKeenSlider>
        </div>
      </div>
    </section>
  )
}

export default OurProjects
