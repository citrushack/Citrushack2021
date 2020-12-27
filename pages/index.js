import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import styles from "../styles/Common.module.css";

import Hero from "./Hero";
import Intro from "./Intro";
import Faq from "./Faq";
import Sponsors from "./Sponsors";
import Volunteer from "./Volunteer";

import { Nav } from "../components/Nav";
import Footer from "../components/Footer";

import {
  Element,
  animateScroll as scroll,
} from "react-scroll";

export default function Home() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className={styles.container}>
        <Element name="Home">
          <Hero />
        </Element>
        <Element name="About">
          <Intro />
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
