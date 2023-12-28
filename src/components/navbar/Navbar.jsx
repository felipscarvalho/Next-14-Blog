import Redirects from "./redirects/Redirects"

import styles from "./navbar.module.css"
import Link from "next/link"

export default function Navbar({}) {
    return(
        <nav className={styles.container}>
            <Link href={"/"} className={styles.logo}>Logo</Link>
            <section>
                <Redirects />
            </section>
        </nav>
    )
}