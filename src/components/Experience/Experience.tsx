import Button from "../Button/Button";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { sectionHeaders, expCards } from "../../data/typography";

import styles from "./Experience.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.info}>
          <SectionHeader {...sectionHeaders.experience} size="small" />
          <ul className={styles.list}>
            <li className={styles.item}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#3dd169" }}
              />
              <span>Affordable auto repair</span>
            </li>
            <li className={styles.item}>
              {" "}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#3dd169" }}
              />
              <span>Maintenance packages</span>{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#3dd169" }}
              />
              <span>Inspection and repairs</span>{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <FontAwesomeIcon
                icon={faCheckCircle}
                style={{ color: "#3dd169" }}
              />
              <span>Dedicated to service</span>{" "}
            </li>
          </ul>
          <Button>Learn More</Button>
        </div>
        <div className={styles.cards}>
          {expCards.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles["card" + (index + 1)]}`}
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
