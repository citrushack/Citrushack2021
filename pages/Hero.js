import styles from "../styles/Common.module.css";
import Herostyles from "../styles/Hero.module.css";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { useIsAuthenticated } from "react-auth-kit";

export default function Hero() {
  const isAuthenticated = useIsAuthenticated();
  const [authHookValue, setHookValue] = useState(false);

  //If I don't force the hook to set on page reload, nextjs hydration gets confused
  //and never updates the apply button link. I dont like this solution but it works
  useEffect(() => {
    setHookValue(isAuthenticated());
  }, []);

  return (
    <main className={styles.main}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "",
            },
            position: {
              value: "",
            },
          },
          fpsLimit: 30,
          backgroundMode: {
            enable: true,
            zIndex: -100,
          },
          interactivity: {
            detectsOn: "window",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: ["#ffc0cb", "#fc9aab", "#f78195"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "bottom-right",
              enable: true,
              outMode: "out",
              random: true,
              speed: 2,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 2000,
              },
              value: 16,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 7,
            },
          },
          detectRetina: true,
        }}
      />
      <h1 className={Herostyles.title}>Citrushack 2021</h1>
      <p className={Herostyles.description}>Be zen.</p>
      <div className={styles.grid}>
        <a
          href={`${
            authHookValue ? "/apply" : "http://localhost:1337/connect/google"
          }`}
          className={styles.action}
        >
          <h3>Apply now! &rarr;</h3>
        </a>
        <Link
          to="About"
          spy={true}
          smooth={true}
          duration={800}
          activeClass="active"
          className={`${styles.card} ${styles.clickable}`}
        >
          <h3>Learn more &rarr;</h3>
        </Link>
      </div>
    </main>
  );
}
