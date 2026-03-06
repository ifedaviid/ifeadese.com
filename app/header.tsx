'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="text-lg font-medium text-black dark:text-white sm:text-xl"
        >
          Ife Adese
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-sm text-zinc-600 dark:text-zinc-500 sm:text-base"
          delay={0.5}
        >
          Designer & Engineer
        </TextEffect>
      </div>
    </header>
  )
}
