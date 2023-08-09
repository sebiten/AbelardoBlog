import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Footer from "./components/Footer";

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
        {children}
        <Footer />
      </body>
    </html>
  );
}
