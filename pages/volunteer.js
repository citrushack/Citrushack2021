import styles from "../styles/Common.module.css";
import Volunteerstyles from "../styles/Volunteer.module.css";
import { FaChevronRight } from "react-icons/fa";

export default function Volunteer() {
  return (
    <main className={styles.main}>
      <div className={Volunteerstyles.wrapper}>
        <h1 className={styles.title}>Get Involved</h1>
        <p className={`${styles.description} ${Volunteerstyles.pad}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
          sapien sit amet metus efficitur semper.
        </p>
        <div className={`${styles.grid} ${Volunteerstyles.grid}`}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>
              Mentors <FaChevronRight className={styles.icon} />
            </h3>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>
              Volunteers <FaChevronRight className={styles.icon} />
            </h3>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>
              Learn More <FaChevronRight className={styles.icon} />
            </h3>
          </a>
        </div>
      </div>
    </main>
  );
}
