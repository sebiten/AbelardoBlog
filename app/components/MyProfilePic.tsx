import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto p-4 md:p-4 lg:p-8">
      <p className="text-center text-4xl mt-12 md:text-6xl lg:text-8xl text-white font-bold uppercase animate-pulse animate-infinite animate-duration-[100ms] animate-delay-[44ms] animate-ease-out">
        Abelardo
        <span className="text-green-200 font-normal">
          <br></br>
          blog
        </span>
      </p>
    </section>
  );
}
