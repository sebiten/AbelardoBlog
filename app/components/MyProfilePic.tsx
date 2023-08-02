"use client";
import Image from "next/image";

export default function MyProfilePic() {
  const playMiauSound = () => {
    const audio = new Audio("/miau.mp3");
    audio.play();
  };

  return (
    <section
      onClick={playMiauSound}
      className="w-full mx-auto hover:scale-105 hover:cursor-pointer"
    >
   
      <div className="flex flex-col justify-center items-center">
        <Image src="/cat.png" alt="abelardocat" height={500} width={300} />
        <p className="text-center text-4xl md:text-6xl lg:text-8xl text-white font-bold uppercase animate-pulse animate-infinite animate-duration-[100ms] animate-delay-[44ms] animate-ease-out -mt-24 prose prose-xl prose-slate dark:prose-invert">
          <span className="text-yellow-500 font-normal -z-10">
            <br></br>
            blog
          </span>
        </p>
      </div>
    </section>
  );
}
