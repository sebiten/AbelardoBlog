"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AdUnit } from "@eisberg-labs/next-google-adsense";

const Clima = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [zone, setZone] = useState("Jujuy");
  const [isCalled, setIsCalled] = useState(false);

  useEffect(() => {
    // Función para realizar la solicitud FETCH
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=81109ab2335b40f880c135011230609&q=${zone}&aqi=no&lang=es`
        );

        if (!response.ok) {
          throw new Error("No se pudo obtener la información del clima");
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error al obtener los datos del clima:", error);
      }
    };

    fetchData();
  }, [zone]);

  return (
    <div className="mt-10 mx-10 lg:mx-0 ">
      <div className="mb-12 sm:flex gap-3 light:border-gray-200 border dark:border-gray-700 rounded-md p-4 w-full xl:max-w-[90ch] items-center justify-center dark:text-white light:text-gray-800 bg-gray-800 text-white px-10">
        {weatherData ? (
          <>
            <Image
              src={`https:${weatherData.current.condition.icon}`}
              alt="Imagen del clima"
              width={200}
              height={400}
              className="mx-auto w-auto h-auto"
            />
            <div className="sm:text-start text-center my-2 text-lg">
              <h3 className="font-bold sm:text-start text-center text-lg text-yellow-500">
                {isCalled ? weatherData.location.name : "Ledesma"}
              </h3>
              <p>
                <span className="font-bold">Temperatura:</span>{" "}
                {weatherData.current.temp_c}°C
              </p>
              <p>
                <span className="font-bold">Condiciones:</span>{" "}
                {weatherData.current.condition.text}
              </p>
              <p>
                <span className="font-bold">Humedad:</span>{" "}
                {weatherData.current.humidity}%
              </p>
            </div>
            <form className="mx-auto relative">
              <div className="max-w-[120px] max-h-[50px] bg-gray-300 bottom-2 absolute">
                <AdUnit
                  className="adsbygoogle inline-block w-[120px] h-[50px]"
                  data-ad-client="ca-pub-6692046911486022"
                  data-ad-slot="8080097190"
                />
              </div>
              <h2 className="text-sm font-bold uppercase my-3">
                Ingresa ciudad y país
              </h2>
              <input
                className=" appearance-none rounded-lg border-2 border-yellow-500 py-1 px-4  bg-gray-800 text-white placeholder-gray-400 focus:outline-none w-[200px] text-sm "
                placeholder="Ciudad"
                onChange={(e) => {
                  setZone(e.target.value);
                  setIsCalled(true);
                }}
              />
            </form>
          </>
        ) : (
          <p>Cargando datos del clima...</p>
        )}
      </div>
    </div>
  );
};

export default Clima;
