import PostCard from "@/components/postCard/PostCard"
import styles from "./posts.module.css"

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 3600}})

    if(!res.ok) {
        throw new Error("Something went wrong!");
    }

    return res.json()
}

export default async function BlogPage() {
    const posts = await fetchData()

    return(
        <div className={ styles.container }>
            {posts.map((post) => {
                return (
                <div className={ styles.post } key={post.id}>
                    <PostCard postData={post}></PostCard>
                </div>
                )
            })}
                
        </div>
    )
}