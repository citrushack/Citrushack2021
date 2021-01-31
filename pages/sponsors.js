import Link from "next/link";
import styles from "../styles/Common.module.css";
import ss from "../styles/Sponsors.module.css";
import { FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { secondary } from "../styles/Hero.module.css";

const hoverTrans = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Sponsors() {
  return (
    <main className={`${styles.main} ${styles.topAlign}`}>
      <div className={ss.wrapper}>
        <h1 className={styles.title}>Sponsors</h1>
        <p className={styles.description}>
          Those who made this hackathon possible.
        </p>
        <div className={styles.grid}>
        <Link href="/sponsorus">
          <a className={`${styles.card} ${secondary}`}>
            <h3>
              Sponsor us <FaChevronRight className={styles.icon} />
            </h3>
          </a>
        </Link>
      </div>
      <div className={`${ss.logoflex}`}>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://www.losangeles.spaceforce.mil/"
          >
            <img src="/sponsors/usaf.png" className={`${ss.usaf}`} alt="usaf logo"></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://www.digitalocean.com/"
          >
            <img src="/sponsors/digitalocean.png" className={`${ss.digitalocean}`} alt="digitalocean logo"></img>
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
            <img src="/sponsors/acm_ucr.png" className={`${ss.acm}`} alt="acm logo"></img>
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
            <img src="/sponsors/IEEE.png" className={`${ss.ieee}`} alt="ieee logo"></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://www.echoar.xyz/"
          >
            <img
              src="/sponsors/echoAR.png"
              className={`${ss.echoAR}`}
              alt="echoAR logo"
            ></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={hoverTrans}
            href="https://www.sketch.com/"
          >
            <img             className={`${ss.sketch}`}
  src="/sponsors/sketch.png" alt="sketch logo"></img>
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
