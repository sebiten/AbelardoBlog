import React from "react";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const InstagramSection = () => {

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
    </section>
  );
};

export default InstagramSection;
