// Next Imports
import Image from 'next/image'

// MUI Imports
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'

// Third-party Imports
import { useKeenSlider } from 'keen-slider/react'
import classnames from 'classnames'

// Component Imports
import AppKeenSlider from '@/libs/styles/AppKeenSlider'
import CustomIconButton from '@core/components/mui/IconButton'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import styles from './styles.module.css'

// Data - Matching PHP version reviews
const data = [
  {
    desc: 'Thank you, Mursal for your services! It was indeed a fruitful and worth it experience to work with your team. Product was ready on time and delivered as requested',
    logo: '/images/markytech/Company Logo/Bring.png',
    logoAlt: 'Bring Logo',
    position: 'Co Founder, Brrring'
  },
  {
    desc: 'It has been a pleasure working with you! I loved the website, especially the load optimization that has created a bigger impact on user behaviour',
    logo: '/images/markytech/Company Logo/thriller.png',
    logoAlt: 'Thriller Logo',
    position: 'CEO Thriller'
  },
  {
    desc: 'Great user design and experience by the team. Application workflow is very professional and user-friendly. Thank you!',
    logo: '/images/markytech/Company Logo/khata.png',
    logoAlt: 'Khata App Logo',
    position: 'Director Technology & Innovations'
  },
  {
    desc: 'It has been a pleasure working with you! I loved the website, especially the load optimization that has created a bigger impact on user behaviour',
    logo: '/images/markytech/Company Logo/thriller.png',
    logoAlt: 'Thriller Logo',
    position: 'CEO Thriller'
  },
  {
    desc: 'Great user design and experience by the team. Application workflow is very professional and user-friendly. Thank you!',
    logo: '/images/markytech/Company Logo/khata.png',
    logoAlt: 'Khata App Logo',
    position: 'Director Technology & Innovations'
  }
]

const CustomerReviews = () => {
  // Hooks
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 3,
        origin: 'auto'
      },
      breakpoints: {
        '(max-width: 1200px)': {
          slides: {
            perView: 2,
            spacing: 10,
            origin: 'auto'
          }
        },
        '(max-width: 900px)': {
          slides: {
            perView: 2,
            spacing: 10
          }
        },
        '(max-width: 600px)': {
          slides: {
            perView: 1,
            spacing: 10,
            origin: 'center'
          }
        }
      }
    },
    [
      slider => {
        let timeout: ReturnType<typeof setTimeout>
        const mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }

        slider.on('created', nextTimeout)
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      }
    ]
  )

  return (
    <section className={classnames('flex flex-col gap-8 plb-[100px] bg-backgroundDefault', styles.sectionStartRadius)}>
      <div
        className={classnames('flex max-md:flex-col max-sm:flex-wrap is-full gap-6', frontCommonStyles.layoutSpacing)}
      >
        <div className='flex flex-col gap-1 bs-full justify-center items-center lg:items-start is-full md:is-[30%] mlb-auto sm:pbs-2'>
          <Chip label='Real Customers Reviews' variant='tonal' color='primary' size='small' className='mbe-3' />
          <div className='flex flex-col gap-y-1 flex-wrap max-lg:text-center '>
            <Typography color='text.primary' variant='h4'>
              <span className='relative z-[1] font-extrabold'>
                What people say
                {/* <img
                  src='/images/markytech/background/section-title-icon.png'
                  alt='section title icon'
                  className={classnames('absolute block-end-0 z-[-1]', styles.sectionTitleImg)}
                /> */}
              </span>
            </Typography>
            <Typography>
              See what our customers have to
              <br className='hidden xl:block' />
              say about their experience.
            </Typography>
          </div>
          <div className='flex gap-x-4 mbs-11'>
            <CustomIconButton color='primary' variant='tonal' onClick={() => instanceRef.current?.prev()}>
              <i className='tabler-chevron-left' />
            </CustomIconButton>
            <CustomIconButton color='primary' variant='tonal' onClick={() => instanceRef.current?.next()}>
              <i className='tabler-chevron-right' />
            </CustomIconButton>
          </div>
        </div>
        <div className='is-full md:is-[70%]'>
          <AppKeenSlider>
            <div ref={sliderRef} className='keen-slider mbe-6'>
              {data.map((item, index) => (
                <div key={index} className='keen-slider__slide flex p-4 sm:p-3'>
                  <Card elevation={8} className='flex items-start h-full'>
                    <CardContent className='p-8 flex flex-col justify-between h-full'>
                      <div className='flex flex-col gap-4'>
                        <div className='mbe-4'>
                          <Image
                            src={item.logo}
                            alt={item.logoAlt}
                            width={150}
                            height={60}
                            className='object-contain'
                            style={{ maxWidth: '100%', height: 'auto' }}
                          />
                        </div>
                        <Typography>{item.desc}</Typography>
                        <div className='text-warning mbe-4'>
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className='tabler-star-filled text-lg' />
                          ))}
                        </div>
                        <div className='flex items-center'>
                          <Typography variant='body2' color='text.secondary' className='mb-0'>
                            {item.position}
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </AppKeenSlider>
        </div>
      </div>
      {/* <Divider /> */}
      {/* <div className='flex flex-wrap items-center justify-center gap-x-16 gap-y-6 mli-3'>
        <Airbnb color='var(--mui-palette-text-secondary)' />
        <Netflix color='var(--mui-palette-text-secondary)' />
        <Dribbble color='var(--mui-palette-text-secondary)' />
        <Coinbase color='var(--mui-palette-text-secondary)' />
        <Pinterest color='var(--mui-palette-text-secondary)' />
      </div> */}
    </section>
  )
}

export default CustomerReviews
