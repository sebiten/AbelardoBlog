"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";

interface WeatherData {
  location: {
    name: string;
  };
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
    humidity: number;
  };
}

function Pronostico() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [zone, setZone] = useState<string>("Ledesma Jujuy");
  const [isCalled, setIsCalled] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=81109ab2335b40f880c135011230609&q=${zone}&aqi=no&lang=es`
        );

        if (!response.ok) {
          throw new Error("No se pudo obtener la información del clima");
        }

        const data: WeatherData = await response.json();
        setWeatherData(data);
        setError(null); // Limpiar el mensaje de error si la solicitud es exitosa
      } catch (error) {
        console.error("Error al obtener los datos del clima:", error);
        setError("No se pudo obtener la información del clima");
      }
    };

    fetchData();
  }, [zone]);

  return (
    <div>
      <div className="mt-10 mx-10 lg:mx-0 px-8 ">
        <div className="mb-12 sm:flex gap-3  border border-gray-700 rounded-md p-4 w-full xl:max-w-[106ch] items-center justify-center text-white  bg-gray-800  px-10 mx-auto">
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
                <h2 className="text-sm text-center font-bold uppercase my-3">
                  Ingresa ciudad y país
                </h2>
                <input
                  className="appearance-none rounded-lg border-2 border-yellow-500 py-1 px-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none w-full text-center text-sm "
                  placeholder="Ciudad"
                  onChange={(e) => {
                    setZone(e.target.value);
                    setIsCalled(true);
                  }}
                />
              </form>
            </>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
}

export default Pronostico;
