import { GoogleAdSense } from "next-google-adsense";
import { Script } from "vm";

const App = ({ Component, pageProps }) => {
  return (
    <>
    <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ID}');
          
          `}
        </Script>

        <Component {...pageProps} />
      <Component {...pageProps} />
    </>
  );
};

export default App;