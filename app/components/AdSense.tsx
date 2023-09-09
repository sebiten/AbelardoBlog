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

const AdSense: React.FC<AdSenseProps> = ({ adSlot }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set the mounted state to true after the component is mounted.

    if (window.adsbygoogle) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <>
      {mounted && (
        <ins
          className="adsbygoogle"
          style={{
            display: "block",
            margin: "10px auto", // 10px en top y bottom, y centrado horizontalmente
          }}
          data-ad-client="ca-pub-6692046911486022"
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      )}
    </>
  );
};

export default AdSense;
