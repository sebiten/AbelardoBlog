import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/iconabelardoblog.png"
          alt="abelardocat"
          height={400}
          width={400}
        />
        <p className="text-center text-4xl md:text-6xl lg:text-8xl text-white font-bold uppercase animate-pulse animate-infinite animate-duration-[100ms] animate-delay-[44ms] animate-ease-out">
          Abelardo
          <span className="text-yellow-200 font-normal">
            <br></br>
            blog
          </span>
        </p>
      </div>
    </section>
  );
}
