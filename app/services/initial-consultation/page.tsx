'use client'
import { useEffect, useState } from 'react'

export default function InitialConsultation() {
  const [InlineWidget, setInlineWidget] = useState<React.ComponentType<{
    url: string
    styles?: React.CSSProperties
  }> | null>(null)

  useEffect(() => {
    import('react-calendly').then((mod) => {
      setInlineWidget(() => mod.InlineWidget)
    })
  }, [])

  return (
    <article className="prose prose-sm prose-gray dark:prose-invert prose-h1:text-xl prose-h1:font-medium">
      <h1>Initial Consultation</h1>
      <p>
        Get started with a free consultation call. This is your opportunity to
        discuss your project, ask questions, and explore how we can work
        together.
      </p>

      <div className="not-prose mt-8 overflow-hidden rounded-xl">
        {InlineWidget ? (
          <InlineWidget
            url="https://calendly.com/ifeadese/initial-chat"
            styles={{
              height: '700px',
              width: '100%',
            }}
          />
        ) : (
          <div className="flex h-[700px] items-center justify-center text-zinc-500">
            Loading calendar...
          </div>
        )}
      </div>
    </article>
  )
}
