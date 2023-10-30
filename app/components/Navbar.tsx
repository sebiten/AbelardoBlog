"use client";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const links = [
  { href: "/", text: "Inicio", target: "_parent" },
  // {
  //   href: "/abelardo",
  //   text: "Abelardo ",
  //   target: "_self",
  // },
  {
    href: "/favorites",
    text: "Favoritos ",
    target: "_self",
  },
  // {
  //   href: "/",
  //   text: "Redactar Post",
  // },
  {
    href: "/servicios",
    text: "Servicios",
  },
  {
    href: "/tiempo",
    text: "Tiempo",
  },
  {
    href: "https://www.instagram.com/abelardo.blog/",
    icon: <FaInstagram size={22} />,
    target: "_blank",
  },
  {
    href: "https://www.tiktok.com/@abelardoblog",
    icon: <FaTiktok size={22} />,
    target: "_blank",
  },
];
export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-6 sticky w-full top-0 drop-shadow-xl z-10">
      <div className="mt-4">
        <motion.div
          className="w-full mt-6 3xl:w-6/12 xl:w-6/12 prose-xl mx-auto flex justify-between flex-col sm:flex-row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-xl font-bold text-white grid place-content-center"
            variants={linkVariants}
          >
            <Link
              target="_parent"
              href="/"
              className="text-center font-title text-yellow-500 font-bold uppercase no-underline"
            >
              Abelardo
              <span className="text-white  font-bold">Blog</span>
            </Link>
          </motion.div>
          <motion.div
            className="flex  flex-row justify-center items-center sm:justify-between align-middle gap-4 text-white text-sm lg:text-5xl"
            variants={linkVariants}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-bold uppercase text-white no-underline mt-7 sm:mt-2 text-sm m-auto hover:text-yellow-500"
                target={link.target || ""}
              >
                {link.icon ? link.icon : link.text}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
}
