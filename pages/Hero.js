import styles from "../styles/Common.module.css";
import Herostyles from "../styles/Hero.module.css";

import Particles from "react-tsparticles";

export default function Hero() {
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
          fpsLimit: 60,
          backgroundMode:{
            enable: true,
            zIndex: -100,
          },
          interactivity: {
            detectsOn: "window",
            events: {
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
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
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1600,
              },
              value: 80,
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
      <p className={Herostyles.description}>
        Be zen.
      </p>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.action}>
          <h3>Sign Up! &rarr;</h3>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Log In &rarr;</h3>
        </a>
      </div>
    </main>
  );
}
