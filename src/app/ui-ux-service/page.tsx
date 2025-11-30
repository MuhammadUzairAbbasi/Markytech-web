// Component Imports
import UiUxServicePageWrapper from '@views/front-pages/ui-ux-service'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata = {
  title: 'MarkyTech - Creative UI/UX Design',
  description: ''
}

const UiUxServicePage = async () => {
  // Vars
  const mode = await getServerMode()

  return <UiUxServicePageWrapper mode={mode} />
}

export default UiUxServicePage
