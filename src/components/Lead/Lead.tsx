import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Lead.module.css";

export default function Lead() {
  return (
    <section className={styles.lead}>
      <div className={styles.container}>
        <div className={styles.info}>
          <SectionHeader />
        </div>
      </div>
    </section>
  );
}