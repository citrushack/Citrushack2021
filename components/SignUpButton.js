import Link from "next/link";
import styles from "../styles/Common.module.css";
import Herostyles from "../styles/Hero.module.css";
import { useIsAuthenticated } from "react-auth-kit";
import { FaChevronRight } from "react-icons/fa";

export default function SignUpButton() {
  const isAuthenticated = useIsAuthenticated();
  
  return (
    <a
    href={`${
      isAuthenticated() ? "/account" : "https://cms.citrushack.com/connect/google"
    }`}
    className={`${styles.card} ${Herostyles.action}`}
  >
    <h3 className={Herostyles.h3}>
      {`${isAuthenticated() ? "My Account" : "Sign Up"}`}
      <FaChevronRight className={styles.icon} />
    </h3>
  </a>
  );
}
