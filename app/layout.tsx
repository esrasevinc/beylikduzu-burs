import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yarının Öncüsü Gençler | Beylikdüzü Belediyesi",
  description:
    "Beylikdüzü Belediyesi 2024-2025 Eğitim ve Öğretim Yılında Yarının Öncüsü Gençler Projesi ile öğrencilere destek oluyor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen bg-white">
          <Navbar />
          <NextTopLoader color="white" height={8} showSpinner={true} />
          <div className="flex flex-col flex-1 relative mt-[70px]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
