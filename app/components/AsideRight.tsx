import React from "react";
import Destacados from "./Destacados";
import Tiempo from "../tiempo/page";
import Pronostico from "./Pronostico";

interface AsideRight {}

export default function AsideRight() {
  return (
    <div className="mx-auto mt-20 place-content-center">
      <h2 className="text-center text-3xl text-yellow-400 font-bold">
        Pronostico
      </h2>
      <div className="flex items-star justify-start">
        {/* @ts-expect-error Async Server Component */}
        <Pronostico />
      </div>
    </div>
  );
}
