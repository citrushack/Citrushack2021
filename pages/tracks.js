import { useState } from "react";

import styles from "../styles/Common.module.css";
import Trackstyles from "../styles/Tracks.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};
const fade = {
  enter: {
      y: -5,
      opacity: 0
  },
  center: {
    y: 0,
    opacity: 1
  },
  exit:
  {
      y:-5,
      opacity: 0,
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Security = () => {
  return (
    <motion.div                          
    initial="enter"
    animate="center"
    exit="exit"
    variants={fade}
    transition={{ duration: .7, ease: [0.43, 0.13, 0.23, 0.96] }}
    className={Trackstyles.track}>
      <div className={Trackstyles.text}>
        <h2 className={Trackstyles.tracktitle}>🔒 Security</h2>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className={Trackstyles.image}>
        <motion.img src="/logoRevised.png" alt="track logo" />
      </div>
    </motion.div>
  );
};

const Sustainability = () => {
  return (
    <motion.div 
    initial="enter"
    animate="center"
    exit="exit"
    variants={fade}
    transition={{ duration: .7, ease: [0.43, 0.13, 0.23, 0.96] }}
    className={Trackstyles.track}>
      <div className={Trackstyles.text}>
        <h2 className={Trackstyles.tracktitle}>🌲 Sustainability</h2>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className={Trackstyles.image}>
        <motion.img src="/logoRevised.png" alt="track logo" />
      </div>
    </motion.div>
  );
};

const Wellness = () => {
  return (
    <motion.div
    initial="enter"
    animate="center"
    exit="exit"
    variants={fade}
    transition={{ duration: .7, ease: [0.43, 0.13, 0.23, 0.96] }}
    className={Trackstyles.track}>
      <div className={Trackstyles.text}>
        <h2 className={Trackstyles.tracktitle}>🌸 Wellness</h2>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className={Trackstyles.image}>
        <motion.img src="/lotus.png" alt="track logo" />
      </div>
    </motion.div>
  );
};
const slides = [
  <Security />,
  <Sustainability />,
  <Wellness />,
];

export default function Tracks() {

  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, slides.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <main className={styles.main}>
      <div className={Trackstyles.tracks}>
        <h1 className={styles.title}>Choose Your Track</h1>
      </div>
      <AnimatePresence exitBeforeEnter initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className={Trackstyles.contain}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {slides[imageIndex]}
        </motion.div>
      </AnimatePresence>
      <FaChevronRight className={Trackstyles.next} onClick={() => paginate(1)}/>
      <FaChevronLeft className={Trackstyles.prev} onClick={() => paginate(-1)} />
    </main>
  );
}
