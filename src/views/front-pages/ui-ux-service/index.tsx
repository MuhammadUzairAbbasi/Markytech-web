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
import { UiUxDesignGraphic } from '../common/ServiceHeroGraphics'
import { ServiceCTAPhoneIcon } from '../common/ServiceCTAGraphics'
import ContactUs from '../common/ContactUs'
import { useSettings } from '@core/hooks/useSettings'

const UiUxServicePageWrapper = ({ mode }: { mode: SystemMode }) => {
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
        title1='Creative UI / UX'
        title2='Design Solutions'
        description='Transform your ideas into stunning visual experiences. Our expert designers create compelling graphics that tell your story and drive results.'
        buttonText='Contact Us'
        buttonHref='#ContactUs'
        graphic={<UiUxDesignGraphic />}
      />
      <ServiceAboutSection
        badgeLabel='About MarkyTech'
        titlePart1='We design with purpose'
        titlePart2='and create for experience'
        description={
          <>
            At <strong>MarkyTech</strong>, we blend creativity, strategy, and innovation to craft exceptional{' '}
            <strong>UI/UX and graphic design</strong> solutions that bring brands to life. Our team of designers focuses
            on creating <strong>intuitive, visually stunning, and user-centered designs</strong> that leave a lasting
            impression and enhance digital experiences.
            <br />
            <br />
            From <strong>brand identity and marketing visuals</strong> to{' '}
            <strong>product interfaces and design systems</strong>, we ensure every detail reflects clarity,
            consistency, and purpose. Whether you're building a new product or refreshing your brand, MarkyTech delivers{' '}
            <strong>beautiful, functional, and impactful designs</strong> that inspire connection and drive results.
          </>
        }
      />
      {/* UI/UX Design Projects Section */}
      <ServiceProjectsSection filterByService='ui-ux' />
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

export default UiUxServicePageWrapper
