"use server"

import { revalidatePath } from "next/cache"
import { connectMongo } from "./connectMongo"
import { Post } from "./models"

export const addPost = async (formData) => {
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
        revalidatePath("/posts")
    } catch(err){
        console.log(err)
        throw new Error("Something went wrong!")
    }
}

export const deletePost = async (formData) => {
    const { postId } = Object.fromEntries(formData)

    try {
        connectMongo()

        await Post.findByIdAndDelete(postId)

        console.log("Deleted from db")
        revalidatePath("/posts")
    } catch(err){
        console.log(err)
        throw new Error("Something went wrong!")
    }
}