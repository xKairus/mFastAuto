import React from "react"

export const fadeIn = (isAnimated: boolean): React.CSSProperties => ({
  opacity: isAnimated ? 1 : 0,
  transition: "opacity 0.9s ease-in-out",
})

export const moveRight = (isAnimated: boolean): React.CSSProperties => ({
  transform: isAnimated ? "translateX(0)" : "translateX(-100px)",
  transition: "transform 0.9s ease-in-out",
})

export const scaleUp = (isAnimated: boolean): React.CSSProperties => ({
  transform: isAnimated ? "scale(1)" : "scale(0.7)",
  transition: "transform 0.9s ease-in-out",
})
