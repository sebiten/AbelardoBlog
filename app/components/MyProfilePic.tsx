import Image from "next/image";
import Link from "next/link";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto  mt-6 overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <Link href="/">
          <Image src="/cat.png" alt="abelardocat" height={500} width={300} />
          <p className="text-center text-4xl md:text-6xl lg:text-8xl text-white font-bold uppercase animate-pulse animate-infinite animate-duration-[100ms] animate-delay-[44ms] animate-ease-out -mt-24 prose prose-xl prose-slate dark:prose-invert">
            <span className="text-yellow-500 font-normal -z-10">
              <br></br>
              Blog
            </span>
          </p>
        </Link>
      </div>
    </section>
  );
}
