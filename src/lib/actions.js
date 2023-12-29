import { connectMongo } from "./connectMongo"
import { Post } from "./models"

export const addPost = async (formData) => {
    "use server"

    const { title, body, slug, userId } = Object.fromEntries(formData)

    try {
        connectMongo()

        const newPost = new Post({
            title,
            body,
            slug,
            userId
        })

        await newPost.save()
        console.log("saved to db")
    } catch(err){
        console.log(err)
        throw new Error("Something went wrong!")
    }
}