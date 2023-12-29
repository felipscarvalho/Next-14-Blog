import { getUser } from "@/lib/data"
import Image from "next/image"
import styles from "./postUser.module.css"

//  const fetchData = async (id) => {
//      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {next: {revalidate: 3600}})
//  
//      if(!res.ok) {
//          throw new Error("Something went wrong!");
//      }
//  
//      return res.json()
//  }

export default async function PostUser({userId}){
    //  const user = await fetchData(userId)

    const user = await getUser(userId)

    return(
        <>
            <Image src={`${user.img ? user.img : "/noavatar.png"}`} alt="" width={50} height={50} className={ styles.avatar }></Image>
            <div className={ styles.detailText }>
                <span className={ styles.detailTitle }>Author</span>
                <span className={ styles.detailValue }>{user.username}</span>
            </div>
        </>    
    )
}