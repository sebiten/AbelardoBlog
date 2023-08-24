import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

interface UnderConstructionProps {
  pageTitle?: string; // Hacer la prop opcional añadiendo el signo de pregunta
}
const Instagram = {
  href: "https://www.instagram.com/abelardo.blog/",
  icon: <FaInstagram size={22} />,
  target: "_blank",
};

const UnderConstruction: React.FC<UnderConstructionProps> = ({ pageTitle }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center my-40 dark:text-white text-2xl text-gray-800 mx-auto">
      <h1>¡Página en Remodelación!💻</h1>
      <p>
        Estamos trabajando en mejorar {pageTitle}.
        <br />
        ⬇️Siguenos en Instagram para mas novedades⬇️
      </p>
      <Link
        href="https://www.instagram.com/abelardo.blog/"
        target="_blank"
        className="mt-2 hover:text-yellow-500"
      >
        <FaInstagram size={80} />
      </Link>
    </div>
  );
};

export default UnderConstruction;
