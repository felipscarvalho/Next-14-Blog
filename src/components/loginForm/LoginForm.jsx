"use client"

import { useFormState } from "react-dom"
import { handleLogin } from "@/lib/actions"
import { useEffect } from "react"

export default function LoginForm(){
    const [state, formAction] = useFormState(handleLogin, undefined)

    return(
        <form action={formAction}>
            <input type="text"  placeholder="username" name="username"/>
            <input type="text"  placeholder="password" name="password"/>
            <button>Login with credentials</button>
            {state?.error}
        </form>
    )
}