import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";
import Pronostico from "./Pronostico";
import Posts from "./Posts";
import GoogleAdUnit from "nextjs13_google_adsense";

interface DolarData {
  casa: string;
  nombre: string;
  venta: number;
  fechaActualizacion: string;
}

async function getDolar() {
  const res = await fetch("https://dolarapi.com/v1/dolares");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Heroydolar(): Promise<JSX.Element> {
  const dolar: DolarData[] = await getDolar();

  return (
    <>
      <section className="mx-auto">
        <div className="flex flex-col">
          <div className="w-full  bg-gray-800 mt-2 text-xl text-white mx-auto flex items-center justify-center text-center ">
            <Image
              src="/abelardo-logo-web.png"
              className="w-auto rounded-full -mt-28 "
              alt="abelardo-blog"
              priority={true}
              height={600}
              width={600}
            />
          </div>
          <div className="-mt-44">
            <p className="text-center uppercase font-bold font-title text-2xl">
              <span className="text-yellow-400">Abelardo</span> Blog
            </p>
          </div>
          <div className="font-bold text-[0.6rem] mt-14">
            <h1 className="my-4 max-w-2xl text-2xl mx-auto font-bold text-center leading-10 text-white">
              Emprende un Viaje Único hacia la Vitalidad: Descubre el Secreto de
              Abelardo para una Vida Plena y Saludable.
            </h1>
          </div>
        </div>
        <div className="mt-4 grid gap-2 grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 px-2 md:px-4">
          {dolar.map((dol) => (
            <div
              key={dol.casa}
              className="text-white flex flex-col items-center justify-center w-full mx-auto transition duration-500 ease-in-out transform hover:scale-105  rounded-xl shadow-xl p-4  bg-gray-800 border border-gray-700 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-xl dark:hover:shadow-xl   dark:hover:text-gray-300"
            >
              <h3 className="mt-2 text-lg text-yellow-400 text-center font-semibold ">
                {dol.nombre}
              </h3>
              <p className="mt-1 text-xl font-bold text-white-500 ">
                $ {dol.venta}
              </p>
              <p className="mt-1 text-sm text-gray-400">
                {getFormattedDate(dol.fechaActualizacion)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Heroydolar;
