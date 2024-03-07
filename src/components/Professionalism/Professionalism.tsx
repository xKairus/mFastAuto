import { sectionHeaders } from "../../data/typography"
import Button from "../Button/Button"
import { SectionHeader } from "../SectionHeader/SectionHeader"
import styles from "./Professionalism.module.css"

export default function Professionalism() {
  return (
    <section className={styles.pro} id="Service">
      <div className={styles.container}>
        <div className={styles.img}></div>
        <div className={styles.info}>
          <SectionHeader {...sectionHeaders.professionalism} size="small" />
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  )
}
