import { auth } from "@/auth"
 
export default async function UserProfile() {
  const session = await auth()
  
  if (!session) return <h2>Please sign in</h2>
  // console.log("session → ", session)
 
  return (
    <section className="flexCenter flex-col gap-y-5">
      <h1>Profile</h1>
      <h2>Name : {session.user.name}</h2>
      <h2>Email : {session.user.email}</h2>
      <img src={session.user.image} alt="User Avatar" className=" rounded-full" />
    </section>
  )
}