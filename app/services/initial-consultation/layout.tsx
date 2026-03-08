import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Initial Consultation',
  description:
    "Book a free consultation call. We'll discuss your project with no obligation.",
  alternates: {
    canonical: '/services/initial-consultation',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
