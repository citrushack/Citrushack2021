import styles from "../styles/Common.module.css";
import Volunteerstyles from "../styles/Volunteer.module.css";
import { FaChevronRight } from "react-icons/fa";

export default function Volunteer() {
  return (
    <main className={styles.main}>
      <div className={Volunteerstyles.wrapper}>
        <h1 className={styles.title}>Get Involved</h1>
        <p className={`${styles.description}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas
          sapien sit amet metus efficitur semper. Integer id luctus enim.
          Curabitur a arcu et arcu tincidunt lobortis eget sed risus.
          Suspendisse vitae libero magna. Pellentesque sodales at urna nec
          rutrum. Nulla lorem nisl, congue id aliquet vitae, malesuada sed
          lacus. Phasellus dapibus euismod leo, ut scelerisque tellus rhoncus
          sed.
        </p>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Mentors <FaChevronRight className={styles.icon}/></h3>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Volunteers <FaChevronRight className={styles.icon}/></h3>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn More <FaChevronRight className={styles.icon}/></h3>
          </a>
        </div>
      </div>
    </main>
  );
}
