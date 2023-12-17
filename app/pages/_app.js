import { GoogleAdSense } from "next-google-adsense";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAdSense publisherId="pub-XXXXXXXXXXXXXXXX" /> {/* 👈 16 digits */}
      {/* or */}
      <GoogleAdSense /> {/* if NEXT_PUBLIC_ADSENSE_PUBLISHER_ID is set */}
      <Component {...pageProps} />
    </>
  );
};

export default App;