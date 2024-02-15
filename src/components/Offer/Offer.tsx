import styles from "./Offer.module.css";
import { sectionHeaders } from "./../../data/typography.tsx";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import PriceList from "../PriceList/PriceList.tsx";

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
      <PriceList />
    </section>
  );
}
