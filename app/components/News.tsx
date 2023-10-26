import Link from "next/link";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { urls } from "../components/constantes/constantes";
import { FaInstagram } from "react-icons/fa";

function News() {
  return (
    <>
      <div className="text-center dark:text-white ligth:text-gray-800">
        <h2 className="font-bold text-3xl my-4">¡Síguenos en Instagram!</h2>
      </div>
      <div className="flex items-center justify-center border-gray-700 p-2 rounded-md">
        <Link
          href="https://www.instagram.com/abelardo.blog/"
          target="_blank"
          className="text-center text-xl border flex items-center justify-center gap-2 border-gray-700 p-2 rounded-md text-yellow-400 hover:scale-105 "
        >
          Abelardo blog
          <FaInstagram />
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-1 my-2">
        {urls.map((url, index) => (
          <div key={index} className="p-4">
            <div className="  rounded-lg overflow-hidden">
              <InstagramEmbed url={url} height={555} width={340} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default News;
