import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaCodeBranch,
  FaPencilAlt,
  FaHandsHelping,
} from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

export const filterOptions = [
  { value: "", label: "Todos" },
  { value: "Tecnologia", label: "Tecnologia" },
  { value: "Salud", label: "Salud" },
  { value: "Cultura", label: "Cultura" },
  { value: "Nutrición", label: "Nutrición" },
  { value: "Noticias", label: "Noticias" },
  { value: "Deportes", label: "Deportes" },
  { value: "Economía", label: "Economía" },
];

export const demostraciones = [
  {
    title: "Gimnasios y entrenamiento",
    description:
      "Este ejemplo ofrece páginas web diseñadas específicamente para gimnasios y centros de entrenamiento. Presenta un diseño dinámico y moderno que resalta los servicios ofrecidos, horarios de clases y testimonios de los usuarios. La imagen de fondo evoca una sensación de energía y vitalidad, capturando la esencia del mundo del fitness.",
    image: "/gym.webp",
    link: "https://famous-centaur-3fe604.netlify.app/",
  },
  {
    title: "Restaurantes, bares y cafeterías",
    description:
      "Esta demostración se centra en el diseño web para restaurantes y bares, exhibiendo de manera atractiva las delicias culinarias y bebidas. El diseño incluye imágenes apetitosas, menús interactivos y una disposición elegante que refleja la experiencia gastronómica. Los colores y el estilo visual se adaptan para realzar la experiencia del usuario.",
    image: "/food.webp",
    link: "https://dancing-sherbet-b9a756.netlify.app",
  },
  {
    title: "Profesionales independientes",
    description:
      "Diseñado para profesionales independientes como abogados, escribanos y diseñadores, este ejemplo destaca cómo crear una presencia en línea sólida. El diseño limpio y moderno comunica profesionalismo y confianza, mientras que las secciones dedicadas a los servicios, el portafolio y los detalles de contacto facilitan a los visitantes la búsqueda y comunicación con el profesional.",
    image: "/portfolio.webp",
    link: "https://sebdevspace.me/",
  },
];

export const urlsReels = [
  "https://www.instagram.com/p/CyTUGpnJSkl/",
  "https://www.instagram.com/p/CyEgh0VsdB9/",
  "https://www.instagram.com/p/Cx_lNGZSJVb/",
  "https://www.instagram.com/p/Cxx1cZNu-NI/",
];
export const urlsPosts = [
  "https://www.instagram.com/p/CwygZiPOv_g/",
  "https://www.instagram.com/p/CwgE4OgOS6a/",
  "https://www.instagram.com/p/CwA2k5puZ8V/",
  "https://www.instagram.com/p/CvxEz9quZGl/"
]


export const services = [
  {
    icon: FaCode,
    color: "text-green-500",
    title: "Desarrollo web a medida",
    description:
      "Diseño Funcional y Creativo: Sitios web atractivos y funcionales que cumplen objetivos, profesionales (abogados, escribanos, etc.) como también empresariales.",
  },
  {
    icon: FaMobileAlt,
    color: "text-blue-500",
    title: "Diseño Responsivo",
    description:
      "Experiencia Responsiva: Adaptación perfecta a diferentes dispositivos.",
  },
  {
    icon: FaPalette,
    color: "text-yellow-500",
    title: "Diseño UI/UX",
    description:
      "Diseño de interfaces de usuario intuitivas y visualmente atractivas que son fáciles de navegar y utilizar.",
  },
  {
    icon: FaCodeBranch,
    color: "text-purple-500",
    title: "Control de Versiones",
    description:
      "Optimización y SEO: Alto rendimiento y visibilidad en buscadores.",
  },
  {
    icon: FaPencilAlt,
    color: "text-red-500",
    title: "Integración de Contenido y Funcionalidades Avanzadas",
    description:
      "Integración Avanzada: Características personalizadas y sistemas seguros.",
  },
  {
    icon: FaCode,
    color: "text-green-500",
    title: "Dominio Personalizado y certificado SSL",
    description:
      "Dominio Personalizado y certificado SSL: Nombre de la web personalizada, ej: www.example.com.",
  },
  {
    icon: BiTimer,
    color: "text-green-500",
    title: "Optimización del rendimiento web",
    description:
      "Optimización del rendimiento web: Velocidad de carga rápida y optimización de imágenes. ",
  },
  {
    icon: FaHandsHelping,
    color: "text-blue-500",
    title: "Soporte Continuo y asesoramiento",
    description:
      "Soporte Continuo y asesoramiento: Mantenimiento y asistencia técnica dedicada cuando se requiera.",
  },
  {
    icon: TbTruckDelivery,
    color: "text-red-500",
    title: "Entrega de código fuente y documentación técnica en tiempo y forma",
    description:
      "Entrega de código fuente y documentación técnica: Entrega de código fuente y la pagina en tiempo y forma.",
  },
];
