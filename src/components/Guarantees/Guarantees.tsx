import { sectionHeaders } from "../../data/typography"
import SectionHeader from "../SectionHeader/SectionHeader"

import styles from "./Guarantees.module.css"

import carLogo1 from "./../../assets/car-logo1.png"
import carLogo2 from "./../../assets/car-logo2.png"
import carLogo3 from "./../../assets/car-logo3.png"
import carLogo4 from "./../../assets/car-logo4.png"
import { useRef } from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"
import { scaleUp } from "../../utils/animations"

export default function Guarantees() {
  const ref = useRef<HTMLDivElement>(null)
  const isAnimated = useScrollAnimation(ref)

  return (
    <section className={styles.guarantees}>
      <div className={styles.info}>
        <SectionHeader inverse={true} {...sectionHeaders.guarantees} />
      </div>
      <div className={styles.models} ref={ref}>
        <img src={carLogo2} style={scaleUp(isAnimated)} alt="Tesla Logo" />
        <img src={carLogo1} style={scaleUp(isAnimated)} alt="Audi Logo" />
        <img src={carLogo3} style={scaleUp(isAnimated)} alt="Chevrolet Logo" />
        <img src={carLogo4} style={scaleUp(isAnimated)} alt="Volvo Logo" />
      </div>
    </section>
  )
}
