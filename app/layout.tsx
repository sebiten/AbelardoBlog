import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
import Footer from './components/Footer'

export const metadata = {
  title: "Abelardo Blog",
  description: 'Blog de Abelardo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      <Footer/>
      </body>
    </html>
  )
}
