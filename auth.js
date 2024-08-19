// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";

// import Credentials from "next-auth/providers/credentials";
// // import type { Provider } from "next-auth/providers";
 

// const providers = [
//   Google,
//   Credentials({
//     credentials: 
//     { 
//       email : {label: "xyz@gmail.com", type: "email" },
//       password: { label: "Password", type: "password" } 
//     },
//     authorize(c) {
//       let user = "anurag"
//       // return user;
//       if (c.email === "temp@c.in" && c.password === "123") {
//         return {
//           id: "1",
//           name: "temp User",
//           email: "temp@c.in",
//         };
//       } else {
//         return null;
//       }
//     },
//   }),
// ]


// export const providerMap = providers.map((provider) => {
//   if (typeof provider === "function") {
//     const providerData = provider()
//     return { id: providerData.id, name: providerData.name }
//   } else {
//     return { id: provider.id, name: provider.name }
//   }
// })
 
// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers,
//   pages: {
//     signIn: "/signin",
//   },
// })


import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
 providers: [
 Google({
   clientId: process.env.AUTH_GOOGLE_ID,
   clientSecret: process.env.AUTH_GOOGLE_SECRET,
 }),
 Credentials({
   credentials: {
     email: { label: "Email" },
     password: { label: "Password", type: "password" }
   },
   async authorize(credentials) {
     // Add your logic here to verify the user's credentials
     // For example:
     // const user = await verifyCredentials(credentials.email, credentials.password)
     // if (user) {
     //   return { id: user.id, name: user.name, email: user.email }
     // } else {
     //   return null
     // }
     
     // This is a placeholder. Replace with actual authentication logic.
     if (credentials.email === "user@example.com" && credentials.password === "123") {
       return { id: "1", name: "User", email: "user@example.com" }
     }
     return null
   },
 }),
 ],
 pages: {
   signIn: "/signin",
 },
})