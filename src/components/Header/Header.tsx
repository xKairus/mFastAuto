import Button from "../Button/Button"
import styles from "./Header.module.css"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>M FAST AUTO</span>
        <nav className={styles.nav}>
          <AnchorLink offset='80' href="#Home">Home</AnchorLink>
          <AnchorLink offset='80' href="#About">About Us</AnchorLink>
          <AnchorLink offset='80' href="#Service">Service</AnchorLink>
          <AnchorLink offset='80' href="#Pricing">Pricing</AnchorLink>
          <AnchorLink offset='80' href="#Contact">Contact Us</AnchorLink>
          <AnchorLink offset='80' href="#Directions">Directions</AnchorLink>
        </nav>
        <Button>Make appointment</Button>
      </div>
    </section>
  )
}
