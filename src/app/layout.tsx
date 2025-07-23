import "./globals.css";
import Navbar from '@/components/Navbar/Navbar'
import Footer from "@/components/Footer/Footer";
import { LanguageProvider } from '@/context/LanguageContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
            <LanguageProvider>
            <Navbar />
            {children}
                <Footer />
            </LanguageProvider>
        </body>
        </html>
    );
}
