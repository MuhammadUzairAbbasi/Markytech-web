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
import { MobileAppGraphic } from '../common/ServiceHeroGraphics'
import { ServiceCTAPhoneIcon } from '../common/ServiceCTAGraphics'
import ContactUs from '../common/ContactUs'
import { useSettings } from '@core/hooks/useSettings'

const MobileAppServicePageWrapper = ({ mode }: { mode: SystemMode }) => {
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
        title1='Mobile App'
        title2='Development'
        description='Transform your ideas into powerful mobile applications. Our expert developers create innovative apps that engage users and drive business growth.'
        buttonText='Contact Us'
        buttonHref='#ContactUs'
        graphic={<MobileAppGraphic />}
      />
      <ServiceAboutSection
        badgeLabel='About MarkyTech'
        titlePart1='We innovate with vision'
        titlePart2='and build for performance'
        description={
          <>
            MarkyTech is a dynamic team of mobile app developers, designers, and strategists dedicated to creating
            seamless and high-performing mobile experiences. We specialize in building{' '}
            <strong>cross-platform and native mobile applications</strong> that blend innovative design with powerful
            functionality to help brands connect with their audience anytime, anywhere.
            <br />
            <br />
            From concept to launch, we deliver <strong>end-to-end mobile app development services</strong>—including
            UX/UI design, backend integration, API development, and performance optimization. Whether it's an iOS,
            Android, or hybrid app, our goal is to craft{' '}
            <strong>intuitive, scalable, and impactful mobile solutions</strong> that drive engagement and elevate your
            digital presence.
          </>
        }
      />
      {/* Mobile App Projects Section */}
      <ServiceProjectsSection filterByService='mobile' />
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

export default MobileAppServicePageWrapper
