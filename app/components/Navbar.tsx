import Link from "next/link";
import {
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaLaptop,
  FaLinkedinIn,
  FaLinkedin,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-6 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row ">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0 ">
          <Link
            href="/"
            className="text-center text-green-200 font-bold uppercase no-underline"
          >
            Abelardo
            <span className="text-white font-normal">Blog</span>
          </Link>
        </h1>

        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            href={"/"}
            className="text-white no-underline text-sm uppercase m-auto hover:text-green-200"
          >
            Explorar
          </Link>
          <Link
            href="https://sebdevspace.me/"
            className="text-white no-underline text-sm uppercase m-auto hover:text-green-200"
            target="blank"
          >
            About me
          </Link>
          <Link
            className="text-white/90 hover:text-green-200"
            href="https://github.com/sebiten"
          >
            <FaGithub />
          </Link>
          <Link
            className="text-white/90 hover:text-green-200"
            href="https://www.linkedin.com/in/sebdevspace/"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </nav>
  );
}
