import styles from "./SectionHeader.module.css";

interface SHProps {
  title: string;
  text?: string;
  size?: string;
}

export const SectionHeader = ({ title, text, size = "" }: SHProps) => {
  return (
    <>
      <h2 className={`${styles.title} ${styles[size]}`}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </>
  );
};

export const SectionHeaderInverse = ({ title, text, }: SHProps) => {
  return (
    <>
      {text && <p className={`${styles.text} ${styles.inverse}`}>{text}</p>}
      <h2 className={`${styles.title} ${styles.inverse}`}>{title}</h2>
    </>
  );
};
