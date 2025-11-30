'use client'

// React Imports
import { useEffect, useRef } from 'react'

// Next Imports
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Image path - using Next.js static image path from public folder
const sectionTitleIcon = '/images/markytech/background/section-title-icon.png'

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Approach feature data
interface ApproachItem {
  id: string
  number: string
  icon: string
  title: string
  description: string
  direction: 'left' | 'right'
}

const approachItems: ApproachItem[] = [
  {
    id: 'understand',
    number: '01',
    icon: 'tabler-search',
    title: 'We Understand you Challenge',
    description:
      'Our tech-geeks and design-thinkers explore user behavior to create the right balance between usability and innovation.',
    direction: 'left'
  },
  {
    id: 'scope',
    number: '02',
    icon: 'tabler-brush',
    title: 'We Scope your Solution',
    description:
      'We blend creativity with modern technology to build intuitive, engaging, and visually consistent user experiences.',
    direction: 'right'
  },
  {
    id: 'implement',
    number: '03',
    icon: 'tabler-code',
    title: 'We Implement',
    description:
      'Using agile project management and modern frameworks, we deliver scalable and efficient digital experiences.',
    direction: 'left'
  }
]

const OurApproach = () => {
  // Refs for GSAP animations - separate refs for each element
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const titleRefs = useRef<(HTMLElement | null)[]>([])
  const descRefs = useRef<(HTMLElement | null)[]>([])

  // GSAP ScrollTrigger animation setup
  useEffect(() => {
    if (typeof window === 'undefined') return

    const animateFrom = (elem: HTMLElement, direction: number = 1) => {
      let x = 0
      let y = direction * 150

      if (elem.classList.contains('gs_reveal_fromLeft')) {
        x = -150
        y = 0
      } else if (elem.classList.contains('gs_reveal_fromRight')) {
        x = 250
        y = 0
      }

      gsap.fromTo(
        elem,
        { x, y, autoAlpha: 0 },
        {
          duration: 1.5,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: 'expo',
          overwrite: 'auto'
        }
      )
    }

    const hide = (elem: HTMLElement) => {
      gsap.set(elem, { autoAlpha: 0 })
    }

    // Get all reveal elements
    const allRevealElements = [
      ...itemRefs.current.filter(Boolean),
      ...titleRefs.current.filter(Boolean),
      ...descRefs.current.filter(Boolean)
    ] as HTMLElement[]

    // Initialize all elements as hidden
    allRevealElements.forEach(elem => {
      hide(elem)
    })

    // Create ScrollTriggers for each element
    allRevealElements.forEach(elem => {
      ScrollTrigger.create({
        trigger: elem,
        onEnter: () => animateFrom(elem),
        onEnterBack: () => animateFrom(elem, -1),
        onLeave: () => hide(elem)
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        const triggerElement = trigger.vars.trigger as HTMLElement
        if (allRevealElements.includes(triggerElement)) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <section id='AboutUs' className={classnames('plb-[100px] bg-body', frontCommonStyles.layoutSpacing)}>
      <div className='container'>
        <div className='text-center mb-4'>
          <Chip size='small' variant='tonal' color='primary' label='Our Approach' />
        </div>
        <Typography variant='h4' className='text-center mb-3 position-relative fw-extrabold z-1'>
          <span className='position-relative'>
            Our Process
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
          We follow a structured 3-step design process that ensures every project is delivered with precision,
          creativity, and client satisfaction.
        </Typography>

        <div className={styles.features}>
          {approachItems.map((item, index) => (
            <div
              key={item.id}
              ref={el => {
                itemRefs.current[index] = el
              }}
              className={classnames(
                styles.featuresItem,
                item.direction === 'left' ? styles.featuresItemLeft : styles.featuresItemRight,
                'gs_reveal',
                item.direction === 'left' ? 'gs_reveal_fromLeft' : 'gs_reveal_fromRight'
              )}
            >
              <div className={styles.featuresImage}>
                <div className={styles.featuresCard}>
                  <span className={styles.circleIcon}>
                    <i className={`ti ${item.icon}`} />
                  </span>
                </div>
              </div>
              <div className={styles.featuresContent}>
                <div className={styles.projectNumber}>{item.number}</div>
                <Typography
                  variant='h2'
                  ref={el => {
                    titleRefs.current[index] = el
                  }}
                  className={classnames(styles.featuresTitle, 'gs_reveal')}
                >
                  {item.title}
                </Typography>
                <Typography
                  ref={el => {
                    descRefs.current[index] = el
                  }}
                  className={classnames(styles.featuresDescription, 'gs_reveal')}
                >
                  {item.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurApproach
