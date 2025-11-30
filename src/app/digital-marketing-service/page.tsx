// Component Imports
import DigitalMarketingServicePageWrapper from '@views/front-pages/digital-marketing-service'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata = {
  title: 'MarkyTech - Digital Marketing',
  description: ''
}

const DigitalMarketingServicePage = async () => {
  // Vars
  const mode = await getServerMode()

  return <DigitalMarketingServicePageWrapper mode={mode} />
}

export default DigitalMarketingServicePage
