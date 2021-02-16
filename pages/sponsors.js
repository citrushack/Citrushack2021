import styles from "../styles/Common.module.css";
import ss from "../styles/Sponsors.module.css";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { secondary } from "../styles/Hero.module.css";

const hoverTrans = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Sponsors() {
  return (
    <main className={`${styles.main} ${styles.topAlign}`}>
      <div className={ss.wrapper}>
        <h1 className={ss.title}>Sponsors</h1>
        <p className={ss.description}>
          Those who made this hackathon possible.
        </p>
        <div className={styles.grid}>
          <a
            href="https://drive.google.com/file/d/1hFLAPlhwrQdxG3G8vF6vVn30j4cMGzFa/view?usp=sharing"
            className={`${styles.card} ${secondary} ${ss.action}`}
          >
            <h3>
              Sponsor us <FaChevronRight className={styles.icon} />
            </h3>
          </a>
        </div>
        <div className={`${ss.logoflex}`}>
          <motion.a href="https://www.losangeles.spaceforce.mil/">
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              transition={hoverTrans}
              src="/sponsors/usaf.png"
              className={`${ss.usaf}`}
              alt="usaf logo"
            ></motion.img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://www.amazon.com/"
          >
            <img
              src="/sponsors/amazon.png"
              className={`${ss.digitalocean}`}
              alt="amazon logo"
            ></img>
          </motion.a>
        </div>
        <div className={`${ss.logoflex}`}>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://www.digitalocean.com/"
          >
            <img
              src="/sponsors/digitalocean.png"
              className={`${ss.digitalocean}`}
              alt="digitalocean logo"
            ></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://balsamiq.com/"
          >
            <img
              src="/sponsors/balsamiq.png"
              className={`${ss.balsamiq}`}
              alt="balsamiq logo"
            ></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://techpartnerships.ucr.edu/launchpad-ucr"
          >
            <img
              src="/sponsors/launchpad.png"
              className={`${ss.launchpad}`}
              alt="launchpad logo"
            ></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://acmucr.org/"
          >
            <img
              src="/sponsors/acm_ucr.png"
              className={`${ss.acm}`}
              alt="acm logo"
            ></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://linode.com/"
          >
            <img
              src="/sponsors/linode.png"
              className={`${ss.linode}`}
              alt="linode logo"
            ></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://ieee.ee.ucr.edu/"
          >
            <img
              src="/sponsors/IEEE.png"
              className={`${ss.ieee}`}
              alt="ieee logo"
            ></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://www.sketch.com/"
          >
            <img
              className={`${ss.sketch}`}
              src="/sponsors/sketch.png"
              alt="sketch logo"
            ></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://www.wolfram.com/"
          >
            <img
              src="/sponsors/wolfram.png"
              className={`${ss.wolfram}`}
              alt="wolfram logo"
            ></img>
          </motion.a>
        </div>
      </div>
    </main>
  );
}
