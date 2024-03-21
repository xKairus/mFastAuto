import { useState } from "react"
import { sectionHeaders } from "../../data/typography"
import Button from "../Button/Button"
import SectionHeader from "../SectionHeader/SectionHeader"
import styles from "./Lead.module.css"
import Drawer from "../Drawer/Drawer"

export default function Lead() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => {
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }
  return (
    <section className={styles.lead} id="Home">
      <div className={styles.container}>
        <div className={styles.info}>
          <SectionHeader {...sectionHeaders.lead} size="big" left={true} />
        </div>
        <Button onClick={openDrawer} newClass={"inverse"}>
          Get A Quote
        </Button>
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </section>
  )
}
