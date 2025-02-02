import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ConvertMaster",
  description: "A versatile file converter application designed to handle a wide range of file formats with ease. ConvertMaster simplifies the process of converting files, ensuring high-quality output and user-friendly experience. Whether you need to convert documents, images, audio, or video files, ConvertMaster has got you covered.",
  creator: 'Ragesh-A',
  keywords: [
    'convertMaster', 'image converter', 'video converter',
    'audio converter', 'unlimited', 'unlimited file conversion',
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
