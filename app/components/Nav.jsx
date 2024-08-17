import {SignOut} from "@/app/components/signout-button";
import { auth } from "@/auth"
import Link from 'next/link';
 
const session = await auth()


const Nav = () => {
  return (

  <nav className="flex gap-x-4 justify-center items-center py-4">
    {
      session && 
      <SignOut />

    }
    <Link href="/" className="text-lg font-bold">Home</Link>
    <Link href="/signin" className="text-lg font-bold">Sign In</Link>
    {/* <SignOut /> */}
  </nav>

  )
};

export default Nav;
