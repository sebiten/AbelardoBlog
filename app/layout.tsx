import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

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
    <html lang="en">
      <head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-66SJ6716WY`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', "G-66SJ6716WY");
        `}
      </Script>
      </head>
      <body className="dark:bg-slate-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
