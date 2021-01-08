import Link from "next/link";
import styles from "../styles/Common.module.css";

export default function Sponsors() {
  return (
      <main className={styles.main}>
        <h1 className={styles.title}>Sponsor Us</h1>
        <p className={styles.description}>Be like Raid Shadow Legends</p>
        <Link href="/">
        <a className={styles.card}>
          <h3>Back to Home&rarr;</h3>
        </a>
        </Link>
      </main>
  );
}
