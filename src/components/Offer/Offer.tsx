import styles from "./Offer.module.css"
import {
  sectionHeaders,
  repairServices,
  preventiveMaintenance,
  bodyWork,
} from "./../../data/typography.tsx"
import SectionHeader from "../SectionHeader/SectionHeader"
import PriceList from "../PriceList/PriceList.tsx"
import { useRef, useState } from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation.ts"
import { scaleUp } from "../../utils/animations.ts"

interface Service {
  title: string
  price: string
  desc?: string
}

export default function Offer() {
  const [selectedOffer, setSelectedOffer] = useState<Service[]>(repairServices)
  const [activeList, setActiveList] = useState<string>("Repair Services")

  const ref = useRef<HTMLUListElement>(null)
  const isAnimated = useScrollAnimation(ref)

  const handleServiceClick = (services: Service[], listName: string) => {
    setSelectedOffer(services)
    setActiveList(listName)
  }

  return (
    <section className={styles.offer} id="Pricing">
      <SectionHeader {...sectionHeaders.offer} />
      <div>
        <ul ref={ref} className={styles.services}>
          <li
            style={
              activeList !== "Repair Services" ? scaleUp(isAnimated) : undefined
            }
            className={`${styles.service} ${
              activeList === "Repair Services" && styles.active
            }`}
            onClick={() =>
              handleServiceClick(repairServices, "Repair Services")
            }
          >
            Repair Services
          </li>
          <li
            style={
              activeList !== "Preventive Maintenance"
                ? scaleUp(isAnimated)
                : undefined
            }
            className={`${styles.service} ${
              activeList === "Preventive Maintenance" && styles.active
            }`}
            onClick={() =>
              handleServiceClick(
                preventiveMaintenance,
                "Preventive Maintenance"
              )
            }
          >
            Preventive Maintenance
          </li>
          <li
            style={activeList !== "Body Work" ? scaleUp(isAnimated) : undefined}
            className={`${styles.service} ${
              activeList === "Body Work" && styles.active
            }`}
            onClick={() => handleServiceClick(bodyWork, "Body Work")}
          >
            Body Work
          </li>
        </ul>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          {selectedOffer.map((service, index) => (
            <PriceList
              key={index}
              title={service.title}
              price={service.price}
              desc={service.desc}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
