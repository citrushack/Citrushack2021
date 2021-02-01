import { useState } from "react";

import styles from "../styles/Common.module.css";
import Trackstyles from "../styles/Tracks.module.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { wrap } from "popmotion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      zIndex: -1,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    zIndex: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      zIndex: -1,
      opacity: 0,
    };
  },
};
const fade = {
  enter: {
    y: -10,
    opacity: 0.5,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};
const fadeTransition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const swipeConfidenceThreshold = 40000;
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
      transition={fadeTransition}
      className={Trackstyles.track}
    >
      <div className={Trackstyles.text}>
        <h2 className={Trackstyles.tracktitle}>🔒 Security</h2>
        <p className={styles.description}>
          Security gives you the peace of mind in order to lead to a calmer
          state of mind. Projects entered in this category aim to increase the
          sense of security and safety for people in order to help them clear
          their mind of troubles.
        </p>
      </div>
      <div className={Trackstyles.image}>
        <motion.img src="/tracks/rocktrack.png" alt="Security track rocks" />
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
      transition={fadeTransition}
      className={Trackstyles.track}
    >
      <div className={Trackstyles.text}>
        <h2 className={Trackstyles.tracktitle}>🌱 Sustainability</h2>
        <p className={styles.description}>
          Nature allows one to help clear their mind of stresses. Projects in
          this category aim to protect the planet’s natural treasures and help
          solve the planet’s environmental issues.
        </p>
      </div>
      <div className={Trackstyles.image}>
        <motion.img
          src="/tracks/waterfall.png"
          alt="Sustainability track waterfall"
        />
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
      transition={fadeTransition}
      className={Trackstyles.track}
    >
      <div className={Trackstyles.text}>
        <h2 className={Trackstyles.tracktitle}>🌸 Wellness</h2>
        <p className={styles.description}>
          After some very difficult times in the last year, we have seen how
          important health and wellness is for mental and physical health.
          Projects in this category aim to improve or bring awareness to the
          health or wellness of others.
        </p>
      </div>
      <div className={Trackstyles.image}>
        <motion.img src="/tracks/lotustrack.png" alt="Wellness track lotus" />
      </div>
    </motion.div>
  );
};
const slides = [<Security />, <Sustainability />, <Wellness />];

const MotionWrapper = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      {children}
    </motion.div>
  );
};

export default function Tracks() {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, slides.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <motion.main
      animate={{ y: 9 }}
      transition={{ repeat: 5, repeatType: "reverse", duration: 2.5 }}
      className={styles.main}
    >
      <div className={Trackstyles.tracks}>
        <h1 className={styles.title}>Choose Your Track</h1>
      </div>
      <div className={Trackstyles.wrapper}>
        <MotionWrapper>
          <FaChevronLeft
            className={Trackstyles.prev}
            onClick={() => paginate(-1)}
          />
        </MotionWrapper>
        <AnimateSharedLayout exitBeforeEnter initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={Trackstyles.contain}
            transition={{
              x: { duration: 0.2 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            layout
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
        </AnimateSharedLayout>
        <MotionWrapper>
          <FaChevronRight
            className={Trackstyles.next}
            onClick={() => paginate(1)}
          />
        </MotionWrapper>
        <div className={Trackstyles.pagemobile}>
          <MotionWrapper>
            <FaChevronLeft
              className={Trackstyles.prevmobile}
              onClick={() => paginate(-1)}
            />
          </MotionWrapper>
          <MotionWrapper>
            <FaChevronRight
              className={Trackstyles.nextmobile}
              onClick={() => paginate(1)}
            />
          </MotionWrapper>
        </div>
      </div>
    </motion.main>
  );
}
