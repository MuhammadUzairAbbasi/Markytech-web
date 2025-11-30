// Component Imports
import WebServicePageWrapper from '@views/front-pages/web-service'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// In any page.tsx file
export const metadata = {
  title: 'MarkyTech - Custom Web Development',
  description: ''
}

const WebServicePage = async () => {
  // Vars
  const mode = await getServerMode()

  return <WebServicePageWrapper mode={mode} />
}

export default WebServicePage
