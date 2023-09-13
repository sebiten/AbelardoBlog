"use client";
import React, { useEffect, useState } from "react";

interface AdSenseProps {
  adSlot: string;
}

declare global {
  interface Window {
    adsbygoogle?: (any[] | Record<string, any>)[];
  }
}

const AdSenseLargeComponent: React.FC<AdSenseProps> = ({ adSlot }) => {
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
          display: "inline-block",
          width: "528px",
          height: "100px", // 10px en top y bottom, y centrado horizontalmente
        }}
        data-ad-client="ca-pub-6692046911486022"
        data-ad-slot={adSlot}
      ></ins>
    ) : null
  );
};

export default AdSenseLargeComponent;
