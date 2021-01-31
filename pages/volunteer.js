import styles from "../styles/Common.module.css";
import vs from "../styles/Volunteer.module.css";
import { FaChevronRight } from "react-icons/fa";

export default function Volunteer() {
  return (
    <main className={styles.main}>
      <div className={vs.wrapper}>
        <h1 className={styles.title}>Get Involved</h1>
        <p className={`${styles.description} ${vs.pad}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
          sapien sit amet metus efficitur semper.
        </p>
        <div className={styles.grid}>
          <a href="https://forms.gle/fCtHkDG7favDxifF6" className={`${styles.card} ${vs.color1}`}>
            <h3>
              Mentors <FaChevronRight className={styles.icon} />
            </h3>
          </a>

          <a href="https://forms.gle/ewWRkKgzq4q9Zhok6" className={`${styles.card} ${vs.color2}`}>
            <h3>
              Volunteers <FaChevronRight className={styles.icon} />
            </h3>
          </a>
          {/* Uncomment when site is live. */}
          {/* <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>
              Learn More <FaChevronRight className={styles.icon} />
            </h3>
          </a> */}
        </div>
      </div>
    </main>
  );
}
