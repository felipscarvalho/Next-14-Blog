import { auth, signIn } from "@/lib/auth"
import LoginForm from "@/components/loginForm/LoginForm"

export default async function LoginPage() {

    const handleGithubLogin = async () => {
        "use server"

        await signIn("github")
    }

    return(
        <main>
            <form action={handleGithubLogin}>
                <button>Login with Github</button>
            </form>
            <LoginForm></LoginForm>
        </main>
    )
}