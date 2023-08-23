'use client'
import { Power4, gsap } from "gsap";
import { useEffect } from "react";

export default function MyProfilePic() {
  useEffect(() => {
    // Animación para el título
    gsap.from(".abelardo", {
      opacity: 0,
      y: -50,
      scale: 0.8,
      rotation: -10,
      duration: 2,
      delay: 0,
      ease: Power4.easeOut,
    });

  }, []);

  useEffect(() => {
    // Animación para el título
    gsap.from(".abelardotit", {
      opacity: 0,
      y: -50,
      scale: 0.8,
      rotation: -10,
      duration: 1,
      delay: 0,
    });

  }, []);
  return (
    <section className="w-full mx-auto mt-6">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-center text-white font-bold uppercase -mt-24 prose prose-xl prose-slate dark:prose-invert abelardotit ">
          <span className="font-title text-yellow-500 font-normal text-6xl z-10 mt-4 ">
            <br />
            ABelardo Blog
          </span>
        </h1>
        <p className="mt-4 abelardo">
          Aquí tendrás acceso a una amplia variedad de artículos sobre salud
          moderna, tecnología, alimentación y otros temas interesantes. Mi
          objetivo es brindarte información útil e intrigante sobre estos temas
          poco comunes, pero igualmente interesantes. Así, podrás estar bien
          informado y conocer más sobre aspectos importantes de la vida moderna.
        </p>
      </div>
    </section>
  );
}
