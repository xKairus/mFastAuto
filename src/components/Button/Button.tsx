import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./Button.module.css"

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  newClass?: string
}

export default function Button({
  children,
  newClass = "",
  ...props
}: BtnProps) {
  return (
    <button {...props} className={`${styles.button} ${styles[newClass]}`}>
      {children}
    </button>
  )
}
