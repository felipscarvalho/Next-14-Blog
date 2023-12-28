"use client"

import { usePathname } from "next/navigation"
import styles from "./navRedirect.module.css"
import Link from "next/link"

export default function NavRedirect({ item }) {
    const pathName = usePathname();
    
    return(
        <div className={`${styles.container} ${pathName === item.path && styles.active}`}>
            <Link href={item.path}>{item.title}</Link>
        </div>
    )
}