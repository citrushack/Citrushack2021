import React, { useEffect } from "react";
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
              title="Founding Engineer @ Highlight"
            />
            <Judge
              picture="/judges/acharya.jpg"
              username="Aditya Acharya"
              title="UCR Alumnus"
            />
            <Judge
              picture="/judges/puloma.jpeg"
              username="Puloma Katiyar"
              title="ACM@UCR President 2021-2022"
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
        <div className={Livestyles.border2}></div>
        <h2 className={Livestyles.title}>Schedule</h2>
        <a
          className={`${Livestyles.resource}`}
          href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQKLXBJ7Aogv3r3wWA_oL5fwE2puEkTK-ZFZpmfMjJx2n62LkgyYfHlZ2LNez7cjw/pubhtml?gid=1015411112&amp;single=true&amp;widget=true&amp;headers=false"
          target="_blank"
        >
          Expand{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={Livestyles.arrow}
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <iframe
          className={Livestyles.schedule}
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQKLXBJ7Aogv3r3wWA_oL5fwE2puEkTK-ZFZpmfMjJx2n62LkgyYfHlZ2LNez7cjw/pubhtml?gid=1015411112&amp;single=true&amp;widget=true&amp;headers=false"
          width="1250"
          scrolling="no"
          loading="eager"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          name="iframe1"
        ></iframe>
        <div className={Livestyles.border3}></div>
        <h2 className={Livestyles.title}>Resources</h2>
        <a
          className={Livestyles.resource}
          href="https://github.com/citrushack/CitrusHackResources"
          target="_blank"
        >
          Github Resources{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={Livestyles.arrow}
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <div className={Livestyles.border4}></div>
        <Sponsors />
      </div>
    </Container>
  );
}
