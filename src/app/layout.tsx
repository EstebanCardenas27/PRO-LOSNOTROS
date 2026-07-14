import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://centrobienestarlosnotros"),

  title: {
    default: "Centro de Bienestar Los Notros",
    template: "%s | Centro de Bienestar Los Notros",
  },

  description:
    "Bienestar, salud y acompañamiento integral para la comunidad de San José de la Mariquina",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // manifest: "/site.webmanifest",

  openGraph: {
    title: "Centro de Bienestar Los Notros",
    description:
      "Bienestar, salud y acompañamiento integral para la comunidad.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${sourceSans.variable}`}
    >
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}