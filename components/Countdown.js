import React from "react";
import Countdown from "react-countdown";
import Livestyles from "../styles/Live.module.css"

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
      <>
      <h1 className={Livestyles.timer}>
        {days}d : {hours}hr : {minutes}min : {seconds}s left!
      </h1>
      </>
    );
  }
};

export default function CountdownTimer() {
  return <Countdown date={"2021-04-11T24:00:00"} renderer={renderer} />;
}
