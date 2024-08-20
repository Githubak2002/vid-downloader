"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Nav = () => {
  const {data : session} = useSession();
  
  return (
    <nav className="flex gap-x-4 justify-between items-center px-4 h-[10vh]">
      <Link href="/" className="text-lg font-bold">Home</Link>
      {session ? (
        <div>
          <Link href="/profile" className="text-lg font-bold pr-4">Profile</Link>
          <button onClick={() => signOut({callbackUrl:"/"})} className="text-lg font-bold">Sign Out</button>
        </div>
      ) : (
        <div>
          <Link href="/signin" className="text-lg font-bold pr-4">Sign In</Link>
          <Link href="/signup" className="text-lg font-bold">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
