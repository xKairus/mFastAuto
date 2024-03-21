import { sectionHeaders } from "../../data/typography"
import Button from "../Button/Button"
import SectionHeader from "../SectionHeader/SectionHeader"
import styles from "./Professionalism.module.css"

export default function Professionalism() {
  const scrollToPricing = () => {
    const pricingElement = document.getElementById("Pricing")
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className={styles.pro}>
      <div className={styles.container}>
        <div className={styles.img}></div>
        <div className={styles.info}>
          <SectionHeader {...sectionHeaders.professionalism} size="small" />
          <Button onClick={scrollToPricing}>Learn More</Button>
        </div>
      </div>
    </section>
  )
}
