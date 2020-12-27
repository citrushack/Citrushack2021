import styles from "../styles/Common.module.css";

export default function Sponsors(){
    return (
        <main className={styles.main}>
          <h1 className={styles.title}>Sponsors</h1>
          <p className={styles.description}>Those who made this possible</p>
          <a href="/SponsorUs" className={styles.card}>
            <h3>Sponsor us!&rarr;</h3>
          </a>
        </main>
    )
}