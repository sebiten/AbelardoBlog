'use client'
import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";
import NewsletterSubscribe from "./components/Form/NewsletterSubscribe";

export default function Home() {
  return (
    <div className=" w-full h-full mx-auto mb-28">
      <div className="mt-12 mb-6 text-xl mx-auto max-w-2xl text-center dark:text-white lg:w-3/4 xl:w-1/2">
        <MyProfilePic />
      </div>
      <Posts />
      <div>
        <p className="mt-24 text-center text-2xl animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out">
          <span className="font-bold text-yellow-500 ">
            ¡Gracias por leer!<br></br> No olvides suscribirte para no perderte
            ninguna novedad
          </span>
        </p>
        <NewsletterSubscribe/>
      </div>
    </div>
  );
}
