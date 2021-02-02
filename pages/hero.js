import styles from "../styles/Common.module.css";
import Herostyles from "../styles/Hero.module.css";
import { Link } from "react-scroll";
import Particles from "react-tsparticles";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

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
              opacity: {
                "random": {
                  "enable": true,
                },
              },
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "bottom",
              enable: true,
              outMode: "out",
              random: true,
              straight: true,
              speed: 1.5,
              gravity: {
                acceleration	:	9.8,
                enable	:		true,
                maxSpeed : 0.4
              }
            },
            number: {
              density: {
                enable: true,
                value_area: 2000,
              },
              value: 30,
            },
            "rotate": {
              "random": {
                "enable": true
              },
              "animation": {
                "enable": true,
                "speed": 10
              },
              "direction": "random"
            },        
            "opacity": {
              "random": {
                "enable": true,
                minimumValue: 0.2,
                maximumValue: 0.25,
              },
            },  
            shape: {
              type: "image",
              image: {
                src: "/backgrounds/leaf.png",
                width: 200,
                height: 200
              }
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
          <SignUpButton/>
          <Link
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
          </Link>
        </div>
      </div>
    </main>
  );
}
