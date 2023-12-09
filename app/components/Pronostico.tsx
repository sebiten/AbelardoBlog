import React, { useEffect, useState } from "react";
import Image from "next/image";
import Spinner from "./Spinner";
import { useDebounce } from "use-debounce";
import Link from "next/link";
import getFormattedDate from "../../lib/getFormattedDate";
import AirQualityInfo from "./AirQualityInfo";
import { title } from "process";
import dynamic from "next/dynamic";
const GoogleAdUnit = dynamic(() => import("nextjs13_google_adsense"), {
  ssr: false,
});

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
  const query = "Salta Argentina";
  const res = await fetch(
    `  https://api.weatherapi.com/v1/forecast.json?key=81109ab2335b40f880c135011230609&q=${query}&days=7&lang=es&aqi=yes&alerts=yes&hour=24`
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
  const weather = await getClima();

  return (
    <div className=" mx-auto py-4 px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {weather.forecast.forecastday.map((day: any, index: any) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center border border-gray-700"
          >
            <h2 className="text-lg font-semibold mb-2">
              {weather.location.name}, {weather.location.country}
              <br />
              {day.date}
            </h2>
            <Image
              width={1920}
              height={10800}
              quality={100}
              priority={true}
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              className="mx-auto w-20 h-20"
            />
            <p className="text-xl font-medium">{day.day.condition.text}</p>
            <p className="text-xl font-medium">Max: {day.day.maxtemp_c}°C</p>
            <p className="text-xl font-medium">Min: {day.day.mintemp_c}°C</p>
            <p className="text-lg mt-4">Viento: {day.day.maxwind_kph} km/h</p>
            <p className="text-lg">Humedad: {day.day.avghumidity}%</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <div className="bg-gray-800 text-white p-4 rounded-lg text-center ">
            <Link
              className="p-2 bg-gray-800 border  border-gray-700 text-yellow-500 rounded-lg hover:bg-gray-600"
              href="/tiempo"
            >
              Buscar otra ciudad
            </Link>
          </div>
        </div>
      </div>
      <center className="mx-auto">
        <GoogleAdUnit>
          <ins
            className="adsbygoogle"
            style={{ display: "block", width: "100%" }}
            data-ad-client="ca-pub-6692046911486022"
            data-ad-slot="5746621477"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </GoogleAdUnit>
      </center>
    </div>
  );
}

export default Pronostico;
