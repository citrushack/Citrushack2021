import Link from "next/link";
import styles from "../styles/Common.module.css"

export default function Footer(){
    return (
        <footer className={styles.footer}>
          <Link href="/team">
          <a>
            Powered by love and coffee from the Citrushack team.
          </a>
          </Link>
        </footer>
    )
}