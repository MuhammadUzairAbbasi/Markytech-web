'use client'

// React Imports
import { useEffect, useMemo } from 'react'

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

// Data Imports
import { getProjectsByService, type ServiceType, type TechStackName } from '../data/projects'

// Component Imports
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

// Styles Imports
import styles from '../landing-page/styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'
import AppKeenSlider from '@/libs/styles/AppKeenSlider'

// Assign lowercase components to uppercase variables for JSX usage
const MySQLIcon = mysqlIcon
const WordPressIcon = wordpressIcon
const GoogleCloudIcon = googlecloudIcon
const FirebaseIcon = firebaseIcon
const SwiftIcon = swiftIcon

// Tech stack icon mapping - maps tech stack names to React components
const techStackIconMap: Record<TechStackName, React.ComponentType> = {
  React: ReactIcon,
  'React Native': ReactNativeIcon,
  'Node.js': NodeIcon,
  AWS: AWSIcon,
  DotNet: DotNetIcon,
  'Next.js': NextJSIcon,
  Bootstrap: BootstrapIcon,
  'Vue.js': VueJsIcon,
  MySQL: MySQLIcon,
  PHP: PhpIcon,
  WordPress: WordPressIcon,
  'Google Cloud': GoogleCloudIcon,
  TypeScript: TypescriptIcon,
  Laravel: LaravelIcon,
  Firebase: FirebaseIcon,
  Swift: SwiftIcon
}

// Props interface
interface ServiceProjectsSectionProps {
  filterByService: ServiceType // Required: Filter projects by service type ('web', 'mobile', 'ui-ux', 'digital-marketing')
  sectionId?: string // Optional: Section ID for scroll/anchor links (default: based on service type)
  title?: string // Optional: Custom title
  badgeLabel?: string // Optional: Custom badge label
  description?: string // Optional: Custom description
}

const ServiceProjectsSection = ({
  filterByService,
  sectionId,
  title,
  badgeLabel,
  description
}: ServiceProjectsSectionProps) => {
  const { mode } = useColorScheme()
  const isAboveXL = useMediaQuery('(min-width: 1200px)')
  const _mode = mode || 'light'

  // Filter projects based on service type
  const filteredProjects = useMemo(() => {
    return getProjectsByService(filterByService)
  }, [filterByService])

  // Map tech stack names to React icon components
  const projectsWithIcons = useMemo(() => {
    return filteredProjects.map(project => ({
      ...project,
      techStack: project.techStack.map(tech => {
        const IconComponent = techStackIconMap[tech.name]
        return {
          name: tech.name,
          svg: IconComponent ? <IconComponent /> : null
        }
      })
    }))
  }, [filteredProjects])

  // Default values based on service type
  const defaultSectionId = sectionId || `${filterByService}-projects`
  const defaultTitle =
    title ||
    `Our ${
      filterByService === 'web'
        ? 'Web Development'
        : filterByService === 'mobile'
          ? 'Mobile App'
          : filterByService === 'ui-ux'
            ? 'UI/UX Design'
            : filterByService === 'digital-marketing'
              ? 'Digital Marketing'
              : 'Agentic AI'
    } Projects`
  const defaultBadgeLabel =
    badgeLabel ||
    `${
      filterByService === 'web'
        ? 'Web'
        : filterByService === 'mobile'
          ? 'Mobile'
          : filterByService === 'ui-ux'
            ? 'UI/UX'
            : filterByService === 'digital-marketing'
              ? 'Digital Marketing'
              : 'Agentic AI'
    } Projects`
  const defaultDescription =
    description ||
    `Explore our portfolio of successful ${
      filterByService === 'web'
        ? 'web development'
        : filterByService === 'mobile'
          ? 'mobile app'
          : filterByService === 'ui-ux'
            ? 'UI/UX design'
            : filterByService === 'digital-marketing'
              ? 'digital marketing'
              : 'agentic AI'
    } projects.`

  // Keen Slider setup - matching portfolio-swiper.js config (EXACT COPY)
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
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
          }, 4500) // Matching 4500ms delay from portfolio-swiper.js
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

  // Portfolio 3D parallax animation setup - matching HeroSection (EXACT COPY)
  useEffect(() => {
    if (typeof window !== 'undefined' && isAboveXL) {
      const portfolioSection = document.getElementById(defaultSectionId)

      // Scope selectors to the specific section to avoid conflicts with other sections
      if (!portfolioSection) return

      const animationImg = portfolioSection.querySelectorAll('.hero-dashboard-img')
      const animationElements = portfolioSection.querySelectorAll('.hero-elements-img')
      const nav = document.querySelector('.layout-navbar')

      // Define z-depths for each layer (in rem) - matching HeroSection
      const zDepths = [1, 3] // project image: 1rem, logo: 3rem

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
  }, [isAboveXL, defaultSectionId])

  // Don't render if no projects
  if (projectsWithIcons.length === 0) {
    return null
  }

  return (
    <section id={defaultSectionId} className={classnames('plb-[100px]', frontCommonStyles.layoutSpacing)}>
      <div className='container'>
        <div className='text-center mb-4'>
          <Chip size='small' variant='tonal' color='primary' label={defaultBadgeLabel} />
        </div>
        <Typography variant='h4' className='text-center mb-3 position-relative fw-extrabold z-1'>
          <span className='position-relative'>{defaultTitle}</span>
        </Typography>
        <Typography className='text-center mb-12'>{defaultDescription}</Typography>

        <div className={classnames(styles.swiperProjectsCarousel, 'overflow-hidden')}>
          <AppKeenSlider>
            <div ref={sliderRef} className='keen-slider'>
              {projectsWithIcons.map((project, index) => (
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
                          <div className={styles.projectNumber}>{String(index + 1).padStart(2, '0')}</div>
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

export default ServiceProjectsSection
