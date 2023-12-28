import PostCard from "@/components/postCard/PostCard"
import styles from "./posts.module.css"

export default function BlogPage() {
    return(
        <div className={ styles.container }>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
        </div>
    )
}