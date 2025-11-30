// Component Imports
import AgenticAiPageWrapper from '@views/front-pages/agentic-ai'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

export const metadata = {
  title: 'MarkyTech - Agentic AI',
  description: ''
}

const AgenticAiPage = async () => {
  // Vars
  const mode = await getServerMode()

  return <AgenticAiPageWrapper mode={mode} />
}

export default AgenticAiPage
