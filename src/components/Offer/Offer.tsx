import styles from "./Offer.module.css";
import { sectionHeaders } from "./../../data/typography.tsx";
import { SectionHeader } from "../SectionHeader/SectionHeader";

export default function Offer() {
  return (
    <section className={styles.offer}>
      <SectionHeader {...sectionHeaders.offer} />
      <div>
        <ul>
          <li>Repair</li>
          <li>Preventive</li>
          <li>Body Work</li>
        </ul>
      </div>
      <div>
        <div>
          <span>Labor rate per hour</span>
          <span></span>
          <span>$80.00</span>
        </div>
      </div>
    </section>
  );
}
