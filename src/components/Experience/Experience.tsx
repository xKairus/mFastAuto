import Button from "../Button/Button";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { sectionHeaders, expCards } from "../../data/typography";

import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.info}>
          <SectionHeader {...sectionHeaders.experience} />
          <ul>
            <li>Affordable auto repair</li>
            <li>Maintenance packages</li>
            <li>Inspection and repairs</li>
            <li>Dedicated to service</li>
          </ul>
          <Button>Learn More</Button>
        </div>
        <div className={styles.cards}>
          {expCards.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles['card' + (index + 1)]}`}
            >
              <img src={card.icon} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
