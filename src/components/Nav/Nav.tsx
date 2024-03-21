import { useEffect, useState } from "react"
import styles from "./Nav.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

interface NavItem {
  name: string
  href: string
}

interface NavProps {
  isOpen: boolean
  onClose: () => void
}

const nav: NavItem[] = [
  { name: "Home", href: "Home" },
  { name: "About Us", href: "About" },
  { name: "Service", href: "Service" },
  { name: "Pricing", href: "Pricing" },
  { name: "Contact Us", href: "Contact" },
  { name: "Directions", href: "Directions" },
]

export default function Nav({ isOpen, onClose }: NavProps) {
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
    <>
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
      <nav className={`${styles.mobile} ${isOpen && styles.mobile_open}`}>
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
        <div onClick={onClose}>
          <FontAwesomeIcon
            className={styles.close}
            icon={faXmark}
            style={{ color: "#1e266d" }}
          />
        </div>
      </nav>
      <div className={styles.overlay} onClick={onClose}></div>
    </>
  )
}
