"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import getFormattedDate from "@/lib/getFormattedDate";
import Clima from "./Apis/Clima";
import Image from "next/image";

interface DolarData {
  compra: number;
  casa: string;
  venta: string;
  nombre: string;
  fechaActualizacion: string;
  // Agrega aquí otros campos relevantes si los hay
}

export default function MyProfilePic() {
  const [dolar, setDolar] = useState<DolarData[]>([]);
  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then((response) => response.json())
      .then((data: DolarData[]) => setDolar(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="w-full mx-auto mt-6">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full mt-2 text-xl text-gray-700 dark:text-white mx-auto text-center lg:w-8/12 xl:w-8/12 2xl:w-8/12">
          <Image
            src="/abelardo-blog.png"
            className="mx-auto w-auto h-auto mt-4"
            alt="abelardo-blog"
            priority={true}
            height={500}
            width={300}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            type: "spring",
            stiffness: 70,
            damping: 10,
          }}
          className="text-center text-white font-bold uppercase -mt-24"
        >
          <motion.span className="font-title text-yellow-500 font-normal text-6xl z-10 mt-4">
            <br />
            Abelardo Blog
          </motion.span>
          <h1 className="my-4 font-black">
            Explora el mundo a través de los ojos de Abelardo: Un viaje de
            descubrimiento y aprendizaje.
          </h1>
        </motion.div>
        <div className="mt-8 w-full grid gap-2 px-2 grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
          {dolar.map((dol) => (
            <div
              key={dol.casa}
              className="text-gray-700 dark:text-white flex flex-col items-center justify-center w-full mx-auto transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl shadow-xl p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-xl dark:hover:shadow-xl  hover:text-gray-600 dark:hover:text-gray-300"
            >
              <h3 className="mt-2 text-lg font-semibold ">{dol.nombre}</h3>
              <p className="mt-1 text-xl font-bold text-gray-500 dark:text-gray-300">
                $ {dol.venta}
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                {getFormattedDate(dol.fechaActualizacion)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Clima />
    </section>
  );
}
