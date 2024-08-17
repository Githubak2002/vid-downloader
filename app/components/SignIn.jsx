import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <section className="flexCenter">
    <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/profile" })
        
      }}
      >
      <button type="submit">Signin with Google</button>
    </form>
    </section>
  )
} 