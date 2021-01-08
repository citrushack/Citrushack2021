import Link from "next/link";
import styles from "../styles/Common.module.css"

export default function Footer(){
    return (
      <Link href="/team">
        <a>
        <footer className={styles.footer}>
            Powered by love and coffee from the Citrushack team.
        </footer>
        </a>
        </Link>
    )
}