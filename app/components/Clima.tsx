"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type WeatherData = {
  location: {
    name: string;
  };
  current: {
    text: string;
    condition: {
      icon: string;
      text: string; // Agregar esta propiedad
    };
    temp_c: number;
    humidity: number;
    last_updated: string;
  };
};

const Clima: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [zone, setZone] = useState<string>("Jujuy");
  const [isCalled, setIsCalled] = useState<boolean>(false);
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=81109ab2335b40f880c135011230609&q=${zone}&aqi=no&lang=es`;

  useEffect(() => {
    // Función para realizar la solicitud FETCH
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("No se pudo obtener la información del clima");
        }

        const data: WeatherData = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error al obtener los datos del clima:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <div className="mt-10">
      <div className="mb-12 sm:flex gap-3 border-gray-700 border rounded-md p-4 max-w-[59ch] mx-auto items-center justify-center dark:text-white light:text-gray-800">
        {weatherData ? (
          <>
            <div>
              <Image
                src={`https:${weatherData.current.condition.icon}`}
                alt={weatherData.current.text}
                width={100}
                height={400}
                className="mx-auto"
              />
            </div>
            <div className="sm:text-start text-center my-2 text-sm">
              <h3 className="font-bold sm:text-start text-center text-lg">
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
            <div
              className="mx-auto"
            >
              <h2 className="text-sm font-bold uppercase my-1">
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
            </div>
          </>
        ) : (
          <p>Cargando datos del clima...</p>
        )}
      </div>
    </div>
  );
};

export default Clima;
