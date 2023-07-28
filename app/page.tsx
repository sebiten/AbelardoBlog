import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-16 mx-auto">
      <p className="mt-12 mb-12 text-2xl text-center dark:text-white">
        Hola! Bienvenido a mi blog 👋
        <br></br>
        Aquí encontrarás artículos sobre salud moderna, tecnologias, filosofía y
        historia.
        <br></br>
        Mi objetivo es proporcionar información útil e interesante sobre estos
        temas para que puedas tomar decisiones informadas sobre tu salud y tu
        vida.
        <br></br>
        <span className="font-bold text-green-200">¡Gracias por leer!</span>
      </p>
      <Posts />
    </main>
  );
}
