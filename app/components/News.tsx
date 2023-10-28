"use client";
import Link from "next/link";
import { InstagramEmbed } from "react-social-media-embed";
import { urlsPosts, urlsReels } from "../components/constantes/constantes";
import { FaInstagram } from "react-icons/fa";
import { AdUnit } from "@eisberg-labs/next-google-adsense";

function News() {
  return (
    <div className="max-w-8xl mx-auto mt-10 overflow-hidden overscroll-x-none">
      <div className="text-center dark:text-white ligth:text-gray-800  mx-auto ">
        <h2 className="font-bold text-3xl my-4 animate-bounce">
          ¡Síguenos en Instagram!
        </h2>
      </div>
      <div className="flex items-center justify-center border-gray-700 p-2 rounded-md">
        <Link
          href="https://www.instagram.com/abelardo.blog/"
          target="_blank"
          className="text-center text-xl border flex items-center justify-center gap-2 border-gray-700 p-2 rounded-md text-yellow-500 bg-gray-800 hover:scale-105 "
        >
          Abelardo blog
          <FaInstagram />
        </Link>
      </div>
      <div className="flex gap-1 mt-10 flex-wrap justify-center my-2 overflow-hidden overscroll-x-none">
        {urlsReels.map((url, index) => (
          <div key={index} className="">
            <div className="rounded-lg overflow-hidden">
              <InstagramEmbed url={url} height={480} width={330} />
            </div>
          </div>
        ))}
      </div>
      <AdUnit
        className="adsbygoogle block"
        data-ad-client="ca-pub-6692046911486022"
        data-ad-slot="2533037295"
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-full-width-responsive="true"
      />
      <div className="flex  mt-10 gap-1 flex-wrap justify-center my-2 overflow-hidden overscroll-x-none">
        {urlsPosts.map((url, index) => (
          <div key={index} className="">
            <div className="rounded-lg overflow-hidden">
              <InstagramEmbed url={url} height={280} width={330} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
