import Container, { siteTitle } from "../components/Container";
import styles from "../styles/Common.module.css";

export default function Sponsors(){
    return (
        <main className={styles.main}>
          <h1 className={styles.title}>Sponsor Us!!!</h1>
          <p className={styles.description}>Be like Raid Shadow Legends</p>
          <a href="/" className={styles.card}>
            <h3>Back to Home&rarr;</h3>
          </a>
        </main>
    )
}