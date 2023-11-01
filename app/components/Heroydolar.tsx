import Image from "next/image";
import getFormattedDate from "@/lib/getFormattedDate";
import Pronostico from "./Pronostico";

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
        <div className="flex flex-col justify-center items-center">
          <div className="w-full mt-2 text-xl text-white mx-auto text-center lg:w-8/12 xl:w-8/12 2xl:w-8/12">
            <Image
              src="/abelardo-blog.png"
              className="mx-auto w-auto h-auto"
              alt="abelardo-blog"
              priority={true}
              height={500}
              width={300}
            />
          </div>
          <div className="text-center text-white font-bold uppercase -mt-24">
            <span className="font-title text-yellow-500 font-normal text-6xl z-10 mt-4">
              <br />
              Abelardo Blog
            </span>
          </div>
          <div className="font-bold text-2xl">
            <h1 className="my-4 max-w-4xl font-black  text-white">
              Descubre el mundo a través de los ojos de Abelardo, donde la
              percepción se convierte en conocimiento y el mundo se desvela en
              su totalidad.
            </h1>
          </div>
        </div>
        <div className="mt-8 grid gap-2 grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 px-8">
          {dolar.map((dol) => (
            <div
              key={dol.casa}
              className="text-white dark:text-white flex flex-col items-center justify-center w-full mx-auto transition duration-500 ease-in-out transform hover:scale-105  rounded-xl shadow-xl p-4  bg-gray-800 border border-gray-700 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-xl dark:hover:shadow-xl   dark:hover:text-gray-300"
            >
              <h3 className="mt-2 text-lg font-semibold ">{dol.nombre}</h3>
              <p className="mt-1 text-xl font-bold text-white-500 dark:text-gray-300">
                $ {dol.venta}
              </p>
              <p className="mt-1 text-sm text-gray-400 dark:text-gray-300">
                {getFormattedDate(dol.fechaActualizacion)}
              </p>
            </div>
          ))}
        </div>
        {/* @ts-expect-error Server Component */}
        <Pronostico />
      </section>
    </>
  );
}
export default Heroydolar;
