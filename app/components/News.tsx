"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { AdUnit } from "@eisberg-labs/next-google-adsense";
import Image from "next/image";

const videosPath = [
  "/azucar.mp4",
  "/buenos-habitos.mp4",
  "/control-del-apetito.mp4",
];
const imagespub = [
  {
    description:
      "La adicción al azúcar estimula la dopamina, con riesgos como diabetes, enfermedades cardíacas y ganancia de peso. Beneficios al dejarlo 15 días.",
    path: "/comer-azucar.webp",
    link: "https://abelardo.blog/posts/beneficios-de-dejar-de-consumir-azucar",
  },
  {
    description:
      "Los hábitos moldean nuestra vida, impactan la autoestima; aprender buenos hábitos, superar los malos, mejora calidad de vida.",
    path: "/buenos-habitos.webp",
    link: "https://abelardo.blog/posts/buenos-habitos",
  },
  {
    description:
      "El aceite de cannabis: ¿remedio natural para mejorar el sueño? Abordamos insomnio, dolor, ansiedad y descanso.",
    path: "/aceite-de-cannabis-page.webp",
    link: "https://abelardo.blog/posts/aceite-de-cannabis",
  },
];

function News() {
  return (
    <div className=" w-full mt-10 overflow-hidden overscroll-x-none">
      <div className="text-center dark:text-white ligth:text-gray-800  mx-auto ">
        <h2 className="font-bold text-3xl my-4 animate-bounce text-white-500">
          ¡Síguenos en Instagram!
        </h2>
      </div>
      <div className="flex items-center justify-center border-gray-700 p-2 rounded-md">
        <Link
          href="https://www.instagram.com/abelardo.blog/"
          target="_blank"
          className="text-center bg-gradient-to-r from-pink-500 to-red-500 text-xl border flex items-center justify-center gap-2 border-gray-700 p-2 rounded-md text-white font-black bg-gray-800 hover:scale-105 "
        >
          Abelardo blog
          <FaInstagram />
        </Link>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {videosPath.map((videoPath, index) => (
          <div key={index}>
            <video width="300" height="100" className="" controls key={index}>
              <source src={videoPath} type="video/mp4" />
              <source src={videoPath} type="video/ogg" />
            </video>
            <div className="flex items-center justify-center w-full">
              <Link
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold text-center p-3 w-full border border-gray-500  transition duration-300 transform hover:scale-105 hover:shadow-lg"
                href="https://www.instagram.com/abelardo.blog"
                target="_blank"
              >
                Instagram
              </Link>
            </div>
          </div>
        ))}
      </div>
      <center className="mx-auto w-full">
        <AdUnit
          className="adsbygoogle block"
          data-ad-client="ca-pub-6692046911486022"
          data-ad-slot="8452412536"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </center>
      <div className="text-center mt-40 text-white text-xl font-bold">
        <h2 className="text-yellow-500 text-4xl">Artículos Destacados</h2>
        <p>No te los pierdas!</p>
      </div>
      <div className="max-w-5xl mx-auto">
        {imagespub.map((image, index) => (
          <div key={index} className="flex items-center gap-4 mt-10">
            <Image
              height={300}
              src={image.path}
              alt={`Image ${index + 1}`}
              priority={true}
              quality={100}
              width="300"
              className="border-4 border-gray-700"
            />
            <div className="flex flex-col  items-start">
              <p className="text-white image-description">
                {image.description}
              </p>
              <Link
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold text-center p-3 w-[200px] border border-gray-500 transition duration-300 transform hover:scale-105 hover:shadow-lg mt-2"
                href={image.link}
                target="_blank"
              >
                Visitar el articulo
              </Link>
            </div>
            <div className="text-center text-gray-600 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
