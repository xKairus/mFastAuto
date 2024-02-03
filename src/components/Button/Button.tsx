import { ReactNode } from "react";
import styles from "./Button.module.css";

interface BtnProps {
  children: ReactNode;
  newClass?: string;
}

export default function Button({ children, newClass = "" }: BtnProps) {
  return (
    <button className={`${styles.button} ${styles[newClass]}`}>
      {children}
    </button>
  );
}
