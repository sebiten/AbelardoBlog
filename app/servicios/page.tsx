import Services from "../components/Services";
import Image from "next/image";
import Link from "next/link";
import { demostraciones, services } from "../constantes/constantes";

const ServicesPage: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-800 px-4 py-8 md:py-16">
      <div className="mb-6 text-xl text-gray-700 dark:text-white mx-auto max-w-2xl text-center lg:w-3/4 xl:w-1/2">
        <h3 className="text-center text-white font-bold uppercase animate-pulse animate-infinite animate-duration-[100ms] animate-delay-[44ms] animate-ease-out -mt-28 prose prose-xl prose-slate dark:prose-invert font-title">
          <span className="text-yellow-500 font-normal text-5xl -z-10">
            <br></br>
            Servicios
          </span>
        </h3>
        <p className="mt-4 text-center">
          Mi oferta de servicios abarca una amplia variedad de soluciones para
          fortalecer tu presencia en línea y alcanzar tus metas. Además, nuestro
          compromiso se extiende a ofrecer generosos descuentos en la creación
          de sitios web para emprendimientos y páginas profesionales
          informativas. Si tienes preguntas o inquietudes, no dudes en
          contactarnos. Estamos aquí para proporcionarte asesoramiento y aclarar
          cualquier duda que tengas.
        </p>
        <div className=" text-center text-3xl animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out">
          <p
            className="animate-pulse  
              animate-infinite
              animate-duration-[100ms]
              animate-delay-[22ms]
              animate-ease-out
              text-yellow-600
              hover:text-yellow-700
              dark:text-yellow-400
              dark:hover:text-yellow-500
              font-bold
              text-2xl
              mt-4
                "
          >
            Sigue bajando para ver algunos ejemplos ⬇
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
        {services.map((service, index) => (
          <Services
            key={index}
            icon={<service.icon className="w-12 h-12 mx-auto" />}
            color={service.color}
            title={service.title}
            titleEs={service.title}
            description={service.description}
            descriptionEs={service.description}
          />
        ))}
      </div>
      <div
        className="mt-40"
      >
        <p className="mt-12 text-center text-3xl ">
          <span className="font-bold text-yellow-500 ">Algunos Ejemplos</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
          {demostraciones.map((demostracion, index) => (
            <Link
              href={demostracion.link}
              className="text-gray-700 dark:text-white flex flex-col items-start
            justify-center
            max-w-sm
            mx-auto
            transition
            duration-500
            ease-in-out
            transform
            hover:scale-105
            hover:bg-gray-100
            dark:hover:bg-gray-800
            rounded-xl
            shadow-xl
            p-8
            bg-white
            dark:bg-gray-800
            border
            border-gray-100
            dark:border-gray-700
            hover:border-gray-200
            dark:hover:border-gray-600
            hover:shadow-xl
            dark:hover:shadow-xl
            hover:text-gray-600
            dark:hover:text-gray-300
            my-4
            "
              key={index}
              target="_blank"
            >
              <h3 className="my-2 text-center text-lg font-semibold">
                {demostracion.title}
              </h3>
              <Image
                src={demostracion.image}
                alt={demostracion.title}
                width={500}
                height={300}
                className="mx-auto h-48 w-full object-cover"
              />
              <p className=" text-sm mt-4 text-gray-500 dark:text-gray-300">
                {demostracion.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-3xl animate-bounce animate-infinite animate-duration-[100ms] animate-delay-[14ms] animate-ease-out">
        <Link
          className="animate-pulse  
              animate-infinite
              animate-duration-[100ms]
              animate-delay-[22ms]
              animate-ease-out
              text-yellow-600
              hover:text-yellow-700
              dark:text-yellow-400
              dark:hover:text-yellow-500
              font-bold
              text-2xl
              mb-0
                "
          href="/"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ServicesPage;
