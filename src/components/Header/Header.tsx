import { useEffect, useState } from "react"
import Button from "../Button/Button"
import styles from "./Header.module.css"

const nav = [
  {
    name: "Home",
    href: "Home",
  },
  {
    name: "About Us",
    href: "About",
  },
  {
    name: "Service",
    href: "Service",
  },
  {
    name: "Pricing",
    href: "Pricing",
  },
  {
    name: "Contact Us",
    href: "Contact",
  },
  {
    name: "Directions",
    href: "Directions",
  },
]

const scrollToElement = (elementId: string, offset: number) => {
  const element = document.getElementById(elementId)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - offset,
      behavior: "smooth",
    })
  }
}

export default function Header() {
  const [currentSection, setCurrentSection] = useState(null)
  const [lastActiveSection, setLastActiveSection] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let closestSectionId = null
      let closestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isElementInViewport = rect.top <= 80 && rect.bottom >= 80

        // Если текущий див виден во вьюпорте, сделать его ближайшим
        if (isElementInViewport) {
          closestSectionId = section.id
          closestDistance = 0
        } else {
          // Определить расстояние до верха вьюпорта для дива
          const distance = Math.abs(rect.top - 80)

          // Если это расстояние ближе, сделать этот див ближайшим
          if (distance < closestDistance) {
            closestSectionId = section.id
            closestDistance = distance
          }
        }
      })

      // Если текущая секция пуста (например, пользователь прокрутил вверх за пределы секций),
      // используйте ближайший див
      setCurrentSection(closestSectionId || lastActiveSection)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastActiveSection])

  useEffect(() => {
    if (currentSection) {
      setLastActiveSection(currentSection)
    }
  }, [currentSection])

  return (
    <section className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>M FAST AUTO</span>
        <nav className={styles.nav}>
          {nav.map((item) => (
            <a
              key={item.name}
              onClick={() => scrollToElement(item.href, 80)}
              href={`#${item.href}`}
              className={
                currentSection === item.href || lastActiveSection === item.href
                  ? styles.active
                  : ""
              }
            >
              {item.name}
            </a>
          ))}
        </nav>
        <Button>Make appointment</Button>
      </div>
    </section>
  )
}
