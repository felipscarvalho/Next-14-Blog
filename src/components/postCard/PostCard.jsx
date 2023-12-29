import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"

export default function PostCard({postData}) {
    return (
        <div className={ styles.container }>
            <div className={ styles.top }>
                <div className={ styles.imgContainer }>
                    <Image src={"https://images.pexels.com/photos/5312571/pexels-photo-5312571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" fill className={ styles.image }></Image>
                </div>
                <span className={ styles.date }>01.01.2024</span>
            </div>
            <div className={ styles.bottom }>
                <h1 className={ styles.title }>{postData.title}</h1>
                <p className={ styles.desc }>{postData.body}</p>
                <Link className={ styles.link } href={`/posts/${postData.id}`} prefetch={false}>Read More</Link>
            </div>
        </div>
    )
}