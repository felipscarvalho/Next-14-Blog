import Redirects from "./redirects/Redirects"

import styles from "./navbar.module.css"

export default function Navbar({}) {
    return(
        <nav className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <section>
                <Redirects />
            </section>
        </nav>
    )
}