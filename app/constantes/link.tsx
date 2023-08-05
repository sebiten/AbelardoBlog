import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const links = [
  { href: "/", text: "Inicio", target: "_self" },
  {
    href: "/abelardo",
    text: "¿Quien es Abelardo ? ",
    target: "_self",
  },
  {
    href: "https://github.com/sebiten",
    target: "_blank",
    icon: <FaGithub size={22} />,
  },
  {
    href: "https://www.linkedin.com/in/sebdevspace/",
    icon: <FaLinkedin size={22} />,
    target: "_blank",
  },
  {
    href: "https://www.instagram.com/abelardo.blog/",
    icon: <FaInstagram size={22} />,
    target: "_blank",

  }
];
