"use client";
import Script from "next/script";

const GoogleAds = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-66SJ6716WY"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-66SJ6716WY');
        `}
      </Script>
    </>
  );
};

export default GoogleAds;
