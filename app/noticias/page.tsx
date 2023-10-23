"use client";
import React, { useEffect, useState } from "react";
import News from "../components/News";
import Image from "next/image";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
interface Source {
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string | null;
  category: string;
  language: string;
  country: string;
  published_at: string;
  id: string;
  name: string;
}

function Noticias({}: Source) {
  const [data, setData] = useState<Source[]>([]);
  useEffect(() => {
    const apiKey = "49dcea2ac96cc003cb6d94e51b5c7fa2";
    const languages = "es";

    // Construir la URL de la API
    const apiUrl = `http://api.mediastack.com/v1/news?access_key=49dcea2ac96cc003cb6d94e51b5c7fa2&es&countries=ar&date=2023-10-19,2023-12-31`;

    // Realizar la solicitud a la API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, []);
  return (
    <div className="dark:text-white ligth:text-gray-800 my-20">
      <h1 className="text-3xl font-bold uppercase mb-4 text-center my-4 text-yellow-600">
        Fuentes de noticias en Argentina
      </h1>
      <ul className="space-y-6 grid grid-cols-3 gap-6 max-w-[105ch] mx-auto">
        {data?.map(
          (source) =>
            // Verifica si hay una imagen antes de renderizar
            source.image && (
              <li
                key={source.id}
                className="mt-6 p-2 overflow-hidden bg-white dark:bg-gray-800 list-none light:border-gray-200 border dark:border-gray-700 rounded-lg shadow-2xl flex flex-col"
              >
                <Image
                  src={source.image}
                  alt="image"
                  width={1920}
                  height={1080}
                  quality={100}
                  priority={true}
                  className="object-fit mx-auto rounded-lg w-[400px] h-[200px]"
                />
                <div className="flex flex-col p-4 flex-grow">
                  <h2 className="text-xl font-semibold dark:text-white/90 mb-2 text-blue-500 hover:text-yellow-500">
                    {source.name}
                  </h2>
                  <div>
                    <p className="text-sm text-yellow-600 font-bold">
                      {getFormattedDate(source.published_at)}
                    </p>
                    <p>{source.title}</p>
                  </div>
                </div>
                {/* Agrega el botón "Ir a la página" */}
                <Link href={source.url}>
                  <p className="bg-transparent-500 dark:text-white font-normal light:border-gray-200 border dark:border-gray-700 p-2 text-center rounded-b-lg block hover:bg-yellow-500">
                    Ir a la página
                  </p>
                </Link>
              </li>
            )
        )}
      </ul>
      <div className="flex items-center justify-center mt-20">
        <Link
          className="light:border-gray-200 border font-bold hover:bg-yellow-500 rounded-lg dark:border-gray-700 p-4 mx-auto"
          href="/"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default Noticias;
