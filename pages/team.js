import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { siteTitle } from "../components/Container";
import styles from "../styles/Common.module.css";
import Teamstyles from "../styles/Team.module.css";

const Profile = ({ image, link, title }) => {
  return (
    <div>
      <Link href={link}>
        <a className={Teamstyles.link}>
          <div className={Teamstyles.profile}>
            <Image className={Teamstyles.profilePicture} src={image} alt="Profile Picture" width={250} height={250} />
            <h3>{title}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default function Team() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Here's the team.</h1>
        <div className={Teamstyles.grid}>
          <Profile
            image="/logoRevised.png"
            link="https://citrushack.com"
            title="Orange"
          />
          <Profile
            image="/logoRevised.png"
            link="https://citrushack.com"
            title="Orange"
          />
          <Profile
            image="/logoRevised.png"
            link="https://citrushack.com"
            title="Orange"
          />
          <Profile
            image="/logoRevised.png"
            link="https://citrushack.com"
            title="Orange"
          />
          <Profile
            image="/logoRevised.png"
            link="https://citrushack.com"
            title="Orange"
          />
          <Profile
            image="/logoRevised.png"
            link="https://citrushack.com"
            title="Orange"
          />
        </div>
        <Link href="/">
          <a className={styles.card}>
            <h3>Back to Home&rarr;</h3>
          </a>
        </Link>
      </main>
    </>
  );
}
