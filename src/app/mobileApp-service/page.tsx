// Component Imports
import MobileAppServicePageWrapper from '@views/front-pages/mobileApp-service'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata = {
  title: 'MarkyTech - Mobile App Development',
  description: ''
}

const MobileAppServicePage = async () => {
  // Vars
  const mode = await getServerMode()

  return <MobileAppServicePageWrapper mode={mode} />
}

export default MobileAppServicePage
