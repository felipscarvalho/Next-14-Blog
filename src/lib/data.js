import { connectMongo } from "./connectMongo"
import { Post, User } from "./models"
import { unstable_noStore as noStore } from "next/cache"

export const getPosts = async () => {
    try {
        connectMongo()
        const posts = await Post.find()

        return posts
    } catch(err) {
        console.log(err)
        throw new Error("Failed to fetch posts!")
    }
}

export const getPost = async (slug) => {
    try {
        connectMongo()
        const post = await Post.findOne({ slug: slug })

        return post
    } catch(err) {
        console.log(err)
        throw new Error("Failed to fetch post!")
    }
}

export const getUsers = async () => {
    noStore()
    try {
        connectMongo()
        const users = await User.find()

        return users
    } catch(err) {
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}

export const getUser = async (userId) => {
    try {
        connectMongo()
        const user = await User.findOne({ id: userId })
        console.log(user)

        return user
    } catch(err) {
        console.log(err)
        throw new Error("Failed to fetch user!")
    }
}

