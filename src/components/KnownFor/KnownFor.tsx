import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sectionHeaders } from "../../data/typography";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./KnownFor.module.css";
import {
  faAward,
  faCar,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";

export default function KnownFor() {
  return (
    <section className={styles.knownFor}>
      <div className={styles.header}>
        <SectionHeader {...sectionHeaders.knownFor} />
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <FontAwesomeIcon
            icon={faHandshake}
            size="4x"
            style={{ color: "#377ef9" }}
          />
          <span>Honesty</span>
        </div>
        <div className={styles.card}>
          <FontAwesomeIcon
            icon={faAward}
            size="4x"
            style={{ color: "#377ef9" }}
          />
          <span>Quality</span>
        </div>
        <div className={styles.card}>
          <FontAwesomeIcon
            icon={faCar}
            size="4x"
            style={{ color: "#377ef9" }}
          />
          <span>Safety</span>
        </div>
        <div className={styles.card}>
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            size="4x"
            style={{ color: "#377ef9" }}
          />
          <span>Experience</span>
        </div>
      </div>
    </section>
  );
}
