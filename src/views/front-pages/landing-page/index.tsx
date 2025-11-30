'use client'

// React Imports
import { useEffect } from 'react'

// Type Imports
import type { SystemMode } from '@core/types'

// Component Imports
import HeroSection from './HeroSection'
import UsefulFeature from './UsefulFeature'
import CustomerReviews from './CustomerReviews'
import OurTeam from './OurTeam'
import ProductStat from './ProductStat'
import Faqs from './Faqs'
import GetStarted from './GetStarted'
import ContactUs from '../common/ContactUs'
import OurServices from './OurServices'
import OurApproach from './OurApproach'
import OurProjects from './OurProjects'
import OurClient from './OurClient'
import { useSettings } from '@core/hooks/useSettings'

const LandingPageWrapper = ({ mode }: { mode: SystemMode }) => {
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
      <HeroSection mode={mode} />
      <OurServices />
      <OurApproach />
      <OurProjects />

      {/* <UsefulFeature /> */}
      <CustomerReviews />
      <OurClient />
      {/* <OurTeam />
      <ProductStat />
      <Faqs /> */}
      <GetStarted mode={mode} />
      <ContactUs />
    </div>
  )
}

export default LandingPageWrapper
