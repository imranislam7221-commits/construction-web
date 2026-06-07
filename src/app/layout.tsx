import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MOU Construction // Engineering Excellence",
    template: "%s | MOU Construction"
  },
  description: "Premier construction and infrastructure solutions provider in Bangladesh. Specializing in heavy duty engineering, high-rise development, and industrial steel complexes.",
  keywords: ["construction", "engineering", "infrastructure", "Bangladesh", "real estate", "industrial development"],
  authors: [{ name: "IP TECH" }],
  openGraph: {
    title: "MOU Construction // Engineering Excellence",
    description: "Building the iron backbone of modern infrastructure.",
    url: "https://mouconstruct.com",
    siteName: "MOU Construction",
    locale: "en_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-concrete">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

