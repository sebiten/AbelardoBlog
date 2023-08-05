import Image from "next/image";
import Link from "next/link";

export default function Abelardo() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="dark:text-white">
        <h2 className="text-4xl font-bold mb-4">¿Quién es Abelardo?</h2>
        <p className="text-xl">
          ¡Bienvenidos al encantador blog de{" "}
          <span className="text-center text-xl text-yellow-500 font-bold uppercase no-underline">
            Abelardo
          </span>
          , el gato más astuto, amante del descanso y un compañero excepcional!
        </p>
        <div className="mt-6 rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/abelardowebp.webp"
            alt="Abelardo"
            width={400}
            height={300}
            className="mx-auto"
          />
        </div>
        <p className="mt-6 text-xl italic">
          En esta imagen, Abelardo posa luego de una larga siesta en su
          escritorio.
        </p>
        <p className="mt-6 text-lg">
          Abelardo es un gato encantador y curioso que domina varios lenguajes,
          ¡incluido el de los humanos!
        </p>
        <p className="mt-6 text-2xl font-bold underline">
          Así que si necesitas ayuda con tus proyectos, Abelardo siempre está
          dispuesto a echarte una pata. ¡Maulla si necesitas su asistencia!
        </p>
        <p className="mt-4 text-lg">
          Además de ser un aventurero, Abelardo también es un experto en el
          desarrollo de páginas web, capaz de adaptarse a tus necesidades
          personales o empresariales. Si requieres asistencia para crear tu
          sitio web. ¡No dudes en aprovechar su experiencia felina!
        </p>

        <div className="mt-8">
          <p className="text-xl font-bold">
            ¡No olvides seguir su cuenta de Instagram!
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
            Y si deseas ver algunos ejemplos de sus proyectos de desarrollo web,
            ¡puedes visitar su portafolio en:{" "}
            <Link
              href="https://sebdevspace.me/"
              target="_blank"
              className="text-blue-500 hover:text-yellow-500 underline transform transition-colors duration-300"
            >
              sebdevspace.me
            </Link>{" "}
          </p>
        </div>

        <div className="mt-8 rounded-lg shadow-lg overflow-hidden">
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
    mt-4"
            href="/"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
