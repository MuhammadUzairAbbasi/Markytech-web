'use client'

// React Imports
import { useEffect } from 'react'

// Type Imports
import type { SystemMode } from '@core/types'

// Component Imports
import ServiceHeroSection from '../common/ServiceHeroSection'
import ServiceAboutSection from '../common/ServiceAboutSection'
import ServiceCTASection from '../common/ServiceCTASection'
import ServiceProjectsSection from '../common/ServiceProjectsSection'
import { WebDevelopmentGraphic } from '../common/ServiceHeroGraphics'
import { ServiceCTAPhoneIcon } from '../common/ServiceCTAGraphics'
import ContactUs from '../common/ContactUs'
import { useSettings } from '@core/hooks/useSettings'

const WebServicePageWrapper = ({ mode }: { mode: SystemMode }) => {
  // Hooks
  const { updatePageSettings } = useSettings()

  // For Page specific settings
  useEffect(() => {
    return updatePageSettings({
      skin: 'default'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='bg-backgroundPaper'>
      <ServiceHeroSection
        mode={mode}
        title1='Web'
        title2='Development'
        description='Build powerful, scalable web applications that drive business success. Our expert developers create modern, responsive websites and web apps that deliver exceptional user experiences.'
        buttonText='Contact Us'
        buttonHref='#ContactUs'
        graphic={<WebDevelopmentGraphic />}
      />
      <ServiceAboutSection
        badgeLabel='About MarkyTech'
        titlePart1='We design with purpose'
        titlePart2='and develop for results'
        description={
          <>
            At <strong>MarkyTech</strong>, we combine creativity, technology, and strategy to craft digital experiences
            that make an impact. Our team specializes in <strong>modern web design and development</strong> — from
            visually stunning portfolio websites to powerful e-commerce platforms and fully customized web applications.
            We focus on creating <strong>responsive, high-performing, and scalable</strong> solutions that align
            perfectly with your business goals.
          </>
        }
      />
      {/* Web Development Projects Section */}
      <ServiceProjectsSection filterByService='web' />
      <ServiceCTASection
        title='Still Confused? Contact Us'
        description='Book a free consultation with our team to discuss your project and get a tailored solution.'
        buttonText='Contact Us'
        buttonHref='#ContactUs'
        graphic={<ServiceCTAPhoneIcon />}
      />
      <ContactUs />
    </div>
  )
}

export default WebServicePageWrapper
