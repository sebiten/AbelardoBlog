"use client";
import { useEffect } from "react";

const AdSense = ({ adSlot }) => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
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
  );
};

export default AdSense;
