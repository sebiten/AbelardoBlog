import Link from "next/link";
import React from "react";

interface LinkItem {
  name: string;
  href: string;
}

interface SingleComponentProps {
  relatedLinks: LinkItem[];
}
const relatedLinks = [
  { name: "Malos Hábitos: Cómo uno Conduce al Otro", href: "https://abelardo.blog/posts/malos-habitos" },
  {
    name: "Como Dejar de Sobrepensar",
    href: "https://abelardo.blog/posts/dejar-de-sobrepensar",
  },
  {
    name: "Cómo Combatir los Pensamientos de Ansiedad y Depresión",
    href: "https://abelardo.blog/posts/como-combatir-los-pensamientos-de-ansiedad-y-depresion",
  },
  { name: "Como Manejar El Insomnio", href: "https://abelardo.blog/posts/insomnio" },
  {
    name: "Autofagia: Cómete a Ti Mismo para Vivir Más",
    href: "https://abelardo.blog/posts/autofagia-comete-a-ti-mismo-para-vivir-mas",
  },
  { name: "La Oscura Razón por la que estás desmotivado", href: "https://abelardo.blog/posts/desmotivacion" },
  {
    name: "¿Por Qué Siempre Tenemos Hambre?",
    href: "https://abelardo.blog/posts/por-que-siempre-tenemos-hambre",
  },
  {
    name: "Efectos del Azúcar en el Cuerpo",
    href: "https://abelardo.blog/posts/efectos-del-azucar-en-el-cuerpo",
  },
];

const SingleComponent: React.FC<SingleComponentProps> = () => {
  // Función para obtener un arreglo de enlaces de forma aleatoria
  const shuffleArray = (array: LinkItem[]) => {
    const shuffledArray = array.slice();

    // Fisher-Yates shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray.slice(0, 4);
  };

  // Obtén el arreglo de enlaces de forma aleatoria
  const shuffledLinks = shuffleArray(relatedLinks);

  return (
    <div className="bg-gray-800 p-4">
      <h2 className="text-lg font-bold mb-4">Artículos Relacionados</h2>
      <ul>
        {shuffledLinks.map((link, index) => (
          <li key={index} className="">
            <Link href={link.href}>
              <p className="text-blue-500 hover:underline">{link.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleComponent;
