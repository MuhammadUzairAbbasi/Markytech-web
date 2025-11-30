'use client'

// React Imports
import { useEffect, useRef } from 'react'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// Third-party Imports
import classnames from 'classnames'

interface ContactUsSectionWrapperProps {
  children: React.ReactNode
}

const ContactUsSectionWrapper = ({ children }: ContactUsSectionWrapperProps) => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef<null | HTMLElement>(null)

  // Hooks
  const { updateIntersections } = useIntersection()

  useEffect(() => {
    // Find the section element with id='ContactUs'
    const sectionElement = document.getElementById('ContactUs')
    if (!sectionElement) return

    ref.current = sectionElement

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (skipIntersection.current) {
          skipIntersection.current = false
          return
        }

        updateIntersections({ [entry.target.id]: entry.isIntersecting })
      },
      { threshold: 0.35 }
    )

    observer.observe(sectionElement)

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default ContactUsSectionWrapper
