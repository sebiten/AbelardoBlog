"use client";
import Link from "next/link";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import { urlsPosts, urlsReels } from "../components/constantes/constantes";
import { FaInstagram } from "react-icons/fa";
import GoogleAdsense from "@eisberg-labs/next-google-adsense/dist/adsense";
import { AdUnit } from "@eisberg-labs/next-google-adsense";

function News() {
  return (
    <div className="max-w-6xl mx-auto mt-10 overflow-hidden">
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
      <div className="flex gap-2 flex-wrap justify-center my-2">
        {urlsReels.map((url, index) => (
          <div key={index} className="">
            <div className="rounded-lg overflow-hidden">
              <InstagramEmbed url={url} height={500} width={320} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <AdUnit
          className="adsbygoogle block"
          data-ad-client="ca-pub-6692046911486022"
          data-ad-slot="2533037295"
          data-ad-format="fluid"
          data-ad-layout-key="-fb+5w+4e-db+86"
          data-full-width-responsive="false"
        />
      </div>
      <div className="flex gap-2 flex-wrap justify-center my-2">
        {urlsPosts.map((url, index) => (
          <div key={index} className="">
            <div className="rounded-lg overflow-hidden">
              <InstagramEmbed url={url} height={500} width={320} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
