"use client";

import { useTypewriter } from "@/hooks/use-typewriter";
import { heroData } from "@/data/hero.data";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  showCursor?: boolean;
  className?: string;
  onComplete?: () => void;
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
  });

  // Call onComplete when typing is finished
  if (isComplete && onComplete) {
    setTimeout(onComplete, 100);
  }

  const isName = text === heroData.name;

  return (
    <span className={className}>
      {displayText}
      {isName ? (
        <span
          className="inline-block ml-2 animate-shake-hand"
          style={{ display: isComplete ? "inline-block" : "none" }}
          aria-label="shaking hand wave"
        >
          👋
        </span>
      ) : (
        <span className="text-cyan-400 animate-pulse font-normal">
          {cursor}
        </span>
      )}
    </span>
  );
}
