import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/cat.png"
          alt="abelardocat"
          height={500}
          width={300}
          className=""
        />
        <p className="text-center text-4xl md:text-6xl lg:text-8xl text-white font-bold uppercase animate-pulse animate-infinite animate-duration-[100ms] animate-delay-[44ms] animate-ease-out -mt-24 prose prose-xl prose-slate dark:prose-invert">
          
          <span className="text-yellow-500 font-normal">
            <br></br>
            blog
          </span>
        </p>
      </div>
    </section>
  );
}
