import { FaGithub, FaLinkedin } from "react-icons/fa";

export const links = [
  { href: "/", text: "Explorar", target: "_self" },
  { href: "https://sebdevspace.me/", text: "Sobre mi", target: "_blank" },
  {
    href: "/abelardo",
    text: "¿Quien es Abelardo ? ",
    target: "_self",
  },
  {
    href: "https://github.com/sebiten",
    target: "_blank",
    icon: <FaGithub size={30} />,
  },
  {
    href: "https://www.linkedin.com/in/sebdevspace/",
    icon: <FaLinkedin size={30} />,
    target: "_blank",
  },
];
