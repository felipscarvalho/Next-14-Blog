import styles from "./postUser.module.css"

const fetchData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {next: {revalidate: 3600}})

    if(!res.ok) {
        throw new Error("Something went wrong!");
    }

    return res.json()
}

export default async function PostUser({userId}){
    const user = await fetchData(userId)

    return(
        <div className={ styles.detailText }>
            <span className={ styles.detailTitle }>Author</span>
            <span className={ styles.detailValue }>{user.name}</span>
        </div>    
    )
}