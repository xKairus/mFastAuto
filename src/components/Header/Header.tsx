import { useEffect, useState } from "react"
import Button from "../Button/Button"
import styles from "./Header.module.css"

interface NavItem {
  name: string
  href: string
}

const nav: NavItem[] = [
  { name: "Home", href: "Home" },
  { name: "About Us", href: "About" },
  { name: "Service", href: "Service" },
  { name: "Pricing", href: "Pricing" },
  { name: "Contact Us", href: "Contact" },
  { name: "Directions", href: "Directions" },
]

const Header = () => {
  const [activeId, setActiveId] = useState<string>("Home")

  const handleScroll = () => {
    const sections = nav.map((item) => document.getElementById(item.href))
    const offsets = sections.map((section) =>
      section
        ? section.offsetTop - document.querySelector(".header")!.clientHeight
        : 0
    )

    const isEndReached =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight

    const activeIndex = offsets.findIndex(
      (offset, index) =>
        window.pageYOffset >= offset &&
        (!offsets[index + 1] || window.pageYOffset < offsets[index + 1])
    )

    if (isEndReached) {
      setActiveId(nav[nav.length - 1].href)
    } else if (activeIndex > -1 && nav[activeIndex]) {
      setActiveId(nav[activeIndex].href)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (href: string) => {
    const section = document.getElementById(href)
    if (section) {
      const headerOffset = document.querySelector(".header")!.clientHeight
      const sectionTop = section.offsetTop - headerOffset

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className={`${styles.header} header`}>
      <div className={styles.container}>
        <span className={styles.logo}>
          <a href="#Home">M FAST AUTO</a>
        </span>
        <nav className={styles.nav}>
          {nav.map((item) => (
            <div
              className={styles.link_wrapper}
              key={item.name}
              onClick={(e) => {
                e.preventDefault()
                handleClick(item.href)
              }}
            >
              <a
                className={activeId === item.href ? styles.active : ""}
                href={`#${item.href}`}
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <Button disableAnimation={true}>Make appointment</Button>
      </div>
    </header>
  )
}

export default Header
