"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import getFormattedDate from "../../lib/getFormattedDate";

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

function News() {
  const [data, setData] = useState<Source[]>([]);

  useEffect(() => {
    const apiKey = "49dcea2ac96cc003cb6d94e51b5c7fa2";
    const languages = "es";
    // Obtener la fecha de ayer en formato YYYY-MM-DD
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const formattedYesterday = yesterday.toISOString().split("T")[0];

    // Obtener la fecha actual en formato YYYY-MM-DD
    const today = new Date().toISOString().split("T")[0];

    // Construir la URL de la API para obtener las noticias más recientes
    // Construir la URL de la API para obtener las noticias de ayer y hoy
    const apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&languages=${languages}&countries=ar&date=${formattedYesterday},${today}&sort=published_desc`;

    // Realizar la solicitud a la API
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      setData(data.data.slice(0, 20));
    })
    .catch((error) => {
      console.error("Error al cargar los datos:", error);
    });
}, []);

  return (
    <div className="App dark:text-white ligth:text-gray-800">
      <h1 className="text-3xl font-bold uppercase mb-4 text-center my-4 text-yellow-600">
        Fuentes de noticias en Argentina
      </h1>
      <ul className="space-y-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[125ch] mx-auto">
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
                  <p className="bg-transparent-500 dark:text-white font-normal light:border-gray-200 border dark:border-gray-700 p-2 text-center rounded-b-lg block hover:bg-blue-600">
                    Ir a la página
                  </p>
                </Link>
              </li>
            )
        )}
      </ul>
      <div className="flex items-center justify-center">
        <Link
          className="light:border-gray-200 border font-bold hover:bg-yellow-500 rounded-lg dark:border-gray-700 p-4 mx-auto mt-10"
          href="/noticias"
        >
          Ver más noticias
        </Link>
      </div>
    </div>
  );
}

export default News;
