/*
 * We recommend using the merged theme if you want to override our core theme.
 * This means you can use our core theme and override it with your own customizations.
 * Write your overrides in the userTheme object in this file.
 * The userTheme object is merged with the coreTheme object within this file.
 * Export this file and import it in the `@components/theme/index.tsx` file to use the merged theme.
 */

// MUI Imports
import { deepmerge } from '@mui/utils'
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { SystemMode } from '@core/types'

// Core Theme Imports
import coreTheme from '@core/theme'

const mergedTheme = (settings: Settings, mode: SystemMode, direction: Theme['direction']) => {
  // Vars
  const userTheme = {
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#028996',
            light: '#59B9D7',
            dark: '#016875'
          }
        }
      },
      dark: {
        palette: {
          primary: {
            main: '#028996',
            light: '#59B9D7',
            dark: '#016875'
          },
          background: {
            default: '#131820',
            paper: '#1d3139',
            paperChannel: '29 49 57'
          },
          customColors: {
            bodyBg: '#131820',
            chatBg: '#202534',
            greyLightBg: '#353A52',
            inputBorder: `rgb(var(--mui-mainColorChannels-dark) / 0.22)`,
            tableHeaderBg: '#2F3349',
            tooltipText: '#2F3349',
            trackBg: '#3A3F57'
          }
        }
      }
    }
  } as Theme

  return deepmerge(coreTheme(settings, mode, direction), userTheme)
}

export default mergedTheme
