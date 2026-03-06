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

type BlogPost = {
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
      'Book a call. 20 minutes. We\'ll discuss your project. Free. No obligation.',
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

// NOTE: Keep title and description in sync with the metadata export in each blog post's MDX file
// When updating a blog post, update both:
// 1. The metadata export in app/blog/[slug]/page.mdx
// 2. The entry in BLOG_POSTS below
export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Why Visual Appeal is Essential in All Things Design',
    description:
      'Exploring why visual appeal matters beyond aesthetics—it\'s fundamental to user experience, communication, and the success of any design.',
    link: '/blog/visual-appeal-essential-design',
    uid: 'blog-1',
  },
  {
    title: 'Galentines Global: Building a Modern Event Website',
    description:
      'A case study on designing and developing a CMS-driven event website for an annual Christian women\'s conference.',
    link: '/blog/loctineer-case-study',
    uid: 'blog-2',
  },
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
