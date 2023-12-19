import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import Footer from "./components/Footer";
import { Montserrat_Alternates, Montserrat } from "next/font/google";
import NewsletterSubscribe from "./components/Apis/NewsletterSubscribe";
import Contacto from "./components/Contacto";
import { Metadata } from "next";
import Redes from "./components/Redes";

const montserrat_alternates = Montserrat_Alternates({
  variable: "--title-font",
  weight: "700",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--body-font",
  weight: "400",
  preload: false,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abelardo Blog - Salud, Bienestar y Fitness para una Vida Plena",
  keywords: "Abelardo, Salud, Bienestar, Fitness, Sebastian Burgos",
  creator: "Sebastian Burgos",
  description:
    "Explora artículos y consejos sobre salud, bienestar y fitness en el blog Abelardo. Descubre cómo llevar una vida plena y activa.",
  alternates: {
    canonical: "https://abelardo.blog",
    languages: {
      "es-ES": "https://abelardo.blog",
    },
  },
  icons: {
    icon: "/abelardo-blog.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={` ${montserrat_alternates.variable} ${montserrat.variable} font-body`}
      lang="es-ES"
    >
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
          crossOrigin="anonymous"
        ></script>
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
      </head>
      <body className="bg-slate-800">
        <Navbar />
        <main className="px-2 prose-a:no-underline prose-slate prose-invert prose prose-xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
