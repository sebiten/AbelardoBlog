import Link from "next/link";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-8 mt-16 pb-6">
    <div className="container mx-auto px-4">
      <hr className="mb-6 border-b-1 border-gray-700" />
      <div className="text-white flex justify-center gap-4">
        <Link
          href="https://www.linkedin.com/in/tu_perfil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="text-xl hover:text-blue-500" />
        </Link>
        © {new Date().getFullYear()} por Tu Nombre. Todos los derechos reservados.
        <Link
          href="https://github.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubAlt className="text-xl text-gray-500 hover:text-gray-400" />
        </Link>
      </div>
    </div>
  </footer>
  );
}
