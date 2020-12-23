import Head from "next/head";
import styles from "../styles/Home.module.css";

import AccordionComponent from "../components/Accordion";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Hero section */}
        <main className={styles.main}>
          <h1 className={styles.title}>Citrushack 2021</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas sapien sit amet metus efficitur semper. Integer id luctus
            enim. Curabitur a arcu et arcu tincidunt lobortis eget sed risus.
            Suspendisse vitae libero magna. Pellentesque sodales at urna nec
            rutrum. Nulla lorem nisl, congue id aliquet vitae, malesuada sed
            lacus. Phasellus dapibus euismod leo, ut scelerisque tellus rhoncus
            sed.
          </p>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Sign Up! &rarr;</h3>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn More &rarr;</h3>
            </a>
          </div>
        </main>

        {/* Information Section */}
        <main className={styles.main}>
          <section className={styles.introduction}>
            <div className={styles.introductionCol}>
              <h1 className={styles.title}>Largest hackathon UCR offers</h1>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                egestas sapien sit amet metus efficitur semper. Integer id
                luctus enim. Curabitur a arcu et arcu tincidunt lobortis eget
                sed risus. Suspendisse vitae libero magna. Pellentesque sodales
                at urna nec rutrum. Nulla lorem nisl, congue id aliquet vitae,
                malesuada sed lacus. Phasellus dapibus euismod leo, ut
                scelerisque tellus rhoncus sed.
              </p>
            </div>
            <div className={styles.infogrid}>
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

        {/* FAQ section */}
        <main className={styles.main}>
          <h1 className={styles.title}>Questions?</h1>
          <p className={styles.description}>
            Here are the most commonly asked questions! Feel free to ask us any
            question you don't see on here.
          </p>
          <AccordionComponent />
        </main>

        {/* Volunteers section */}
        <main className={styles.main}>
          <h1 className={styles.title}>Get Involved</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas sapien sit amet metus efficitur semper. Integer id luctus
            enim. Curabitur a arcu et arcu tincidunt lobortis eget sed risus.
            Suspendisse vitae libero magna. Pellentesque sodales at urna nec
            rutrum. Nulla lorem nisl, congue id aliquet vitae, malesuada sed
            lacus. Phasellus dapibus euismod leo, ut scelerisque tellus rhoncus
            sed.
          </p>
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Sign Up! &rarr;</h3>
            </a>

            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Sign Up! &rarr;</h3>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn More &rarr;</h3>
            </a>
          </div>
        </main>

        {/* Sponsors Section */}
        <main className={styles.main}>
          <h1 className={styles.title}>Sponsors</h1>
          <p className={styles.description}>Those who made this possible</p>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Sponsor us!&rarr;</h3>
          </a>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by love and coffee from the Citrushack team.
          </a>
        </footer>
      </div>
    </>
  );
}
