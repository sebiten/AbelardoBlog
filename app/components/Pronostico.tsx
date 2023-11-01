import React, { useEffect, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";
import { useDebounce } from "use-debounce";
import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";

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
async function getClima() {
  const res = await fetch(
    " https://api.weatherapi.com/v1/current.json?key=81109ab2335b40f880c135011230609&q=Salta Argentina&aqi=no&lang=es"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Pronostico() {
  const weatherData = await getClima();

  return (
    <div className="mt-10 mx-10 lg:mx-0 px-8">
      <div className="mb-12 sm:flex gap-3 border border-gray-700 rounded-md p-4 w-full xl:max-w-[106ch] items-center justify-center text-white bg-gray-800 px-10 mx-auto">
        {weatherData ? (
          <>
            <Image
              src={`https:${weatherData.current.condition.icon}`}
              alt="Imagen del clima"
              width={200}
              height={400}
              priority={true}
              quality={100}
              className="mx-auto w-[100px] h-auto"
            />
            <div className="sm:text-start text-center my-2 mr-32 text-lg">
              <h3 className="font-bold sm:text-start text-center text-lg text-yellow-500">
                {weatherData.location.name}, {weatherData.location.country}
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
              <p>
                <span className="font-bold">Región:</span>{" "}
                {weatherData.location.region}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-yellow-400">Fecha:</span>{" "}
                {new Date(weatherData.location.localtime).toLocaleDateString()}
              </p>
              <p>
                <span className="font-bold text-yellow-400">Hora local:</span>{" "}
                {new Date(weatherData.location.localtime)
                  .toLocaleTimeString()
                  .slice(0, -3)}
              </p>
              <div className="mt-6">
                <Link
                  className="border border-gray-700 p-2 mt-10 rounded-xl text-center hover:bg-yellow-600"
                  href="/tiempo"
                >
                  Busca tu ciudad
                </Link>
              </div>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Pronostico;
