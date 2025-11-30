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
import { AgenticAiGraphic } from '../common/ServiceHeroGraphics'
import { ServiceCTAPhoneIcon } from '../common/ServiceCTAGraphics'
import ContactUs from '../common/ContactUs'
import { useSettings } from '@core/hooks/useSettings'

const AgenticAiPageWrapper = ({ mode }: { mode: SystemMode }) => {
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
        title1='Agentic'
        title2='AI Development'
        description='Automate end‑to‑end workflows with intelligent, autonomous agents. We design, build and deploy secure Agentic AI systems that handle data extraction, content generation, lead qualification, customer support, and internal tooling—integrated seamlessly into your stack.'
        buttonText='Contact Us'
        buttonHref='#ContactUs'
        graphic={<AgenticAiGraphic />}
      />
      <ServiceAboutSection
        badgeLabel='About MarkyTech'
        titlePart1='We build autonomous agents'
        titlePart2='and integrate them for outcomes'
        description={
          <>
            At <strong>MarkyTech</strong>, we design and deploy <strong>Agentic AI</strong> systems that automate real
            business workflows — from <strong>data extraction</strong> and <strong>content generation</strong> to{' '}
            <strong>lead qualification</strong>, <strong>customer support</strong>, and{' '}
            <strong>internal ops tooling</strong>. Our agents are <strong>secure, observable, and orchestrated</strong>{' '}
            to plug into your stack (CRMs, data stores, APIs) with <strong>clear KPIs</strong> around speed, accuracy,
            and cost. Build once, iterate fast, and scale impact safely.
          </>
        }
      />
      {/* Agentic AI Projects Section */}
      <ServiceProjectsSection filterByService='agentic-ai' />
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

export default AgenticAiPageWrapper
