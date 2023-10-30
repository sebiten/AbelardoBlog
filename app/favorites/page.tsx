"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface FavoriteData {
  id: string;
  imageUrl: string;
  date: string;
  categories: string | string[];
  title: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<FavoriteData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
    setLoading(false);
  }, []);

  const handleRemoveFavorite = (id: string) => {
    const updatedFavorites = favorites.filter(
      (fav: FavoriteData) => fav.id !== id
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const formatTitle = (title: string) => {
    if (!title) {
      return "Título no disponible";
    }
    return title.replace(/-/g, " ");
  };

  return (
    <div className="flex h-full justify-center items-start bg-gray-800">
      <div className="w-full max-w-3xl p-4">
        <h3 className="text-center mt-10 text-white font-bold uppercase animate-pulse animate-infinite animate-duration-[100ms] animate-delay-[44ms] animate-ease-out  prose prose-xl prose-slate dark:prose-invert font-title">
          <span className="text-yellow-500 font-normal text-5xl -z-10">
            <br></br>
            Favoritos
          </span>
        </h3>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div>
            {favorites.length === 0 ? (
              <p
                className="
              text-2xl
              font-semibold
              text-center
              text-white
              mt-24
              "
              >
                No hay favoritos aún.😢
              </p>
            ) : (
              <ul className="space-y-4 mt-10">
                {favorites.map((fav: FavoriteData, index: number) => (
                  <li
                    key={index}
                    className=" text-white bg-gray-800 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 p-4">
                      <div className="md:col-span-1">
                        <Link
                          href={`/posts/${fav.id}`}
                          className="h-44 w-44 md:h-auto md:w-full bg-gray-700 rounded-md overflow-hidden"
                        >
                          <Image
                            layout="responsive"
                            width={200}
                            height={200}
                            src={fav.imageUrl}
                            alt={fav.id}
                            className="object-cover my-4"
                          />
                        </Link>
                      </div>
                      <div className="md:col-span-2 md:pl-4">
                        <Link href={`/posts/${fav.id}`}>
                          <p className="block uppercase font-bold text-blue-600 dark:text-blue-400 hover:underline">
                            {formatTitle(fav.id)}
                          </p>
                        </Link>
                        <p className="text-white">
                          <span className="font-semibold text-yellow-500">
                            Fecha de publicación:
                          </span>{" "}
                          {fav.date}
                        </p>
                        <p className="text-white">
                          <span className="font-semibold text-yellow-500">
                            Categorías:
                          </span>{" "}
                          {fav.categories}
                        </p>
                        <p className="text-white">
                          <span className="font-semibold text-yellow-500">
                            Título:
                          </span>{" "}
                          {formatTitle(fav.title)}
                        </p>
                        <button
                          onClick={() => handleRemoveFavorite(fav.id)}
                          className="mt-2   text-white hover:text-red-600  bg-red-900 px-4 py-2 rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Favorites;
