import PostCard from "@/components/postCard/PostCard"
import styles from "./posts.module.css"
import { getPosts } from "@/lib/data"

//  const fetchData = async () => {
//      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: {revalidate: 3600}})
//  
//      if(!res.ok) {
//          throw new Error("Something went wrong!");
//      }
//  
//      return res.json()
//  }

export const metadata = {
    title: 'Posts',
    description: 'Generated by create next app',
}

export default async function BlogPage() {
    //  const posts = await fetchData()

    const posts = await getPosts();

    console.log(posts)

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