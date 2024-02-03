import { sectionHeaders } from "../../data/typography";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import styles from "./Service.module.css";

export default function Service() {
  return (
    <section className={styles.service}>
      <div className={styles.container}>
        <SectionHeader {...sectionHeaders.service} />
      </div>
    </section>
  );
}
