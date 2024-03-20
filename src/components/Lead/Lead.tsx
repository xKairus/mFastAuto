import { sectionHeaders } from "../../data/typography";
import Button from "../Button/Button";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./Lead.module.css";

export default function Lead() {
  return (
    <section className={styles.lead} id="Home">
      <div className={styles.container}>
        <div className={styles.info}>
          <SectionHeader {...sectionHeaders.lead} size="big" left={true} />
        </div>
        <Button newClass={"inverse"}>Get A Quote</Button>
      </div>
    </section>
  );
}
