import Image from "next/image";
import Link from "next/link";

interface IDestacadosProps {}

const imagespub = [
  {
    description:
      "Explora estrategias efectivas para reducir el sobrepensamiento, una experiencia común que impacta a personas en todo el mundo. Descubre consejos sencillos y prácticos que pueden ayudarte a manejar y mitigar los efectos de este fenómeno en nuestro blog.",
    path: "/dejar-de-sobrepensar.webp",
    link: "http://abelardo.blog/posts/dejar-de-sobrepensar",
  },
  {
    description:
      "La ansiedad y la depresión son afecciones que impactan a numerosos jóvenes en la actualidad, un tema que, lamentablemente, no recibe la atención que merece. Exploraremos esta problemática y reflexionaremos sobre la necesidad de abordarla de manera más adecuada en nuestro blog.",
    path: "/como-combatir-los-pensamientos-de-ansiedad-y-depresion.webp",
    link: "https://abelardo.blog/posts/como-combatir-los-pensamientos-de-ansiedad-y-depresion",
  },
  {
    description:
      "Sumérgete en la oscura razón detrás de la desmotivación que experimentamos en este mundo saturado de pantallas y excesos. Explora los motivos subyacentes en nuestro entorno digital y descubre cómo enfrentarlos en nuestro blog.",
    path: "/desmotivacion.webp",
    link: "https://abelardo.blog/posts/desmotivacion",
  },
];

export default function Destacados() {
  return (
    <div>
      <div className="text-center mt-20 text-white text-4xl font-bold">
        <h2 className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 text-3xl md:text-3xl">
          Artículos Destacados
        </h2>
        <p className="text-gray-300 text-2xl md:text-2xl">No te los pierdas!</p>
      </div>
      <div className="max-w-5xl mx-auto mt-8 md:mt-16 ">
        {imagespub.map((image, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8 mt-8 md:mt-8"
          >
            <Image
              height={300}
              src={image.path}
              alt={`Image ${index + 1}`}
              priority={true}
              quality={100}
              width={430}
              className="border-4 border-gray-700 rounded-md shadow-lg m-0"
            />
            <div className="flex flex-col items-start max-w-md justify-center">
              <p className="text-white text-lg image-description mx-auto w-auto m-0">
                {image.description}
              </p>
              <Link
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2 text-gray-700 font-semibold text-center p-4 border border-gray-500 transition duration-300 transform hover:scale-105 hover:shadow-lg w-full rounded-md"
                href={image.link}
              >
                Visitar el artículo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}