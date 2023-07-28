import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto p-4 md:p-4 lg:p-8">
      <p className="text-center text-7xl mt-12 md:text-6xl lg:text-8xl text-white font-bold uppercase animate-pulse animate-infinite animate-duration-[1ms] animate-delay-[112ms] animate-ease-out">
        Meta
        <span className="text-green-200 font-normal">B</span>
        {/* <br></br> */}
        log
      </p>
    </section>
  );
}
