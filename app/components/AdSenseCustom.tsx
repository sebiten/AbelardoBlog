"use client";
import React, { useEffect, useState } from "react";


declare global {
  interface Window {
    adsbygoogle?: (any[] | Record<string, any>)[];
  }
}

const AdSenseCustom: React.FC= () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Marcar el componente como montado después de que se monte en el cliente.
    setMounted(true);

    // Verificar si window.adsbygoogle existe antes de intentar cargar anuncios.
    if (window.adsbygoogle) {
      // Evitar cargar anuncios si ya hay anuncios en el elemento <ins>.
      const insElements = document.querySelectorAll(".adsbygoogle");
      if (insElements.length === 0) {
        window.adsbygoogle.push({});
      }
    }
  }, []);

  return (
    // Renderizar el anuncio solo si el componente está montado.
    // Esto evita problemas de hidratación.
    mounted ? (
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          // 10px en top y bottom, y centrado horizontalmente
        }}
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-6692046911486022"
        data-ad-slot="9713211283"
      ></ins>
    ) : null
  );
};

export default AdSenseCustom;
