import { useState } from "react"
import Button from "../Button/Button"
import styles from "./Header.module.css"
import Drawer from "../Drawer/Drawer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Nav from "../Nav/Nav"

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  const openComponent = (component: string) => {
    if (component === "nav") {
      setIsNavOpen(true)
    } else if (component === "drawer") {
      setIsDrawerOpen(true)
    }
  }

  const closeComponent = (component: string) => {
    if (component === "nav") {
      setIsNavOpen(false)
    } else if (component === "drawer") {
      setIsDrawerOpen(false)
    }
  }

  return (
    <header className={`${styles.header} header`}>
      <div className={styles.container}>
        <span className={styles.logo}>
          <a href="#Home">M FAST AUTO</a>
        </span>
        <Nav isOpen={isNavOpen} onClose={() => closeComponent("nav")} />
        <Button onClick={() => openComponent("drawer")} disableAnimation={true}>
          Make appointment
        </Button>
        <FontAwesomeIcon
          onClick={() => openComponent("nav")}
          className={styles.bars}
          icon={faBars}
          style={{ color: "#1e266d" }}
        />
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={() => closeComponent("drawer")} />
    </header>
  )
}

export default Header
