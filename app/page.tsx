import Script from "next/script";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import MyProfilePic from "./components/MyProfilePic";

export default function Home() {
  return (
    <>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-66SJ6716WY" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-66SJ6716WY');
        `}
        </Script>
      </div>
      <main className=" mx-auto">
        <div className="mt-12 mb-6 text-xl mx-auto max-w-2xl text-center dark:text-white lg:w-3/4 xl:w-1/2">
          <MyProfilePic />

          <p className="mt-4">
            Aquí tendrás acceso a una amplia variedad de artículos sobre salud
            moderna, tecnología, alimentación y otros temas interesantes. Mi
            objetivo es brindarte información útil e intrigante sobre estos
            temas poco comunes, pero igualmente interesantes. Así, podrás estar
            bien informado y conocer más sobre aspectos importantes de la vida
            moderna.
          </p>
          <p className="mt-4 animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out">
            <span className="font-bold text-yellow-500 ">
              ¡Gracias por leer!
            </span>
          </p>
        </div>

        <Posts />
      </main>
    </>
  );
}
