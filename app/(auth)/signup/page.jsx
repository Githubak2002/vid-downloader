"use client";
import SignInwithGoogle from "@/app/components/SigninWirhGoogle";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";

import { useState, useEffect } from "react";

export default function SignIn() {
  const router = useRouter();
  const session = useSession();
  const {data} = session;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Added loading state
  
  // console.log("data → ",data);

  // added because google sign in in not getting redirected to prfile page
  // useEffect(() => {
  //   if(data)
  //     router.push('/profile');
  // },[data]);


  // Handle credentials sign-in
  const handleCredentialsSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); 
    console.log("data → ",data);
    const { email, password, name } = data; 


    try {
      const response = await axios.post('/api/signup', { name, email, password });
      if (response.status === 201) {
        router.push('/signin');
        console.log("user signed up sucessful!")
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    // try {
    //   const result = await signIn("credentials", {
    //     redirect: false,
    //     ...data,
    //   });

    //   if (result.ok) {
    //     router.push("/profile"); 
    //   } else {
    //     console.error("Sign-in failed → ", result.error);
    //   }
    // } catch (error) {
    //   console.error("Error during sign-in → ", error);
    // } 
    // finally {
    //   setLoading(false);
    // }
  };

  return (
    <section className="mx-auto px-4 flexCenter">
      <main className="sm:min-w-[340px] min-w-full shadow-2xl py-6 px-10 border-2 border-gray-300 mt-[5vh] rounded-xl font-bold text-sm">
        <form onSubmit={handleCredentialsSignIn}>
          <h3 className="text-center text-xs pb-5 font-semibold text-blue-400">
            Sign up [pending] registering a new user
          </h3>

          <div className="flex flex-col gap-y-3">
              <input
                name="name"
                type="text"
                className="border p-2 rounded-lg h-9"
                placeholder="Full Name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

          <div className="flex flex-col gap-y-3 mt-4 h-9">
            <input
              name="email"
              type="email"
              className="border-[0.1px] p-2 rounded-lg"
              placeholder="Email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-y-3 mt-4">
            <input
              name="password"
              type="password"
              className="border p-2 rounded-lg"
              placeholder="Password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className={`border border-black bg-blue-400 rounded-lg p-2 mt-4 mx-auto w-full ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p className="text-center text-sm mt-5">
            Already registered?{" "}
            <span onClick={() => router.push('/signin')} className="text-blue-500 hover:cursor-pointer">
              Sign In
            </span>
          </p>

          <SignInwithGoogle />
        </form>
      </main>
    </section>
  );
}
