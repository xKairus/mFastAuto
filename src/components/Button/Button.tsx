import { ButtonHTMLAttributes, ReactNode, useRef } from "react"
import styles from "./Button.module.css"
import { scaleUp } from "../../utils/animations"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  newClass?: string
  disableAnimation?: boolean
}

export default function Button({
  children,
  newClass = "",
  disableAnimation = false,
  ...props
}: BtnProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const isAnimated = useScrollAnimation(ref)

  return (
    <button
      {...props}
      ref={ref}
      style={!disableAnimation ? scaleUp(isAnimated) : undefined}
      className={`${styles.button} ${styles[newClass]}`}
    >
      {children}
    </button>
  )
}
