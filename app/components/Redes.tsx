import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";
import Contacto from "./Contacto";
import Video from "./Video";
import Destacados from "./Destacados";
import InstagramEmbed from "./Instagram";


type video = {
  path: string;
  title: string;
  key: number;
};


const videosPath = [
  {
    path: "pQnWu3ANt7I",
    title:
      "Dulce Veneno: Descubre los Impactantes Efectos del Azúcar en Tu Cuerpo",
    key: 1,
  },
  {
    path: "_2kAYTfQuLY",
    title: "Recuperar la atencion en la nueva era digital",
    key: 2,
  },
  {
    path: "69J-R_zeunk",
    title: "¡Transforma tu autoestima y salud!",
    key: 3,
  },
];

function Redes() {
  return (
    <div className="max-w-[90ch] mt-20 mx-auto">
     
      {/* YouTube Section */}
      <div className="text-center text-white mb-8">
        <h2 className="font-bold text-3xl mb-4 text-yellow-400">
          ¡Suscríbete a nuestro canal de YouTube!
        </h2>
        <p className="text-lg max-w-4xl mx-auto">
          Descubre contenido exclusivo, tutoriales y más en nuestro canal de
          YouTube. ¡Te invitamos a suscribirte y no perderte de nada!
        </p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <Link
          href="https://www.youtube.com/c/TuCanalDeYoutube"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-full flex items-center hover:scale-95"
        >
          <span className="mr-2">Abelardo Blog</span>
          <FaYoutube className="text-2xl" />
        </Link>
      </div>

      {/* Video Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {videosPath.map((path) => (
          <div key={path.key} className="">
            <Video id={path.path} />
            <div className="">
              <div className="flex items-center justify-center mt-2">
                {/* <Link
                  href={`/route/[slug]?slug=${path}`}
                  as={`/route/${path}`}
                  passHref
                >
                  <p className="bg-red-500 text-center text-white font-bold py-2 px-4 rounded-full">
                    Ir a Youtube
                  </p>
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Destacados />
    </div>
  );
}

export default Redes;
