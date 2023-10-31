"use client";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { AdUnit } from "@eisberg-labs/next-google-adsense";
import Image from "next/image";

const videosPath = [
  {
    path: "/azucar-efectos_compressed.webm",
    link: "https://abelardo.blog/posts/beneficios-de-dejar-de-consumir-azucar",
    title: "Efectos del azucar y de dejar de consumirla"
  },
  {
    path: "/buenos-habitos_compressed.webm",
    link: "https://abelardo.blog/posts/buenos-habitos",
    title: "Buenos habitos el camino hacia una buena autoestima"
  },
  {
    path: "/control-del-apetito_compressed.webm",
    link: "https://abelardo.blog/posts/por-que-siempre-tenemos-hambre",
    title: "¿Por que siempre tenemos hambre?"
  },
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
    <div className="max-w-5xl px-6 mt-10 overflow-hidden overscroll-x-none mx-auto">
      <div className="text-center dark:text-white light:text-gray-800">
        <h2 className="font-bold text-3xl my-4 animate-bounce text-white-500">
          ¡Síguenos en Instagram!
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center border-gray-700 p-2 rounded-md">
        <Link
          href="https://www.instagram.com/abelardo.blog/"
          target="_blank"
          className="text-center bg-gradient-to-r from-pink-500 to-red-500 text-xl border flex items-center justify-center gap-2 border-gray-700 p-2 rounded-md text-white font-black bg-gray-800 hover:scale-105"
        >
          Abelardo blog <FaInstagram />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {videosPath.map((videoPath, index) => (
          <div key={index} className="p-4">
            <h2
              className="text-white font-bold text-lg "
            >
              {videoPath.title}
            </h2>
            <video width="100%" controls>
              <source src={videoPath.path} type="video/webm" />
              <source src={videoPath.path} type="video/ogg" />
            </video>
            <div className="flex items-center justify-center mt-2">
              <Link
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold text-center p-3 w-full border border-gray-500 transition duration-300 transform hover:scale-105 hover:shadow-lg"
                href="https://www.instagram.com/abelardo.blog"
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold text-center p-3 w-full border border-gray-500 transition duration-300 transform hover:scale-105 hover:shadow-lg"
                href={videoPath.link}
                target="_blank"
              >
                Ir al artículo
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <center className="mx-auto max-w-5xl my-10">
        <AdUnit
          className="adsbygoogle block"
          data-ad-client="ca-pub-6692046911486022"
          data-ad-slot="8452412536"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </center> */}
      <div className="text-center mt-24 text-white text-xl font-bold">
        <h2 className="text-yellow-500 text-3xl md:text-4xl ">
          Artículos Destacados
        </h2>
        <p>No te los pierdas!</p>
      </div>
      <div className="max-w-5xl mx-auto mt-4 md:mt-10">
        {imagespub.map((image, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-10"
          >
            <Image
              height={300}
              src={image.path}
              alt={`Image ${index + 1}`}
              priority={true}
              quality={100}
              width={450}
              className="border-4 border-gray-700"
            />
            <div className="flex flex-col items-start max-w-md justify-center mt-2 md:mt-0 ">
              <p className="text-white text-xl  image-description mx-auto w-auto">
                {image.description}
              </p>
              <Link
                className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold text-center p-3  border border-gray-500 transition duration-300 transform hover:scale-105 hover:shadow-lg mt-2 w-full"
                href={image.link}
              >
                Visitar el artículo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
