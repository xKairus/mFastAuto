import { useRef } from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import styles from "./PriceList.module.css"
import { fadeIn } from "../../utils/animations"

interface PLProps {
  title: string
  price: string
  desc?: string
}

const PriceList: React.FC<PLProps> = ({ title, price, desc }) => {

  const ref = useRef<HTMLDivElement>(null)
  const isAnimated = useScrollAnimation(ref)

  return (
    <div ref={ref} className={styles.item} style={fadeIn(isAnimated)}>
      <div className={styles.line}>
        <span className={styles.job}>{title}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <span className={styles.info}>{desc}</span>
    </div>
  )
}

export default PriceList
