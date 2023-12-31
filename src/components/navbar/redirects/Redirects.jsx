"use client"

import styles from "./recirects.module.css"
import NavRedirect from "./navRedirect/NavRedirect"
import { useState } from "react"
import Image from "next/image"
import { handleSignOut } from "@/lib/actions"

export default function Redirects({session}) {
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



    //  console.log(session)

    return(
        <div className={ styles.container }>
            <div className={ styles.redirects }>
                {links.map((link) => {
                    return(
                        <NavRedirect key={link.title} item={link} />
                    )
                })}
                {
                    session?.user ? 
                    <>
                        {session.user?.isAdmin && <NavRedirect item={{title: "Admin", path:"/admin"}} />}
                        <form action={handleSignOut}>
                            <button className={ styles.logout }>Logout</button>
                        </form>
                    </> : <NavRedirect item={{title: "Login", path:"/login"}} />
                }
            </div>
            <Image src={"/menu.png"} width={30} height={30} alt="" className={ styles.menuButton } onClick={() => setOpen((prev) => !prev)}></Image>
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
