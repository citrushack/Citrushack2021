import styles from "../styles/Common.module.css";
import Introstyles from "../styles/Intro.module.css";

export default function Intro() {
  return (
    <main className={styles.main}>
      <section className={Introstyles.introduction}>
        <div className={Introstyles.introductionCol}>
          <h1 className={styles.title}>Largest hackathon UCR offers</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas sapien sit amet metus efficitur semper. Integer id luctus
            enim. Curabitur a arcu et arcu tincidunt lobortis eget sed risus.
            Suspendisse vitae libero magna. Pellentesque sodales at urna nec
            rutrum. Nulla lorem nisl, congue id aliquet vitae, malesuada sed
            lacus. Phasellus dapibus euismod leo, ut scelerisque tellus rhoncus
            sed.
          </p>
        </div>
        <div className={Introstyles.infogrid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>$1000 in prizes &rarr;</h3>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>36 Hours &rarr;</h3>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>500 Hackers &rarr;</h3>
          </a>
        </div>
      </section>
    </main>
  );
}
