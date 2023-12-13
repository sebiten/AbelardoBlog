import React from "react";
import { FaInstagram } from "react-icons/fa";
import InstagramEmbed from "./Instagram";
import Link from "next/link";

interface InstagramSectionProps {
  // Add any necessary props here
}

const InstagramSection: React.FC<InstagramSectionProps> = () => {
  const urlsPosts = [
    "https://www.instagram.com/p/CwgE4OgOS6a/",
    "https://www.instagram.com/p/CwA2k5puZ8V/",
    "https://www.instagram.com/p/CvxEz9quZGl/",
  ];

  return (
    <section className="instagram-section my-10 max-w-6xl mx-auto">
      <div className="text-center text-white mb-8">
        <h2 className="font-bold text-4xl mb-4 text-yellow-500">
          ¡Síguenos en Instagram!
        </h2>
        <p className="text-lg max-w-4xl mx-auto">
          Descubre todas las novedades más recientes en nuestro Instagram,
          participa en encuestas interesantes y explora nuestros fascinantes
          reels. ¡Te invitamos a visitarnos y no te pierdas de nada!
        </p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <Link
          href="https://www.instagram.com/abelardo.blog/"
          target="_blank"
          className="btn-instagram font-bold bg-yellow-500 text-gray-900 px-6 py-2 rounded-full flex items-center hover:scale-95"
          rel="noopener noreferrer"
        >
          <FaInstagram className="mr-2 " />
          Abelardo blog
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-44 max-w-3xl mx-auto place-items-center">
        {urlsPosts.map((url, index) => (
          <div key={index} className="overflow-hidden bg-gray-800 rounded-lg">
            <InstagramEmbed url={url} />
            <div className="p-4 flex justify-center items-center border w-[300px] hover:scale-105  rounded mx-auto bg-yellow-500 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-r-hover ">
              <Link
                href={`https://www.instagram.com/abelardo.blog/`}
                className="text-white text-center flex items hover:underline hover:text-gray-800 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a Instagram
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
