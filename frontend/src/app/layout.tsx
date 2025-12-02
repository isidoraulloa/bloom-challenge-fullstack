import type { Metadata } from "next";
import Image from "next/image";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafío Dev - Bloom Reuse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <div>  <a href="/">
        <Image
          className="h-14 w-auto self-end"
          src="/images/Logo-Bloom.png"
          alt="Logo"
          width={400}
          height={100}
        />
      </a></div>
        {children}
      <div className="text-left text-xs">
          <p>Isidora Ulloa
          <br />+56 9 8712 7469
          <br />isidora.ulloa@ug.uchile.cl</p>
        </div>
      </body>
    </html>
  );
}
