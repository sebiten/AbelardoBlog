import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Abelardo Blog",
  description: "Blog de Abelardo",
  icons: {
    icon: "/cat.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
      <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></Script>
      </head>
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <body className="dark:bg-slate-800">

        <Navbar />
        <div className="w-full mb-6 text-xl text-gray-700 dark:text-white mx-auto max-w-2xl text-center lg:w-3/4 xl:w-1/2">
          <Image
            src="/cat.png"
            className="mx-auto w-auto h-auto mt-4"
            alt="abelardo-blog"
            height={500}
            width={300}
          />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
