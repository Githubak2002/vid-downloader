import Nav from "./components/Nav";
import Footer from "./components/Footer";

// import { getServerSession } from "next-auth/react";

// import { getServerSession } from "next-auth/react";
// import { getServerSession } from "next-auth/next";

import { SessionProvider } from "next-auth/react";

import "./globals.css";


// export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, authOptions);
//   return {
//     props: {
//       session,
//     },
//   };
// }

export const metadata = {
  title: "Video Downloader",
  description: "Insta/YouTube video Downloader",
};

export default function RootLayout({ children,session }) {
  return (
    <html lang="en">
      <body>
        
        <SessionProvider session={session}>
          <Nav />
          {children}
          <Footer />
        </SessionProvider>

      </body>
    </html>
  );
}
