import Link from "next/link";
import styles from "../styles/Common.module.css";
import sponsorStyles from "../styles/Sponsors.module.css";
import { FaChevronRight } from "react-icons/fa";

export default function Sponsors() {
  return (
    <main className={`${styles.main} ${styles.topAlign}`}>
      <div className={sponsorStyles.wrapper}>
        <h1 className={styles.title}>Sponsors</h1>
        <p className={styles.description}>
          Those who made this hackathon possible.
        </p>
        <div className={styles.grid}>
        <Link href="/SponsorUs">
          <a className={styles.card}>
            <h3>
              Sponsor us <FaChevronRight className={styles.icon} />
            </h3>
          </a>
        </Link>
        </div>
      </div>
    </main>
  );
}
