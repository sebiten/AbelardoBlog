"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function MyProfilePic() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full mx-auto mt-6"
    >
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, rotate: -180}} // Inicialmente girado, escalado y ligeramente desplazado hacia abajo
          animate={{ opacity: 1, rotate: 0}} // Girar, desplazarse a la posición original y escalar
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 70,
            damping: 10,
          }}
          className="text-center text-white font-bold uppercase -mt-24 prose prose-xl prose-slate dark:prose-invert abelardotit"
        >
          <motion.span
            className="font-title text-yellow-500 font-normal text-6xl z-10 mt-4"
            // Otras propiedades de animación aquí si es necesario
          >
            <br />
            ABelardo Blog
          </motion.span>
        </motion.h1>

        <p className="mt-4 abelardo">
          Aquí tendrás acceso a una amplia variedad de artículos sobre salud
          moderna, tecnología, alimentación y otros temas interesantes. Mi
          objetivo es brindarte información útil e intrigante sobre estos temas
          poco comunes, pero igualmente interesantes. Así, podrás estar bien
          informado y conocer más sobre aspectos importantes de la vida moderna.
        </p>
      </div>
    </motion.section>
  );
}
