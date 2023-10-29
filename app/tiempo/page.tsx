"use client";
import { useEffect, useState } from "react";
import Clima from "../components/Apis/Clima";
import { AdUnit } from "@eisberg-labs/next-google-adsense";

interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    air_quality: {
      pm2_5: number;
      pm10: number;
    };
    uv: number;
    feelslike_c: number;
    wind_kph: number;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        condition: {
          text: string;
          icon: string;
        };
        maxtemp_c: number;
        mintemp_c: number;
        maxwind_kph: number;
        avghumidity: number;
      };
    }[];
  };
  alerts: {
    event: string;
    description: string;
  }[];
}

const Tiempo: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [zone, setZone] = useState("Salta Argentina");

  const apiKey = "81109ab2335b40f880c135011230609";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${zone}&days=7&lang=es&aqi=yes&alerts=yes&hour=24`
        );

        if (!response.ok) {
          throw new Error("No se pudo obtener la información del clima");
        }

        const data: WeatherData = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error al obtener los datos del clima:", error);
      }
    };

    fetchData();
  }, [zone]);

  if (!weather) {
    return <div>Cargando datos del clima...</div>;
  }

  const getAQIColorClass = (aqi: number) => {
    if (aqi <= 50) {
      return "bg-green-500 text-white";
    } else if (aqi <= 100) {
      return "bg-yellow-500 text-gray-800";
    } else if (aqi <= 150) {
      return "bg-red-500 text-white";
    } else {
      return "bg-purple-500 text-white";
    }
  };

  return (
    <div className="dark:bg-gray-800 max-w-6xl mx-auto min-h-screen p-8">
      <div className="flex flex-col items-center justify-center">
        <Clima />
        <center>
          <AdUnit
               className="adsbygoogle inline-block w-[690px] h-[90px]"
               data-ad-client="ca-pub-6692046911486022"
               data-ad-slot="8452412536"
          />
        </center>
        <h1 className="text-4xl font-bold text-white mb-8">
          Pronóstico del clima para {weather.location.name},{" "}
          {weather.location.country}
        </h1>
        <form className="mx-auto text-gray-700 dark:text-white mb-10">
          <h2 className="text-sm font-bold uppercase my-3">
            Ingresa ciudad y país
          </h2>
          <input
            className="appearance-none rounded-lg border-2 border-yellow-500 py-1 px-4 bg-gray-800 text-white placeholder-gray-400 focus:outline-none w-[200px] text-sm"
            placeholder="Ciudad"
            onChange={(e) => {
              setZone(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {weather.forecast.forecastday.map((day, index) => (
          <div
            key={index}
            className="bg-gray-700 text-white p-6 rounded-lg shadow-lg text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">{day.date}</h2>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className="mx-auto"
            />
            <p className="text-xl font-medium">{day.day.condition.text}</p>
            <p className="text-xl font-medium">Max: {day.day.maxtemp_c}°C</p>
            <p className="text-xl font-medium">Min: {day.day.mintemp_c}°C</p>
            <p className="text-lg mt-4">Viento: {day.day.maxwind_kph} km/h</p>
            <p className="text-lg">Humedad: {day.day.avghumidity}%</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-white">
          Información adicional:
        </h2>
        <div className="flex  flex-col gap-2 bg-gray-800 text-white shadow-xl p-6 rounded-lg border border-gray-700 text-center mt-4">
          <div className="mt-8">
            <h2 className="text-3xl font-semibold text-white">
              Información de la Calidad del Aire:
            </h2>
            <div className="bg-gray-800 text-white shadow-xl p-6 rounded-lg border border-gray-700 text-center mt-4">
              <p
                className={`text-lg font-medium ${getAQIColorClass(
                  weather.current.air_quality.pm2_5
                )}`}
              >
                PM2.5: {weather.current.air_quality.pm2_5}
              </p>
              <p
                className={`text-lg font-medium ${getAQIColorClass(
                  weather.current.air_quality.pm10
                )}`}
              >
                PM10: {weather.current.air_quality.pm10}
              </p>
            </div>
          </div>

          <p className="text-lg font-medium">Índice UV: {weather.current.uv}</p>
          <p className="text-lg font-medium">
            Sensación térmica: {weather.current.feelslike_c}°C
          </p>
          <p className="text-lg font-medium">
            Velocidad del viento: {weather.current.wind_kph} km/h
          </p>
          {weather.alerts.length > 0 && (
            <div>
              <p className="text-lg font-medium mt-4">Alertas:</p>
              <ul className="text-base">
                {weather.alerts.map((alert, index) => (
                  <li key={index}>
                    {alert.event} - {alert.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tiempo;
