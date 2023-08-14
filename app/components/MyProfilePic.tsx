import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto  mt-6">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center text-white font-bold uppercase animate-pulse animate-infinite animate-duration-[100ms] animate-delay-[44ms] animate-ease-out -mt-24 prose prose-xl prose-slate dark:prose-invert">
          <span className="text-yellow-500 font-normal text-6xl z-10 mt'4">
            <br></br>
            Blog
          </span>
        </h3>
      </div>
    </section>
  );
}
