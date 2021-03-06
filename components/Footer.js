import Link from "next/link";
import styles from "../styles/Common.module.css";
import {FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaChevronRight} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className ={styles.contact}>
        <a href="mailto:citrushack@gmail.com"><FaEnvelope /></a>
        <a href="https://www.facebook.com/CitrusHack/"><FaFacebook/></a>
        <a href="https://twitter.com/citrushack?lang=en"><FaTwitter/></a>
        <a href="https://www.instagram.com/citrushack_ucr/?hl=en"><FaInstagram/></a>
      </div>
      <div className={styles.teamlink}>
      <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">Learn more about the MLH Code of Conduct &gt;</a>
      <br></br>
      <br></br>
      </div>
      
      <div className={styles.teamlink}>
        <Link href="/team">
        <a>
          Powered by zen and coffee from the Citrushack team. <br/> Click to learn more about us. &gt;
        </a>
        </Link>
      </div>
    </div>
  );
}
