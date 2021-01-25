import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import styles from "../styles/Common.module.css";

import Hero from "./hero";
import Intro from "./intro";
import Faq from "./faq";
import Sponsors from "./sponsors";
import Volunteer from "./volunteer";
import Tracks from "./tracks";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const MouseTrails = dynamic(
  () =>
    import("../components/MouseTrails").catch((err) => {
      return () => <p>oops... this failed to load</p>;
    }),
  { ssr: false }
);

import { Element, animateScroll as scroll } from "react-scroll";
export default function Home() {

  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <MouseTrails/>
        <Element name="Home">
          <Hero />
        </Element>
        <Element name="About">
          <Intro />
        </Element>
        <Element name="Tracks">
          <Tracks />
        </Element>
        <Element name="Questions">
          <Faq />
        </Element>
        <Element name="Help">
          <Volunteer />
        </Element>
        <Element name="Sponsors">
          <Sponsors />
        </Element>
      </div>
      <Footer />
    </Container>
  );
}
