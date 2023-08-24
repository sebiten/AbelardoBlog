import React from "react";

interface UnderConstructionProps {
  pageTitle?: string; // Hacer la prop opcional añadiendo el signo de pregunta
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({ pageTitle }) => {
  return (
    <div className="text-center my-40 dark:text-white text-2xl text-gray-800 mx-auto">
      <h1>¡Página en Remodelación!</h1>
      <p>
        Estamos trabajando en mejorar {pageTitle}. Vuelve pronto para ver las
        novedades.
      </p>
      ⚙️🔧
    </div>
  );
};

export default UnderConstruction;
