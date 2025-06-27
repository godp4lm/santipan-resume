"use client"

import { useState, useEffect } from "react"

interface UseTypewriterProps {
  text: string
  speed?: number
  delay?: number
  showCursor?: boolean
}

export function useTypewriter({ text, speed = 100, delay = 0, showCursor = true }: UseTypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showCursorState, setShowCursorState] = useState(showCursor)

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setShowCursorState(true)
      }, delay)
      return () => clearTimeout(delayTimer)
    } else {
      setShowCursorState(true)
    }
  }, [delay])

  useEffect(() => {
    if (!showCursorState) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed, showCursorState])

  // Blinking cursor effect
  const [cursorVisible, setCursorVisible] = useState(true)
  useEffect(() => {
    if (!showCursor || !showCursorState) return

    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorTimer)
  }, [showCursor, showCursorState])

  return {
    displayText,
    isComplete,
    cursor: showCursor && showCursorState && cursorVisible ? "|" : " ",
  }
}
