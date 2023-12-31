"use server"

import { revalidatePath } from "next/cache"
import { connectMongo } from "./connectMongo"
import { Post, User } from "./models"
import { signIn, signOut } from "./auth"
import bcrypt from 'bcryptjs'

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
        revalidatePath("/admin")
    } catch(err){
        console.log(err)
        throw new Error("Something went wrong!")
    }
}

export const addUser = async (previousState, formData) => {
    const { username, email, password } = Object.fromEntries(formData)

    try {
        connectMongo()

        const newUser = new User({
            username,
            email,
            password
        })

        await newUser.save()
        console.log("saved to db")
        revalidatePath("/admin")
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

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectMongo()

        await Post.deleteMany({ userId: id })
        await User.findByIdAndDelete(id)

        console.log("Deleted from db")
        revalidatePath("/admin")
    } catch(err){
        console.log(err)
        throw new Error("Something went wrong!")
    }
}

export const handleSignOut = async () => {
    "use server"

    await signOut()
}

export const register = async (previousState, formData) => {
    const { username, email, password, repeatPassword } = Object.fromEntries(formData)

    if(password !== repeatPassword) {
        return {error: "Passwords does not match"}
    }
            
    try {
        connectMongo()

        const user = await User.findOne({username})

        if(user) {
            return{error: "User already exists."}
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        await newUser.save()

        return {success: true}
    } catch(err) {
        console.log(err)

        return { error: "Something went wrong!"}
    }
}

export const handleLogin = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData)
            
    try {
        await signIn("credentials", {username, password})
    } catch(err) {
        console.log(err)

        if(err.message.includes("CredentialsSignin")){
            return {error: "wrong credentials"}
        }

        throw err
    }
}