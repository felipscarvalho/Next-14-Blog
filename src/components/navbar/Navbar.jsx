import Redirects from "./redirects/Redirects"

import styles from "./navbar.module.css"
import Link from "next/link"
import { auth } from "@/lib/auth"

export default async function Navbar({}) {
    const session = await auth()

    return(
        <nav className={styles.container}>
            <Link href={"/"} className={styles.logo}>Logo</Link>
            <section>
                <Redirects session={session}/>
            </section>
        </nav>
    )
}