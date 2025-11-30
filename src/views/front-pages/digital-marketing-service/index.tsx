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
import { DigitalMarketingGraphic } from '../common/ServiceHeroGraphics'
import { ServiceCTAPhoneIcon } from '../common/ServiceCTAGraphics'
import ContactUs from '../common/ContactUs'
import { useSettings } from '@core/hooks/useSettings'

const DigitalMarketingServicePageWrapper = ({ mode }: { mode: SystemMode }) => {
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
        title1='Digital'
        title2='Marketing'
        description="Amplify your brand's reach and engagement. Our social media experts create compelling campaigns that connect with your audience and drive meaningful results."
        buttonText='Contact Us'
        buttonHref='#ContactUs'
        graphic={<DigitalMarketingGraphic />}
      />
      <ServiceAboutSection
        badgeLabel='About MarkyTech'
        titlePart1='We connect with purpose'
        titlePart2='and grow with impact'
        description={
          <>
            At <strong>MarkyTech</strong>, we turn social platforms into powerful tools for brand growth and engagement.
            Our team of strategists, content creators, and marketers specializes in{' '}
            <strong>data-driven social media marketing</strong> that helps businesses build strong online communities,
            increase visibility, and drive measurable results.
            <br />
            <br />
            From <strong>content strategy and creative design</strong> to{' '}
            <strong>paid campaigns, analytics, and brand storytelling</strong>, we craft social experiences that
            resonate with your audience. We don't just post — we create meaningful interactions that elevate your brand
            and turn followers into loyal advocates.
          </>
        }
      />
      {/* Digital Marketing Projects Section */}
      <ServiceProjectsSection filterByService='digital-marketing' />
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

export default DigitalMarketingServicePageWrapper
