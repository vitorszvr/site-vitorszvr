import type { Metadata } from "next";
import { Bodoni_Moda, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitor | Portfolio",
  description:
    "Personal portfolio of Vitor - Noir Modern / Industrial Aesthetic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodoni.variable} ${jetbrains.variable} antialiased bg-noir text-paper overflow-x-hidden`}
      >
        <div className="grain-overlay" />
        <div className="scanlines" />
        {children}
      </body>
    </html>
  );
}
