import styles from "./SectionHeader.module.css"
import AnimationOnScroll from "../Animation/AnimationOnScroll"
import { fadeIn } from "../../utils/animations"
import { useRef } from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

interface SHProps {
  title: string
  text?: string
  size?: string
  left?: boolean
  inverse?: boolean
}

export default function SectionHeader({
  inverse,
  title,
  text,
  left,
  size = "",
}: SHProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isAnimated = useScrollAnimation(ref)

  return (
    <div ref={ref}>
      <AnimationOnScroll isAnimated={isAnimated} getAnimationStyles={fadeIn}>
        <div className={`${styles.wrapper} ${left ? styles.wrapper_left : ""}`}>
          {inverse ? (
            <>
              {text && (
                <p className={`${styles.text} ${styles.inverse}`}>{text}</p>
              )}
              <h2 className={`${styles.title} ${styles.inverse}`}>{title}</h2>
            </>
          ) : (
            <>
              <h2 className={`${styles.title} ${styles[size]}`}>{title}</h2>
              <p className={styles.text}>{text}</p>
            </>
          )}
        </div>
      </AnimationOnScroll>
    </div>
  )
}
