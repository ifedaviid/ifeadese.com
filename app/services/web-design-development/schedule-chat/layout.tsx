import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule a Chat',
  description:
    "Book a free 20-minute consultation to discuss your project and next steps.",
  alternates: {
    canonical: '/services/web-design-development/schedule-chat',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

