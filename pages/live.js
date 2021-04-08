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
      <div className={Livestyles.judgePicture}>
        <Image
          src={picture}
          alt="Judge profile picture"
          width={100}
          height={100}
        />
      </div>
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
        <h2 className={Livestyles.title}>Judges</h2>
        <div className={Livestyles.judgeWrapper}>
          <div>
            <Judge
              picture="/judges/Elmer.jpg"
              username="Elmer Thomas"
              title="Software Engineer @ Twilio"
            />
            <Judge
              picture="/judges/cam.jpg"
              username="Cameron Morin"
              title="Consultant @ AWS"
            />
            <Judge
              picture="/judges/maureen.jpg"
              username="Angela Malangit"
              title="IEEE@UCR President"
            />

            <Judge
              picture="/judges/psiala.jpg"
              username="Lucca Psiala"
              title="ACM@UCR President"
            />
            <Judge
              picture="/judges/crites.jpg"
              username="Brian Crites"
              title="Software Engineer 
              @ Piñata Farms"
            />
            <Judge
              picture="/judges/pham.jpg"
              username="John Pham"
              title="Sr. Software Engineer 
              @ Smartsheet"
            />
            <Judge
              picture="/judges/acharya.jpg"
              username="Aditya Acharya"
              title="UCR Alumnus"
            />
            <Judge
              picture="/judges/shin.jpg"
              username="John Shin"
              title="Software Engineer @ Raytheon"
            />
          </div>
          <div>
            <Judge
              picture="/judges/ong.jpeg"
              username="Eric Ong"
              title="Software Engineer @ OpenTable"
            />

            <Judge
              picture="/judges/salloum.jpg"
              username="Mariam Salloum"
              title="Assistant Professor @ UCR"
            />
            <Judge
              picture="/judges/hazel.jpg"
              username="Hazel Nguyen"
              title="UCR Alumnus"
            />
            <Judge
              picture="/judges/tsan.jpg"
              username="Sandy Tsan"
              title="UCR Alumnus"
            />
            <Judge
              picture="/judges/Lependu.jpg"
              username="Paea Lependu"
              title="Assistant Professor @ UCR"
            />
            <Judge
              picture="/judges/poole.jpg"
              username="Jacob Poole"
              title="Electrical Engineer at Applied Medical"
            />
            <Judge
              picture="/judges/james.jpg"
              username="James Luo"
              title="UCR Alumnus"
            />
          </div>
          <div>
          <Judge
              picture="/judges/syris.jpg"
              username="Syris Norelli"
              title="Autopilot Software Engineer @ Tesla"
            />
            <Judge
              picture="/judges/jed.jpg"
              username="Jed Schwendiman"
              title="Assistant Dean for Development"
            />
            <Judge
              picture="/judges/downey.jpg"
              username="Kelly Downey"
              title="CS Lecturer"
            />
            <Judge
              picture="/judges/williamshiao.jpg"
              username="Will Shiao"
              title="UCR PhD Student"
            />
            <Judge
              picture="/judges/goyal.jpg"
              username="Neal Goyal"
              title="Technical Program Manager 
              @ Paypal"
            />
            <Judge
              picture="/logoRevised.png"
              username="Bradley Evans"
              title="Security Research @ UCR"
            />
            <Judge
              picture="/judges/papalexakis.jpg"
              username="Vagelis Papalexakis"
              title="Assistant Professor @ UCR"
            />
          </div>
        </div>
        <h2 className={Livestyles.title}>Schedule</h2>
        <h2 className={Livestyles.title}>Resources</h2>
        <Sponsors />
      </div>
    </Container>
  );
}
