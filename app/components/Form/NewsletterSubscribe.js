"use client";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsletterForm from "./NewsletterForm";
import { useEffect, useState } from "react";
import Image from "next/image";

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  const [weatherData, setWeatherData] = useState(null);
  const [zone, setZone] = useState(null);
  const apiUrl =
    "http://api.weatherapi.com/v1/current.json?key=81109ab2335b40f880c135011230609&q=Ledesma%20Argentina%20jujuy&aqi=no";

  useEffect(() => {
    // Función para realizar la solicitud FETCH
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);

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
  }, []);

  return (
    <>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={(props) => {
          const { subscribe, status, message } = props || {};
          return (
            <NewsletterForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          );
        }}
      />
      <div
        className="
      flex flex-col items-center justify-center dark:text-white light:text-gray-800 font-semibold
      "
      >
        <h1>Información del Clima en Ledesma, Argentina (Jujuy)</h1>
        {weatherData ? (
          <div>
            <p>Temperatura: {weatherData.current.temp_c}°C</p>
            <p>Condiciones: {weatherData.current.condition.text}</p>
            <p>Humedad: {weatherData.current.humidity}%</p>
            <p>Condiciones: {weatherData.current.last_updated}</p>
            <Image
              src={`https:${weatherData.current.condition.icon}`}
              alt={weatherData.current.text}
              width={400}
              height={400}
            />
          </div>
        ) : (
          <p>Cargando datos del clima...</p>
        )}
      </div>
    </>
  );
};

export default NewsletterSubscribe;
