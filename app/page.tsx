import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="px-4 md:px-8 lg:px-16 mx-auto">
      <div className="mt-12 mb-6 text-xl mx-auto max-w-2xl text-center dark:text-white lg:w-3/4 xl:w-1/2">
        
        <p className="mt-4">
          Aquí tendrás acceso a una amplia variedad de artículos sobre salud moderna, tecnología, alimentación y otros temas interesantes. Mi objetivo es brindarte información útil e intrigante sobre estos temas poco comunes, pero igualmente interesantes. Así, podrás estar bien informado y conocer más sobre aspectos importantes de la vida contemporánea.
        </p>
        <p className="mt-4">
          <span className="font-bold text-green-200">¡Gracias por leer!</span>
        </p>
      </div>
      <Posts />
    </main>
  );
}
