import { sectionHeaders } from "../../data/typography"
import SectionHeader from "../SectionHeader/SectionHeader"

import styles from "./Guarantees.module.css"

import carLogo1 from "./../../assets/car-logo1.png"
import carLogo2 from "./../../assets/car-logo2.png"
import carLogo3 from "./../../assets/car-logo3.png"
import carLogo4 from "./../../assets/car-logo4.png"

export default function Guarantees() {
  return (
    <section className={styles.guarantees}>
      <div className={styles.info}>
        <SectionHeader inverse={true} {...sectionHeaders.guarantees} />
      </div>
      <div className={styles.models}>
        <img src={carLogo2} alt="Tesla Logo" />
        <img src={carLogo1} alt="Audi Logo" />
        <img src={carLogo3} alt="Chevrolet Logo" />
        <img src={carLogo4} alt="Volvo Logo" />
      </div>
    </section>
  )
}
