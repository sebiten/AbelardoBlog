import Image from "next/image";
import Link from "next/link";

export default function Abelardo() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="dark:text-white">
      <h3 className="text-center mt-4 font-title text-white font-bold uppercase animate-pulse animate-infinite animate-duration-[100ms] animate-delay-[44ms] animate-ease-out  prose prose-xl prose-slate dark:prose-invert mb-4">
          <span className="text-yellow-500 font-normal text-4xl -z-10">
            <br></br>
            El blog de Abelardo
          </span>
        </h3>
        <p className="text-xl">
          Le damos la bienvenida a este distinguido blog de{" "}
          <span className="text-center text-xl text-yellow-500 font-bold uppercase no-underline">
            Abelardo
          </span>
          , el felino más sagaz, entregado al arte del descanso y un compañero sin igual.
        </p>
        <div className="mt-6 w-full rounded-lg  overflow-hidden">
          <Image
            src="/abelardowebp.webp"
            alt="Abelardo"
            width={400}
            height={300}
            className="mx-auto w-full"
          />
        </div>
        <p className="mt-6 text-xl italic">
          En esta imagen, podemos apreciar a Abelardo después de una merecida siesta en su
          escritorio.
        </p>
        <p className="mt-6 text-lg">
          Abelardo es un felino encantador y curioso que domina varios lenguajes,
          ¡incluso el de los humanos!
        </p>
        <p className="mt-6 text-2xl font-bold underline">
          Si estás en busca de ayuda con tus proyectos, Abelardo siempre está
          dispuesto a colaborar. ¡No dudes en solicitar su asistencia!
        </p>
        <p className="mt-4 text-lg">
          Además de su espíritu aventurero, Abelardo es un muy buen en el
          desarrollo de páginas web, capaz de adaptarse a tus necesidades
          personales o empresariales. Si requieres ayuda para crear tu
          sitio web, no dudes en aprovechar su experiencia felina.
        </p>

        <div className="mt-8">
          <p className="text-xl font-bold">
            ¡Sigue su cuenta de Instagram para mantenerte actualizado!
          </p>
          <Link
            href="https://www.instagram.com/abelardo.blog/"
            target="_blank"
            className="block text-2xl mt-2 text-blue-500 hover:text-yellow-500 underline transform transition-colors duration-300"
          >
            @abelardo.blog
          </Link>
        </div>

        <div className="mt-8">
          <p className="mt-4 text-xl">
            Si deseas conocer algunos ejemplos de sus proyectos de desarrollo web,
            puedes explorar su portafolio en:{" "}
            <Link
              href="https://sebdevspace.me/"
              target="_blank"
              className="text-blue-500 hover:text-yellow-500 underline transform transition-colors duration-300"
            >
              sebdevspace.me
            </Link>{" "}
          </p>
        </div>

        <div className="my-10 rounded-lg  overflow-hidden">
          <Link
            className="animate-pulse  
           animate-infinite animate-duration-[100ms]animate-delay-[22ms] animate-ease-out
             text-yellow-600
               hover:text-yellow-700
                 dark:text-yellow-400
                 dark:hover:text-yellow-500 font-bold
               text-2xl"
            href="/"
          >
            ← Regresar al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
