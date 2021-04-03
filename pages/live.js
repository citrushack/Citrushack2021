import React from "react";
import Image from "next/image";
import Container from "../components/Container";
import CountdownTimer from "../components/Countdown";
import Sponsors from "./sponsors";

import Livestyles from "../styles/Live.module.css";
import styles from "../styles/Common.module.css";

const Judge = ({ picture, username, title }) => {
  return (
    <div className={Livestyles.judge}>
      <Image
        src={picture}
        alt="Judge profile picture"
        width={100}
        height={100}
      />
      <caption>
        <h3>{username}</h3>
        <p>{title}</p>
      </caption>
    </div>
  );
};

export default function Live() {
  return (
    <Container main>
      <div className={styles.container}>
        <CountdownTimer />
        <h2 className={styles.title}>Judges</h2>
        <div className={Livestyles.judgeWrapper}>
          <div>
            <Judge
              picture="/logoRevised.png"
              username="Scotty"
              title="Mascot"
            />
            <Judge
              picture="/logoRevised.png"
              username="Scotty"
              title="Mascot"
            />
            <Judge
              picture="/logoRevised.png"
              username="Scotty"
              title="Mascot"
            />
          </div>
          <div>
            <Judge
              picture="/logoRevised.png"
              username="Scotty"
              title="Mascot"
            />
            <Judge
              picture="/logoRevised.png"
              username="Scotty"
              title="Mascot"
            />
            <Judge
              picture="/logoRevised.png"
              username="Scotty"
              title="Mascot"
            />
          </div>
          <div>
            <Judge
              picture="/logoRevised.png"
              username="Scotty"
              title="Mascot"
            />
            <Judge
              picture="/logoRevised.png"
              username="Scotty"
              title="Mascot"
            />
            <Judge
              picture="/logoRevised.png"
              username="Scotty"
              title="Mascot"
            />
          </div>
        </div>
        <h2 className={styles.title}>Schedule</h2>
        <h2 className={styles.title}>Resources</h2>
        <Sponsors />
      </div>
    </Container>
  );
}
