"use client"

import { useTypewriter } from "@/hooks/use-typewriter"

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  showCursor?: boolean
  className?: string
  onComplete?: () => void
}

export function TypewriterText({
  text,
  speed = 100,
  delay = 0,
  showCursor = true,
  className = "",
  onComplete,
}: TypewriterTextProps) {
  const { displayText, isComplete, cursor } = useTypewriter({
    text,
    speed,
    delay,
    showCursor,
  })

  // Call onComplete when typing is finished
  if (isComplete && onComplete) {
    setTimeout(onComplete, 100)
  }

  return (
    <span className={className}>
      {displayText}
      <span className="text-cyan-400 animate-pulse font-normal">{cursor}</span>
    </span>
  )
}
