// Project data types and constants
// This file contains all project data with service categories for filtering

// Service type definitions
export type ServiceType = 'web' | 'mobile' | 'ui-ux' | 'digital-marketing' | 'agentic-ai'

// Tech stack icon name type (will be mapped to actual React components in the component)
export type TechStackName =
  | 'React'
  | 'React Native'
  | 'Node.js'
  | 'AWS'
  | 'DotNet'
  | 'Next.js'
  | 'Bootstrap'
  | 'Vue.js'
  | 'MySQL'
  | 'PHP'
  | 'WordPress'
  | 'Google Cloud'
  | 'TypeScript'
  | 'Laravel'
  | 'Firebase'
  | 'Swift'

// Project interfaces
export interface TechStackItem {
  name: TechStackName
}

export interface Project {
  id: string
  number: string
  title: string
  description: string
  backgroundImage: string // Background/base layer image
  projectImage: string // Middle layer - project image
  companyLogo: string // Top layer - company logo
  logoTop: string
  techStack: TechStackItem[]
  services: ServiceType[] // Service categories this project belongs to
}

// Image path constants
export const IMAGE_PATHS = {
  backgrounds: {
    default: '/images/markytech/resource/backgroundd.png',
    background1: '/images/markytech/resource/background1.jpg',
    background2: '/images/markytech/resource/background11.jpg',
    background3: '/images/markytech/resource/bg.jpg'
  },
  projects: {
    adastra: '/images/markytech/resource/adastra.png',
    rendoor: '/images/markytech/projects/rendoor.png',
    justus: '/images/markytech/projects/justus 1.png',
    gmpa: '/images/markytech/projects/gmpa1.png',
    mynatur: '/images/markytech/projects/my natur 1.png',
    ibico: '/images/markytech/projects/ibico1.png',
    qayam: '/images/markytech/projects/qayam1.png',
    consolidata: '/images/markytech/projects/consolidata1.png',
    bring: '/images/markytech/projects/bring 1.png',
    thriller: '/images/markytech/projects/thriller1.png',
    houser: '/images/markytech/projects/houser 1.png',
    khataApp: '/images/markytech/projects/khata app.png',
    markyImports: '/images/markytech/projects/markyimports1.png',
    dwanique: '/images/markytech/projects/dwanique1.png'
  },
  logos: {
    adastra: '/images/markytech/Company Logo/Adastra.png',
    rendoor: '/images/markytech/Company Logo/rendoor.png',
    justus: '/images/markytech/Company Logo/justus.png',
    gmpa: '/images/markytech/Company Logo/gmpa.png',
    mynatur: '/images/markytech/Company Logo/mynatur.png',
    ibico: '/images/markytech/Company Logo/ibico.png',
    qayam: '/images/markytech/Company Logo/qayam.png',
    consolidata: '/images/markytech/Company Logo/consolidata.png',
    bring: '/images/markytech/Company Logo/Bring.png',
    thriller: '/images/markytech/Company Logo/thriller.png',
    houser: '/images/markytech/Company Logo/houser.png',
    khataApp: '/images/markytech/Company Logo/khata.png',
    markyImports: '/images/markytech/Company Logo/markyimports.png',
    dwanique: '/images/markytech/Company Logo/dwanique.png'
  }
}

// All projects data with service categories
export const projects: Project[] = [
  {
    id: 'adastra',
    number: '01',
    title: 'Ad Astra',
    description:
      'The Ad Astra mobile application, developed by MarkyTech, is a powerful, user-friendly tool designed to streamline and elevate the language access experience for both clients and interpreters. Built with integrating through AWS Connect.',
    backgroundImage: IMAGE_PATHS.backgrounds.default,
    projectImage: IMAGE_PATHS.projects.adastra,
    companyLogo: IMAGE_PATHS.logos.adastra,
    logoTop: '-4rem',
    techStack: [{ name: 'React' }, { name: 'DotNet' }, { name: 'AWS' }],
    services: ['web', 'mobile', 'agentic-ai', 'ui-ux'] // Web app with mobile integration
  },
  {
    id: 'rendoor',
    number: '02',
    title: 'Rendoor',
    description:
      'Multi role property services platform designed to connect homeowners, builders, service providers, and real estate agents under one digital ecosystem. It streamlines service requests, quotations, job assignments, and compliance through mobile and web apps tailored to each role.',
    backgroundImage: IMAGE_PATHS.backgrounds.background1,
    projectImage: IMAGE_PATHS.projects.rendoor,
    companyLogo: IMAGE_PATHS.logos.rendoor,
    logoTop: '-2rem',
    techStack: [{ name: 'React Native' }, { name: 'Node.js' }],
    services: ['mobile', 'web', 'ui-ux'] // Mobile-first with web and strong UI/UX
  },
  {
    id: 'justus',
    number: '03',
    title: 'Justus',
    description:
      'Blind Justus is an AI-driven app that empowers citizens in legal situations with audio-enhanced case law, AI transcription, video recording, English–Spanish translation, and quick attorney access.',
    backgroundImage: IMAGE_PATHS.backgrounds.background2,
    projectImage: IMAGE_PATHS.projects.justus,
    companyLogo: IMAGE_PATHS.logos.justus,
    logoTop: '-2.5rem',
    techStack: [{ name: 'React' }, { name: 'Node.js' }],
    services: ['web', 'ui-ux'] // Web app with strong UI/UX focus
  },
  {
    id: 'gmpa',
    number: '04',
    title: 'GMPA',
    description:
      'MarkyTech had the privilege of partnering with a global consortium of climate research institutions to bring the Global Mitigation Potential Atlas (GMPA) to life — a transformative digital product designed to catalyze global climate action.',
    backgroundImage: IMAGE_PATHS.backgrounds.background3,
    projectImage: IMAGE_PATHS.projects.gmpa,
    companyLogo: IMAGE_PATHS.logos.gmpa,
    logoTop: '-4rem',
    techStack: [{ name: 'Next.js' }, { name: 'Node.js' }],
    services: ['web', 'ui-ux'] // Modern web app with excellent UI/UX
  },
  {
    id: 'mynatur',
    number: '05',
    title: 'My Natur',
    description:
      'This project helps users donate to environmental foundations by calculating their carbon footprint through an onboarding process based on lifestyle factors like travel, diet, home size, and shopping habits.',
    backgroundImage: IMAGE_PATHS.backgrounds.default,
    projectImage: IMAGE_PATHS.projects.mynatur,
    companyLogo: IMAGE_PATHS.logos.mynatur,
    logoTop: '-3.5rem',
    techStack: [{ name: 'React' }, { name: 'Next.js' }, { name: 'Bootstrap' }],
    services: ['web', 'ui-ux'] // Web app with modern UI/UX
  },
  {
    id: 'ibico',
    number: '06',
    title: 'Ibico',
    description:
      'A complete ERP system that provides end to end functionality from master data to reporting along with inventory, claims, deliveries, returns, asset management, and ledger.',
    backgroundImage: IMAGE_PATHS.backgrounds.background1,
    projectImage: IMAGE_PATHS.projects.ibico,
    companyLogo: IMAGE_PATHS.logos.ibico,
    logoTop: '-4rem',
    techStack: [{ name: 'Vue.js' }, { name: 'DotNet' }, { name: 'MySQL' }],
    services: ['web', 'ui-ux'] // Enterprise web application
  },
  {
    id: 'qayam',
    number: '07',
    title: 'Qayam Hunza',
    description:
      'The Hotel Management system is a comprehensive web application designed to streamline hotel operations and enhance guest management. Below are features that were added for 360 hotel management.',
    backgroundImage: IMAGE_PATHS.backgrounds.background2,
    projectImage: IMAGE_PATHS.projects.qayam,
    companyLogo: IMAGE_PATHS.logos.qayam,
    logoTop: '-3rem',
    techStack: [{ name: 'React' }, { name: 'PHP' }, { name: 'Bootstrap' }, { name: 'MySQL' }],
    services: ['web', 'ui-ux'] // Web application with comprehensive UI
  },
  {
    id: 'consolidata',
    number: '08',
    title: 'Consolidata',
    description:
      'Consolidata is a versatile online tool designed for the creation of dynamic, interactive dashboard reports. This innovative platform allows users to effortlessly source data from various platforms such as Facebook Marketplace, Google Ads, and GoHighLevel.',
    backgroundImage: IMAGE_PATHS.backgrounds.background3,
    projectImage: IMAGE_PATHS.projects.consolidata,
    companyLogo: IMAGE_PATHS.logos.consolidata,
    logoTop: '-3rem',
    techStack: [{ name: 'React' }, { name: 'PHP' }, { name: 'MySQL' }, { name: 'WordPress' }, { name: 'Google Cloud' }],
    services: ['web', 'digital-marketing', 'ui-ux'] // Web app with marketing analytics and dashboards
  },
  {
    id: 'bring',
    number: '09',
    title: 'Bring',
    description:
      'Brrring connects Travelers and Buyers, enabling secure product delivery across locations. Travelers earn commissions by delivering requested items, while Buyers post requests, negotiate terms, and track deliveries in real time.',
    backgroundImage: IMAGE_PATHS.backgrounds.default,
    projectImage: IMAGE_PATHS.projects.bring,
    companyLogo: IMAGE_PATHS.logos.bring,
    logoTop: '-3rem',
    techStack: [{ name: 'React' }, { name: 'PHP' }, { name: 'TypeScript' }, { name: 'MySQL' }],
    services: ['web', 'ui-ux'] // Web application
  },
  {
    id: 'thriller',
    number: '10',
    title: 'Thriller',
    description:
      'Thriller is an online e-commerce platform, allowing users to buy, sell, or bid on various branded products.',
    backgroundImage: IMAGE_PATHS.backgrounds.background1,
    projectImage: IMAGE_PATHS.projects.thriller,
    companyLogo: IMAGE_PATHS.logos.thriller,
    logoTop: '-4.5rem',
    techStack: [{ name: 'WordPress' }, { name: 'Laravel' }],
    services: ['web', 'digital-marketing', 'ui-ux'] // E-commerce with marketing features
  },
  {
    id: 'khata-app',
    number: '11',
    title: 'Khata App',
    description:
      'KhataApp is an offline-first mobile app for managing personal and business ledgers. It simplifies expense tracking, balance management, and transaction recording — all from your smartphone.',
    backgroundImage: IMAGE_PATHS.backgrounds.background2,
    projectImage: IMAGE_PATHS.projects.khataApp,
    companyLogo: IMAGE_PATHS.logos.khataApp,
    logoTop: '-2.5rem',
    techStack: [{ name: 'React' }, { name: 'AWS' }],
    services: ['mobile', 'ui-ux'] // Mobile-first application
  },
  {
    id: 'marky-imports',
    number: '12',
    title: 'Marky Imports',
    description:
      'Marky Imports is a user-friendly platform that simplifies car imports. It lets users explore import cars with detailed specs and images, request personalized quotes, and connect easily with trusted dealers.',
    backgroundImage: IMAGE_PATHS.backgrounds.background3,
    projectImage: IMAGE_PATHS.projects.markyImports,
    companyLogo: IMAGE_PATHS.logos.markyImports,
    logoTop: '-3.5rem',
    techStack: [{ name: 'PHP' }, { name: 'MySQL' }, { name: 'Bootstrap' }],
    services: ['web', 'ui-ux'] // Web platform
  },
  {
    id: 'dwanique',
    number: '13',
    title: 'Dwanique',
    description:
      'Dwanique Autosales is a modern car dealership platform that lets users browse vehicles with detailed specs, prices, and images. It simplifies buying with comparisons, filters, and easy dealer connections.',
    backgroundImage: IMAGE_PATHS.backgrounds.default,
    projectImage: IMAGE_PATHS.projects.dwanique,
    companyLogo: IMAGE_PATHS.logos.dwanique,
    logoTop: '-4rem',
    techStack: [{ name: 'React' }, { name: 'MySQL' }, { name: 'Bootstrap' }, { name: 'AWS' }, { name: 'Node.js' }],
    services: ['web', 'ui-ux', 'digital-marketing'] // Web platform with marketing features
  },
  {
    id: 'houser',
    number: '14',
    title: 'Houser',
    description:
      'The Houser is a mobile app that helps users evaluate and rank properties through personalized questions. It allows custom scoring for each preference, enabling a tailored and insightful property assessment.',
    backgroundImage: IMAGE_PATHS.backgrounds.background1,
    projectImage: IMAGE_PATHS.projects.houser,
    companyLogo: IMAGE_PATHS.logos.houser,
    logoTop: '-3rem',
    techStack: [{ name: 'Firebase' }, { name: 'Swift' }],
    services: ['mobile', 'ui-ux'] // Native iOS mobile app
  }
]

// Helper function to filter projects by service type
export const getProjectsByService = (serviceType: ServiceType): Project[] => {
  return projects.filter(project => project.services.includes(serviceType))
}

// Helper function to get all unique service types
export const getAllServiceTypes = (): ServiceType[] => {
  const serviceTypes = new Set<ServiceType>()

  projects.forEach(project => {
    project.services.forEach(service => serviceTypes.add(service))
  })
  
return Array.from(serviceTypes)
}

// Export default projects array
export default projects
