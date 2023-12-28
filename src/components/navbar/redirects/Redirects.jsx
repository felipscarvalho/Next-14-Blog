"use client"

import styles from "./recirects.module.css"
import NavRedirect from "./navRedirect/NavRedirect"
import { useState } from "react"

export default function Redirects() {
    const [open, setOpen] = useState(false)

    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/posts",
        },
    ]

    const session = true
    const isAdmin = true

    return(
        <div className={ styles.container }>
            <div className={ styles.redirects }>
                {links.map((link) => {
                    return(
                        <NavRedirect key={link.title} item={link} />
                    )
                })}
                {
                    session ? 
                    <>
                        {isAdmin && <NavRedirect item={{title: "Admin", path:"/admin"}} />}
                        <button className={ styles.logout }>Logout</button>
                    </> : <NavRedirect item={{title: "Login", path:"/login"}} />
                }
            </div>
            <button className={ styles.menuButton } onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && <div className={ styles.mobileRedirects }>
                    {links.map((link) => {
                        return(
                            <NavRedirect key={link.title} item={link} />
                        )
                    })}
                </div>
            }
        </div>
    )
}