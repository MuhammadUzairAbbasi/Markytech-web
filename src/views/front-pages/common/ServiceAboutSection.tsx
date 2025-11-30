// React Imports
import { ReactNode } from 'react'
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid2'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Image path - using Next.js static image path from public folder
const sectionTitleIcon = '/images/markytech/background/section-title-icon.png'

interface ServiceAboutSectionProps {
  badgeLabel?: string
  titlePart1: string
  titlePart2: string
  description: ReactNode // Allow JSX for bold text and formatting
  sectionId?: string
}

const ServiceAboutSection = ({
  badgeLabel = 'About MarkyTech',
  titlePart1,
  titlePart2,
  description,
  sectionId = 'About'
}: ServiceAboutSectionProps) => {
  return (
    <section id={sectionId} className={classnames('plb-[100px] bg-body', frontCommonStyles.layoutSpacing)}>
      <div className='container'>
        <Grid container justifyContent='center'>
          <Grid size={{ xs: 12, lg: 8 }}>
            <div className='text-center mb-4'>
              <Chip size='small' variant='tonal' color='primary' label={badgeLabel} />
            </div>
            <Typography variant='h4' className='text-center mb-3 fw-extrabold'>
              <span className='position-relative fw-extrabold z-1'>{titlePart1}</span> {titlePart2}
            </Typography>

            <Typography className='text-center mb-4' color='text.secondary'>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}

export default ServiceAboutSection
