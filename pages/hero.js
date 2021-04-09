import styles from "../styles/Common.module.css";
import Herostyles from "../styles/Hero.module.css";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Particles from "react-tsparticles";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const SignUpButton = dynamic(
  () =>
    import("../components/SignUpButton").catch((err) => {
      return () => <p>oops... this failed to load</p>;
    }),
  { ssr: false }
);

export default function Hero() {
  return (
    <main
      className={`${styles.main} ${Herostyles.heroimage} ${Herostyles.pad}`}
    >
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "",
            },
            position: {
              position: "-50% 50%",
              repeat: "no-repeat",
              size: "cover",
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
            collisions: {
              enable: false,
            },
            position: {
              x: -100,
              y: 100,
            },
            move: {
              enable: true,
              speed: 0.55,
              direction: "bottom-right",
              random: true,
              straight: true,
              out_mode: "out",
              bounce: false,
              gravity: {
                acceleration: 9.8,
                enable: true,
                maxSpeed: 0.5,
              },
            },
            number: {
              density: {
                enable: true,
                value_area: 2000,
              },
              value: 30,
            },
            rotate: {
              random: {
                enable: true,
              },
              animation: {
                enable: true,
                speed: 10,
              },
              direction: "random",
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.2,
                maximumValue: 0.25,
              },
            },
            shape: {
              type: "image",
              image: {
                src: "/backgrounds/leaf.png",
                width: 200,
                height: 200,
              },
            },
            size: {
              random: true,
              value: 25,
            },
          },
          detectRetina: true,
        }}
      />
      <div className={Herostyles.content}>
        <div className={Herostyles.text}>
          <h1 className={Herostyles.title}>Citrus Hack</h1>
          <h1>April 9-11, 2021</h1>
          <p className={Herostyles.caption}>
            Create your zen.
            <br /> 自分の禅を作れ。
          </p>
        </div>
        <div className={`${styles.grid} ${Herostyles.buttonGrid}`}>
          <Link href="/live">
            <div className={`${styles.card} ${Herostyles.action}`}>
              <h3 className={Herostyles.h3}>
                Live
                <FaChevronRight className={styles.icon} />
              </h3>
            </div>
          </Link>
          <ScrollLink
            to="About"
            spy={true}
            smooth={true}
            duration={800}
            activeClass="active"
            className={`${styles.card} ${styles.clickable} ${Herostyles.secondary}`}
          >
            <h3 className={Herostyles.h3}>
              LEARN MORE <FaChevronDown className={styles.icon} />
            </h3>
          </ScrollLink>
        </div>
      </div>
    </main>
  );
}
