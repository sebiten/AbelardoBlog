import Link from "next/link";
import React from "react";
import InstagramSection from "./InstagramSection";

interface IContactoProps {}

export default function Contacto() {
  return (
    <>
      <div
        className="mb-2 max-w-5xl px-8 sm:px-1 mt-20 bg-banner text-white text-start mx-auto  p-10 border-gray-600 border rounded-2xl"
        style={{
          backgroundImage: 'url("/suscription.webp")', // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" text-white flex flex-col text-center">
          <h2 className="text-3xl font-bold mb-4 ">
            ¿Necesitas una Página Web?
          </h2>
          <p className="text-gray-300 mb-6 text-lg font-bold">
            Estoy aquí para ayudarte a construir la página web que siempre has
            imaginado. ¡Contáctame para discutir tus ideas y convertirlas en
            realidad!
          </p>
        </div>
        <div className="flex itemes-center justify-center gap-1 text-center flex-col sm:flex-row">
          <Link
            href="https://wa.link/t200i0"
            className="bg-yellow-500 hover:bg-blue-70 font-bold py-2 px-4 rounded-full text-gray-700"
          >
            ¡Contáctame por whatsapp!
          </Link>
          <Link
            href="https://sebdevspace.me/"
            className="bg-yellow-500 hover:bg-blue-70 font-bold py-2 px-4 rounded-full text-gray-700"
          >
            ¡Visita mi pagina web!
          </Link>
        </div>
      </div>
    </>
  );
}
