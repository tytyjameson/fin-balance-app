import Image from "next/image";
import NetIncome from "./components/NetIncome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <NetIncome />
      </main>
    </div>
  );
}
