import Link from "next/link"

export default function Redirects() {
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

    return(
        <>
            {links.map((link) => {
                return(
                    <Link key={link.title} href={link.path}>{link.title}</Link>
                )
            })}
        </>
    )
}