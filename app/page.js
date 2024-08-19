import Image from "next/image";
import img1 from "../public/img.png"


export default function Home() {
  return (
    <main className="flexCenter min-h-[70vh] flex-col gap-y-5">
      <h2 className=" text-4xl text-indigo-400">Home page</h2>  

      <Image 
      className="img1CSS"
        src= {img1}
        height="240"
        width="240"
        alt="img"
      />

      {/* displaying the image img1 */}
      

    </main>
  );
}
