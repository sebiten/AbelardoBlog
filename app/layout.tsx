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
      </head>
      <body className="dark:bg-slate-800">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
