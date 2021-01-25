import { useState } from "react";

import styles from "../styles/Common.module.css";
import Trackstyles from "../styles/Tracks.module.css";

const Security = () => {
  return (
    <div className={Trackstyles.track}>
      <div className={Trackstyles.text}>
        <h2 className={Trackstyles.tracktitle}>Security</h2>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className={Trackstyles.image}>
        <img src="/logoRevised.png" alt="track logo" />
      </div>
    </div>
  );
};

const Sustainability = () => {
  return (
    <div className={Trackstyles.track}>
      <div className={Trackstyles.text}>
        <h2 className={Trackstyles.tracktitle}>Sustainability</h2>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className={Trackstyles.image}>
        <img src="/logoRevised.png" alt="track logo" />
      </div>
    </div>
  );
};

const Other = () => {
  return (
    <div className={Trackstyles.track}>
      <div className={Trackstyles.text}>
        <h2 className={Trackstyles.tracktitle}>Other</h2>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className={Trackstyles.image}>
        <img src="/lotus.png" alt="track logo" />
      </div>
    </div>
  );
};

export default function Tracks() {
  const [data, setData] = useState([
    <Security />,
    <Sustainability />,
    <Other />,
  ]);

  const [showAll, setShowAll] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showCurrent, setShowCurrent] = useState(true);

  const toggleCurrent = () => {
    if (!showCurrent) {
      setShowCurrent(true);
      setShowAll(false);
      return;
    }
  };

  const setCurrent = (index) => {
    setCurrentIdx(index);
    toggleCurrent();
  };
  return (
    <main className={styles.main}>
      <div className={Trackstyles.tracks}>
        <h1 className={styles.title}>Tracks</h1>
        <div className={Trackstyles.trackwrapper}>
          {showCurrent ? (
            <div className={Trackstyles.trackcontent}>{data[currentIdx]}</div>
          ) : null}
          <ul className={Trackstyles.trackselection}>
            <li className={Trackstyles.link} onClick={() => setCurrent(0)}>
              Security
            </li>
            <li className={Trackstyles.link} onClick={() => setCurrent(1)}>
              Sustainability
            </li>
            <li className={Trackstyles.link} onClick={() => setCurrent(2)}>
              Wellness
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
