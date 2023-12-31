"use client"

import { register } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom"

export default function RegisterForm(){
    const [state, formAction] = useFormState(register, undefined)

    const router = useRouter()

    useEffect(() => {
        state?.success && router.push("/login")
    }, [state?.success, router])

    return(
        <form action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="password" name="password" />
            <input type="text" placeholder="repeatPassword" name="repeatPassword" />
            <button>Register</button>
            {state?.error}
        </form>
    )
}