// Server Component - No 'use client'

// React Imports
// (No React hooks needed here)

// Next Imports
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import ContactForm from './ContactForm'
import ContactUsSectionWrapper from './ContactUsSectionWrapper'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import styles from '../landing-page/styles.module.css'

// Image paths - using Next.js static image paths from public folder
const sectionTitleIcon = '/images/markytech/background/section-title-icon.png'
const contactBorderImg = '/images/markytech/front pages/contact-border.png'
const contactImg = '/images/markytech/Contact/business-people-meeting.webp'

const ContactUs = () => {
  return (
    <ContactUsSectionWrapper>
      <section
        id='ContactUs'
        className={classnames('plb-[100px] bg-body landing-contact', frontCommonStyles.layoutSpacing)}
      >
        <div className='container'>
          <div className='text-center mb-4'>
            <Chip size='small' variant='tonal' color='primary' label='Contact US' />
          </div>
          <Typography variant='h4' className='text-center mb-1 position-relative fw-extrabold z-1'>
            <span className='position-relative'>
              Let&#39;s work
              <Image
                src={sectionTitleIcon}
                alt='section title icon'
                width={200}
                height={50}
                className={classnames(styles.sectionTitleImg, 'position-absolute object-fit-contain bottom-0 z-n1')}
              />
            </span>{' '}
            together
          </Typography>
          <Typography className='text-center mb-12 pb-md-4'>Any question or remark? just write us a message</Typography>
          <Grid container spacing={6}>
            {/* Contact Info - Server Component */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <div
                className={classnames(styles.contactImgBox, 'position-relative border p-2 h-100')}
                style={{ overflow: 'visible' }}
              >
                <Image
                  src={contactBorderImg}
                  alt='contact border'
                  width={180}
                  height={180}
                  className={classnames(styles.contactBorderImg, 'position-absolute d-none d-lg-block')}
                />
                <Image
                  src={contactImg}
                  alt='contact customer service'
                  width={600}
                  height={400}
                  className={classnames(styles.contactImg, 'w-100')}
                />
                <div className='p-4 pb-2'>
                  <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6, lg: 12, xl: 6 }}>
                      <div className='d-flex align-items-center'>
                        <CustomAvatar variant='rounded' size={36} skin='light' color='primary' className='me-3'>
                          <i className='tabler-mail' />
                        </CustomAvatar>
                        <div>
                          <Typography className='mb-0'>Email</Typography>
                          <Typography variant='h6' className='mb-0'>
                            <a href='mailto:info@markytech.com' className='text-heading text-nowrap d-inline-block'>
                              info@markytech.com
                            </a>
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 12, xl: 6 }}>
                      <div className='d-flex align-items-center'>
                        <CustomAvatar variant='rounded' size={36} skin='light' color='success' className='me-3'>
                          <i className='tabler-phone-call' />
                        </CustomAvatar>
                        <div>
                          <Typography className='mb-0'>Phone</Typography>
                          <Typography variant='h6' className='mb-0'>
                            <a href='tel:+92 21 37120489' className='text-heading'>
                              +92 21 37120489
                            </a>
                          </Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>

            {/* Form - Client Component */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <ContactForm />
            </Grid>
          </Grid>
        </div>
      </section>
    </ContactUsSectionWrapper>
  )
}

export default ContactUs
