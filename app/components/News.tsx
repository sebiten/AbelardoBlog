import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";
import Contacto from "./Contacto";

const GoogleAdUnit = dynamic(() => import("nextjs13_google_adsense"), {
  ssr: false,
});

const videosPath = [
  {
    path: "/azucar-efectos_compressed.webm",
    link: "https://abelardo.blog/posts/beneficios-de-dejar-de-consumir-azucar",
    title: "Efectos del azucar y de dejar de consumirla",
  },
  {
    path: "/buenos-habitos_compressed.webm",
    link: "https://abelardo.blog/posts/buenos-habitos",
    title: "Buenos habitos el camino hacia una buena autoestima",
  },
  {
    path: "/control-del-apetito_compressed.webm",
    link: "https://abelardo.blog/posts/por-que-siempre-tenemos-hambre",
    title: "¿Por que siempre tenemos hambre?",
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
    <div className="max-w-6xl px-6 mt-20 overflow-hidden overscroll-x-none mx-auto">
      <div className="text-center text-white ">
        <h2 className="font-bold text-3xl mb-4 text-white-500 text-yellow ">
          ¡Síguenos en Instagram!
        </h2>
        <p className="text-lg max-w-4xl mx-auto">
          ¡Descubre todas las novedades más recientes en nuestro instagram,
          participa en encuestas interesantes y explora nuestros fascinantes
          reels! ¡Te invitamos a visitarnos y no te pierdas de nada!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border-gray-700 p-2 rounded-md">
        <Link
          href="https://www.instagram.com/abelardo.blog/"
          target="_blank"
          className="text-center bg-gradient-to-r from-pink-500 to-red-500 text-xl border flex items-center justify-center gap-2 border-gray-700 p-2 px-10 rounded-md text-white font-black bg-gray-800 hover:scale-105"
        >
          Abelardo blog <FaInstagram />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2">
        {videosPath.map((videoPath, index) => (
          <div key={index} className="p-2">
            <video className="rounded-xl h-full" width="100%" controls>
              <source src={videoPath.path} type="video/webm" />
              <source src={videoPath.path} type="video/ogg" />
            </video>
            {/* <h2 className="text-white text-center font-bold text-lg rounded-lg ">
              {videoPath.title}
            </h2> */}
            <div className="flex items-center justify-center mt-2 ">
              <Link
                className="bg-gradient-to-r rounded-lg from-pink-500 to-red-500 text-white font-semibold text-center p-3 w-full border border-gray-500 transition duration-300 transform hover:scale-105 hover:shadow-lg"
                href="https://www.instagram.com/abelardo.blog"
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                className="bg-gradient-to-r rounded-lg from-pink-500 to-red-500 text-white font-semibold text-center p-3 w-full border border-gray-500 transition duration-300 transform hover:scale-105 hover:shadow-lg"
                href={videoPath.link}
                target="_blank"
              >
                Ir al artículo
              </Link>
            </div>
          </div>
        ))}
      </div>
      <center className="mx-auto max-w-5xl my-10">
        <GoogleAdUnit>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6692046911486022"
            data-ad-slot="3521048850"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </GoogleAdUnit>
      </center>
      <div className="text-center mt-40 text-white text-4xl font-bold">
        <h2 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 text-3xl md:text-3xl">
          Artículos Destacados
        </h2>
        <p className="text-gray-300 text-2xl md:text-2xl">No te los pierdas!</p>
      </div>
      <div className="max-w-5xl mx-auto mt-8 md:mt-16 ">
        {imagespub.map((image, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 mt-8 md:mt-16"
          >
            <Image
              height={300}
              src={image.path}
              alt={`Image ${index + 1}`}
              priority={true}
              quality={100}
              width={450}
              className="border-4 border-gray-700 rounded-md shadow-lg"
            />
            <div className="flex flex-col items-start max-w-md justify-center mt-4 md:mt-0">
              <p className="text-white text-lg image-description mx-auto w-auto">
                {image.description}
              </p>
              <Link
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-700 font-semibold text-center p-4 border border-gray-500 transition duration-300 transform hover:scale-105 hover:shadow-lg mt-4 w-full rounded-md"
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
