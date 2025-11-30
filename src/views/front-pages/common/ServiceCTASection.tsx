// React Imports
import { ReactNode } from 'react'
import Link from 'next/link'

// MUI Imports
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'

interface ServiceCTASectionProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
  graphic?: ReactNode // Optional graphic, defaults to phone icon
}

const ServiceCTASection = ({
  title,
  description,
  buttonText = 'Contact Us',
  buttonHref = '#ContactUs',
  graphic
}: ServiceCTASectionProps) => {
  return (
    <section className={styles.serviceCTASection}>
      <div className='container'>
        <div className='position-relative'>
          <Grid
            container
            spacing={6}
            alignItems='center'
            className={styles.serviceCTAContainer}
            direction={{ xs: 'column-reverse', lg: 'row' }}
          >
            {/* Content Column */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <div className={styles.serviceCTAContent}>
                <Typography variant='h4' className={classnames('text-primary mb-2', styles.serviceCTATitle)}>
                  {title}
                </Typography>
                <Typography
                  variant='body1'
                  className={classnames('text-body mb-6 mb-md-11', styles.serviceCTADescription)}
                >
                  {description}
                </Typography>
                <Button
                  component={Link}
                  href={buttonHref}
                  variant='contained'
                  color='primary'
                  className={styles.serviceCTAButton}
                >
                  {buttonText}
                </Button>
              </div>
            </Grid>

            {/* Graphic Column */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <div className={classnames('text-center', styles.serviceCTAGraphic)}>{graphic}</div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  )
}

export default ServiceCTASection
