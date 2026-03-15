type Service = {
  name: string
  description: string
  link?: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Project = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const SERVICES: Service[] = [
  {
    name: 'Initial Consultation',
    description:
      'Schedule a call. We\'ll discuss your project. Free. No obligation. ~20 minutes.',
    link: '/services/initial-consultation',
    id: 'service1',
  },
  {
    name: 'Single Page Web Design & Development',
    description:
      'With hosting setup and a basic logo if needed. Starting at $300. Within 5–7 days.',
    link: '/services/single-page-web-design',
    id: 'service2',
  },
  {
    name: 'Multi-Page Web Design & Development',
    description:
      'With basic branding elements as needed. Starting at $1000. Within 10–14 days.',
    link: '/services/multi-page-web-design',
    id: 'service3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'GoDaddy',
    title: 'Software Engineer',
    start: 'April 2022',
    end: 'Present',
    link: 'https://godaddy.com',
    id: 'work1',
  },
  {
    company: 'Rebel.com',
    title: 'Software Developer',
    start: 'May 2020',
    end: 'April 2022',
    link: 'https://rebel.com',
    id: 'work2',
  },
]

// NOTE: Keep title and description in sync with the metadata export in each project's MDX file
// When updating a project, update both:
// 1. The metadata export in app/projects/[slug]/page.mdx
// 2. The entry in PROJECTS below
export const PROJECTS: Project[] = [

  {
    title: 'Galentines 2026: The Love of God Conference',
    description:
      'A website for an annual Christian women\'s conference in Ottawa.',
    link: '/projects/galentines-2026',
    uid: 'project-2',
  },
  {
    title: 'Designing an App to Help Churches Engage with Newcomers',
    description:
      'A mobile app design to help churches manage and follow up with newcomers.',
    link: '/projects/church-guest-engagement',
    uid: 'project-1',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ifedaviid',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ifedaviid/',
  },
]

export const EMAIL = 'ifeoluwaadese@gmail.com'
