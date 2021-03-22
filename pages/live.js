import React from "react";
import Container from "../components/Container";
import Countdown from "react-countdown";

import Livestyles from "../styles/Live.module.css";
import styles from "../styles/Common.module.css";

// Random component
const Completionist = () => <h2>Hacking has ended!</h2>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <h2>
        {days} days, {hours} hours, {minutes} minutes, and {seconds} seconds
        left!
        <br />
        <br />
        {days}:{hours}:{minutes}:{seconds} left!
      </h2>
    );
  }
};

export default function Live() {
  return (
    <Container main>
      <div className={styles.container}>
        <h1>Live Page</h1>
        <Countdown date={"2021-04-11T24:00:00"} renderer={renderer} />
        <h2>Judges</h2>
        <h2>Schedule</h2>
        <h2>Resources</h2>
        <h2>Sponsors</h2>
      </div>
    </Container>
  );
}
