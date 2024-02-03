import { ReactNode } from "react";
import styles from "./Button.module.css";

interface BtnProps {
  children: ReactNode;
}

export default function Button({ children }: BtnProps) {
  return <button className={styles.button}>{children}</button>;
}
