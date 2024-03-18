import React from "react"

interface AnimationProps {
  isAnimated: boolean
  children: React.ReactNode
  getAnimationStyles: (isAnimated: boolean) => React.CSSProperties
}

export default function AnimationOnScroll ({ isAnimated, children, getAnimationStyles }: AnimationProps) {
  return (
    <div style={getAnimationStyles(isAnimated)}>
      {children}
    </div>
  );
}