import Head from "next/head";
import Link from "next/link";
import { siteTitle } from "../components/Container";
import styles from "../styles/Common.module.css";
import Teamstyles from "../styles/Team.module.css";

export default function Team() {
  return (
      <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Here's the team.</h1>
        <p className={styles.description}>Be like Raid Shadow Legends</p>
        <Link href="/">
        <a className={styles.card}>
          <h3>Back to Home&rarr;</h3>
        </a>
        </Link>
      </main>
      </>
  );
}