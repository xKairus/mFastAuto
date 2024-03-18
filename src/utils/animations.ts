import React from "react"

export const fadeIn = (isAnimated: boolean): React.CSSProperties => ({
  opacity: isAnimated ? 1 : 0,
  transition: "opacity 0.9s ease-in-out",
})

export const fadeInAndMoveLeft = (
  isAnimated: boolean
): React.CSSProperties => ({
  opacity: isAnimated ? 1 : 0,
  transform: isAnimated ? "translateX(0)" : "translateX(-100px)",
  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
})
