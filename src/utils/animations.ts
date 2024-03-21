import React from "react"

export const fadeIn = (isAnimated: boolean): React.CSSProperties => ({
  opacity: isAnimated ? 1 : 0,
  transition: "opacity 0.8s ease-in-out",
})

export const moveRight = (isAnimated: boolean): React.CSSProperties => ({
  transform: isAnimated ? "translateX(0)" : "translateX(-100px)",
  transition: "transform 0.8s ease-in-out",
})

export const moveLeft = (isAnimated: boolean): React.CSSProperties => ({
  transform: isAnimated ? "translateX(0)" : "translateX(100px)",
  transition: "transform 0.8s ease-in-out",
})

export const scaleUp = (isAnimated: boolean): React.CSSProperties => ({
  transform: isAnimated ? "scale(1)" : "scale(0.6)",
  transition: "transform 0.8s ease-in-out",
})
