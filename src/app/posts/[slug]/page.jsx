import styles from "./blogPost.module.css"
import Image from "next/image"
import PostUser from "@/components/postCard/postUser/PostUser"
import { Suspense } from "react"

const fetchData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {next: {revalidate: 3600}})

    if(!res.ok) {
        throw new Error("Something went wrong!");
    }

    return res.json()
}

export default async function SinglePostPage({ params }) {
    const {slug} = params

    const post = await fetchData(slug)

    return(
        <div className={ styles.container }>
            <div className={ styles.imgContainer }>
                <Image src={"https://images.pexels.com/photos/5312571/pexels-photo-5312571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" fill className={ styles.image }></Image>
            </div>
            <div className={ styles.textContainer }>
                <h1 className={ styles.title }>{post.title}</h1>
                <div className={ styles.detail }>
                    <Image src={"https://images.pexels.com/photos/5312571/pexels-photo-5312571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" width={50} height={50} className={ styles.avatar }></Image>
                    <Suspense fallback={<div>loading...</div>}>
                        <PostUser userId={post.userId}></PostUser>
                    </Suspense>
                    <div className={ styles.detailText }>
                        <span className={ styles.detailTitle }>Published</span>
                        <span className={ styles.detailValue }>01.01.2024</span>
                    </div>
                </div>
                <div className={ styles.content }>{post.body}</div>
            </div>
        </div>
    )
}