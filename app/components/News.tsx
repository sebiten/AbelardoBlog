import Link from "next/link";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const urls = [
  "https://www.instagram.com/p/CyTUGpnJSkl/",
  "https://www.instagram.com/p/CyEgh0VsdB9/",
  "https://www.instagram.com/p/Cx_lNGZSJVb/",
];

function News() {
  return (
    <>
      <div className="text-center dark:text-white ligth:text-gray-800">
        <h2 className="font-bold text-3xl my-8">¡Síguenos en Instagram!</h2>
      </div>
      <div className="flex  items-center justify-center">
        <Link
          href="https://www.instagram.com/abelardo.blog/"
          className="text-center text-3xl text-yellow-400 "
        > 
          ➡ @abelardo.blog ⬅
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-2 my-4">
        {urls.map((url, index) => (
          <div key={index} className="p-4">
            <div className="  rounded-lg overflow-hidden">
              <InstagramEmbed url={url} height={650} width={450} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default News;
