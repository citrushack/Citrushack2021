import { useState } from "react";

import styles from "../styles/Common.module.css";
import ts from "../styles/Tracks.module.css";
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
      className={ts.track}
    >
      <div className={ts.text}>
        <h2 className={`${`${ts.tracktitle} ${ts.overrideColor}`} ${ts.overrideColor}`}>🔒 Security</h2>
        <p className={`${`${ts.description} ${ts.overrideColor}`} ${ts.overrideColor}`}>
          Projects entered in this category aim to help people feel secure. A sense of security can be the key to a zen state of mind. 
        </p>
      </div>
      <div className={ts.image}>
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
      className={ts.track}
    >
      <div className={ts.text}>
        <h2 className={`${ts.tracktitle} ${ts.overrideColor}`}>🌱 Sustainability</h2>
        <p className={`${ts.description} ${ts.overrideColor}`}>
          Projects in this category aim to protect the planet’s natural treasures and help
          solve the planet’s environmental issues. We've only got one planet - we've got to treat it well.
        </p>
      </div>
      <div className={ts.image}>
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
      className={ts.track}
    >
      <div className={ts.text}>
        <h2 className={`${ts.tracktitle} ${ts.overrideColor}`}>🌸 Wellness</h2>
        <p className={`${ts.description} ${ts.overrideColor}`}>
        In this category, you'll come up with a creative solution to improve the wellness of society. Last year was rough for both mental and physical health - let's get to healing. 
        </p>
      </div>
      <div className={ts.image}>
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
      <div className={ts.tracks}>
        <h1 className={styles.title}>Choose Your Track</h1>
      </div>
      <div className={ts.wrapper}>
        <MotionWrapper>
          <FaChevronLeft
            className={ts.prev}
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
            className={ts.contain}
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
            className={ts.next}
            onClick={() => paginate(1)}
          />
        </MotionWrapper>
        <div className={ts.pagemobile}>
          <MotionWrapper>
            <FaChevronLeft
              className={ts.prevmobile}
              onClick={() => paginate(-1)}
            />
          </MotionWrapper>
          <MotionWrapper >
            <FaChevronRight
              className={ts.nextmobile}
              onClick={() => paginate(1)}
            />
          </MotionWrapper>
        </div>
      </div>
    </motion.main>
  );
}
